import React, { useRef, useEffect, useState } from 'react';
import {Box, Grid, Typography,Select, MenuItem, Link} from '@mui/material';
import theme from '../../../styles/theme';
import "./Account.scss";
import "./Account.responsive.scss";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ArmFlag from './../../../static/images/Header/language-flags/am.jpg'
import BrFlag from './../../../static/images/Header/language-flags/br.jpg'
import RusFlag from './../../../static/images/Header/language-flags/rus.jpg'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useSelector} from 'react-redux';
import $ from "jquery";
import { setColorModeAC } from '../../../store/theme-color';
// true spitak false sev


function Account({width, height}){

    const [modeState,setModeState] = useState(false)
    const modeStating = useSelector((state) => {
      return state.theme.colorMode
   })

    function toggleMode(){
      console.log("mode");
      console.log(modeState);
      if(modeState){
        setModeState(false)
        setColorModeAC(false)
      }
      else if(!modeState){
        setModeState(true)
        setColorModeAC(true)
      }
    }

    useEffect(() => {
        setModeState(modeStating)
    }, [modeStating])

    useEffect(() => {
      var darkIcon = $("#dark_mode_icon")
      var lightIcon = $("#light_mode_icon")
      if(modeState){    
        lightIcon.css({display:"block"})
        darkIcon.css({display:"none"})
      }
      else if(!modeState){
        lightIcon.css({display:"none"})
        darkIcon.css({display:"block"})
      }
    }, [modeState])

    return(
    <Grid
    container
    id="account_cont"
    width={`${width}%`}
    height={`${height}%`}
    sx={{ml:"auto"}}
   >
      {/* account container */}
      <Grid
       item
       id="account_container"
       width="25%"
       height="100%"
       display="flex"
       sx={{alignItems:"center",justifyContent:"center"}}
      >
        <AccountCircleIcon 
         sx={{color:"white", cursor:"pointer"}} />
      </Grid>
       {/* dark-light mode container  */}
      <Grid
       item
       width="25%"
       height="100%"
       id="switch_container"
       display="flex"
       sx={{alignItems:"center",justifyContent:"center"}}
      >
          <WbIncandescentIcon 
           onClick={toggleMode}
           id="light_mode_icon"
           sx={{color:"white",transform:"rotate(180deg)",cursor:"pointer"}} />
           <LightbulbIcon
            onClick={toggleMode}
           id="dark_mode_icon"
           sx={{color:"black",cursor:"pointer"}}
           />
      </Grid>
      {/* languages select container */}
     <Grid
      item
      width="50%"
      height="100%"
      display="flex"
      sx={{alignItems:"center",justifyContent:"center"}}
      >
        <Select
         id="select"
         variant="filled"
        //  disableUnderline
         IconComponent={ () => (<ArrowDropDownIcon sx={{position:"absolute",left:"55%",color:"white"}} />)}
         defaultValue={"Armenian"}
         sx={{outline:"0px solid transparent",width:"100%",height:"100%",border:"0px solid transparent",borderColor:"transparent transparent rgba(0, 0, 0, 0.1) transparent", outline:"0px solid transparent",padding:"0",display:'flex',alignItems:"center",justifyContent:"center",backgroundColor:"inherit"}}
         >
            <MenuItem
             value={"Armenian"}
             sx={{color:"white"}}
             >
             <img
              src={ArmFlag}
              alt="Armenian"
              className="lang_icon"
              style={{width:"20px",height:"20px",borderRadius:"50%",marginRight:"5px"}}
              ></img>
              Հայ
            </MenuItem>
           <MenuItem
             value={"Russian"}
             sx={{color:"white"}}>
             <img
             src={BrFlag}
             alt="English"
             className="lang_icon"
             style={{width:"20px",height:"20px",borderRadius:"50%",marginRight:"5px"}}
             ></img>
             Eng
           </MenuItem>
           <MenuItem
            value="English"
            sx={{color:"white"}}>
             <img
              src={RusFlag}
              alt="Russian"
              className="lang_icon"
              style={{width:"20px",height:"20px",borderRadius:"50%",marginRight:"5px"}}
              ></img>
              Ру
           </MenuItem>
        </Select>
      </Grid>
    </Grid>
    )
}

export default Account