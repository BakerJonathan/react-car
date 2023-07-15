import car1 from '../assets/images/car1.jpg' 
//There's certainly a cleaner way to go about this, but this'll work this time around
import car2 from '../assets/images/car2.jpg' 
import car3 from '../assets/images/car3.jpg' 
import car4 from '../assets/images/car4.jpg' 
import car5 from '../assets/images/car5.jpg' 
import car6 from '../assets/images/car6.jpg' 
import { Grid, Box } from '@mui/material'



function Gallery() {
  return (
    <Box sx={{backgroundColor:'rgb(200,200,200)', height:'100vh', }}>
     <Box sx={{textAlign:'center', typography:'h4', py:2}}>Gallery</Box>
  
      <Grid container direction="row" justifyContent="space-evenly" alignItems="center"  spacing={3} >
        <Grid item >
          <img src={car1} alt="" />
        </Grid>
        <Grid item  >
          <img src={car2} alt="" />
        </Grid>
        <Grid item >
          <img src={car3} alt="" />
        </Grid>

        <Grid item>
          <img src={car4} alt="" />
        </Grid>
        <Grid item >
          <img src={car5} alt="" />
        </Grid>
        <Grid item  >
          <img src={car6} alt="" />
          </Grid>

      </Grid>
    </Box>
  )
}

export default Gallery
