import { useState } from "react";
// @mui
import { Box } from "@mui/material";
// hooks
import useResponsive from "../../hooks/useResponsive";
// auth
// import AuthGuard from "../../auth/AuthGuard";
// // components
// import { useSettingsContext } from "../../components/settings";
//
import Main from "./Main";

import NavVertical from "./nav/NavVertical";




type Props = {
  children?: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {


  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderNavVertical = (
    <NavVertical openNav={open} onCloseNav={handleClose} />
  );

  const renderContent = () => {
    

    return (
      <>
       
        <Box
          sx={{display:"flex",width:"100%",height:"100vh",margin:"0px"}}
          
        >
          {renderNavVertical}
          <Main >{children}</Main>
          
        </Box>
      </>
    );
  };

  return renderContent();
}
