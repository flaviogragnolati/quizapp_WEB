import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Parallax from 'components/Parallax/Parallax.js';
import styled from 'styled-components';
import {
  Button,
  Typography,
  Box,
  Grid,
  Chip,
  Tooltip,
  Zoom,
} from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import SchoolIcon from '@material-ui/icons/School';
import { Rating } from '@material-ui/lab';
import Badge from 'components/Badge/Badge';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import { ACTIONS } from 'store/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import { selectQuizDetailById, catalogueStatusSelector } from 'utils/selectors';
import { getCatalogue } from 'views/Catalogue/catalogueSlice';
import { quizDetailStatusSelector } from 'utils/selectors';
import { quizDetailSelector } from 'utils/selectors';
import { getQuizDetailAsync } from 'views/QuizProfile/quizDetailSlice';
import BackdropLoading from 'components/Loading/BackdropLoading';

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
  quizDescription: `In quantum mechanics, Schrödinger's cat is a thought experiment that illustrates an apparent paradox of quantum superposition. In the thought experiment, a hypothetical cat may be considered simultaneously both alive and dead as a result of being linked to a random subatomic event that may or may not occur.
  This thought experiment was devised by Austrian-Irish physicist Erwin Schrödinger in 1935, in a discussion with Albert Einstein, to illustrate what Schrödinger saw as the problems of the Copenhagen interpretation of quantum mechanics. The scenario is often featured in theoretical discussions of the interpretations of quantum mechanics, particularly in situations involving the measurement problem. Schrödinger intended his thought experiment as a discussion of the EPR article—named after its authors Einstein, Podolsky, and Rosen—in 1935.[4] The EPR article highlighted the counterintuitive nature of quantum superpositions, in which a quantum system such as an atom or photon can exist as a combination of multiple states corresponding to different possible outcomes.

The prevailing theory, called the Copenhagen interpretation, says that a quantum system remains in superposition until it interacts with, or is observed by the external world. When this happens, the superposition collapses into one or another of the possible definite states. The EPR experiment shows that a system with multiple particles separated by large distances can be in such a superposition. Schrödinger and Einstein exchanged letters about Einstein's EPR article, in the course of which Einstein pointed out that the state of an unstable keg of gunpowder will, after a while, contain a superposition of both exploded and unexploded states.
To further illustrate, Schrödinger described how one could, in principle, create a superposition in a large-scale system by making it dependent on a quantum particle that was in a superposition. He proposed a scenario with a cat in a locked steel chamber, wherein the cat's life or death depended on the state of a radioactive atom, whether it had decayed and emitted radiation or not. According to Schrödinger, the Copenhagen interpretation implies that the cat remains both alive and dead until the state has been observed. Schrödinger did not wish to promote the idea of dead-and-live cats as a serious possibility; on the contrary, he intended the example to illustrate the absurdity of the existing view of quantum mechanics. `,
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
  teachers: [
    { id: 1, name: 'Niels Bohr', school: 'University of Copenhagen' },
    { id: 2, name: 'Werner Heisenberg', school: 'University of Munich' },
    { id: 3, name: 'Paul Dirac', school: 'University of Cambridge' },
  ],
};

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 0.35fr) minmax(400px, 1fr) minmax(
      min-content,
      0.25fr
    );
  grid-template-rows:
    minmax(5rem, 0.25fr) minmax(7rem, 0.25fr) minmax(7rem, 0.2fr) minmax(
      12rem,
      auto
    )
    auto auto;
  grid-gap: 0.2rem;
  grid-template-areas:
    '. school school'
    'picture quiz date'
    'picture description teacher'
    'picture description contactinfo'
    'reviews  . .'
    'reviews  . actions';
  /* align-items: stretch;
  justify-items: stretch; */
  /* justify-content: stretch;
  align-content: end; */
  position: relative;
  z-index: auto;
  margin: 0vh 5vw 0;
  padding: 2rem;
  border-radius: 6px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`;

const Picture = styled.div`
  grid-area: picture;
  align-self: center;
  justify-self: center;
  height: 100%;
  width: 100%;
  /* object-fit: cover; */
  background: url(${quizDetail.img}) no-repeat;
  background-size: contain;
  background-position: center;
  /* border-color: red;
  border-radius: 4px;
  border-style: solid; */
