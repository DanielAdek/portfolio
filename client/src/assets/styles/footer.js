import Style from 'styled-components';


export const Wrapper = Style.div`
  background: #3d464d;
  color: #f2f2f2;
  font-family: Rubik;
  min-height: 30rem;
`;

export const Container = Style.div`
  width: 90%;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  padding: 10px;
  padding-top: 70px;
  padding-bottom: 30px;
`;

export const FooterHeadings = Style.h2`
  color: #859ba6;
`;

export const Contact = Style.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

export const ContactText = Style.p`
  font-size: 17px;
`;

export const Form = Style.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = Style.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: 0;
  padding: 10px 15px;
  background: #2d2d2d;
  font-size: 12pt;
  margin-bottom: 3px;
  color: #fff;
`;

export const Button = Style.button`
  width: 30%;
  color: #fff;
  font-weight: bold;
  margin-top: 10px;
  height: 40px
`;

export const TextArea = Style.textarea`
  display: block;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: 0;
  padding: 10px 15px;
  background: #2d2d2d;
  font-size: 12pt;
  margin-bottom: 3px;
  color: #fff;
`;


export const FooterMinorWrapper = Style.div`
  background: #2d2d2d;
`;

export const FooterMinorContainer = Style.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterMinorText = Style.p`
  font-family: Rubik;
  color: #fff;
`;

export const FooterMinorLink = Style.a`
  color: #007bff;
`;
