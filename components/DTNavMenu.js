import styled from "styled-components";
import Link from "next/link";

function DTNavMenu() {
    return ( 
        <NavMenu>
            <Link href="/">
                <NavItem>Home</NavItem>
            </Link>
            <Link href="/contact">
                <NavItem>Contact Us</NavItem>
            </Link>
            <Link href="/">
                <NavItem href="/">Github</NavItem>
            </Link>
            <Link href="/">
                <NavItem href="/">LinkedIn</NavItem>
            </Link>
            <Link href="/">
                <NavItem href="/">Portfolio</NavItem>
            </Link>
        </NavMenu>
     );
}

export default DTNavMenu;

export const NavMenu = styled.nav`
    /* background-color: #949494; */
    margin-top: 30px;
    margin-right: 10px;
    height: 75px;
    width: 600px;
    border-radius: 125px;
    border: 3px solid #83e6456c;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width: 768px) {
        display: none;
  }
`;

export const NavItem = styled.a`
    color: #83E645;
    font-weight: bold;
    font-size: 1.2rem;
    transition: all .5s;
    &:hover {
        /* color: purple; */
        transform: scale(1.1);
        border-bottom: 2px solid #83E645;
        transition: all .5s;
    }
`;