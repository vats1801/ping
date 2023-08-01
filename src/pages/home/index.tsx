import Threads from "@/components/Thread";
import HomeLayout from "@/layouts/home/HomeLayout";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";

GeneralAppPage.getLayout = (page: React.ReactElement) => <HomeLayout>{page}</HomeLayout>;

// ----------------------------------------------------------------------

export default function GeneralAppPage() {

    const [tabValue,setTabValue] =useState<string>("threads")
    function changeCollectionCardHandler(event: any, value: any): void {
        setTabValue(value);
    }

    return  <Box sx={{ width: "80%",mb:"20px",mx:"auto" }}>
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        variant="fullWidth"
        value={tabValue}
        onChange={changeCollectionCardHandler}
      >
        
            <Tab label="Threads" value="threads"  />
            <Tab label="Rooms" value="rooms"  />
         
      </Tabs>
    </Box>
    <Threads/>
  </Box>
}