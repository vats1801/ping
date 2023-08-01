
import { Box } from "@mui/material";
import styled from "styled-components";
import AddIcon from '@mui/icons-material/Add';



// const ThreadBox = styled.div({
//     width:"auto",
//     padding:"16px",
//     display:"flex",
//     flexDirection:"column",
//     gap:"20px",
//     height:"auto",

//   });
// const ThreadLeft = styled.div({
//     width:"10%",
//     display:"flex",
//     flexDirection:"column",
//     alignItems:"center"
// })

// const UserImage = styled.div({
  
// })

export default function Threads(){

    return (<Box sx={{ display:"flex",flexDirection:"row",gap:"10px",maxWidth:"400px"}}>
        <Box sx={{witdh:"10%"}}>
            

          <img src="" style={{ position:"relative",width:"50px",height:"50px",objectFit:"contain"}}/>
          <div style={{padding:1,position:"absolute",width:"30px",height:"30px",backgroundColor:"black",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <AddIcon />
          </div>
          
        </Box>
        <Box sx={{flex:1}}>

        </Box>
    </Box>)
}