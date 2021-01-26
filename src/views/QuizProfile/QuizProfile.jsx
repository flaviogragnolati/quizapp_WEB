import React from 'react';
import Parallax from 'components/Parallax/Parallax.js';
import styled from 'styled-components';
import { Button, Typography } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';

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
  display: grid;
  grid-template-columns: 0.25fr 0.25fr 1fr auto;
  grid-template-rows: 12vh 10vh 0.3fr 0.3fr auto;
  grid-gap: 10px;
  grid-template-areas:
    'picture picture quiz school'
    'picture picture description school'
    'picture picture description subject'
    'reviews reviews  description date'
    'contactinfo contactinfo actions actions';
  /* justify-content: stretch;
  align-content: start; */
  position: relative;
  z-index: 3;
  margin: -10vh 5vw 0;
  border-radius: 6px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`;

const Box = styled.div`
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
  height: 100%;
  width: 100%;
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
`;
const RaisedImg = styled.img`
  box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24),
    0 8px 10px -5px rgba(0, 0, 0, 0.2);
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
  justify-self: center;
  height: 100%;
  width: 100%;
`;
const Reviews = styled.div`
  grid-area: reviews;
  /* align-self: center;
  justify-self: center; */
  height: 100%;
  width: 100%;
  border-color: red;
  border-width: 5px;
  border-style: solid;
  background-color: ${(p) => p.theme.main};
`;
const Description = styled.div`
  grid-area: description;
  align-self: center;
  justify-self: center;
  height: 100%;
  width: 100%;
`;
const Subject = styled.div`
  grid-area: subject;
  align-self: center;
  justify-self: center;
  height: 100%;
  width: 100%;
`;
const DateOpen = styled.div`
  grid-area: date;
  align-self: center;
  justify-self: center;
  height: 100%;
  width: 100%;
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
        <Picture>
          {/* <RaisedImg src={img} alt="quiz profile pic" /> */}

          {/* <Box>Picture</Box> */}
        </Picture>
        <QuizName>
          <Typography variant="h3" color="secondary">
            {quizName}
          </Typography>
          <>
            <PeopleIcon color="secondary" />
            <Typography color="secondary" display="inline" variant="body2">
              {totalStudents}
            </Typography>
          </>
        </QuizName>
        <School>{schoolName}</School>
        <Reviews>
          {/* {quizReviews.map((item) => (
            <>
              <p>{`Student ${item.user}`}</p>
              <p>{`Score ${item.score}`}</p>
              <p>{`Review ${item.text}`}</p>
            </>
          ))} */}
          some random tet
        </Reviews>
        <Description>{quizDescription}</Description>
        <Subject>{subjectName}</Subject>
        <DateOpen>
          Avialable from: {openDate} to: {closeDate}
        </DateOpen>
        <ContactInfo>
          <p>{schoolContactInfo.phone}</p>
          <p>{schoolContactInfo.email}</p>
        </ContactInfo>
        <Actions>
          <Button color="info" variant="contained">
            Contact
          </Button>
          <Button color="primary" variant="contained">
            Enroll
          </Button>
        </Actions>
      </MainContainer>
    </div>
  );
}

export default QuizProfile;
