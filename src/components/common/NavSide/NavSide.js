import {
  ProSidebar,
  SidebarContent,
  SidebarHeader,
  SubMenu,
  MenuItem,
  Menu,
} from "react-pro-sidebar";
import { Button, Row } from "react-bootstrap";
import React, { useState } from "react";

import { FaList } from "react-icons/fa";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { toLowerCaseReplaceSpaces } from "utils/stringUtil";
import { t } from "dictionaries/en";

import "./NavSide.scss";

const NavSide = (props) => {
  const { categories } = props;
  const [sidebarDisplay, setSidebarDisplay] = useState(true);

  function toggleSideBar() {
    setSidebarDisplay(!sidebarDisplay);
  }

  const renderCategoryList = Object.entries(categories).map(
    ([category, subcategories]) => {
      return (
        <SubMenu id={toLowerCaseReplaceSpaces(category)} title={category}>
          {subcategories.map((subcategory) => (
            <MenuItem icon={<FaList />}>
              <Link
                to={{
                  pathname: `/products/${toLowerCaseReplaceSpaces(
                    category
                  )}/${toLowerCaseReplaceSpaces(subcategory.name)}`,
                  state: { subcategory: subcategory },
                }}
              >
                <div>{subcategory.name}</div>
              </Link>
            </MenuItem>
          ))}
          <MenuItem>
            <Link
              to={{
                pathname: `/products/${toLowerCaseReplaceSpaces(category)}`,
                state: { category: subcategories[0].category },
              }}
            >
              <em>{t.SideBar.viewAll} </em>
            </Link>
          </MenuItem>
        </SubMenu>
      );
    }
  );

  return (
    <>
      {sidebarDisplay ? (
        <ProSidebar className="nav-side">
          <SidebarHeader className="sidebar-header">
            <Button variant="link" onClick={() => toggleSideBar()}>
              <span>
                <BiLeftArrow /> {t.SideBar.close}
              </span>
            </Button>
          </SidebarHeader>
          <SidebarContent className="sidebar-content">
            <Menu className="sidebar-content-menu" iconShape="square">
              {renderCategoryList}
            </Menu>
          </SidebarContent>
        </ProSidebar>
      ) : (
        <Button
          id="nav-side-toggle-button"
          variant="info"
          onClick={() => toggleSideBar()}
        >
          <BiRightArrow />
        </Button>
      )}
    </>
  );
};

export default NavSide;
