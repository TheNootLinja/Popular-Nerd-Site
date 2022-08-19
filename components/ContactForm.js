import styled from "styled-components";

function ContactForm() {
    return ( 
        <Container>
            <StyledForm action="">
                <label htmlFor="name">Name:</label>
                <StyledInput type="text" id="name" name="name"/>
                <label htmlFor="email">Email:</label>
                <StyledInput type="email" id="email" name="email"/>
                <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
            </StyledForm>
        </Container>
     );
}

export default ContactForm;

export const Container = styled.div`
    max-width: 400px;
    width: 85%;
    height: 400px; 
    margin: auto;
    display: flex;
`;

export const StyledForm = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const StyledInput = styled.input`
    padding: 10px;
    margin-bottom: 30px;
`;

export const StyledSubmitButton = styled.button`
    height: 50px;
    width: 100%;
    border-radius: 20px;
    border: none;
    background-color: #83E645;
    color: black;
    font-size: 16px;
    font-weight: bold;
    transition: all .3s;
    padding: 10px;
    border-radius: 5px;
    border: none;
`;