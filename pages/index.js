import Head from 'next/head';
import styled from 'styled-components';

import Bars from '../assets/longbar.svg';
import NavMenuBar from '../components/NavMenuBar';
import AboutUs from '../components/AboutUs';
import PreviousWork from '../components/PreviousWork';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Popular Nerd Web Development</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <NavMenuBar/>
      <BarsContainer >
        <Bars className='bars-svg'></Bars>
      </BarsContainer>
      <div className='hero-container'>
        <h1>Popular Nerd</h1>
        <p>Making your dream website,<br/>a reality</p>
        <button className='contact-us'>Contact Us</button>
      </div>
      <BarsContainer2>
        <Bars className='bars-svg-2'></Bars>
      </BarsContainer2>
      <div className='about-us-container'>
        <p>Click Here to Learn<br/>More About Us!</p>
      </div>
      <AboutUs/>
    </div>
  )
}

export const BarsContainer = styled.div`
  position: absolute;
  top: 0;
  left: -200px;
  z-index: -1;
`;

export const BarsContainer2 = styled.div`
  position: absolute;
  bottom: -250px;
  left: -200px;
  z-index: -1;
`;
