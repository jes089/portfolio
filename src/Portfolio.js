import './App.css';
import jenImage from './images/jen.png'
import wipImage from './images/wip.gif'
import { Container, Button,Typography } from '@mui/material';

function Portfolio() {
  return (
    <Container className="portfolio">
      {/* Imge and title */}
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{paddingRight: '1rem'}}>
         <img className="headshot" width="150" src={jenImage} alt="image of Jen" /> 
        </div>
        <div>
          <Typography variant='h3' >Jennifer Sun</Typography>
          <Typography variant='h4'>UX/UI Designer && Frontend Developer</Typography>
        </div>
      </div>
      {/* Description */}
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Typography sx={{pt: '3rem', fontStyle:'italic'}} variant='h4'>
          Currently a WIP! Check back later :-)
        </ Typography>
        <img src={wipImage} alt="construction site gif" />
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '1rem'}}>
          <Button href="https://github.com/jes089" variant='contained'>Github</Button> &nbsp;
          <Button href="https://www.linkedin.com/in/sunjennifer1/" variant='contained'>LinkedIn</Button>&nbsp;
          <Button href="mailto:j.yuan.sun@gmail.com" variant='contained'>Email</Button>
        </div>
      </div>
    </Container>
  );
}

export default Portfolio;
