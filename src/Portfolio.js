import './App.css';
import jenImage from './images/jen.png'
import { Container, Grid,Typography } from '@mui/material';

function Portfolio() {
  return (
    <Container className="portfolio">
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{paddingRight: '1rem'}}>
         <img className="headshot" width="150" src={jenImage} alt="image of Jen" /> 
        </div>
        <div>
        <Typography variant='h3' >Jennifer Sun</Typography>
          <Typography variant='h4'>UX/UI Designer && Frontend Developer</Typography>
          {/* <Typography variant='h3'>Frontend Developer </Typography> */}
        </div>
      </div>
    </Container>
  );
}

export default Portfolio;
