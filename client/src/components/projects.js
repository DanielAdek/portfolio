import React from 'react';
import * as Card from '../assets/styles/projects';
import { ProData } from '../assets/projectData';
import { Animate } from './animate';

export const Projects = ({ id }) => {
  return (
    <Card.ProjectsContainer id={id}>
      <Card.Header id="sec_3">Projects</Card.Header>
      <Card.Rows className="row row-cols-1 row-cols-md-3">
        {ProData.map((data, index) => (
          <Animate type={data.animate} key={index}>
            <Card.Col className="col mb-4">
              <Card.Body className="card">
                <Card.Img src={data.imageSrc} className="card-img-top" alt="productImage"/>
                <Card.Details className="card-body">
                  <Card.Heading className="card-title">{data.title}</Card.Heading>
                  <Card.Text>{data.text}</Card.Text>
                </Card.Details>
                <Card.View href={data.href} target="_blank">
                  <Card.Button  className="btn btn-md">Live Demo</Card.Button>
                </Card.View>
              </Card.Body>
            </Card.Col>
          </Animate>
        ))}
      </Card.Rows>
    </Card.ProjectsContainer>
  )
}