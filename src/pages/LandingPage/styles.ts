import styled from "styled-components";
import animatedLogo from "../../assets/img/teste.svg";
import descriptionImg from "../../assets/img/wallpaper12.jpg";
import AsideImg from "../../assets/img/wallpaper11.jpg";
import aboutImage from "../../assets/img/about-02.png";
import groupSection from "../../assets/img/wallpaper04.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Final Project
    Description: Landing Page Designs
    ~ *   LandingPage Styles   * ~

            Version: 1.0

****************************************/

export const HomeSection = styled.main`
  width: 100%;
  height: 90vh;

  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;

  background-color: #c2e0f9;
  margin-top: 120px;

  @media screen and (max-width: 1200px) {
    height: 180vh;
    flex-flow: column nowrap;
  }
`;

export const DescriptionSection = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--color-grey-1);
  background-image: url(${descriptionImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 30px;

  & > h1 {
    font-size: var(--font-subtitle-28);
    font-family: var(--font-secondary-inter);
    font-weight: var(--font-weight-700);
    letter-spacing: 2px;
    line-height: var(--font-line-height-32);
    color: var(--color-grey-3);
    width: 60%;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 70vh;
    justify-content: space-evenly;
    padding-top: 10px;

    & > h1 {
      font-size: var(--font-subtitle-24);
      width: 90%;
    }
  }
  @media screen and (max-width: 600px) {
    height: 90vh;

    & > h1 {
      width: 80%;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 90vh;
    justify-content: space-evenly;
    padding-top: 10px;

    & > h1 {
      width: 80%;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 90vh;
    justify-content: space-evenly;
    padding-top: 10px;

    & > h1 {
      width: 80%;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 90vh;
    justify-content: space-evenly;
    padding-top: 30px;

    & > h1 {
      width: 80%;
    }
  }
`;

export const TypingEffect = styled.div`
  height: 100px;
  width: 90%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: var(--font-subtitle-24);
    font-family: var(--font-secondary-inter);
    font-weight: var(--font-weight-400);
    color: var(--color-grey-3);
  }

  b {
    text-decoration: underline;
    text-decoration-color: var(--color-feedback-info);
  }

  @media screen and (max-width: 480px) {
    & > h2 {
      font-size: var(--font-subtitle-20);
    }
  }
  @media screen and (max-width: 600px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const AsideSpace = styled.aside`
  width: 50%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  background-color: #c2e0f9;
  background-image: url(${AsideImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 30px;

  & > h2 {
    font-size: var(--font-subtitle-28);
    font-family: var(--font-secondary-inter);
    font-weight: var(--font-weight-600);
    color: var(--color-grey-3);
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 900vh;

    & > h2 {
      margin-top: 30px;
      width: 80%;
      text-align: center;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 90vh;

    & > h2 {
      margin-top: 30px;
      width: 80%;
      text-align: center;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 90vh;

    & > h2 {
      margin-top: 30px;
      width: 80%;
      text-align: center;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 900vh;

    & > h2 {
      margin-top: 30px;
      width: 80%;
      text-align: center;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 90vh;

    & > h2 {
      margin-top: 30px;
      width: 80%;
      text-align: center;
    }
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const AnimatedLogo = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-image: url(${animatedLogo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media screen and (max-width: 480px) {
    width: 80%;
    height: 60%;
  }
  @media screen and (max-width: 600px) {
    width: 80%;
    height: 60%;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 60%;
  }
  @media screen and (max-width: 1024px) {
    width: 80%;
    height: 60%;
  }
  @media screen and (max-width: 1200px) {
    width: 80%;
    height: 60%;
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const Border = styled.div`
  position: absolute;
  height: 60vh;
  top: 25%;
  left: 50%;
  bottom: 0;
  border-left: 2px solid var(--color-grey-3);

  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    display: none;
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const ImageCarouselDiv = styled.div`
  width: 90%;
  max-width: 190px;

  height: 90%;

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  margin-top: 10px;

  & > img {
    width: 50%;
    height: 100%;
    transform: scale(0.9);
  }
`;

export const ShowCase = styled.div`
  width: 80%;
  height: 50%;
  background-color: var(--blur-effect-02);
  border: 2px solid var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;

  .CarouselCenter {
    width: 80%;
    height: 100%;
    z-index: 1000;
  }

  .carousel-slider {
    width: 100%;
    height: 100%;
  }

  .slider-wrapper {
    width: 80%;
    height: 100%;
  }

  .slider {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 480px) {
    height: 40%;
  }
  @media screen and (max-width: 600px) {
    height: 40%;
  }
  @media screen and (max-width: 768px) {
    height: 40%;
  }
  @media screen and (max-width: 1024px) {
    height: 40%;
  }
  @media screen and (max-width: 1200px) {
    height: 40%;
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const BtnDiv = styled.div`
  width: 50%;
  height: 100px;

  & > form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  & > form > input {
    width: 68%;
    height: 40px;
    border: 1px solid var(--color-grey-3);
    border-radius: var(--radius-8);
    padding-left: 20px;
    background-color: var(--color-grey-1);
  }

  & > form > input:focus {
    border: 2px solid var(--color-primary);
  }

  & > form > button {
    padding: 0.2em;
    width: unset;
  }

  @media (min-width: 430px) {
    & > form > button {
      width: 30%;
    }
  }

  @media screen and (max-width: 480px) {
    width: 80%;
    height: 100px;

    & > form {
      flex-flow: column nowrap;
    }

    & > form > input {
      width: 100%;
      height: 45px;
    }

    & > form > button {
      height: 45px;
    }
  }
  @media screen and (max-width: 600px) {
    width: 80%;
    height: 100px;

    & > form {
      flex-flow: column nowrap;
    }

    & > form > input {
      width: 100%;
      height: 45px;
    }

    & > form > button {
      height: 45px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 100px;

    & > form {
      flex-flow: column nowrap;

      gap: 0.2em;
    }

    & > form > input {
      width: 100%;
      height: 45px;
    }

    & > form > button {
      height: 45px;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 80%;
    height: 100px;

    & > form {
      flex-flow: column nowrap;
    }

    & > form > input {
      width: 100%;
      height: 45px;
    }

    & > form > button {
      height: 45px;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 80%;
    height: 100px;

    & > form {
      flex-flow: row nowrap;
    }

    & > form > input {
      width: 68%;
      height: 45px;
    }

    & > form > button {
      height: 45px;
    }
  }
  @media screen and (max-width: 1920px) {
    width: 80%;
    height: 100px;

    & > form {
      flex-flow: row nowrap;
    }

    & > form > input {
      width: 68%;
      height: 45px;
    }

    & > form > button {
      height: 45px;
    }
  }
  @media screen and (max-width: 2500px) {
    width: 80%;
    height: 100px;

    & > form {
      flex-flow: row nowrap;
    }

    & > form > input {
      width: 68%;
      height: 45px;
    }

    & > form > button {
      height: 45px;
    }
  }
`;
/*------------------------- Skip line -------------------------*/

export const AboutSection = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;

  background-color: royalblue;

  
  @media screen and (max-width: 1200px) {
    height: 180vh;
    width: 100%;
    flex-flow: column nowrap;
  }
`;

export const CompanionSection = styled.section`
  width: 50%;
  height: 100%;
  padding: 30px 0;

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  background-image: url(${groupSection});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  border-top: 2px solid var(--color-grey-3);

  & > h2 {
    margin-top: 70px;

    font-size: var(--font-subtitle-28);
    font-family: var(--font-secondary-inter);
    font-weight: var(--font-weight-700);
    letter-spacing: 2px;
    line-height: var(--font-line-height-32);

    color: var(--color-grey-3);

    width: 50%;
    height: 5%;

    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 90vh;

    & > h2 {
      width: 80%;
    }
  }
`;

export const AboutDescriptionSpace = styled.aside`
  width: 50%;
  height: 100%;
  
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  background-color: var(--color-grey-0);
  background-image: url(${aboutImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  border-top: 2px solid var(--color-grey-3);

  & > h2 {
    margin-top: 100px;
    font-size: var(--font-subtitle-28);
    font-family: var(--font-secondary-inter);
    font-weight: var(--font-weight-700);
    color: var(--color-grey-3);
    letter-spacing: 2px;
  }

  & > p {
    margin-top: 20px;    
    font-family: var(--font-secondary-inter);
    font-size: var(--font-subtitle-20);
    font-weight: var(--font-weight-400);
    line-height: var(--font-line-height-32);
    background-color: var(--blur-effect-02);
    color: var(--color-white-mode);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 90%;
    padding: 1em;
    border: 2px solid var(--color-primary);
    border-radius: var(--radius-8);
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 90vh;

    & > p {
      width: 90%;
      font-size: var(--font-text-16);
    }
  }
`;

export const SecondBorder = styled.div`
  position: absolute;
  height: 70vh;
  top: 120%;
  left: 50%;
  bottom: 0;
  border-left: 2px solid var(--color-quinternary);

  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    display: none;
  }

  @media screen and (max-width: 1920px) {
  }
`;

export const GroupMemberSpace = styled.div`
  width: 80%;
  height: 90%;
  margin-top: 20px;
  background-color: var(--blur-effect-02);
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid var(--color-grey-3);
  border-radius: var(--radius-8);
  overflow: auto;

  @media screen and (max-width: 480px) {
    width: 90%;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const AboutArrow = styled(AnchorLink)`
  transform: translateX(50%);
  right: 50%;

  position: absolute;
  top: 90vh;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;

  @media (min-width: 340px) {
    top: 185vh;
  }
  @media (min-width: 480px) {
    top: 180vh;
  }
  @media (min-width: 1200px) {
    top: 85vh;
  }
  
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const LandingArrow = styled(AboutArrow)`
  position: absolute;

  transform: translateX(50%);
  right: 50%;

  top: 105vh;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;

  @media (min-width: 340px) {
    top: 195vh;
  };
  @media (min-width: 1200px) {
    top: 110vh;
  };
  @media (max-width: 1200px) {
    display: none;
  }
`;