`;

const QuizName = styled.div`
  grid-area: quiz;
  align-self: center;
  justify-self: center;
  height: 100%;
  width: 100%;
`;

const School = styled.div`
  grid-area: school;
  align-self: center;
  justify-self: left;
  height: 100%;
  width: 100%;
  color: ${(p) => p.theme.palette.primary.contrastText};
`;
const Reviews = styled.div`
  grid-area: reviews;
  /* align-self: center;
  justify-self: center; */
  height: 100%;
  width: 100%;
  /* border-color: red;
  border-width: 5px;
  border-style: solid;
  background-color: ${(p) => p.theme.main}; */
`;
const Description = styled.div`
  grid-area: description;
  align-self: center;
  justify-self: center;
  height: 100%;
  width: 100%;
  padding: 0.2rem;
  overflow: scroll;
`;
// const Subject = styled.div`
//   grid-area: subject;
//   align-self: center;
//   justify-self: center;
//   height: 100%;
//   width: 100%;
// `;

const Teacher = styled.div`
  grid-area: teacher;
  align-self: center;
  justify-self: center;
  height: 100%;
  width: 100%;
`;
const DateOpen = styled.div`
  grid-area: date;
  justify-self: end;
  align-self: center;
`;
const ContactInfo = styled.div`
  grid-area: contactinfo;
  align-self: center;
  justify-self: center;
  height: 100%;
  width: 100%;
`;
const Actions = styled.div`
  grid-area: actions;
  align-self: flex-end;
  justify-self: center;
  height: 100%;
  width: 100%;
`;

const ShadowBox = styled(Box)`
  /* display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-self: center;
  flex-grow: 1;
  background-color: gray; */
  margin: 1rem;
  padding: 0.2rem;
  border-radius: 10px;
  box-shadow: 0 5px 5px -8px rgba(0, 0, 0, 0.24),
    0 8px 10px -5px rgba(0, 0, 0, 0.2);
`;

const CleanLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    color: ${(p) => p.theme.palette.primary.main};
  }
