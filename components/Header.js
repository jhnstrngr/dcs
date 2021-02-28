import Image from "next/image";
import styled from "styled-components";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <>
      <HeaderStyled>
        <Image
          src="/images/dcslogo.png"
          alt="DSC Logo"
          width={117}
          height={83}
        />
        <Navigation>
          <Link to="services" spy smooth duration={500}>
            <NavRoutes>Services</NavRoutes>
          </Link>

          <Link to="gallery" spy smooth duration={500}>
            <NavRoutes>Gallery</NavRoutes>
          </Link>

          <Link to="contact" spy smooth duration={500}>
            <NavRoutes>Contact</NavRoutes>
          </Link>
        </Navigation>
      </HeaderStyled>
      <div className="pb-5 visible md:hidden">
        <Image
          src="/images/dcslogo.png"
          alt="DSC Logo"
          width={140}
          height={99}
          id="mobile-logo"
        />
      </div>
      <div className="xl:hidden fixed z-50 top-auto bottom-0 w-full md:w-2/3 md:left-1/2 p-4">
        <nav className="flex justify-evenly py-3 bg-gray-900 rounded-2xl overflow-hidden">
          <Link
            to="main"
            activeClass="rounded-lg bg-gray-700 transition duration-700 ease-in-out"
            spy
            smooth
            duration={500}
          >
            <div className="relative text-center text-white text-sm px-2 py-1 ">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m-auto"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 8.77217L14.0208 1.79299C12.8492 0.621414 10.9497 0.621413 9.77817 1.79299L3 8.57116V23.0858H10V17.0858C10 15.9812 10.8954 15.0858 12 15.0858C13.1046 15.0858 14 15.9812 14 17.0858V23.0858H21V8.77217ZM11.1924 3.2072L5 9.39959V21.0858H8V17.0858C8 14.8767 9.79086 13.0858 12 13.0858C14.2091 13.0858 16 14.8767 16 17.0858V21.0858H19V9.6006L12.6066 3.2072C12.2161 2.81668 11.5829 2.81668 11.1924 3.2072Z"
                  fill="currentColor"
                />
              </svg>
              Home
            </div>
          </Link>
          <Link
            to="services"
            activeClass="rounded-lg bg-gray-700 transition duration-700 ease-in-out"
            spy
            smooth
            duration={500}
          >
            <div className="relative text-center text-white text-sm px-2 py-1">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m-auto"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17 5.5H20C21.1046 5.5 22 6.39543 22 7.5V19.5C22 20.6046 21.1046 21.5 20 21.5H4C2.89543 21.5 2 20.6046 2 19.5V7.5C2 6.39543 2.89543 5.5 4 5.5H7C7 3.84315 8.34315 2.5 10 2.5H14C15.6569 2.5 17 3.84315 17 5.5ZM14 4.5H10C9.44772 4.5 9 4.94772 9 5.5H15C15 4.94772 14.5523 4.5 14 4.5ZM20 7.5H4V9.5H20V7.5ZM4 19.5V11.5H7V13.5H11V11.5H13V13.5H17V11.5H20V19.5H4Z"
                  fill="currentColor"
                />
              </svg>
              Services
            </div>
          </Link>
          <Link
            to="gallery"
            activeClass="rounded-lg bg-gray-700 transition duration-700 ease-in-out"
            spy
            smooth
            duration={500}
          >
            <div className="relative text-center text-white text-sm px-2 py-1">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m-auto"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5C4 3.34315 5.34315 2 7 2H17C18.6569 2 20 3.34315 20 5V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V5ZM13 4H17C17.5523 4 18 4.44772 18 5V13H13V4ZM13 15V20H17C17.5523 20 18 19.5523 18 19V15H13ZM11 4H7C6.44771 4 6 4.44772 6 5V8H11V4ZM6 19V10H11V20H7C6.44772 20 6 19.5523 6 19Z"
                  fill="currentColor"
                />
              </svg>
              Gallery
            </div>
          </Link>
          <Link
            to="contact"
            activeClass="rounded-lg bg-gray-700 transition duration-700 ease-in-out"
            spy
            smooth
            duration={500}
          >
            <div className="relative text-center text-white text-sm px-2 py-1">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m-auto"
              >
                <path
                  d="M22 12C22 10.6868 21.7413 9.38647 21.2388 8.1731C20.7362 6.95996 19.9997 5.85742 19.0711 4.92896C18.1425 4.00024 17.0401 3.26367 15.8268 2.76123C14.6136 2.25854 13.3132 2 12 2V4C13.0506 4 14.0909 4.20703 15.0615 4.60889C16.0321 5.01099 16.914 5.60034 17.6569 6.34326C18.3997 7.08594 18.989 7.96802 19.391 8.93848C19.7931 9.90918 20 10.9495 20 12H22Z"
                  fill="currentColor"
                />
                <path
                  d="M2 10V5C2 4.44775 2.44772 4 3 4H8C8.55228 4 9 4.44775 9 5V9C9 9.55225 8.55228 10 8 10H6C6 14.4182 9.58173 18 14 18V16C14 15.4478 14.4477 15 15 15H19C19.5523 15 20 15.4478 20 16V21C20 21.5522 19.5523 22 19 22H14C7.37259 22 2 16.6274 2 10Z"
                  fill="currentColor"
                />
                <path
                  d="M17.5433 9.70386C17.8448 10.4319 18 11.2122 18 12H16.2C16.2 11.4485 16.0914 10.9023 15.8803 10.3928C15.6692 9.88306 15.3599 9.42017 14.9698 9.03027C14.5798 8.64014 14.1169 8.33081 13.6073 8.11963C13.0977 7.90869 12.5515 7.80005 12 7.80005V6C12.7879 6 13.5681 6.15527 14.2961 6.45679C15.024 6.7583 15.6855 7.2002 16.2426 7.75732C16.7998 8.31445 17.2418 8.97583 17.5433 9.70386Z"
                  fill="currentColor"
                />
              </svg>
              Contact
            </div>
          </Link>
        </nav>
      </div>
    </>
  );
}

const HeaderStyled = styled.header`
  display: none;
  @media only screen and (min-width: 900px) {
    /* For desktop: */
    top: 0;
    position: absolute;
    z-index: 10;
    display: flex;
    align-items: center;
    width: 60%;
    justify-content: space-between;
  }
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavRoutes = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  color: #ffffff;
  padding-left: 24px;
  cursor: pointer;
  :hover {
    color: #cccccc;
  }
`;
