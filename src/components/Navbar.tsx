import {AppBar, Toolbar,Stack, Button, CssBaseline, Link} from '@mui/material'
import {useAuth0} from '@auth0/auth0-react'

const navButtons={
  border:'1px solid gray', "&:hover":{bgcolor:'rgb(100,100,100)'},
}

function Navbar() {
  const {isAuthenticated,loginWithRedirect,logout}=useAuth0()

  const signInOnClick=()=>{loginWithRedirect()}
  const signOutOnClick=()=>{logout()}
  return (
    <div>
      <AppBar position='static' sx={{bgcolor:'black' }}>
        <CssBaseline/>
        <Toolbar>
            <Stack direction='row' spacing={7}>
              <Button color='inherit'  sx={navButtons}><Link href="/" color='inherit'>Home</Link></Button>
              <Button color='inherit'  sx={navButtons}><Link href="/#/gallery" color='inherit'>Gallery</Link></Button>
              <Button color='inherit' sx={navButtons}><Link href="/#/dashboard" color='inherit'>Dashboard</Link></Button>
              {!isAuthenticated?
              <Button color='inherit' sx={navButtons}><Link href="/" onClick={signInOnClick} color='inherit'>Login</Link></Button>
              :
              <Button color='inherit' sx={navButtons}><Link href="/" onClick={signOutOnClick} color='inherit'>Logout</Link></Button>
              }
            </Stack>

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
