import React from "react";
import { Menu, Dropdown, Avatar, Button } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import "./dropdownmenu.css";
import { useCallback } from "react";

const DropdownMenu = ({user}) => {
  const navigate = useNavigate();

  const clickToSignOut = useCallback(() => {
    localStorage.removeItem("login");
    navigate("/");
  }, []);

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="#">
          {/* {user.firstName}
            &nbsp;
            {user.lastName} */}
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <a href="#">Dashboard</a>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/create-post">Create Post</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        {" "}
        <Button className="signout" onClick={clickToSignOut}>
          Sign Out
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <Dropdown overlay={menu} trigger={["click"]}>
        <Avatar icon={<UserOutlined />} />
      </Dropdown>
    </>
  );
};

export default DropdownMenu;
