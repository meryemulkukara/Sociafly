import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Bell, Mail, User, Home, TrendingUp } from 'lucide-react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar({ activeTab, setActiveTab }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', sm: 'block' },
              color: '#2563eb',
              fontWeight: 'bold'
            }}
          >
            Sociafly
          </Typography>
          
          {/* Navigation Buttons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
            <IconButton
              onClick={() => setActiveTab('home')}
              sx={{ 
                mr: 1,
                backgroundColor: activeTab === 'home' ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
                color: activeTab === 'home' ? '#2563eb' : 'inherit'
              }}
            >
              <Home size={20} />
            </IconButton>
            <IconButton
              onClick={() => setActiveTab('trending')}
              sx={{ 
                mr: 1,
                backgroundColor: activeTab === 'trending' ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
                color: activeTab === 'trending' ? '#2563eb' : 'inherit'
              }}
            >
              <TrendingUp size={20} />
            </IconButton>
          </Box>
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Ara…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
          {/* Action Buttons */}
          <Box sx={{ display: 'flex', ml: 2 }}>
            <IconButton color="inherit" sx={{ position: 'relative' }}>
              <Bell size={20} />
              <Box
                sx={{
                  position: 'absolute',
                  top: -4,
                  right: -4,
                  backgroundColor: '#ef4444',
                  color: 'white',
                  borderRadius: '50%',
                  width: 20,
                  height: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem'
                }}
              >
                3
              </Box>
            </IconButton>
            <IconButton color="inherit" sx={{ position: 'relative' }}>
              <Mail size={20} />
              <Box
                sx={{
                  position: 'absolute',
                  top: -4,
                  right: -4,
                  backgroundColor: '#ef4444',
                  color: 'white',
                  borderRadius: '50%',
                  width: 20,
                  height: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem'
                }}
              >
                7
              </Box>
            </IconButton>
            <IconButton color="inherit">
              <User size={20} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
} 