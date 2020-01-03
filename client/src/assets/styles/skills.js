import Style from 'styled-components';

export const Wrapper = Style.div`
  background: #fff;
  margin-bottom: 50px;
  min-height: 60rem;
`;

export const Header = Style.div`
  font-weight: bold;
  text-transform: capitalize;
  color: #fff;
  background: #2d2d2d;
  height: 70px;
  display: flex;
  align-items: center;
`;

export const HeaderText = Style.p`
  width: 90%;
  margin: auto;
  font-size: 1.5rem;
  font-family: Rubik sans-serif;
`;

export const Container = Style.div`
  width: 90%;
  margin: 50px auto;
  box-shadow: 2px 2px 2px 2px #ccc;
  min-height: 38rem;
  padding: 20px;
`;
  
export const FlexContent = Style.div`  
  display: flex;
  justify-content: space-between;
  width: ${props => props.w || '90%'};
  margin: auto;
  margin-bottom: 70px;
`;

export const TechImagCont = Style.div`
  height: 50px;
`;

export const TechCont = Style.div`
  width: 70px;
  text-align: center;
`;

export const Icon = Style.img`
  width: inherit;
  height: inherit;
`;

export const Tech = Style.p`
  text-align: center;
`;