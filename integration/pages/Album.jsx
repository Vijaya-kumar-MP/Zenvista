import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import karma from '../assets/images/karma.avif';
import bakthi from '../assets/images/bakthi.avif';
import kriya from '../assets/images/kriya.jpg';
import Gnana from '../assets/images/gnana.jpg';
import ashtanga from '../assets/images/ashtanga.webp';
import bikram from '../assets/images/bikram.jpg';
import yin from '../assets/images/yin.jpg';
import kundalini from '../assets/images/kundalini.jpg';
import iyengar from '../assets/images/iyengar.jpg';

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
    image: karma,  // Update this path with your actual image path
    heading: 'KARMA yoga',
    description: 'path to reach moksha (spiritual liberation) through work',
  },
  {
    id: 2,
    image: bakthi,  // Update this path with your actual image path
    heading: 'BAKTHI yoga',
    description: 'an Indian tradition of "divine love mysticism"',
  },
  {
    id: 3,
    image: kriya,  // Update this path with your actual image path
    heading: 'KRIYA yoga',
    description: 'powerful meditation technique that aims to help spiritual seekers attain the summit of spiritual experience — constant communion with the Divine.',
  },
  {
    id: 4,
    image: Gnana,  // Update this path with your actual image path
    heading: 'GNANA yoga',
    description: 'knowledge of and about the Self.',
  },
  {
    id: 5,
    image: ashtanga,  // Update this path with your actual image path
    heading: 'ASHTANGA yoga',
    description: 'a very dynamic and athletic form of hatha yoga, made up of six series or levels, with a fixed order of postures',
  },
  {
    id: 6,
    image: bikram,  // Update this path with your actual image path
    heading: 'BIKRAM yoga',
    description: ' system of hot yoga, a type of yoga as exercise, devised by Bikram Choudhury and based on the teachings of B. C. Ghosh.',
  },
  {
    id: 7,
    image: yin,  // Update this path with your actual image path
    heading: 'YIN yoga',
    description: 'improves the energy flow, enhancing the flow of chi in the organs.',
  },
  {
    id: 8,
    image: kundalini,  // Update this path with your actual image path
    heading: 'KUNDALINI yoga',
    description: 'school of yoga is influenced by Shaktism and Tantra schools of Hinduism. ... It derives its name through a focus on awakening kundalini energy',
  },
  {
    id: 9,
    image: iyengar,  // Update this path with your actual image path
    heading: 'IYENGAR yoga',
    description: ' intellectual and spiritual practices has masterminded the techniques which can be used by all practitioners of yoga',
  },
  // ... add more cards as needed
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
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
            >
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
              sx={{
                fontWeight: 'bold',
                color: 'black',
                fontStyle: 'oblique',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add a subtle text shadow
              }}
            >
              Explore your kind of yoga
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            ><RouterLink to="/academy" style={{ textDecoration: 'none' }}>
              <Button variant="contained">academies</Button>
              </RouterLink>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={card.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
