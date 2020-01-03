import React, { Fragment, useRef } from 'react';
import { Particle } from '../components/particles';
import * as Style from '../assets/styles/portfolio';
import ScrollUpButton from "react-scroll-up-button";
import { Animate } from '../components/animate';
import { NavigationPanel } from '../components/navigators';
import { About } from '../components/aboutMe';
import { Projects } from '../components/projects';
import { Skills } from '../components/skills';
import { Footer } from '../components/footer';
import { FooterMinor } from '../components/footer';

export const Portfolio = () => {
  const navDiv = useRef(null);

  const handleScrollToTarget = () => {
		if (navDiv.current) {
			navDiv.current.scrollIntoView({ 
				behavior: "smooth", 
				block: "start"
		 });
		}
  }
  
  return (
    <Fragment>
      <Particle id="sec_1">
        <Style.Wrapper>
          <Style.Transparent />
          <Style.Container>
            <Animate>
              <Style.Text>Hi!, I'm Daniel Adekule, A Full-Stack JavaScript Developer. <br /> I'm Dedecated To Building Web Application With ReactJS And NodeJS</Style.Text>
            </Animate>
            <Animate type="rubber">
              <Style.View onClick={handleScrollToTarget}>View Portfolio</Style.View>
            </Animate>
          </Style.Container>
          <Style.PictureContainer>
            <Style.Picture src={require('../assets/images/Akdan.png')} />
          </Style.PictureContainer>
        </Style.Wrapper>
      </Particle>
      <Style.PanelContainer ref={navDiv}>
        <NavigationPanel />
      </Style.PanelContainer>
      <About id="sec_2"/>
      <Style.ProjectsContainer>
        <Projects id="sec_3" />
      </Style.ProjectsContainer>
      <Style.SkillContainer>
        <Skills id="sec_4" />
      </Style.SkillContainer>
      <Style.Div id="sec_5">
        <Footer />
        <FooterMinor />
      </Style.Div>
      <ScrollUpButton 
        StopPosition={0}
        ShowAtPosition={150}
        EasingType='easeOutCubic'
        AnimationDuration={500}
        style={Style.button}
      />
    </Fragment>
  )
}