import { Box, Button, Paper, Typography } from "@mui/material";
import { useDisplayContext } from "../Display/DisplayContext";
import { grey } from "@mui/material/colors";
import { history } from "../../utilities/history";
import robotpic from "../../assets/robot.png"
import localforage from "localforage";
import { useEffect, useState } from "react";
import { useAiGlbobalCounter } from "../../utilities/global.state";
import { isEmpty, isNull } from "lodash";
const colorPrimary = "#1e7b75";
const colorPrimaryShade = "#26918a";


export default function HelperAI() {
  const { setFeelingNegative } = useDisplayContext();

  const [count,setCount] = useAiGlbobalCounter()
  const [counter,setCounter] = useState(0)


  const IndexedDB = localforage;





  useEffect(()=>{
  
    IndexedDB.getItem('ai').then(item => !isEmpty(item) && setCounter(JSON.parse(item)));
  
  
  
  },[IndexedDB]);
  


  return (
    <Box
      sx={{
        pb: "100px",
        display: "flex",
        justifyContent: "right",
        alignItems: "flex-start",
        gap: "15px",
      }}
    >
      <Paper
        sx={{
          p: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          borderTopRightRadius: "15px",
          borderBottomRightRadius: "15px",
          borderBottomLeftRadius: "15px",
        }}
      >
        <Box>
          <Typography variant="body2" fontWeight={700}>
            AI Helper <span>({ counter !== 0 ? counter : 3})</span>
          </Typography>
          <Typography>
            It seems like you are confused. Do you need any help?
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <Button
            fullWidth
            variant="contained"
            sx={{
              background: colorPrimary,
              color: grey[50],
              ":hover": {
                background: colorPrimaryShade,
              },
            }}
            onClick={() => {

              if (count > 0) {
                const newCounter = counter !== 0 ? counter - 1 : count -1;
                setCount(newCounter); // Update the count state first
            
                IndexedDB.setItem('ai', JSON.stringify(newCounter)) // Update IndexedDB
            
                setTimeout(()=>{
                    // Now navigate to the new page
                  history.push(`/lessons?progress=10`);
                  history.go(0);
                },1000)
              }

           
        
              
            }}
          >
            Yes
          </Button>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => {
              setFeelingNegative(false);
            }}
            sx={{
              borderColor: colorPrimary,
              color: colorPrimary,
              ":hover": {
                borderColor: colorPrimaryShade,
                background: grey[100],
              },
            }}
          >
            No
          </Button>
        </Box>
      </Paper>
      <img src={robotpic} width={250} height={250} sx={{ position: "absolute" }} style={{transform : 'translate(-80px, 100px)'}} />
    </Box>
  );
}