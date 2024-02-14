import { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import { history } from '../utilities/history';
import { blueGrey, grey } from '@mui/material/colors';
import { useSettingsContext } from '../ai/Settings/SettingsContext';

import Logo from '../assets/logo.png';
import DashboardIcon from '../assets/dashboard.png';
import LessonsIcon from '../assets/lessons.png';
import ActivitiesIcon from '../assets/activities.png';
import SettingsIcon from '../assets/settings.png';
import LogoutIcon from '../assets/logout.png';
import CheckIcon from '@mui/icons-material/Check';

import PlaceholderTopics from '../assets/placeholderTopics.jpg';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from '../utilities/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const colorPrimary = '#1e7b75';
const colorPrimaryShade = '#26918a';

const topicsList = [
  {
    topic: 0,
    title: 'Introduction',
    description: `Java goes back to 1991, when a group of Sun engineers, led by Patrick Naughton and Sun Fellow (and all-around computer wizard) James Gosling, wanted to design a small computer language that could be used for consumer devices like cable TV switch boxes. Since these devices do not have a lot of power or memory, the language had to be small and generate very tight code. Also, because different manufacturers may choose different central processing units (CPUs), it was important not to be tied down to any single architecture. The project got the code name “Green.”
The requirements for small, tight, and platform-neutral code led the team to resurrect the model that some Pascal implementations tried in the early days of PCs. What Niklaus Wirth, the inventor of Pascal, had pioneered, and UCSD Pascal did commercially, was to design a portable language that generated intermediate code for a hypothetical machine. (These are often called virtual machines—hence, the Java Virtual Machine or JVM.) This intermediate code could then be used on any machine that had the correct interpreter. The Green project engineers used a virtual machine as well, so this solved their main problem.
The Sun people, however, come from a UNIX background, so they based their language on C++ rather than Pascal. In particular, they made the language object oriented rather than procedure oriented. But, as Gosling says in the interview, “All along, the language was a tool, not the end.” Gosling decided to call his language “Oak.” The people at Sun later realized that Oak was the name of an existing computer language, so they changed the name to Java. In 1992,
`,
  },
  {
    topic: 1,
    title: 'Java Syntax',
    description: `The syntax of Java plays a pivotal role in shaping the structure and interpretation of Java programs. This syntax is primarily inherited from the C and C++ programming languages, offering a familiar framework for developers transitioning to Java. However, Java exhibits notable distinctions from C++.
One fundamental difference is the absence of global functions or variables in Java. While C++ allows the use of global functions and variables, Java enforces a more structured approach by confining all code within classes. This approach enhances code organization and modularity.
`,
  },
  {
    topic: 2,
    title: 'Data Types',
    description: `A data type is a classification or categorization of data based on its features and the actions that may be done on it. Data types specify the nature of the data that a variable or object can carry, as well as the operations that can be performed on that data. Data types are important because they allow the compiler or interpreter to understand how to allocate memory for the data as well as how to interpret and modify it. In most programming languages, including Java, data types fall into two main categories: Primitive Data Types and Reference Data Type.`,
  },
  {
    topic: 3,
    title: 'Constant',
    description: `A constant variable is one whose value is fixed once it has been initialized. The final keyword, which denotes that the variable's value is fixed and cannot be changed, is used to define constant variables. Constants are frequently employed for values that have to endure over the course of a program. Because Unicode was designed to handle essentially all characters in all written languages in the world, it is a 2-byte code. This allows 65,536 characters, of which about 35,000 are currently in use. This is far richer than the ASCII code set, which is a 1-byte code with 128 characters, or the commonly used ISO 8859-1 extension with 256 characters.
`,
  },
  {
    topic: 4,
    title: 'The Character Type',
    description: `First, single quotes are used to denote char constants. For example, 'H' is a character. It is different from "H", a string containing a single character. Second, the char type denotes characters in the Unicode encoding scheme. You may not be familiar with Unicode, and, fortunately, you don't need to worry much about it if you don't program international applications. (Even if you do, you still won't have to worry about it too much because Unicode was designed to make the use of non-Roman characters easy to handle.)`,
  },
  {
    topic: 5,
    title: 'Introduction to String',
    description: `A string is one or more characters considered as a single value. Everything entered in a program, requested from the user, or displayed as a series of characters is primarily a string. To support strings, Java is equipped with the String class. To declare a variable that would hold a string, use the String data type.)`,
  },
  {
    topic: 6,
    title: 'Escape Sequence',
    description: `An escape sequence is a special character that displays non-visibly. You use this type of character to indicate the end of line, that is, to ask the program to continue on the next line. An escape sequence is represented by a backslash character, \, followed by another character or symbol.` 
  },
  {
    topic: 7,
    title: 'Introduction to String',
    description: `To make it easy to manage strings, you can "concatenate" one string with another to create a new string. The concatenation is done by adding one string to another, which is done using the addition operator.`
  },
  {
    topic: 8,
    title: 'Byte',
    description: `A byte is a series of 8 bits. It is used to represent small numbers. To declare a variable that would hold a natural number between -128 and 127, you can use the byte data type`
  },
  {
    topic: 9,
    title: 'Integer',
    description: `An integer is simply a natural number. An integer is a variable whose values are between -2,147,483,648 and 2,147,484,647. The value is also said to fit in a 32-bit range. To declare a variable that would hold numbers of that range, use the int keyword.`
  },
  {
    topic: 10,
    title: 'Short',
    description: `An integer is referred to as short if its value is between -32768 and 32767. This number can fit in 16 bits. To declare a variable that would hold numbers in that range, you can use the short data type.
`},
];
const exercisesList = [
  {
    topic: 1,
    title: 'Java Syntax',
    description:
      'Create a simple program in java program that will display “hello world”',
  },
  {
    topic: 2,
    title: 'Data Types',
    description:
      'Write a Java Program to convert temperature from Fahrenheit to Celsius degrees.',
  },
  {
    topic: 3,
    title: 'CONSTANT',
    description:
      'Write a Java Program to declare constant as private.',
  },
  {
    topic: 4,
    title: 'THE CHARACTER TYPE',
    description:
      'Write a program to replace a specified character with another character',
  },
  {
    topic: 5,
    title: 'INTRODUCTION TO STRING',
    description:
      'Write a Java program to test if a given string contains the specified sequence of char values.',
  },
  {
    topic: 6,
    title: 'ESCAPE SEQUENCE',
    description:
      'Create a program where we will print the quoted message using escape sequence.',
  },
  {
    topic: 7,
    title: 'STRING CONCATENATION',
    description:
      'Write a Java program to concatenate a given string to the end of another string.',
  },
  {
    topic: 8,
    title: 'BYTE',
    description:
      'Write Java program to Convert byte into the string.',
  },
  {
    topic: 9,
    title: 'INTEGER',
    description:
      'Write a Java program that reads an integer between 0 and 1000 and adds all the digits in the integer.',
  },
  {
    topic: 10,
    title: 'SHORT',
    description:
      'Write Java program to Convert a short integer into a string.',
  },
];

export default function Dashboard() {
  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      history.push('/login');
      history.go(0);
    }
  });

  const [showLessons, setShowLessons] = useState(false);
  const [showActivities, setShowActivities] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const { emojiOn, setEmojiOn, overlayOn, setOverlayOn } = useSettingsContext();
  const [fullname, setFullname] = useState('');
  const usertype = 'Student';

  const [topicsCounter, setTopicsCounter] = useState(0);

  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      setFullname(user.displayName);
    }
  }, [user, loading, error]);

  return (
    <Box
      sx={{
        maxHeight: '150vh',
        overflowY: 'hidden',
        display: 'flex',
        alignItems: 'start',
      }}
    >
      <Box
        sx={{
          pl: '45px',
          minHeight: '146vh',
          minWidth: '500px',
          display: 'flex',
          flexDirection: 'column',
          background: colorPrimary,
          color: grey[50],
          borderRightStyle: 'solid',
          borderRightColor: grey[50],
          borderRightWidth: '3px',
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            py: '60px',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
          }}
        >
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
                width: '100px',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </Box>
          <Box>
            <Typography fontWeight={500} fontSize="2em" variant="h5">
              CodeNest Academe
            </Typography>
            <Typography fontSize="1.25em">Virtual Learning Website</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            pl: '30px',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            '>.MuiBox-root': {
              minWidth: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '30px',
              cursor: 'pointer',
              '>.MuiBox-root': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '> img': {
                  width: '50px',
                  height: 'auto',
                  objectFit: 'cover',
                },
              },
              '>.MuiTypography-h4': {
                fontWeight: 500,
              },
            },
          }}
        >
          <Box>
            <Box>
              <img src={DashboardIcon} alt="dashboard" />
            </Box>
            <Typography variant="h4">Dashboard</Typography>
          </Box>
          <Box
            sx={{ position: 'relative' }}
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
            <Box>
              <img src={LessonsIcon} alt="lessons" />
            </Box>
            <Typography variant="h4">Lessons</Typography>
            <Box
              sx={{
                position: 'absolute',
                right: showLessons ? '-325px' : '-25px',
                zIndex: 3,
                transition: 'ease 200ms',
              }}
            >
              <IconButton
                sx={{
                  background: grey[50],
                  ':hover': {
                    background: colorPrimaryShade,
                    color: grey[50],
                  },
                }}
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
                {showLessons ? (
                  <ChevronLeftIcon fontSize="large" />
                ) : (
                  <ChevronRightIcon fontSize="large" />
                )}
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{ position: 'relative' }}
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
            <Box>
              <img src={ActivitiesIcon} alt="activities" />
            </Box>
            <Typography variant="h4">Activities</Typography>
            <Box
              sx={{
                position: 'absolute',
                right: showActivities ? '-325px' : '-25px',
                zIndex: 3,
                transition: 'ease 200ms',
              }}
            >
              <IconButton
                sx={{
                  background: grey[50],
                  ':hover': {
                    background: colorPrimaryShade,
                    color: grey[50],
                  },
                }}
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
                {showActivities ? (
                  <ChevronLeftIcon fontSize="large" />
                ) : (
                  <ChevronRightIcon fontSize="large" />
                )}
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{ position: 'relative' }}
            onClick={() => {
              if (!showSettings) {
                if (showLessons || showActivities) {
                  setShowLessons(false);
                  setShowActivities(false);
                }
                setShowSettings(true);
              } else {
                setShowSettings(false);
              }
            }}
          >
            <Box>
              <img src={SettingsIcon} alt="settings" />
            </Box>
            <Typography variant="h4">Settings</Typography>
            <Box
              sx={{
                position: 'absolute',
                right: showSettings ? '-325px' : '-25px',
                zIndex: 3,
                transition: 'ease 200ms',
              }}
            >
              <IconButton
                sx={{
                  background: grey[50],
                  ':hover': {
                    background: colorPrimaryShade,
                    color: grey[50],
                  },
                }}
                onClick={() => {
                  if (!showSettings) {
                    if (showLessons || showActivities) {
                      setShowLessons(false);
                      setShowActivities(false);
                    }
                    setShowSettings(true);
                  } else {
                    setShowSettings(false);
                  }
                }}
              >
                {showSettings ? (
                  <ChevronLeftIcon fontSize="large" />
                ) : (
                  <ChevronRightIcon fontSize="large" />
                )}
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            p: '30px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '30px',
          }}
          onClick={() => {
            signOut(auth)
              .then(() => {
                history.push('/login');
                history.go(0);
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log({
                  errorCode: errorCode,
                  errorMessage: errorMessage,
                });
              });
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={LogoutIcon}
              alt="logout"
              style={{ width: '50px', height: 'auto', objectFit: 'cover' }}
            />
          </Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 500,
            }}
          >
            Logout
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          position: 'relative',
          p: '60px',
          minHeight: '100vh',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '60px',
          background: blueGrey[50],
        }}
      >
        <Box
          sx={{
            py: '60px',
            px: '30px',
            position: 'absolute',
            left: showLessons ? 0 : '-300px',
            top: 0,
            bottom: 0,
            width: '300px',
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
          <Typography variant="h5" fontWeight={500} sx={{ mb: '15px' }}>
            Java Module
          </Typography>
          {topicsList.map((topic) => (
            <Box
              key={topic.topic}
              sx={{ pl: '30px', cursor: 'pointer' }}
              onClick={() => {
                history.push({
                  pathname: '/lessons',
                  search: `?progress=${topic.topic}`,
                });
                history.go(0);
              }}
            >
              <Box>
                {topic.topic !== 0 && (
                  <Typography variant="caption">Topic {topic.topic}</Typography>
                )}
                <Typography key={topic.topic}>{topic.title}</Typography>
              </Box>
              <Divider sx={{ py: '15px', borderColor: grey[50] }} />
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            py: '60px',
            px: '30px',
            position: 'absolute',
            left: showActivities ? 0 : '-300px',
            top: 0,
            bottom: 0,
            width: '300px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
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
          <Typography variant="h5" fontWeight={500} sx={{ mb: '15px' }}>
            Java Exercise
          </Typography>
          {exercisesList.map((exercise) => (
            <Box key={exercise.topic} sx={{ pl: '30px', cursor: 'pointer' }}
            onClick={() => {
              history.push({
                pathname: '/lessons',
                search: `?progress=1${exercise.topic}`,
              });
              history.go(0);
            }}>
              
              <Box>
                <Typography variant="caption">
                  Topic {exercise.topic}
                </Typography>
                <Typography gutterBottom key={exercise.topic}>
                  {exercise.title}
                </Typography>
                <Typography variant="caption">
                  {exercise.description}
                </Typography>
              </Box>
              <Divider sx={{ py: '15px', borderColor: grey[50] }} />
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            py: '60px',
            px: '30px',
            position: 'absolute',
            left: showSettings ? 0 : '-300px',
            top: 0,
            bottom: 0,
            width: '300px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
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
          <Typography variant="h5" fontWeight={500} sx={{ mb: '15px' }}>
            Video Settings
          </Typography>
          <List>
            <ListItem
              onClick={() => {
                setEmojiOn(!emojiOn);
                localStorage.setItem('emojiOn', !emojiOn);
              }}
            >
              <ListItemIcon>
                {emojiOn && <CheckIcon sx={{ color: grey[50] }} />}
              </ListItemIcon>
              <ListItemText>Show Emoji</ListItemText>
            </ListItem>
            <ListItem
              onClick={() => {
                setOverlayOn(!overlayOn);
                localStorage.setItem('overlayOn', !overlayOn);
              }}
            >
              <ListItemIcon>
                {overlayOn && <CheckIcon sx={{ color: grey[50] }} />}
              </ListItemIcon>
              <ListItemText>Show AI Overlay</ListItemText>
            </ListItem>
          </List>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            {loading && <CircularProgress />}
            {user && (
              <Avatar sx={{ width: 56, height: 56 }}>
                {fullname.charAt(0)}
              </Avatar>
            )}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {loading && (
                <LinearProgress sx={{ width: '200px', mb: '15px' }} />
              )}
              {user && <Typography variant="h6">{fullname}</Typography>}
              {loading && <LinearProgress sx={{ width: '200px' }} />}
              {user && <Typography>{usertype}</Typography>}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
          }}
        >
          <Typography
            variant="h2"
            fontWeight={700}
            sx={{ color: colorPrimary }}
          >
            Welcome to Java!
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: '15px',
              '>.MuiButton-root': {
                background: grey[50],
                color: grey[700],
                ':hover': {
                  background: colorPrimaryShade,
                  color: grey[50],
                },
              },
              '>.Mui-disabled': {
                background: grey[100],
                color: grey[500],
              },
            }}
          >
            <Button
              disabled={topicsCounter <= 0}
              onClick={() => {
                setTopicsCounter(topicsCounter - 1);
              }}
            >
              <ChevronLeftIcon />
            </Button>
            <Button
              disabled={topicsCounter >= Math.floor(topicsList.length / 6)}
              onClick={() => {
                setTopicsCounter(topicsCounter + 1);
              }}
            >
              <ChevronRightIcon />
            </Button>
          </Box>
        </Box>
        <Paper sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={4}
            sx={{
              p: '30px',
              display: 'flex',
              alignItems: 'stretch',
            }}
          >
            {topicsList.map((topic, index) => {
              if (
                index >= 6 * topicsCounter &&
                index < 6 * (topicsCounter + 1)
              ) {
                return (
                  <Grid item xs={4}>
                    <Card>
                      <CardActionArea
                        key={topic.topic}
                        onClick={() => {
                          history.push({
                            pathname: '/lessons',
                            search: `?progress=${topic.topic}`,
                          });
                          history.go(0);
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="250"
                          image={PlaceholderTopics}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {topic.topic !== 0
                              ? `Topic ${topic.topic}: ${topic.title}`
                              : topic.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {topic.description.length <= 150
                              ? topic.description
                              : topic.description.substring(0, 150) + '...'}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              } else {
                return null;
              }
            })}
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}