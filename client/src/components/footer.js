import React, { useState } from 'react';
import Axios from 'axios';
import SweetAlert from 'sweetalert'
import { Form } from 'form-my-simple-validation';
import { Ring } from "react-awesome-spinners";
import * as RC from '../assets/styles/footer'
import { Animate } from './animate';
import { schema } from '../assets/projectData';

export const Footer = () => {
  const initialState = { email: '', message: '', name: ''};
  //React Hooks
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = event => setState({ ...state, [event.target.name]: event.target.value });

  const handleSendEmail = async () => {
    if (!window.navigator.onLine) {
      return SweetAlert('Network Connection Error');
    }
    try {
      setLoading(true);
      const validationResult = Form.validateFields('contact', schema, state);
      if (validationResult.error) {
        setLoading(false);
        return SweetAlert(validationResult.error.message);
      }
      const response = await Axios.post('https://danieladek-portfolio.herokuapp.com/api/email/send', state);
      setLoading(false);
      setState(initialState);
      return SweetAlert(response.data.message, response.data.status, 'success');
    } catch(err) {
      setLoading(false)
    }
  }
  return (
    <RC.Wrapper>
      <RC.Container>
        <RC.Contact>
          <Animate>
            <RC.FooterHeadings>Contact</RC.FooterHeadings>
            <RC.ContactText>You have a project or vacancy in your organization? Please contact me!</RC.ContactText>
          </Animate>
          <Animate type="zoom">
            <RC.Form>
              <RC.Input value={state.name} name="name" onChange={handleChange} type="text" placeholder="Please Enter Name" />
              <RC.Input value={state.email} name="email" onChange={handleChange} type="email" placeholder="Please Enter Email" />
              <RC.TextArea value={state.message} name="message" onChange={handleChange} placeholder="Message" rows="5"></RC.TextArea>
              <RC.Button
                onClick={handleSendEmail} 
                type="button"
                className="btn btn-outline-secondary">
                  {loading ? <Ring sizeUnit="%" size="40"/> : 'Connect'}
              </RC.Button>
            </RC.Form>
          </Animate>
        </RC.Contact>
      </RC.Container>
    </RC.Wrapper>
  )
}


export const FooterMinor = () => {
  return (
    <RC.FooterMinorWrapper>
      <RC.FooterMinorContainer>
        <RC.FooterMinorText>Powered by <RC.FooterMinorLink href="https://facebook.github.io">React</RC.FooterMinorLink>. Developed by <RC.FooterMinorLink href="https://github.com/DanielAdek">Daniel Adek</RC.FooterMinorLink> &copy; 2019.</RC.FooterMinorText>
      </RC.FooterMinorContainer>
    </RC.FooterMinorWrapper>
  )
}