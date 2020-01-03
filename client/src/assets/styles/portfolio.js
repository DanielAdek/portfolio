import Style from 'styled-components';

export const Wrapper = Style.div`
  width: 90%;
  background: transparent ;
  position: absolute;
  top: 100px;
  left: 100px;
`;

export const Transparent = Style.div`
  width: 90%;
  background: #000;
  opacity: 0.5;
  height: 400px;
  position: absolute;
  top: 50px;
  left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
`;

export const Container = Style.div`
  position: relative;
  top: 150px;
  left: 8rem;
  width: 52%;
`;

export const PictureContainer = Style.div`
  position: relative;
  top: -98px;
  right: -840px;
  width: 300px;
  opacity: 0.754;
`;

export const Picture = Style.img`
  width: inherit;
  height: inherit;
`;

export const Text = Style.p`
  font-family: sans-serif;
  color: #fff;
  font-weight: bolder;
  font-size: 1.5rem;
`;


export const View = Style.button`
  padding: 20px;
  font-weight: bolder;
  font-size: 1.2rem;
  border-radius: 2px;
  width: 300px;
  background: #fff;
  color: #2d2d2d;
  &:hover {
    background: #ffc;
  }
`;


export const Div = Style.div``;

export const PanelContainer = Style.div`
  position: sticky;
  top: 0;
  z-index: 2;
  height: 54px;
`;

export const ProjectsContainer = Style.div`
  // position: sticky;
  // top: -500px;
  // z-index: -1;
`;

export const SkillContainer = Style.div`
  background: #fff;
  margin-bottom: 50px;
  position: sticky;
  top: -500px;
  z-index: -1;
  min-height: 60rem;
`;

export const button = {
  background: '#2d2d2d',
  opacity: '0.2',
  borderRadius: '7px',
  outline: 'none'
}