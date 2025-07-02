import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import { GitHub, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      mt: 6,
      py: 4,
      background: 'linear-gradient(90deg, #1976d2 0%, #ffd600 100%)',
      color: '#1a237e',
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      boxShadow: '0 -4px 32px 0 rgba(31, 38, 135, 0.10)',
    }}
  >
    <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: { xs: 'center', md: 'space-between' }, minHeight: 120 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, md: 0 }, justifyContent: { xs: 'center', md: 'flex-start' }, width: { xs: '100%', md: 'auto' } }}>
        <img 
          src={process.env.PUBLIC_URL + '/logo.svg'} 
          alt="Tech Adivas Logo" 
          style={{ 
            width: 100, 
            height: 100,
            filter: 'brightness(0) saturate(100%) invert(20%) sepia(20%) saturate(2000%) hue-rotate(200deg) brightness(90%) contrast(90%)'
          }} 
        />
      </Box>
      <Box sx={{ display: 'flex', gap: 4, mb: { xs: 2, md: 0 } }}>
        <Link href="#home" underline="none" color="inherit" sx={{ fontWeight: 700, fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', '&:hover': { color: '#fff' } }}>Home</Link>
        <Link href="#about" underline="none" color="inherit" sx={{ fontWeight: 700, fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', '&:hover': { color: '#fff' } }}>About</Link>
        <Link href="#services" underline="none" color="inherit" sx={{ fontWeight: 700, fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', '&:hover': { color: '#fff' } }}>Services</Link>
        <Link href="#products" underline="none" color="inherit" sx={{ fontWeight: 700, fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', '&:hover': { color: '#fff' } }}>Products</Link>
        <Link href="#contact" underline="none" color="inherit" sx={{ fontWeight: 700, fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', '&:hover': { color: '#fff' } }}>Contact</Link>
      </Box>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <IconButton color="inherit" href="https://github.com/" target="_blank" sx={{ '&:hover': { color: '#fff' } }}>
          <GitHub />
        </IconButton>
        <IconButton color="inherit" href="https://twitter.com/" target="_blank" sx={{ '&:hover': { color: '#fff' } }}>
          <Twitter />
        </IconButton>
        <IconButton color="inherit" href="https://linkedin.com/" target="_blank" sx={{ '&:hover': { color: '#fff' } }}>
          <LinkedIn />
        </IconButton>
      </Box>
    </Container>
    <Typography align="center" sx={{ mt: 3, fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '0.9rem' }}>
      Made with <span role="img" aria-label="AI">🤖</span> by Tech Adivas &copy; {new Date().getFullYear()}
    </Typography>
  </Box>
);

export default Footer; 