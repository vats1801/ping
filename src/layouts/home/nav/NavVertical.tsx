import { useEffect } from "react";
// next
import { useRouter } from "next/router";
// @mui
import { Box,Fab, Stack, Drawer, Button, Avatar } from "@mui/material";
import {GrAdd}from "react-icons/gr"
import AddIcon from '@mui/icons-material/Add';
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


 

  
return(
  <Box sx={{height:"100%",width:"100px",flexDirection:"column",gap:"20px",
  display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <Box sx={{width:"100%",display:"flex",justifyContent:"center"}}><Image width={200} height={80} src="/ping.png" alt="ping logo"/></Box>
    
  <Box sx={{
    height:"auto",
    backgroundColor:"#f7f7f2",
    width:"auto",
    gap:"20px",
    position:"relative",
    borderRadius:"30px" ,
    flexDirection:"column",
    display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
    {
      navConfig[0].items.map((item,i)=>{
        return <Box sx={{p:2}}>{item.icon}</Box>
        
      })
    }
    
    
  </Box>
  <Fab sx={{backgroundColor:"black", position:"absolute",top:"45%",width:"75px",height:"75px"}}color="primary" size="large" aria-label="add">
        <AddIcon />
      </Fab>
  <Avatar sx={{width:"80px",height:"80px"}} alt="Remy Sharp" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Fpeople&psig=AOvVaw1uqxBshHZ_LjIskMWcw-F4&ust=1690906324709000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNj-kZKruYADFQAAAAAdAAAAABAE" />
  </Box>
)
}
