import styled from "styled-components";
import Link from "next/link";

import NavMenuHamburgerIcon from "./NavMenuHamburgerIcon";
import DTNavMenu from "./DTNavMenu";


function NavMenuBar() {
    return ( 
        <NavMenu>
            <NavMenuHamburgerIcon />
            <DTNavMenu />
        </NavMenu>
     );
}

export default NavMenuBar;

export const NavMenu = styled.nav`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    top: 0px;
`;