import { useEffect, useState } from 'react';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { useSettingsContext } from '../ai/Settings/SettingsContext';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { history } from '../utilities/history';

import { blueGrey, grey } from '@mui/material/colors';

import Dashboard from '../ai/Display/Display';

import Footer from '../components/Footer';
import Introduction from '../lessons/Introduction/Introduction';
import Topic1 from '../lessons/Topic1/Topic1';
import Topic2 from '../lessons/Topic2/Topic2';
import Topic3 from '../lessons/Topic3/Topic3';
import Topic4 from '../lessons/Topic4/Topic4';
import Topic5 from '../lessons/Topic5/Topic5';
import Topic6 from '../lessons/Topic6/Topic6';
import Topic7 from '../lessons/Topic7/Topic7';
import Topic8 from '../lessons/Topic8/Topic8';
import Topic9 from '../lessons/Topic9/Topic9';
import Topic10 from '../lessons/Topic10/Topic10';
import Topic11 from '../lessons/Topic11/Topic11';
import Activity1 from '../activities/Activity1/Activity1';
import Activity2 from '../activities/Activity2/Activity2';
import Activity3 from '../activities/Activity3/Activity3';
import Activity4 from '../activities/Activity4/Activity4';
import Activity5 from '../activities/Activity5/Activity5';
import Activity6 from '../activities/Activity6/Activity6';
import Activity7 from '../activities/Activity7/Activity7';

import Logo from '../assets/logo.png';
import CloseIcon from '@mui/icons-material/Close';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../utilities/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDisabledState } from '../utilities/global.state';
import Activity8 from '../activities/Activity8/Activity8';
import Activity9 from '../activities/Activity9/Activity9';
import Activity10 from '../activities/Activity10/Activity10';
import Scorebaard from '../activities/Scoreboard/Scoreboard';
import localforage from 'localforage';
import {  isNull, isUndefined } from 'lodash';

const colorPrimary = '#1e7b75';
const colorPrimaryShade = '#26918a';




