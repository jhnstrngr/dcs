import Head from "next/head";
import styled from "styled-components";

import Main from "../sections/Main";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>DCS - Welding & Fabrication</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-SemiBold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        {/* <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-Thin.ttf"
          as="font"
          crossOrigin=""
        /> */}
      </Head>

      <Main />

      <ServiceSection id="services">
        <div className="container my-12 px-4 md:px-12 z-0">
          <div className="flex flex-wrap lg:mx-14">
            <Card title="Welding & Fabrication" img="welding.webp" />
            <Card title="Powder Coating" img="powder-coating.webp" />
            <Card title="Fitting" img="glass-railing.webp" />
          </div>
        </div>
      </ServiceSection>

      <GallerySection id="gallery">
        <Title>Gallery</Title>
      </GallerySection>

      <Section id="contact">
        <Title>Contact</Title>
      </Section>

      <Footer>
        <a>Made by John Stringer</a>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-template-rows: 85vh repeat(3, auto) 20vh;
  grid-template-columns: 1fr;

  @media only screen and (min-width: 768px) {
    /* For desktop: */
    grid-template-rows: 85vh repeat(3, auto);
  }
`;

const Section = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  height: 95vh;
  background-color: #252b42;
  padding-top: 7vh;
`;

const ServiceSection = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: #252b42;
  padding-top: 7vh;

  @media only screen and (min-width: 768px) {
    /* For desktop: */
    position: absolute;
    height: 0vh;
    width: 100%;
    background: none;
    top: 53vh;
    z-index: 0;
  }
`;

const GallerySection = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  height: 95vh;
  background-color: #252b42;
  padding-top: 7vh;

  @media only screen and (min-width: 768px) {
    /* For desktop: */
    padding-top: 20vh;
  }
`;

const Footer = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #252b42;
  color: #ffffff;

  @media only screen and (min-width: 768px) {
    /* For desktop: */
    align-items: center;
    height: 100px;
  }

  .a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 40px;
  font-style: bold;
  font-weight: 700;
  color: #ffffff;
  @media only screen and (min-width: 768px) {
    /* For desktop: */
    font-size: 40px;
  }
`;

const Card = ({ title, img }) => {
  return (
    <div className="my-1 py-4 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="relative inline-block cursor-pointer bg-black rounded-lg shadow-xl transition duration-500 ease-in-out hover:shadow-2xl transform hover:-translate-y-1 hover:scale-110 motion-reduce:transition-none motion-reduce:transform-none">
        <img
          className="opacity-50 rounded-lg block h-auto w-full "
          src={`/images/${img}`}
        />
        <div className="absolute m-auto text-white px-4 bottom-4 left-0">
          <div>
            <h1 className="lg:text-2xl text-2xl font-semibold">{title}</h1>
          </div>
          <div>
            <h1 className="text-lg font-medium text-gray-300">
              Find out more...
            </h1>
          </div>
        </div>
      </article>
    </div>
  );
};
