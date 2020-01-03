import Style from 'styled-components';

export const Wrapper = Style.div`
  background: #fff;
  // margin: 30px 0;
`;

export const Container = Style.div`
  width: 90%;
  margin: auto;
`;

export const Header = Style.div`
  font-weight: bold;
  text-transform: capitalize;
  color: #2d2d2d;
  height: 70px;
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  padding-top: 90px;
  width: 90%;
  margin: auto;
`;

export const Grid = Style.div`
  display: grid;
  grid-template-columns: 60% 40%;
  padding-top: 50px;
`;

export const TextSection = Style.div`
  font-family: sans-serif open-sans;
`;

export const Text = Style.p`
  text-align: left;
`;

export const Links = Style.a`
  color: blue;
`

export const ChartSection = Style.div`
  height: 500px;
`;

export const ButtonView = Style.div`
  display: flex;
  justify-content: center;
  width: 90%;
`;

export const Button = Style.button`
  background: ${props => props.bgclr || 'cadetblue'};
  padding: 10px;
  width: 20%;
  margin: 10px auto;
  font-weight: bolder;
  font-size: 1.1rem;
  color: ${props => props.c || '#fff'};
  border: none;
  border-radius: 3px;
`;