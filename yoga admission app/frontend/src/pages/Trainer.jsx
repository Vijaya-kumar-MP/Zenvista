<<<<<<< HEAD
// Trainer.js

import React from 'react';
import styled from 'styled-components';

// Define the styled components
const Wrapper = styled.div`
  background: #fff;
  width: 700px;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.4);
  margin-top: 50px;
  margin: auto;
  height: 300px;
`;

const H2 = styled.h2`
  text-align: center;
`;

const HR = styled.hr`
  width: 100px;
  margin: 10px auto;
`;
const Members = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
`;

const TeamMember = styled.div`
  margin: 8px;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 10px;
`;

const H4 = styled.h4`
  text-align: center;
  font-size: 17px;
  margin: 7px;
`;

const P = styled.p`
  text-align: center;
  font-size: 12px;
  margin: 7px;
`;


// The Trainer component using the styled components
const Trainer = () => {
  return (
    <Wrapper>
      <H2>Professional Trainers</H2>
      <HR />
      <Members>
        <TeamMember>
          <Img src="./src/assets/images/emma.jpg" alt="Team Member 1" />
          <H4>Mrs. Emma</H4>
          <P>Physical trainer</P>
        </TeamMember>
        <TeamMember>
          <Img src="./src/assets/images/robert.jpg" alt="Team Member 1" />
          <H4>Mr.Robert</H4>
          <P>Mind control yoga trainer</P>
        </TeamMember>
        <TeamMember>
          <Img src="./src/assets/images/bella.jpg" alt="Team Member 1" />
          <H4>Mrs.Bmma</H4>
          <P>Breathing yoga trainer</P>
        </TeamMember>
        <TeamMember>
          <Img src="./src/assets/images/rio.jpg" alt="Team Member 1" />
          <H4>Mr.Rio</H4>
          <P>Asanas trainer</P>
        </TeamMember>
      </Members>
    </Wrapper>
  );
};

export default Trainer;
=======
// Trainer.js

import React from 'react';
import styled from 'styled-components';

// Define the styled components
const Wrapper = styled.div`
  background: #fff;
  width: 700px;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.4);
  margin-top: 50px;
  margin: auto;
  height: 300px;
`;

const H2 = styled.h2`
  text-align: center;
`;

const HR = styled.hr`
  width: 100px;
  margin: 10px auto;
`;
const Members = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
`;

const TeamMember = styled.div`
  margin: 8px;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 10px;
`;

const H4 = styled.h4`
  text-align: center;
  font-size: 17px;
  margin: 7px;
`;

const P = styled.p`
  text-align: center;
  font-size: 12px;
  margin: 7px;
`;


// The Trainer component using the styled components
const Trainer = () => {
  return (
    <Wrapper>
      <H2>Professional Trainers</H2>
      <HR />
      <Members>
        <TeamMember>
          <Img src="./src/assets/images/emma.jpg" alt="Team Member 1" />
          <H4>Mrs. Emma</H4>
          <P>Physical trainer</P>
        </TeamMember>
        <TeamMember>
          <Img src="./src/assets/images/robert.jpg" alt="Team Member 1" />
          <H4>Mr.Robert</H4>
          <P>Mind control yoga trainer</P>
        </TeamMember>
        <TeamMember>
          <Img src="./src/assets/images/bella.jpg" alt="Team Member 1" />
          <H4>Mrs.Bmma</H4>
          <P>Breathing yoga trainer</P>
        </TeamMember>
        <TeamMember>
          <Img src="./src/assets/images/rio.jpg" alt="Team Member 1" />
          <H4>Mr.Rio</H4>
          <P>Asanas trainer</P>
        </TeamMember>
      </Members>
    </Wrapper>
  );
};

export default Trainer;
>>>>>>> ee95a7b5ddd4d03b66daaf354fe62178931e0b79
