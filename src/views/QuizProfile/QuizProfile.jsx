import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//Material UI
import { Box, Grid, Typography } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import SchoolIcon from '@material-ui/icons/School';
//Custom Component
import Parallax from 'components/Parallax/Parallax';

const schoolImg =
  'https://media.glassdoor.com/l/0d/b2/15/11/beautiful-campus.jpg';

const quizDetail = {
  img:
    'https://upload.wikimedia.org/wikipedia/commons/a/a8/Intro_to_QM_Griffiths_cover_3rd_ed.jpg',
  schoolName: 'Universidad Tecnologica Nacional',
  subjectName: 'Fisica III',
  quizName: 'Los gatos y la mecanica cuantica',
  totalStudents: 4242,
  openDate: new Date().toISOString().split('T')[0],
  closeDate: new Date('2021-03-22').toISOString().split('T')[0],
  quizDescription: `In quantum mechanics, Schrödinger's cat is a thought experiment that illustrates an apparent paradox of quantum superposition. In the thought experiment, a hypothetical cat may be considered simultaneously both alive and dead as a result of being linked to a random subatomic event that may or may not occur.`,
  quizReviews: [
    {
      id: 1,
      user: 'Erwin Schrodinger',
      text:
        'If a man never contradicts himself, the reason must be that he virtually never says anything at all.',
      score: 5,
    },
  ],
  schoolContactInfo: {
    phone: '+54 9 2964 407079',
    email: 'dearoralive@quantum.com',
  },
};

const MainContainer = styled.div`
  position: relative;
  z-index: 3;
  margin: -10vh 5vw 0;
  padding-bottom: 2rem;
  border-radius: 6px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`;

const Picture = styled.div`
  object-fit: cover;
  /* height: 20rem;
  width: 20rem; */
  /* display: flex;
  flex-grow: 1;
  object-fit: cover; */
  /* background: url(${quizDetail.img}) no-repeat;
  background-size: contain;
  background-position: center; */
  margin-left: 5rem;
  margin-bottom: 5rem;
  background-color: blue;
`;

const RaisedImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24),
    0 8px 10px -5px rgba(0, 0, 0, 0.2);
`;

const C2 = styled.div`
  background-color: gray;
  /* height: 100%;
  width: 100%; */
`;
const C3 = styled.div`
  background-color: lightcoral;
  /* height: 100%;
  width: 100%; */
`;

function QuizProfile(props) {
  //   const { quizDetail } = props.location.state;

  const {
    img,
    schoolName,
    subjectName,
    quizName,
    totalStudents,
    openDate,
    closeDate,
    quizDescription,
    quizReviews,
    schoolContactInfo,
  } = quizDetail;

  return (
    <div>
      <Parallax small filter image={schoolImg} />
      <MainContainer>
        <Grid container spacing={3}>
          <Grid item xs={8} sm={4}>
            <Picture>
              <RaisedImg src={quizDetail.img} />
            </Picture>
          </Grid>
          <Grid item xs={12} sm={8}>
            <C2>
              <Grid item container xs={12}>
                <Grid item xs={12} md={8}>
                  <Box>
                    <Typography variant="h3" color="secondary">
                      {quizName}
                    </Typography>
                    <PeopleIcon color="secondary" />
                    <Typography
                      color="secondary"
                      display="inline"
                      variant="body2"
                    >
                      {totalStudents}
                    </Typography>
                    <Typography variant="subtitle1">{subjectName}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box display="flex" flexDirection="row" paddingRight="1rem">
                    <SchoolIcon color="secondary" />
                    <Link to="/school-profile/1">
                      <Typography variant="h6" align="left" color="secondary">
                        {schoolName}
                      </Typography>
                    </Link>
                  </Box>
                </Grid>
              </Grid>
              <Grid item>asdasda</Grid>
            </C2>
          </Grid>
        </Grid>
      </MainContainer>
    </div>
  );
}

export default QuizProfile;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     margin: 'auto',
//     maxWidth: 500,
//   },
//   image: {
//     width: 128,
//     height: 128,
//   },
//   img: {
//     margin: 'auto',
//     display: 'block',
//     maxWidth: '100%',
//     maxHeight: '100%',
//   },
// }));

// export default function ComplexGrid() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Paper className={classes.paper}>
//         <Grid container spacing={2}>
//           <Grid item>
//             <ButtonBase className={classes.image}>
//               <img
//                 className={classes.img}
//                 alt="complex"
//                 src="/static/images/grid/complex.jpg"
//               />
//             </ButtonBase>
//           </Grid>
//           <Grid item xs={12} sm container>
//             <Grid item xs container direction="column" spacing={2}>
//               <Grid item xs>
//                 <Typography gutterBottom variant="subtitle1">
//                   Standard license
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   Full resolution 1920x1080 • JPEG
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   ID: 1030114
//                 </Typography>
//               </Grid>
//               <Grid item>
//                 <Typography variant="body2" style={{ cursor: 'pointer' }}>
//                   Remove
//                 </Typography>
//               </Grid>
//             </Grid>
//             <Grid item>
//               <Typography variant="subtitle1">$19.00</Typography>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Paper>
//     </div>
//   );
// }
