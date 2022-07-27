import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, Button, Link, Menu, MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';



export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick} 
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <MenuIcon 
            
            />
          </IconButton>

            <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem><Link href="/WEX" underline="hover">WEX</Link></MenuItem>
      </Menu>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" color="inherit">HEXs List</Link>
            {/* <Link href="/WEX" color="inherit">WEXs List</Link> */}
        
          </Typography>
          <Button color="inherit"><Link href="/HEX/new" sx={{color: 'white'}} >New File</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}