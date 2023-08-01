// routes
import React from "react";
import { PATH_HOME } from "../../../routes/paths";
// components
import Label from "../../../components/label";
import Iconify from "../../../components/iconify";
import SvgColor from "../../../components/svg-color";
import {GoHome} from "react-icons/go"
import {MdOutlineExplore,MdOutlineGroups2} from "react-icons/md"
import {AiOutlineHeart} from "react-icons/ai"
import { Fab } from "@mui/material";
import {GrAdd} from "react-icons/gr"
// ----------------------------------------------------------------------
import AddIcon from '@mui/icons-material/Add';
const icon = (name: string) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const ICONS = {
  blog: icon("ic_blog"),
  cart: icon("ic_cart"),
  chat: icon("ic_chat"),
  mail: icon("ic_mail"),
  user: icon("ic_user"),
  file: icon("ic_file"),
  lock: icon("ic_lock"),
  label: icon("ic_label"),
  blank: icon("ic_blank"),
  kanban: icon("ic_kanban"),
  folder: icon("ic_folder"),
  banking: icon("ic_banking"),
  booking: icon("ic_booking"),
  invoice: icon("ic_invoice"),
  calendar: icon("ic_calendar"),
  disabled: icon("ic_disabled"),
  external: icon("ic_external"),
  menuItem: icon("ic_menu_item"),
  ecommerce: icon("ic_ecommerce"),
  analytics: icon("ic_analytics"),
  dashboard: icon("ic_dashboard"),
  productMap:icon("productMap")
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: "CMS",
    items: [
      { title: "feed", path: PATH_HOME.general.feed, icon:<GoHome size={30}/>  },
      
      {
        title: "Explore",
        path: PATH_HOME.general.explore,
        icon: <MdOutlineExplore size={30}/>
      },
      {
        icon:""
      },
      {
        icon:""
      },
      {
        title: "Rooms",
        path: PATH_HOME.general.rooms,
        icon:<MdOutlineGroups2 size={30}/>,
      },
      
      {
        title: "Activity",
        path: PATH_HOME.general.activity,
        icon: <AiOutlineHeart size={30}/>,
      },
      // {
      //   title: "Profile",
      //   path: PATH_HOME.general.profile,
      //   icon: ICONS.file,
      // },
      
      

    ],
  },

  
];

export default navConfig;
