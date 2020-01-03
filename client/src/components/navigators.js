import React from 'react';
import Scrollspy from "react-scrollspy";
import * as Nav from '../assets/styles/nav';

export const NavigationPanel = () => {
	return (
    <Nav.PanelContainer>
      <Nav.PanelLinksCover>
      <Scrollspy
          // scrollTargetIds={["sec_1", "sec_2", "sec_3", "sec_4", "sec_5"]}
          // offset={100}
          // activeNavClass="is-active"
          items={ ['sec_1', 'sect_2', 'sec_3', "sec_4", "sec_5"] }
          // scrollDuration="50"
          // headerBackground="true"
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
        </Nav.PanelLinkUl>
        </Scrollspy>
      </Nav.PanelLinksCover>
    </Nav.PanelContainer>
	);
};
