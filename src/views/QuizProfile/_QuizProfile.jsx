import React from 'react';
import Parallax from 'components/Parallax/Parallax.js';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const schoolImg =
  'https://media.glassdoor.com/l/0d/b2/15/11/beautiful-campus.jpg';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr | 3fr;
  position: relative;
  /* display: flex;
  flex-direction: row;
  justify-content: space-between; */
  z-index: 3;
  margin: -10vh 5vw 0;
  border-radius: 6px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`;

const QuizPicContainer = styled.div`
  background-color: gray;
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  /* display: flex;
  flex-direction: row;
  justify-content: center; */
  margin-left: 5rem;
  margin-bottom: 5rem;
`;

const RaisedImg = styled.img`
  box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24),
    0 8px 10px -5px rgba(0, 0, 0, 0.2);
`;

const DetailContainer = styled.div`
  height: 25rem;
  /* flex-direction: row;
  justify-content: space-between;
  flex-grow: 1; */
  background-color: gray;
  padding-right: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${(p) => p.theme.palette.primary.main};
`;

const School = styled.h3`
  font-size: 1.2rem;
`;

const Subject = styled.h4`
  font-size: 1.1rem;
`;

const QuizDescription = styled.p`
  font-size: 1rem;
  color: blue;
`;

const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
const QuizProfile = (props) => {
  const { quizDetail } = props.location.state;
  const {
    img,
    schoolName,
    subjectName,
    quizName,
    totalStudents,
    openDate,
    closeDate,
    quizDescription,
  } = quizDetail;
  return (
    <div>
      <Parallax small filter image={schoolImg} />
      <MainContainer>
        <QuizPicContainer>
          <RaisedImg src={img} alt="quiz profile pic" />
        </QuizPicContainer>
        <DetailContainer>
          <Title>{quizName}</Title>
          <div>
            <School>{schoolName}</School>
            <Subject>{subjectName}</Subject>
          </div>
          {/* <QuizDescription>{quizDescription}</QuizDescription> */}
        </DetailContainer>
      </MainContainer>
    </div>
  );
};

export default QuizProfile;
