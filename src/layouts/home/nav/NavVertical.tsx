import { useCallback, useEffect, useState } from "react";
// next
import { useRouter } from "next/router";
// @mui
import { Box,Fab, Stack, Drawer, Button, Avatar, DialogTitle, IconButton, Dialog, Typography } from "@mui/material";
import {GrAdd}from "react-icons/gr"
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// components


//
import navConfig from "./config-navigation";
import styled from "@emotion/styled";
import Image from "next/image";
import { relative } from "path";


// ----------------------------------------------------------------------

type Props = {
  openNav: boolean;
  onCloseNav: VoidFunction;
};



export default function NavVertical({ openNav, onCloseNav }: Props) {

  const [showDialog,setShowDialog] = useState<boolean>(false)

const handleShowCreate = useCallback(
  () => {
  setShowDialog(!showDialog)
  },
  [showDialog]
)

 

  
return(
  <>
  <Box sx={{backgroundColor:"	#7289da",py:2,height:"100%",width:"80px",flexDirection:"column",gap:"20px",
  display:"flex",alignItems:"center"}}>
  <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.driffle.com%2Fsite-assets%2Flogo-white.png&tbnid=-q2xY-CY5Q1PWM&vet=12ahUKEwj4i-uFhcWAAxUG6DgGHcksBiQQMygAegUIARDBAQ..i&imgrefurl=https%3A%2F%2Fdriffle.com%2F&docid=Wql3kx7a813BvM&w=1000&h=1000&itg=1&q=driffle%20logo&ved=2ahUKEwj4i-uFhcWAAxUG6DgGHcksBiQQMygAegUIARDBAQ" style={{ objectFit: "contain", borderRadius:"10px" }} width="50" height="50" alt={""} />
  <Box sx={{height:"50px",width:"50px" ,borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid black"}}>
  <AddIcon onClick={handleShowCreate} />
  </Box>
      
    
  
  {/* <Fab sx={{backgroundColor:"black", position:"absolute",top:"45%",width:"75px",height:"75px"}}color="primary" size="large" aria-label="add">
        <AddIcon />
      </Fab> */}
  
  </Box>
  <Dialog fullWidth maxWidth="sm"  onClose={handleShowCreate} open={showDialog} >
  <DialogTitle sx={{ m: 0, p: 2 }} >
      
  
        <IconButton
          aria-label="close"
          onClick={handleShowCreate}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      
    </DialogTitle>
    
    <Box  sx={{width:"100%" ,textAlign:"center"}}>
      <Typography variant="h5">
          Create a server
      </Typography>
    </Box>
    <Stack spacing={2} sx={{p:2}} >
      <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid black",p:2,borderRadius:"10px"}}>
      <Typography variant="h6">
          Create a public server
      </Typography>
      <ChevronRightIcon />
      </Box>
      <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid black",p:2,borderRadius:"10px"}}>
      <Typography variant="h6">
          Create a public server
      </Typography>
      <ChevronRightIcon />
      </Box>
    </Stack>
    <Stack sx={{p:2,textAlign:"center"}} spacing={2}>
    <Typography variant="h6">
          Already have an invite ?
      </Typography>
      <Button sx={{borderRadius:"5px",backgroundColor:"#424549"}}  fullWidth variant="contained">
        Join a server
      </Button>
    </Stack>
    </Dialog>
  </>

)
}
