import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Product', href: '#medoli' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar 
      position="fixed" 
      elevation={scrolled ? 8 : 0} 
      sx={{
        background: scrolled 
          ? 'rgba(10,26,47,0.95)' 
          : 'rgba(10,26,47,0.9)',
        backdropFilter: 'blur(10px)',
        boxShadow: scrolled 
          ? '0 4px 20px rgba(0,0,0,0.15)' 
          : '0 2px 12px 0 rgba(10,26,47,0.08)',
        zIndex: 1201,
        transition: 'all 0.3s ease',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: 60 }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src={process.env.PUBLIC_URL + '/logo.svg'} 
              alt="Tech Adivas Logo" 
              style={{ 
                width: scrolled ? 100 : 130, 
                height: scrolled ? 100 : 130,
                filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)',
                transition: 'all 0.3s ease',
              }} 
            />
          </Box>

          {/* Navigation Menu - Aligned to the right */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2, alignItems: 'center', ml: 'auto' }}>
            {navLinks.map(link => (
              <Button
                key={link.href}
                component="a"
                href={link.href}
                sx={{
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: scrolled ? '0.85rem' : '0.9rem',
                  textTransform: 'none',
                  background: 'none',
                  textDecoration: 'none',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  '&:hover': {
                    color: '#FFD600',
                    background: 'rgba(255,214,0,0.1)',
                    transform: 'translateY(-1px)',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    width: 0,
                    height: 2,
                    background: '#FFD600',
                    transition: 'all 0.3s ease',
                    transform: 'translateX(-50%)',
                  },
                  '&:hover::after': {
                    width: '80%',
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <Button
              sx={{
                color: '#fff',
                minWidth: 'auto',
                p: 1,
              }}
            >
              <Box sx={{ width: 20, height: 2, background: '#fff', mb: 0.5 }} />
              <Box sx={{ width: 20, height: 2, background: '#fff', mb: 0.5 }} />
              <Box sx={{ width: 20, height: 2, background: '#fff' }} />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 