`;

const handleClick = () => {
  console.info('Accessing the profile of the user that made the review');
};

const openDate = new Date().toISOString().split('T')[0];
const closeDate = new Date('2021-03-22').toISOString().split('T');
// const teachers = [
//   { id: 1, name: 'Niels Bohr', school: 'University of Copenhagen' },
//   { id: 2, name: 'Werner Heisenberg', school: 'University of Munich' },
//   { id: 3, name: 'Paul Dirac', school: 'University of Cambridge' },
// ];

function QuizProfile(props) {
  //   const { quizDetail } = props.location.state;
  // const {
  //   // img,
  //   schoolName,
  //   subjectName,
  //   quizName,
  //   totalStudents,
  //   openDate,
  //   closeDate,
  //   quizDescription,
  //   quizReviews,
  //   schoolContactInfo,
  //   teachers,
  // } = quizDetail;

  const dispatch = useDispatch();
  const id = props.match.params.id;
  const quizDetailStatus = useSelector(quizDetailStatusSelector);
  const quizDetail = useSelector((state) => quizDetailSelector(state, id));
  // const quizDetailStatus = useSelector((state) =>
  //   selectQuizDetailById(state, id)
  // );

  // const {
  //   name,
  //   quantity,
  //   logo,
  //   description,
  //   Subject: { name: subjectName },
  //   School: { name: schoolName },
  //   Reviews,
  //   QuizTags,
  // } = quizDetailStatus;

  const handleEnroll = () => {
    dispatch(ACTIONS.actions.enroll());
  };

  useEffect(() => {
    if (quizDetailStatus === 'idle') {
      dispatch(getQuizDetailAsync(id));
    }
  }, [dispatch, quizDetailStatus, id]);
  if (quizDetailStatus === 'pending') {
    return <BackdropLoading />;
  } else if (quizDetailStatus === 'error') {
    return <h1>Ha ocurrido un error metele F5</h1>;
  } else if (quizDetailStatus === 'success') {
    var {
      name,
      quantity,
      description,
      Subject: { name: subjectName },
      School: { name: schoolName, email: schoolEmail },
      teachers,
      Reviews: reviewList,
    } = quizDetail;
  }

  return (
    <div>
      <Parallax small filter image={schoolImg} />
      <MainContainer>
        <Picture />
        <QuizName>
          <ShadowBox>
            <Typography variant="h3" color="secondary">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="secondary">
              {subjectName}
            </Typography>
          </ShadowBox>
        </QuizName>
        <School>
          <Box display="flex" flexDirection="row" justifyContent="left">
            <Typography
              variant="h2"
              color="textSecondary"
              gutterBottom
              paragraph
              component={CleanLink}
              to="/school-profile/1"
            >
              <Box marginLeft="0.1rem" marginRight="1rem" display="inline-flex">
                <SchoolIcon color="secondary" fontSize="large" />
              </Box>
              {schoolName}
            </Typography>
          </Box>
        </School>
        <Teacher>
          <Typography variant="body2">Teachers in this course:</Typography>
          <br></br>
          <Box>
            {teachers &&
              teachers.map((teacher, idx) => {
                return (
                  <Link
                    to={{
                      pathname: `/profile/${teacher.userId}`,
                      state: {
                        owner: false,
                      },
                    }}
                  >
                    <Badge key={idx} color={idx % 2 === 0 ? 'primary' : 'info'}>
                      {teacher.name}
                    </Badge>
                  </Link>
                );
              })}
          </Box>
        </Teacher>
        <Reviews>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            padding="0.2rem"
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="left"
              padding="0.2rem"
            >
              <Tooltip
                TransitionComponent={Zoom}
                title="Students Enrolled"
                placement="left"
              >
                <span>
                  <Button disabled>
                    <PeopleIcon color="secondary" />
                    <Typography
                      color="secondary"
                      display="inline"
                      variant="body2"
                    >
                      {quantity}
                    </Typography>
                  </Button>
                </span>
              </Tooltip>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="right"
              padding="0.2rem"
            >
              <Typography variant="subtitle1">Score</Typography>
              <Typography variant="body1">
                <Rating name="score" value={8} readOnly />
              </Typography>
            </Box>
          </Box>
          <Grid spacing={2}>
            {reviewList &&
              reviewList.slice(0, 3).map((review, idx) => {
                return (
                  <>
                    <Grid item>
                      <Typography variant="body1">
                        Student:{' '}
                        <Link
                          to={{
                            pathname: `/profile/${review.UserId}`,
                            state: {
                              owner: false,
                            },
                          }}
                        >
                          <Chip
                            label={review.UserId}
                            variant="outlined"
                            color="info"
                            size="small"
                            onClick={handleClick}
                          />
                        </Link>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">
                        {review.description}
                      </Typography>
                    </Grid>
                  </>
                );
              })}
          </Grid>
        </Reviews>
        <Description>
          <Typography variant="body1">{description}</Typography>
        </Description>
        {/* <Subject>{subjectName}</Subject> */}
        <DateOpen>
          <Box display="flex" flexDirection="row" justifySelf="center">
            <Typography variant="body1">
              Avialable from:{' '}
              <Chip
                label={openDate}
                variant="outlined"
                color="info"
                size="small"
              />{' '}
              to:{' '}
              <Chip
                label={closeDate}
                variant="outlined"
                color="warning"
                size="small"
              />
            </Typography>
          </Box>
        </DateOpen>
        <ContactInfo>
          <Typography variant="subtitle1" align="center">
            School Contact Info
          </Typography>
          <Box display="flex" flexDirection="column">
            <Box display="flex" flexDirection="row" padding="0.2rem">
              <PhoneIcon />
              {/* <Typography variant="body1">{schoolContactInfo.phone}</Typography> */}
            </Box>
            <Box display="flex" flexDirection="row" padding="0.2rem">
              <EmailIcon />
              <Typography variant="body1">{schoolEmail}</Typography>
            </Box>
          </Box>
        </ContactInfo>
        <Actions>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            {/* <Button color="info" variant="contained" size="large">
            Contact
          </Button> */}
            <Button
              color="primary"
              variant="contained"
              size="large"
              onClick={handleEnroll}
            >
              Enroll
            </Button>
          </Box>
        </Actions>
      </MainContainer>
    </div>
  );
}

export default QuizProfile;
