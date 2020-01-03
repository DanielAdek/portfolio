import React from 'react';
import * as Skill from '../assets/styles/skills';
import { Animate } from './animate';
import { SkillData } from '../assets/projectData';

export const Skills = ({ id }) => {
  return (
    <Skill.Wrapper>
      <Skill.Header id={id}>
        <Skill.HeaderText>Technical Skills</Skill.HeaderText>
      </Skill.Header>
      <Skill.Container>
        <Animate type="zoom">
          <Skill.FlexContent>
            {
            SkillData.slice(0, 4).map((data, index) => (
              <Skill.TechCont key={index}>
                <Skill.TechImagCont>
                  <Skill.Icon src={data.src} alt="Tech skill icon"/>
                </Skill.TechImagCont>
                <Skill.Tech>{data.tech}</Skill.Tech>
              </Skill.TechCont>
            ))}
            </Skill.FlexContent>
          </Animate>
          <Animate type="zoom">
            <Skill.FlexContent w="90%">
            {
            SkillData.slice(4, 8).map((data, index) => (
              <Skill.TechCont key={index}>
                <Skill.TechImagCont>
                  <Skill.Icon src={data.src} alt="Tech skill icon"/>
                </Skill.TechImagCont>
                <Skill.Tech>{data.tech}</Skill.Tech>
              </Skill.TechCont>
            ))}
            </Skill.FlexContent>
          </Animate>
          <Animate type="zoom">
            <Skill.FlexContent w="90%">
            {
            SkillData.slice(8, 12).map((data, index) => (
              <Skill.TechCont key={index}>
                <Skill.TechImagCont>
                  <Skill.Icon src={data.src} alt="Tech skill icon"/>
                </Skill.TechImagCont>
                <Skill.Tech>{data.tech}</Skill.Tech>
              </Skill.TechCont>
            ))}
            </Skill.FlexContent>
          </Animate>
          <Animate type="rubber">
            <Skill.FlexContent w="90%">
            {
            SkillData.slice(12, 16).map((data, index) => (
              <Skill.TechCont key={index}>
                <Skill.TechImagCont>
                  <Skill.Icon src={data.src} alt="Tech skill icon"/>
                </Skill.TechImagCont>
                <Skill.Tech>{data.tech}</Skill.Tech>
              </Skill.TechCont>
            ))}
            </Skill.FlexContent>
          </Animate>
          <Animate type="bounce">
            <Skill.FlexContent>
            {
            SkillData.slice(16, 20).map((data, index) => (
              <Skill.TechCont key={index}>
                <Skill.TechImagCont>
                  <Skill.Icon src={data.src} alt="Tech skill icon"/>
                </Skill.TechImagCont>
                <Skill.Tech>{data.tech}</Skill.Tech>
              </Skill.TechCont>
            ))}
            </Skill.FlexContent>
          </Animate>
      </Skill.Container>
    </Skill.Wrapper>
  )
}