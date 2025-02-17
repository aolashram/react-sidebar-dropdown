// Filename - components/SubMenu.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
	display: flex;
	color: #3B3B58;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	list-style: none;
	height: 40px;
	text-decoration: none;
	font-size: 14px;

	&:hover {
		background: #E4E4F3;
		border-left: 4px solid green;
		cursor: pointer;
	}
`;

const SidebarLabel = styled.span`
	margin-left: 12px;
`;

const DropdownLink = styled(Link)`
	background: #E4E4F3;
	height: 40px;
	padding-left: 3rem;
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #3B3B58;
	font-size: 14px;

	&:hover {
		background: #C2C2F1;
		cursor: pointer;
	}
`;

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink
                to={item.path}
                onClick={item.subNav && showSubnav}
            >
                <div>
                    {item.icon}
                    <SidebarLabel>
                        {item.title}
                    </SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </SidebarLink>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <DropdownLink
                            to={item.path}
                            key={index}
                        >
                            {item.icon}
                            <SidebarLabel>
                                {item.title}
                            </SidebarLabel>
                        </DropdownLink>
                    );
                })}
        </>
    );
};

export default SubMenu;
