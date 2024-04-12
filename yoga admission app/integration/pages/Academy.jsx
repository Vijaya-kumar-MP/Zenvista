import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'; // Updated import
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import jeeva from '../assets/images/jeeva.jpg';
import dharsmi from '../assets/images/dharsmi.jpg';
import vinyasa from '../assets/images/vinyasa.jpg';
import vivek from '../assets/images/vivekananda.webp';
import academy6 from '../assets/images/academy6.jpg';
import yova from '../assets/images/yova.jpg';
import alpesh from '../assets/images/alpesh.png';
import thousand from '../assets/images/1000.png';
import sumedh from '../assets/images/sumedh.jpg';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [
  {
    id: 1,
    image: jeeva,
    heading: 'Jeevan yoga academy',
    description: 'path to reach moksha (spiritual liberation) through work',
  },
  {
    id: 2,
    image: yova,
    heading: 'yova yoga foundation',
    description: 'an Indian tradition of "divine love mysticism"',
  },
  {
    id: 3,
    image: vivek,
    heading: 'Vivekananda yoga centre',
    description: 'powerful meditation technique that aims to help spiritual seekers attain the summit of spiritual experience — constant communion with the Divine.',
  },
  {
    id: 4,
    image: academy6,
    heading: 'Therapy yoga centre',
    description: 'knowledge of and about the Self.',
  },
  {
    id: 5,
    image: vinyasa,
    heading: 'vinyasa yoga',
    description: 'a very dynamic and athletic form of hatha yoga, made up of six series or levels, with a fixed order of postures',
  },
  {
    id: 6,
    image: sumedh,
    heading: 'sumedh wellness',
    description: ' system of hot yoga, a type of yoga as exercise, devised by Bikram Choudhury and based on the teachings of B. C. Ghosh.',
  },
  {
    id: 7,
    image: dharsmi,
    heading: 'dharsmi yoga',
    description: 'improves the energy flow, enhancing the flow of chi in the organs.',
  },
  {
    id: 8,
    image: alpesh,
    heading: 'alpesh therapy',
    description: 'school of yoga is influenced by Shaktism and Tantra schools of Hinduism. ... It derives its name through a focus on awakening kundalini energy',
  },
  {
    id: 9,
    image: thousand,
    heading: '1000 yoga foundation',
    description: ' intellectual and spiritual practices has masterminded the techniques which can be used by all practitioners of yoga',
  },
];

const defaultTheme = createTheme();

export default function Academy() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            ></Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
              sx={{
                fontWeight: 'bold',
                color: 'black',
                fontStyle: 'oblique',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              }}
            >
              Academies we serve
              <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
                <RouterLink to="/album" style={{ textDecoration: 'none' }}>
                  <Button variant="contained">Courses</Button>
                </RouterLink>
              </Stack>
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={card.image}
                    alt={card.heading}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                  <CardActions>
                  <RouterLink to="/book" style={{ textDecoration: 'none' }}>
                    <Button size="small">Book</Button>
                  </RouterLink>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}
