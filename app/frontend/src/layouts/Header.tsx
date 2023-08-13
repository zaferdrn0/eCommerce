import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Icon } from '@iconify/react';

const Header = () => {

  const headerLeftData = ["getir", "getirfood", "getirmore", "getirwater", "getirlocals"]
  const headerRightData = [
    {
      name:"English(EN)",
      icon:"material-symbols:language",
      onclick: "handleLanguagePopup"
    },
    {
      name:"Login",
      icon:"bxs:user",
      onclick: "handleLoginPopup"
    },
    {
      name:"Sign Up",
      icon:"mingcute:user-add-fill",
      onclick: "handleSignupPopup"
    }
  ]
  const [activeButtonIndex, setActiveButtonIndex] = useState<any>(null);

  const handleHeaderData = (index: any) => {
    setActiveButtonIndex(index);
  };


  return (
    <Box sx={{ backgroundColor: '#5d3ebc', paddingTop: "5px" }}>
      <Grid sx={{ maxWidth: '1232px', display: "flex", justifyContent: "space-between", width: '100%', margin: '0 auto', alignItems: 'center' }}>
        <Box>
          {headerLeftData.map((data, index) => (
            <Button
              onClick={() => handleHeaderData(index)}
              sx={{
                color: "#e2e2e2",
                backgroundColor: activeButtonIndex === index ? "#7849f7" : "transparent",
                '&:hover': {
                  backgroundColor: "#7849f7"
                },
                padding: "8px 21px",
                borderRadius: "7px 7px 0px 0px",
                position: "relative",
                textTransform: 'lowercase', 
              }}
              key={index}
            >
              <Typography
                variant='body1'
                fontSize={"16px"}
                fontWeight={700}
                style={{
                  color: activeButtonIndex === index ? "#ffeb3b" : "inherit",
                 
                }}
              >
                {data.slice(0, 5)}
              </Typography>
              <Typography
                fontSize={"16px"}
                variant='body1'
                fontWeight={700}
              >
                {data.slice(5)}
              </Typography>
            </Button>
          ))}
        </Box>
        <Box sx={{display:"flex",}}>
        {headerRightData.map((data,index) =>(
         <Box >
           <IconButton 
           sx={{color:"#e2e2e2",borderRadius:0,ml:2}}
             key={index}
             onClick={() => {
               if (data.onclick === "handleLanguagePopup") {
         
               } else if (data.onclick === "handleLoginPopup") {
            
               } else if (data.onclick === "handleSignupPopup") {
            
               }
             }}
           >
             <Icon fontSize={"1.2rem"} icon={data.icon}/>
             <Typography fontWeight={550} ml={1} variant="body2">{data.name}</Typography>
           </IconButton>
       </Box>
        ))}
        </Box>
      </Grid>
    </Box>
  )
}

export default Header