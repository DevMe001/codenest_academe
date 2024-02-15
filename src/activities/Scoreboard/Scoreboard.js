import { Box, Grid,List,ListItem,ListItemText,Paper, Typography} from "@mui/material";
import { styled } from '@mui/material/styles';
import localforage from "localforage";
import { isEmpty, isNull } from "lodash";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";



export default function Scorebaard() {
 
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
const  [cacheStoreItem,setList] = useState([]);

const [total,setTotal] = useState(0);

const IndexedDB = localforage;


useEffect(()=>{

  IndexedDB.getItem('exercise').then(item => setList(JSON.parse(item)));



},[]);



const getLengthCache = !isNull(cacheStoreItem) ? cacheStoreItem.length : 0;


  return (
    <Box sx={{mt:3}}>
      <Box sx={{my:3}}>
      </Box>
      <Box>
      <Grid container >
        <Grid item  md={12}>
          <Item sx={{pt:2}}>
          <Typography align="center" component={'h2'} variant="secondary">Scoreboard</Typography>
          </Item>
        </Grid>
      <Grid item md={6}>
        <Item>
          <Typography  sx={{fontWeight:800}}  >Question</Typography>
         
            
          <List sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
            {!isEmpty(cacheStoreItem) && cacheStoreItem.map((value,i) => (
            <div key={i}>
              <ListItem
              sx={{textAlign:'center'}}
                key={i}
                disableGutters
              >
                <ListItemText primary={<Typography sx={{fontWeight:500}} component={'h1'}>Topic {value.questionNum}</Typography>} />
              </ListItem>
            
            </div>
            ))}
              <ListItem
               sx={{textAlign:'center'}}
                disableGutters
              >
              <ListItemText primary={<Typography sx={{fontWeight:700}} component={'h1'}>Total</Typography>} />
              </ListItem>
          </List>
          
      
        </Item>
      </Grid>
      <Grid item md={6}>
        <Item>
         <Typography  sx={{fontWeight:800}} >Answer</Typography>

         <List sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
            {!isEmpty(cacheStoreItem) && cacheStoreItem.map((value,i) => (
              <ListItem
              sx={{textAlign:'center'}}
                key={i}
                disableGutters
              >
                <ListItemText primary={<Typography sx={{fontWeight:700}} component={'h1'}>{value.answer == true ? 'Correct' : 'Incorrect'}</Typography>} />
              </ListItem>
            ))}
           
                <ListItem
               sx={{textAlign:'center'}}
                disableGutters
              >
               
              <ListItemText primary={
                <>
                <Typography component={'span'} sx={{fontWeight:700}}>{
                !isEmpty(cacheStoreItem) ? cacheStoreItem.filter(item => item.answer === true).length   : 0
              }</Typography>
              <Typography component={'span'} sx={{fontWeight:700}}>{
                '/' +  getLengthCache
              }</Typography>
                </>
              } />
              </ListItem>
          </List>
        </Item>
      </Grid>
    
    </Grid>
      </Box>
    </Box>
  )
  

  
  }

  