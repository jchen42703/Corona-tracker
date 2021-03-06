import React from 'react';
import '../css/App.css';
import '../css/DiagnosticContainer.css';
import '../css/themePalette.css';
import { ReactComponent as Logo } from '../img/Logo_CORONATRACKER_Logo.svg';
import { ReactComponent as TextLogo } from '../img/Logo_CORONATRACKER_Text_Logo.svg';
import NavBar from './NavBar';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Temperature from './Temperature';

const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

function DiagnosticContainer(props) {
  const { handleSignOut, userSession } = props;
  var today = new Date();
  return (
    <div className="DiagnosticContainer">
      <NavBar />
      <Container className='temp-singout'>
      <Temperature allRecords={[{ temperature: 100.4 }, { temperature: 98 }]} />
      <Button onClick={handleSignOut} style={{width: '100px'}}>Sign Out</Button>
      </Container>
      
      <Container>
      <Logo className="DiagnosticLogo" />
      <TextLogo className="DiagnosticTextLogo" />
      <h4>
      Welcome!, <b>{userSession.loadUserData().profile.name}</b>
      </h4>
      <h5>
      Today is <b>{today.toLocaleDateString(undefined, dateOptions)}</b>{" "}
      </h5>
      <hr className="hr" />
      </Container>
    </div>
  );
}

export default DiagnosticContainer;
