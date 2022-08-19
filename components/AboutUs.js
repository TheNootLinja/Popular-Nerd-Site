import styled from "styled-components";

function AboutUs() {
    return ( 
        <AboutUsContainer>
            <h1>Building Websites is<br/>Our Passion</h1>
            <p>
                We want you to be as happy showing others your website, as we are to build it. From concept to production,
                we will be with you every step of the way and make sure that your experience of getting your dream website
                is as smooth as we possibly can. Good communication, timelines for milestones, and showing progress of the
                work along the way will all contribute to that smooth process. Sound like what you are looking for in your
                website creation needs? Give us a call or send an email and we will get the ball rolling on turning your dream
                website, into a reality.
            </p>
        </AboutUsContainer>
     );
}

export default AboutUs;

export const AboutUsContainer = styled.div`
    margin: auto;
    margin-top: 55vh;
    max-width: 800px;
    >h1 {
        text-align: center;
    }
    >p {
        font-size: 16px;
        line-height: 30px;
        margin: 0 19px;
    }
`;