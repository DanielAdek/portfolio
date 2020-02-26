import React from 'react';
import * as AM from '../assets/styles/aboutMe';
import { Chart } from './chart';
import { Animate } from './animate'

export const About = ({ id }) => {
  return (
    <AM.Wrapper id={id}>
      <AM.Header>
        <AM.Text>About Me</AM.Text>
      </AM.Header>
      <AM.Container>
        <AM.Grid>
          <AM.TextSection>
            <Animate>
              <AM.Text>
                Daniel Adekunle is a software engineer who believes in teamwork 
                and any good means that will bring about a positive result in 
                an organization.
                <br /> <br />
                He worked In Andela Nigeria as a full-stack JavaScript developer, with an agile development team. 
                He contributed core features to a project named Author's Haven (i.e where users create or read articles).
                <br /> <br />
                His hunger for knowledge and determination to turn information into action contributed 
                to his appointment to become a software developer at Andela.
                He was celebrated and broadcasted on
                {', '}
                <AM.Links 
                  href="https://www.lindaikejisblog.com/2018/9/daniel-adekunle-security-guard-turned-software-developer.html"
                  target="_blank">
                    Linda Ikaji
                </AM.Links>
                {', '}
                <AM.Links 
                  href="https://www.bellanaija.com/2018/08/security-guard-software-developer-2-years/"
                  target="_blank">
                    Bella Naija
                </AM.Links>
                {', '}
                <AM.Links
                  href="https://twitter.com/Obong_UK/status/1033026414197592064" 
                  target="_blank">
                  Twitter
                </AM.Links>
                {', '}
                <AM.Links 
                  href="https://www.youtube.com/watch?v=JqTaFxlGZno"
                  target="_blank">
                    Youtube
                </AM.Links>
                {', '}
                <AM.Links
                  href="https://www.nairaland.com/4753418/meet-daniel-adekunle-security-guard"
                  target="_blank">
                    Nairaland
                </AM.Links>
                {' '}
                to encorage youths.
                <br /> <br />
                He also worked in a Nigerian base company named Swipe. Here, he was allowed to lead an agile team, (to build a container transit system web application and a micro pension mobile application), onto a successful end of the projects. He contributed major features during the development of these projects, especially on the backend.
                <br /> <br />
                He is a confident, hardworking, creative, enthusiastic, observant, result-driven, articulate and determined person. He makes and support good decisions, handle complex assignments effectively and can work under less supervision.
                He is interested in showcasing his skills and ready for any challenge.
                <br /> <br />
                Reach out to <AM.Links href="#sec_5">
                  <em>daniel.adek.k@gmail.com</em>
                </AM.Links> to connect.
              </AM.Text>
            </Animate>
          </AM.TextSection>
          <AM.ChartSection>
            <Animate type="zoom">
              <Chart /> 
            </Animate>
          </AM.ChartSection>
        </AM.Grid>
        {/* <AM.ButtonView>
          <AM.Button>Contact Me</AM.Button>
          <AM.Button bgclr="#2d2d2d">Portfolio</AM.Button>
        </AM.ButtonView> */}
      </AM.Container>
    </AM.Wrapper>
  )
}