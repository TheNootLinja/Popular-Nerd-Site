import styled from "styled-components";

function NavMenuHamburgerIcon() {
    return ( 
        <Container>
            <MenuBar />
            <MenuBar />
            <MenuBar />
        </Container>
     );
}

export default NavMenuHamburgerIcon;

export const Container = styled.div`
    height: 30px;
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 30px;
    @media (min-width: 768px) {
        display: none;
  }
`;

export const MenuBar = styled.div`
    background-color: #83E645;
    width: 100%;
    height: 7px;
`;