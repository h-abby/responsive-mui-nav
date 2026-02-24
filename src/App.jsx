import { AppBar,
         Avatar,
         createTheme,
        IconButton,
        Drawer,
        List,
        Tooltip, 
        Typography,
        Toolbar,
        Box,
        Button, 
        Menu, 
        MenuItem, 
        ListItemIcon, 
        ListItemButton,
         ListItemText,
         Divider, 
        Collapse 
        } from '@mui/material'
import {ThemeProvider} from '@mui/material'
import React from 'react'
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const darkTheme = createTheme({
  palette: {
    mode:'dark'
  }
})
function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [settingsOpen, setSettingsOpen] = React.useState(false)
  const anchorElRef = React.useRef(null)

    const handleSettingsClick = ()=> {
    setSettingsOpen(!settingsOpen)
  }

  const handleMenuOpen = (e)=> {
    setMenuOpen(true)
  }
  const handleMenuClose = (e)=> {
setMenuOpen(false)  }
  const toggleDrawer = (value)=> {
    setDrawerOpen(value)
  }
 
  return (
     <ThemeProvider theme={darkTheme}>
      <AppBar elevation={0} sx={{zIndex: theme=> theme.zIndex.drawer + 1}} onClick={()=>{ drawerOpen && toggleDrawer(false)}}>
        <Toolbar sx={{paddingLeft: {xs:'16px',sm:'16px'}}}>
          <Typography variant='h6' noWrap >
            Responsive mui-navbar
          </Typography>
          <Box sx={{
            ml:'auto',
            '& .MuiButton-root':{
              textTransform:'capitalize',
            },
            '& .MuiIconButton-root':{
              padding:0,
              ml:1
            },
            display:{xs:'none',sm:'none',md:'block'}
            }}
            >
            <Button 
             component='a'
             disableRipple
             color='inherit'
            >
             Contact
            </Button>
            <Button 
             component='a'
             disableRipple
             color='inherit'
            >
             Profile
            </Button>
            <Tooltip title='Account settings'>
              <IconButton onClick={handleMenuOpen} ref={anchorElRef}>
                <Avatar sx={{
                  height: 32,
                  width: 32
                }}>M</Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <IconButton sx={{ml:'auto', display:{sm:'block',md:'none'}}} onClick={()=>toggleDrawer(true)}>
            <MenuIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu
       open={menuOpen}
       anchorEl={anchorElRef.current}
       onClose={handleMenuClose}
       sx={{display:{xs:'none',sm:'none',md:'block'}}}
       slotProps={{
        paper: {
          sx:{
            mt: 1.5,
            overflow:'visible',
            '&::before':{
              content:'""',
              position:'absolute',
              top:0,
              height:10,
              width:10,
              right: 19,
              transform: 'translateY(-50%) rotate(45deg)',
              background:'#2e2e2e',
              display:'block',
              zIndex:0

            }
          }
        }
       }}
      >
        <MenuItem onClick={handleMenuClose} sx={{fontSize:'0.875rem'}}>
          <ListItemIcon >
            <Settings/>
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{fontSize:'0.875rem'}}>
          <ListItemIcon>
            <Logout/>
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      <Drawer
       open={drawerOpen}
       onClose={()=>toggleDrawer(false)}
       sx={{display:{md:'none'}}}
       >
        <Box sx={{width: 240,'& .MuiListItemIcon-root':{minWidth: 45}}} >
        <Toolbar/>
          <Divider/>
          <List>
              <ListItemButton onClick={handleSettingsClick}>
            <ListItemIcon>
              <Avatar sx={{height:32, width:32}}>M</Avatar>
            </ListItemIcon>
              <ListItemText primary='Account management'/>
              {settingsOpen? <ExpandLessIcon/>:<ExpandMoreIcon/>}
            </ListItemButton>
                <Collapse in={settingsOpen} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                 <ListItemButton sx={{pl:4}}>
                   <ListItemIcon >
                     <Settings/>
                   </ListItemIcon>
                   <ListItemText primary='Settings'/>
                 </ListItemButton>
                 <ListItemButton sx={{pl:4}}>
                   <ListItemIcon >
                     <Logout/>
                   </ListItemIcon>
                   <ListItemText primary='Logout'/>
                 </ListItemButton>

              </List>
            </Collapse>
            <Divider/>
            <ListItemButton>
              <ListItemText primary='Contact'/>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary='Profile'/>
            </ListItemButton>
            <Divider/>
        
          </List>
        </Box>
      </Drawer>

    </ThemeProvider >

  )
}

export default App
