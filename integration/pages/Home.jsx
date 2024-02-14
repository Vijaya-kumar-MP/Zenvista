import React from 'react';
import styled from 'styled-components';
import yogaImage3 from '../assets/images/yogaImage3.jpg';

const Container = styled.div`
  width: 1100px;
  margin: auto;
`;
const HomeSection = styled.section`
background-size: cover;
height: 100vh;
background-image: url(https://getwallpapers.com/wallpaper/full/7/1/8/1171234-best-yoga-desktop-wallpaper-1920x1080-full-hd.jpg);
`;
/* background-image: url(https://source.unsplash.com/random?wallpapers); */

const Overlay = styled.div`
  height: 100%;
  /* background: rgba(0, 0, 0, 0.6); */
`;

const HomeContent = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const HomeTitle = styled.h1`
  font-size: 4rem;
  color: #fff;
  text-transform: capitalize;
`;

const HighlightedText = styled.span`
  color: rgb(228, 151, 8);
`;

const HomeButtons = styled.div`
  margin-top: 2rem;
`;

const ExploreButton = styled.button`
  padding: 10px 1rem;
  border-radius: 10px;
  margin: 1rem;
  cursor: pointer;
  font-size: 1rem;

  &.btn1 {
    background: rgb(228, 151, 8);
    color: #fff;
  }
`;
const ServicesSection = styled.section`
  background: rgb(223, 223, 223);
  padding: 2rem 1rem;
`;

const ServicesTitle = styled.div`
  text-align: center;
`;

const ServicesTitleMain = styled.h1`
  font-size: 2rem;
  text-transform: capitalize;
`;

const ServicesTitleSpan = styled.span`
  color: rgb(228, 151, 8);
`;

const ServicesSlogan = styled.span`
  font-size: 1rem;
  color: gray;
`;

const ServicesBoxes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

const ServiceBox = styled.div`
  width: 320px;
  background: #fff;
  padding: 2rem;
  margin: 1rem 2rem;
  text-align: center;
  border-radius: 10px;
  border: 2px solid transparent;
  box-shadow: 1px 30px 20px rgba(0, 0, 0, 0.1);
  transition: border 0.3s ease-in-out;

  i {
    font-size: 4rem;
    color: rgb(228, 151, 8);
    margin-bottom: 2rem;
  }

  p {
    color: gray;
    margin-top: 10px;
  }

  &:hover {
    border: 2px solid rgb(228, 151, 8);
  }
`;
const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 10px;
`;

// ... Add more styled components for other sections

const Home = () => {
  return (
    <>

      <HomeSection>
        <Overlay>
          <Container>
            <HomeContent>
              <HomeTitle>
                <HighlightedText>Yoga-</HighlightedText> "to join" <HighlightedText>or</HighlightedText><br />
                "to yoke" <HighlightedText>or</HighlightedText> "to unite" <br />
              </HomeTitle>
              
            </HomeContent>
          </Container>
        </Overlay>
      </HomeSection>
      <ServicesSection>
        <Container>
          <ServicesTitle>
            <ServicesTitleMain>5 points of <ServicesTitleSpan>Yoga!</ServicesTitleSpan></ServicesTitleMain>
            <ServicesSlogan>gain your utmost health</ServicesSlogan>
          </ServicesTitle>
          <ServicesBoxes>
            <ServiceBox>
              <i className="fa-solid fa-hotel"></i>
              <h4>PROPER EXERCISE (Asana)</h4>
              <Img src="./src/assets/images/proper.jpg" alt="Team Member 1" />
              <p>The twelve classical postures exercise every part of the body, stretching and toning the muscles and joints, the spine and the entire skeletal system.</p>
            </ServiceBox>

            <ServiceBox>
              <i className="fa-solid fa-plane"></i>
              <h4>PROPER BREATHING (Pranayama)</h4>
              <Img src="./src/assets/images/breathing.jpg" alt="Team Member 1" />
              <p>Many of us use only a fraction of our lung capacity for breathing, resulting in poor physical and mental health.Breathing controls are necessary.</p>
            </ServiceBox>

            <ServiceBox>
              <i className="fa-solid fa-mountain-sun"></i>
              <h4>PROPER RELAXATION (Savasana)</h4>
              <Img src="./src/assets/images/savasana.jpg" alt="Team Member 1" />
              <p>When the body and the mind are constantly overworked, their natural efficiency to perform work diminishes.</p>
            </ServiceBox>
          </ServicesBoxes>
          <ServicesBoxes>
          <ServiceBox>
              <i className="fa-solid fa-mountain-sun"></i>
              <h4>PROPER DIET (lacto-vegetarian)</h4>
              <Img src="./src/assets/images/lacto.jpg" alt="Team Member 1" />
              <p>Besides being responsible for building our physical body, yoga teaches us that the foods we eat profoundly affect our mind</p>
            </ServiceBox>
            <ServiceBox>
              <i className="fa-solid fa-mountain-sun"></i>
              <h4>POSITIVE THINKING AND MEDITATION</h4>
              <Img src="./src/assets/images/meditation.jpg" alt="Team Member 1" />
              <p>Yoga teaches us that our thoughts are the real cause behind our success and happiness.</p>
            </ServiceBox>
          </ServicesBoxes>
        </Container>
      </ServicesSection>  

      {/* Add other sections using styled components */}
    </>
  );
};

export default Home;
