import styled from "styled-components";
import Header from "../components/Header";
import { Link } from "react-scroll";

export default function Main() {
  return (
    <MainStyled id="main">
      <Header />
      <HeroText>
        If You Have An Idea
        <br /> We Can Make It Happen
      </HeroText>
      <SubHeroText>
        Structural steelwork, gates, railings, all aspects of metal fabrication.
      </SubHeroText>
      <div className="flex justify-center p-10 z-40">
        <Link to="contact" spy smooth duration={500}>
          <div className="rounded-full py-3 px-12 font-semibold cursor-pointer transition duration-500 ease-in-out bg-yellow-400 transform hover:-translate-y-1 hover:scale-110">
            Get a Quote
          </div>
        </Link>
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("./images/mobile-banner.webp");
  @media only screen and (min-width: 768px) {
    /* For desktop: */
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("./images/banner.webp");
  }
`;

const HeroText = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  line-height: 42px;
  font-weight: 800;
  width: 95%;
  text-align: center;
  color: #ffffff;
  @media only screen and (min-width: 768px) {
    /* For desktop: */
    width: 75%;
    font-size: 58px;
    line-height: 80px;
  }
`;

const SubHeroText = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  width: 80%;
  text-align: center;
  color: #ffffff;
  padding-top: 20px;
  @media only screen and (min-width: 768px) {
    /* For desktop: */
    width: 50%;
    font-size: 20px;
  }
`;
