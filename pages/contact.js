import styled from "styled-components";

import ContactForm from "../components/ContactForm";
import NavMenuBar from '../components/NavMenuBar';
import Bars from '../assets/longbar.svg';

function Contact() {
    return ( 
        <PageContainer>
            <BarsContainer>
                <Bars className='bars-svg'/>
            </BarsContainer>
            <FormContainer>
                <NavMenuBar/>
                <ContactForm></ContactForm>
            </FormContainer>
            <BarsContainer2>
                <Bars className='bars-svg-2'/>
            </BarsContainer2>
        </PageContainer>
     );
}

export default Contact;

export const PageContainer = styled.div`

`;

export const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

export const BarsContainer = styled.div`
  position: absolute;
  top: 0;
  left: -200px;
  z-index: -1;
  overflow: hidden;
`;

export const BarsContainer2 = styled.div`
  position: absolute;
  bottom: -250px;
  left: -200px;
  z-index: -1;
`;