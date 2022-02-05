import React from "react";
import { Button, Row } from "../../home";
import Logo from "../../assets/logo.png";
import { navLinks } from "./Navbar";
import { Text } from "../../home";

const Navbar = () => {
  return (
    <div>
      <Row>
        <img src={Logo} />
        <dif />
        <Text>Home</Text>
        <Text>Stories</Text>
        <Text>Discussion</Text>
        <div />
        <Button>Take the test</Button>
      </Row>
    </div>
  );
};

export default Navbar;
