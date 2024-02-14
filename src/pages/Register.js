import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { blueGrey, grey, red } from '@mui/material/colors';
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from 'firebase/auth';
import { app } from '../utilities/firebase';

import logo from '../assets/logo.png';
import placeholderTopics from '../assets/placeholderTopics.jpg';
import { history } from '../utilities/history';
import { useState } from 'react';

const colorPrimary = '#1e7b75';
const colorPrimaryShade = '#26918a';

export default function Register() {
  const [errorMessage, setErrorMessage] = useState('');
  const auth = getAuth(app);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      fullname: data.get('fullname'),
      email: data.get('email'),
      password: data.get('password'),
    });
    createUserWithEmailAndPassword(
      auth,
      data.get('email'),
      data.get('password')
    )
      .then(() => {
        // Signed up
        updateProfile(auth.currentUser, {
          displayName: data.get('fullname'),
        })
          .then(() => {
            // Profile updated!
            // ...
            history.push('/dashboard');
            history.go(0);
          })
          .catch((error) => {
            // An error occurred
            // ...
            const code = error.code;
            const message = error.message;

            setErrorMessage(code);

            console.log({
              code: code,
              message: message,
            });
          });
      })
      .catch((error) => {
        const code = error.code;
        const message = error.message;

        setErrorMessage(code);

        console.log({
          code: code,
          message: message,
        });
        // ..
      });
  };
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: colorPrimaryShade,
        overflowY: 'auto',
      }}
    >
      <Container>
        <Grid
          container
          sx={{
            minHeight: '50vh',
            borderRadius: '30px',
            background: grey[50],
            outline: `30px solid ${grey[50]}`,
          }}
        >
          <Grid
            item
            xs={8}
            sx={{
              p: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              background: colorPrimary,
              color: grey[50],
              borderRadius: '30px',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: '30px',
              }}
            >
              <Typography variant="h4" fontWeight={700}>
                <span style={{ color: blueGrey[900] }}>Welcome to</span>{' '}
                CodeNest Academe
              </Typography>
              <Typography
                variant="h6"
                fontWeight={400}
                sx={{
                  pl: '30px',
                  lineHeight: '2',
                }}
              >
                Unleash your potential and embark on an exciting journey of
                discovery. Let's dive into a world of knowldege together!
              </Typography>
            </Box>
            <Box
              sx={{
                zIndex: 1,
                position: 'absolute',
                left: -10,
                top: -10,
              }}
            >
              <img
                src={logo}
                alt="logo"
                style={{ width: '100px', height: 'auto' }}
              />
            </Box>
            <Box
              sx={{
                zIndex: 1,
                position: 'absolute',
                bottom: 10,
                left: 20,
              }}
            >
              <img
                src={placeholderTopics}
                alt="placeholderTopics"
                style={{
                  width: '100px',
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                  borderStyle: 'solid',
                  borderColor: grey[50],
                  borderWidth: '10px',
                  borderRadius: '100vh',
                }}
              />
            </Box>
            <Box
              sx={{
                zIndex: 1,
                position: 'absolute',
                bottom: 50,
                left: 150,
              }}
            >
              <img
                src={placeholderTopics}
                alt="placeholderTopics"
                style={{
                  width: '100px',
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                  borderStyle: 'solid',
                  borderColor: grey[50],
                  borderWidth: '10px',
                  borderRadius: '100vh',
                }}
              />
            </Box>
            <Box
              sx={{
                zIndex: 1,
                position: 'absolute',
                bottom: 20,
                left: 300,
              }}
            >
              <img
                src={placeholderTopics}
                alt="placeholderTopics"
                style={{
                  width: '100px',
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                  borderStyle: 'solid',
                  borderColor: grey[50],
                  borderWidth: '10px',
                  borderRadius: '100vh',
                }}
              />
            </Box>
            <Box
              sx={{
                zIndex: 1,
                position: 'absolute',
                bottom: 40,
                left: 480,
              }}
            >
              <img
                src={placeholderTopics}
                alt="placeholderTopics"
                style={{
                  width: '100px',
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                  borderStyle: 'solid',
                  borderColor: grey[50],
                  borderWidth: '10px',
                  borderRadius: '100vh',
                }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              p: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '30px',
              borderRadius: '30px',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px',
              }}
            >
              <Typography variant="h4" fontWeight={700}>
                Get Started!
              </Typography>
              <Typography>
                Already have an account? <a href="/login">Sign in</a>
              </Typography>
            </Box>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px',
              }}
            >
              <TextField
                fullWidth
                required
                id="fullname"
                name="fullname"
                label="Full Name"
                variant="standard"
              />
              <TextField
                fullWidth
                required
                id="email"
                name="email"
                label="Email"
                variant="standard"
                type="email"
              />
              <TextField
                fullWidth
                required
                id="password"
                name="password"
                label="Password"
                variant="standard"
                type="password"
              />
              <Button
                type="submit"
                sx={{
                  mt: '15px',
                  px: '15px',
                  background: colorPrimary,
                  color: grey[50],
                  borderRadius: '100vh',
                  ':hover': {
                    background: colorPrimaryShade,
                  },
                }}
              >
                Sign up
              </Button>
            </Box>
            {errorMessage !== '' && (
              <Typography sx={{ textAlign: 'center', color: red[500] }}>
                Error: {errorMessage}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
