import React from 'react';
import Scrollspy from "react-scrollspy";
import * as Nav from '../assets/styles/nav';

export const NavigationPanel = () => {
	return (
    <Nav.PanelContainer>
      <Nav.PanelLinksCover>
      <Scrollspy
          items={ ['sec_1', 'sect_2', 'sec_3', "sec_4", "sec_5"] }
        >
        <Nav.PanelLinkUl>
          <Nav.PanelLinKLi>
            <Nav.PanelLink href="#sec_1">Home</Nav.PanelLink>
          </Nav.PanelLinKLi>
          <Nav.PanelLinKLi>
            <Nav.PanelLink href="#sec_2">About Me</Nav.PanelLink>
          </Nav.PanelLinKLi>
          <Nav.PanelLinKLi>
            <Nav.PanelLink href="#sec_3">Projects</Nav.PanelLink>
          </Nav.PanelLinKLi>
          <Nav.PanelLinKLi>
            <Nav.PanelLink href="#sec_4">Skills</Nav.PanelLink>
          </Nav.PanelLinKLi>
          <Nav.PanelLinKLi>
            <Nav.PanelLink href="#sec_5">Contact</Nav.PanelLink>
          </Nav.PanelLinKLi>
          <Nav.PanelLinKLi>
            <Nav.PanelLink
              href="https://drive.google.com/open?id=1RxKumUKhz7tiGf20Nj7WYHbbVJMLUcoO"
              target="_blank"
              >CV
            </Nav.PanelLink>
          </Nav.PanelLinKLi>
        </Nav.PanelLinkUl>
        </Scrollspy>
      </Nav.PanelLinksCover>
    </Nav.PanelContainer>
	);
};
