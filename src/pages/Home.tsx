import car_bg from "../assets/images/car_bg.jpg"
import {Box,Typography} from "@mui/material"

function Home() {
  return (

    
    <Box sx={{background: `url(${car_bg})`,
    backgroundSize:'cover',backgroundPosition:'center',height:'94vh',  //This for bg image, rest for centered text
    display:'flex', alignItems:'center', justifyContent:'center'}}>
      <Box sx={{backgroundColor:"rgb(0,0,0,0.4)", width:'470px', borderRadius:'6px', }}>
        <Typography variant='inherit' fontSize="500%" color={"white"} sx={{textAlign:'center'}}>Behold Car</Typography>
      </Box>
    </Box>
  )
}

export default Home