const navigationList = [
  {
    type: 0,
    topic: 0,
    title: 'Introduction',
    element: <Introduction />,
    description: '',
  },
  {
    type: 0,
    topic: 1,
    title: 'Java Syntax',
    element: <Topic1 />,
    description: '',
  },
  {
    type: 0,
    topic: 2,
    title: 'Data Types',
    element: <Topic2 />,
    description: '',
  },
  {
    type: 0,
    topic: 3,
    title: 'Constant',
    element: <Topic3 />,
    description: '',
  },
  {
    type: 0,
    topic: 4,
    title: 'The Character Type',
    element: <Topic4 />,
    description: '',
  },
  {
    type: 0,
    topic: 5,
    title: 'Introduction to String',
    element: <Topic5 />,
    description: '',
  },
  {
    type: 0,
    topic: 6,
    title: 'Escape Sequence',
    element: <Topic6 />,
    description: '',
  },
  {
    type: 0,
    topic: 7,
    title: 'Introduction to String',
    element: <Topic7 />,
    description: '',
  },
  {
    type: 0,
    topic: 8,
    title: 'Byte',
    element: <Topic8 />,
    description: '',
  },
  {
    type: 0,
    topic: 9,
    title: 'Integer',
    element: <Topic9 />,
    description: '',
  },
  {
    type: 0,
    topic: 10,
    title: 'Short',
    element: <Topic10 />,
    description: '',
  },
  
  {
    type: 1,
    topic: 1,
    title: 'Java Syntax: Exercise',
    element: <Activity1 />,
    description:
      'Create a simple program in java program that will display “hello world”',
  },
  {
    type: 1,
    topic: 2,
    title: 'Data Types: Exercise ',
    element: <Activity2 />,
    description:
      'Write a Java program to convert temperature from Fahrenheit to Celsius degrees.',
  },
  {
    type: 1,
    topic: 3,
    title: 'CONSTANT: Exercise ',
    element: <Activity3 />,
    description:
      'Write a Java Program to declare constant as private.',
  },
  {
    type: 1,
    topic: 4,
    title: 'THE CHARACTER TYPE: Exercise ',
    element: <Activity4 />,
    description:
      'Write a program to replace a specified character with another character',
  },
  {
    type: 1,
    topic: 5,
    title: 'INTRODUCTION TO STRING: Exercise ',
    element: <Activity5 />,
    description:
      'Write a Java program to test if a given string contains the specified sequence of char values.',
  },
  {
    type: 1,
    topic: 6,
    title: 'ESCAPE SEQUENCE: Exercise ',
    element: <Activity6 />,
    description:
      'Create a program where we will print the quoted message using escape sequence.',
  },
  {
    type: 1,
    topic: 7,
    title: 'STRING CONCATENATION: Exercise ',
    element: <Activity7 />,
    description:
      'Write a Java program to concatenate a given string to the end of another string',
  },
  {
    type: 1,
    topic: 8,
    title: 'Convert Bytes',
    element: <Activity8 />,
    description:
      'Write Java program to Convert byte into the string.',
  },
  {
    type: 1,
    topic: 9,
    title: 'Range number',
    element: <Activity9 />,
    description:
      'Write a Java program that reads an integer between 0 and 1000 and adds all the digits in the integer.',
  },
  {
    type: 1,
    topic: 10,
    title: 'STRING CONCATENATION: Exercise ',
    element: <Activity10 />,
    description:
      'Write Java program to Convert a short integer into a string.',
  },
  {
    type: 1,
    topic: 11,
    title: 'Score',
    element: <Scorebaard /> ,
    description:
      'Write Java program to Convert a short integer into a string.',
  },
  {
    type: 0,
    topic: 12,
    title: '',
    element: <Topic11 />,
    description: '',
  },
];
export default function Lessons() {
  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      history.push('/login');
      history.go(0);
    }
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const { handleClick } = useSettingsContext();

  const [showLessons, setShowLessons] = useState(false);
  const [showActivities, setShowActivities] = useState(false);
  

  const progress = searchParams.get('progress') || 0;
  const currentLesson = navigationList[progress];

  const [fullname, setFullname] = useState('');

  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      setFullname(user.displayName);
    }
  }, [user, loading, error]);


  const navigate = useNavigate();

  const [disabledState] = useDisabledState();


  const IndexedDB = localforage;


  useEffect(()=>{

    IndexedDB.getItem('exercise').then(item =>{
        if(isNull(item) && progress == 21){
          navigate(`?progress=22`);
        }
    });
  
  
  },[IndexedDB]);
  


  const onQuizes = ()=>{
    navigate('/quizes');
  }

  return (
    <Box
      sx={{
        height: '140vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Toolbar
        sx={{
          height: '10vh',
          display: 'flex',
          justifyContent: 'space-between',
          background: colorPrimary,
          color: grey[50],
          boxShadow: `0 1px 10px ${grey[300]}`,
        }}
      >
        <Grid
          container
          sx={{
            '>.MuiGrid-item': {
              display: 'flex',
              alignItems: 'center',
            },
          }}
        >
          <Grid item xs={3} sx={{ gap: '15px' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={Logo}
                alt="logo"
                style={{
                  width: '50px',
                  height: 'auto',
                  objectFit: 'cover',
                }}
              />
            </Box>
            <Box>
              <Typography fontWeight={500} variant="h6">
                CodeNest Academe
              </Typography>
              <Typography variant="body2">Virtual Learning Website</Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ justifyContent: 'center', gap: '30px', cursor: 'pointer' }}
          >
            <Typography
              variant="h5"
              onClick={() => {
                history.push('/dashboard');
                history.go(0);
              }}
            >
              Dashboard
            </Typography>
            <Typography
              variant="h5"
              onClick={() => {
                if (!showLessons) {
                  if (showActivities) {
                    setShowActivities(false);
                  }
                  setShowLessons(true);
                } else {
                  setShowLessons(false);
                }
              }}
            >
              Lessons
            </Typography>
            <Typography
              variant="h5"
              onClick={() => {
                if (!showActivities) {
                  if (showLessons) {
                    setShowLessons(false);
                  }
                  setShowActivities(true);
                } else {
                  setShowActivities(false);
                }
              }}
            >
              Activities
            </Typography>
            <Typography variant="h5" onClick={onQuizes}>
              Quizes
            </Typography>

            <Typography variant="h5" onClick={handleClick}>
              Settings
            </Typography>
          </Grid>

          <Grid
            item
            xs={3}
            sx={{ justifyContent: 'flex-end', cursor: 'pointer' }}
          >
            <Avatar>{fullname.charAt(0)}</Avatar>
          </Grid>
        </Grid>
      </Toolbar>
      <Grid
        container
        sx={{
          flexGrow: 1,
          borderTopStyle: 'solid',
          borderTopColor: grey[300],
          borderTopWidth: '2px',
          overflowY: 'auto',
          position: 'relative',
          '>.MuiGrid-item': {
            height: '100%',
          },
        }}
      >
        <Box
          sx={{
            pt: '0px',
            px: '30px',
            pb: '60px',
            position: 'absolute',
            left: showLessons ? 0 : '-500px',
            top: 0,
            bottom: 0,
            width: '500px',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            background: blueGrey[900],
            color: grey[50],
            borderRightStyle: 'solid',
            borderRightColor: grey[50],
            borderRightWidth: '3px',
            boxShadow: `inset -20px 0 30px -20px ${grey[900]}`,
            zIndex: 1,
            transition: 'all ease-in-out 200ms',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton
              onClick={() => {
                setShowLessons(false);
              }}
            >
              <CloseIcon
                sx={{
                  color: grey[50],
                }}
              />
            </IconButton>
          </Box>
          <Typography variant="h5" fontWeight={500} sx={{ mb: '0px' }}>
            Java Module
          </Typography>
          {navigationList.map((item, index) => {
            if (item.type === 0) {
              return (
                <Box
                  key={index}
                  sx={{ pl: '30px', cursor: 'pointer' }}
                  onClick={() => {
                    history.push({
                      pathname: '/lessons',
                      search: `?progress=${index}`,
                    });
                    history.go(0);
                  }}
                >
                  <Box>
                    {item.topic !== 0 && (
                      <Typography variant="caption">
                        Topic {item.topic}
                      </Typography>
                    )}
                    <Typography key={item.topic}>{item.title}</Typography>
                  </Box>
                  <Divider sx={{ py: '5px', borderColor: grey[50] }} />
                </Box>
              );
            } else return null;
          })}
        </Box>
        <Box
          sx={{
            pt: '30px',
            px: '30px',
            pb: '60px',
            position: 'absolute',
            left: showActivities ? 0 : '-500px',
            top: 0,
            bottom: 0,
            width: '500px',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            background: blueGrey[900],
            color: grey[50],
            borderRightStyle: 'solid',
            borderRightColor: grey[50],
            borderRightWidth: '3px',
            boxShadow: `inset -20px 0 30px -20px ${grey[900]}`,
            zIndex: 1,
            transition: 'all ease-in-out 200ms',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <IconButton
              onClick={() => {
                setShowActivities(false);
              }}
            >
              <CloseIcon
                sx={{
                  color: grey[50],
                }}
              />
            </IconButton>
          </Box>
          <Typography variant="h5" fontWeight={500} sx={{ mb: '15px' }}>
            Java Exercises
          </Typography>
          {navigationList.map((item, index) => {
            if (item.type === 1) {
              return (
                <Box
                  key={index}
                  sx={{ pl: '30px', cursor: 'pointer' }}
                  onClick={() => {
                    history.push({
                      pathname: '/lessons',
                      search: `?progress=${index}`,
                    });
                    history.go(0);
                  }}
                >
                  <Box>
                    <Typography variant="caption">
                      Topic {item.topic}
                    </Typography>
                    <Typography gutterBottom key={item.topic}>
                      {item.title}
                    </Typography>
                    <Typography variant="caption">
                      {item.description}
                    </Typography>
                  </Box>
                  <Divider sx={{ py: '15px', borderColor: grey[50] }} />
                </Box>
              );
            } else return null;
          })}
        </Box>
        <Grid
          item
          xs={6}
          sx={{
            display: 'flex',
            borderLeftStyle: 'solid',
            borderLeftColor: grey[300],
            borderLeftWidth: '2px',
            borderRightStyle: 'solid',
            borderRightColor: grey[300],
            borderRightWidth: '2px',
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              background: grey[50],
              overflowY: 'auto',
              position: 'relative',
            }}
          >
            {currentLesson.element}
            <Box
              sx={{
                p: '15px',
                display: 'flex',
                justifyContent: 'center',
                gap: '15px',
                borderTopStyle: 'solid',
                borderTopColor: grey[300],
                borderTopWidth: '2px',
                background: grey[100],
                '>.Mui-disabled': {
                  background: grey[200],
                },
              }}
            >
              <Button
                disabled={progress <= 0 || progress > 11 && progress <= 21}
                onClick={(e) => {
                
                  if(progress > 11 && progress <= 21){
                    e.preventDefault();
                  }else{
                    history.push({
                      search: `progress=${parseInt(progress) - 1}`,
                    });
                  }

                  history.go(0);
                }}
                sx={{
                  background: colorPrimary,
                  color: grey[50],
                  borderRadius: '100vh',
                  ':hover': {
                    background: colorPrimaryShade,
                  },
                }}
              >
                Prev
              </Button>
              <Button
                disabled={progress >= navigationList.length - 1}
                onClick={() => {
                  IndexedDB.removeItem('attempt')
                  IndexedDB.removeItem('ai')

                  if(progress >= 21){
                  IndexedDB.removeItem('exercise')
                    
                  }

                  setTimeout(()=>{
                    history.push({
                      search: `progress=${parseInt(progress) + 1}`,
                    });
                    history.go(0);
                  
                  },1000)
                }}
                sx={{
                  background: colorPrimary,
                  color: grey[50],
                  borderRadius: '100vh',
                  ':hover': {
                    background: colorPrimaryShade,
                  },
                  '> .Mui-disabled': {
                    background: grey[100],
                  },
                }}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            background: grey[50],
            overflowY: 'auto',
          }}
        >
          <Dashboard />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}