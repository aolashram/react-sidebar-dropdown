// Filename - components/Sidebar.js

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { GoMoveToStart } from "react-icons/go";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import logo from "../assets/img/logo.png";

const Nav = styled.div`
	background: #ffffff;
	height: 60px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const NavIcon = styled(Link)`
	margin-left: 2rem;
	font-size: 2rem;
	height: 40px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const SidebarNav = styled.nav`
	background: #ffffff;
	width: 250px;
	height: 100vh;
	display: flex;
	justify-content: center;
	position: fixed;
	top: 0;
	left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
	transition: 350ms;
	z-index: 10;
`;

const SidebarWrap = styled.div`
	width: 100%;
`;

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: "#134F5C" }}>
                <Nav>
                    <NavIcon to="#">
                        <FaIcons.FaBars
                            onClick={showSidebar}
                        />
                    </NavIcon>
                    <h3
                        style={{
                            textAlign: "center",
                            marginLeft: "200px",
                            color: "#351C75",
                        }}
                    >
                        PERFECTO
                    </h3>
                </Nav>

                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to="#">
                            <GoMoveToStart onClick={showSidebar} />
                        </NavIcon>
                        <div>
                            <h1>
                                &nbsp;&nbsp;
                                <img src={logo} alt="" width="201px" align="center" height="45px" />
                                <br /><br />
                            </h1>
                        </div>
                        {SidebarData.map((item, index) => {
                            return (
                                <SubMenu
                                    item={item}
                                    key={index}
                                />
                            );
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;
