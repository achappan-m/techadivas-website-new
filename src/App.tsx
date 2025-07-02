import React, { useRef, useState } from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { keyframes } from '@emotion/react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// AI-powered globe and tech animations
const globeRotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const slideInLeft = keyframes`
  from { transform: translateX(-100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const slideInRight = keyframes`
  from { transform: translateX(100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const fadeInUp = keyframes`
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const heartbeat = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
`;

const dataFlow = keyframes`
  0% { transform: translateY(0px) scale(1); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(-100px) scale(0.8); opacity: 0; }
`;

const theme = createTheme({
  palette: {
    primary: {
      main: '#0A1A2F',
    },
    secondary: {
      main: '#FFD600',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

function App() {
  const bgRef = useRef<HTMLDivElement>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 20;
    const y = (e.clientY / innerHeight - 0.5) * 20;
    if (bgRef.current) {
      bgRef.current.style.transform = `scale(1.08) translate(${x}px, ${y}px)`;
    }
  };
  const handleMouseLeave = () => {
    if (bgRef.current) {
      bgRef.current.style.transform = 'scale(1.08) translate(0,0)';
    }
  };

  // Form handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission (replace with actual email service)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSnackbar({
        open: true,
        message: 'Message sent successfully! We\'ll get back to you soon.',
        severity: 'success'
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      
      {/* Hero Section with AI Human Body Image, Parallax, and Centered Ken Burns Effect */}
      <Box
        id="home"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        sx={{
          width: '100%',
          minHeight: '100vh',
          paddingTop: '80px', // Account for fixed header
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Motion background image */}
        <Box
          ref={bgRef}
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${process.env.PUBLIC_URL + '/ai-human-body-bg.jpg'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: 'kenBurns 20s ease-in-out infinite alternate',
            transition: 'transform 0.4s cubic-bezier(.25,.8,.25,1)',
            zIndex: 0,
            transformOrigin: 'center center',
          }}
        />
        {/* Animated dark overlay for readability */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(120deg, rgba(10,26,47,0.85) 60%, rgba(20,40,80,0.7) 100%)',
            zIndex: 1,
            animation: 'pulseOverlay 8s ease-in-out infinite',
            pointerEvents: 'none',
          }}
        />
        {/* Centered Hero content */}
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: { xs: '60vh', md: '70vh' },
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: '#fff',
              fontWeight: 900,
              mb: 3,
              fontSize: { xs: '2.5rem', md: '4rem', lg: '4.5rem' },
              animation: `${fadeInUp} 1.2s ease-out`,
              lineHeight: 1.1,
            }}
          >
            Amplify Human Potential
            <br />
            Through Technology
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#B0C4DE',
              fontWeight: 500,
              mb: 6,
              maxWidth: 800,
              mx: 'auto',
              animation: `${fadeInUp} 1.2s ease-out 0.4s both`,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              lineHeight: 1.6,
            }}
          >
            AI-powered healthcare solutions for a smarter, healthier future.
          </Typography>
          
          {/* Transparent Feature Cards */}
          <Grid container spacing={3} sx={{ maxWidth: 1000, mx: 'auto' }}>
            {[
              {
                icon: '🤖',
                title: 'AI Diagnostics',
                description: 'Advanced machine learning for accurate disease detection'
              },
              {
                icon: '📊',
                title: 'Real-time Analytics',
                description: 'Instant insights and predictive healthcare analytics'
              },
              {
                icon: '🏥',
                title: 'Telemedicine',
                description: 'Seamless remote patient consultations and care'
              },
              {
                icon: '🔬',
                title: 'Research Tools',
                description: 'Cutting-edge research and development capabilities'
              }
            ].map((card, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  className="hero-card"
                  sx={{
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: 3,
                    p: 3,
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    animation: `${fadeInUp} 1s ease-out ${0.6 + index * 0.1}s both`,
                    cursor: 'pointer',
                    '&:hover': {
                      background: 'rgba(255,255,255,0.15)',
                      transform: 'translateY(-8px) scale(1.02)',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      '& .card-icon': {
                        animation: 'bounce 0.8s ease-in-out',
                      },
                    },
                    '&:active': {
                      transform: 'translateY(-4px) scale(0.98)',
                      transition: 'all 0.1s ease',
                    },
                  }}
                >
                  <Typography
                    variant="h2"
                    className="card-icon"
                    sx={{
                      fontSize: '2.5rem',
                      mb: 2,
                      animation: `${float} 6s ease-in-out infinite ${index * 0.5}s`,
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        animation: 'jump 0.6s ease-in-out',
                      },
                    }}
                  >
                    {card.icon}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#FFD600',
                      fontWeight: 700,
                      mb: 1,
                      fontSize: '1rem',
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#B0C4DE',
                      fontSize: '0.85rem',
                      lineHeight: 1.4,
                    }}
                  >
                    {card.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Medoli Product Section */}
      <Box
        id="medoli"
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #FFD600 0%, #FFC400 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated health icons */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            right: '5%',
            fontSize: '4rem',
            animation: `${float} 7s ease-in-out infinite`,
            opacity: 0.1,
          }}
        >
          🩺
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: '15%',
            left: '5%',
            fontSize: '3rem',
            animation: `${pulse} 5s ease-in-out infinite`,
            opacity: 0.1,
          }}
        >
          📊
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '8%',
            fontSize: '2.5rem',
            animation: `${rotate} 15s linear infinite`,
            opacity: 0.1,
          }}
        >
          🧬
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: '40%',
            right: '12%',
            fontSize: '3rem',
            animation: `${float} 8s ease-in-out infinite`,
            animationDelay: '3s',
            opacity: 0.1,
          }}
        >
          ⚕️
        </Box>

        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  color: '#0A1A2F',
                  fontWeight: 900,
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3rem' },
                  animation: `${slideInLeft} 1s ease-out`,
                }}
              >
                Meet Medoli
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: '#0A1A2F',
                  fontWeight: 700,
                  mb: 4,
                  fontSize: { xs: '1.5rem', md: '1.8rem' },
                  animation: `${slideInLeft} 1s ease-out 0.2s both`,
                }}
              >
                Your AI-Powered Healthcare Assistant
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#0A1A2F',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 4,
                  fontWeight: 500,
                  animation: `${slideInLeft} 1s ease-out 0.4s both`,
                }}
              >
                Medoli revolutionizes healthcare delivery with advanced AI diagnostics, 
                intelligent patient management, and predictive analytics. Experience 
                the future of healthcare technology.
              </Typography>
              
              <Box sx={{ mb: 4, animation: `${slideInLeft} 1s ease-out 0.6s both` }}>
                <Grid container spacing={2}>
                  {[
                    '🔬 Advanced AI Diagnostics',
                    '📊 Real-time Analytics',
                    '🏥 Telemedicine Integration',
                    '🤖 Predictive Insights'
                  ].map((feature, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          mb: 2,
                          animation: `${fadeInUp} 0.8s ease-out ${0.8 + index * 0.1}s both`,
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            color: '#0A1A2F',
                            fontWeight: 600,
                            fontSize: '1rem',
                          }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', animation: `${slideInLeft} 1s ease-out 0.8s both` }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: '#0A1A2F',
                    color: '#FFD600',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    '&:hover': {
                      background: '#142850',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(10,26,47,0.3)',
                      animation: `${heartbeat} 0.6s ease-in-out`,
                    },
                  }}
                >
                  Try Medoli Free
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: '#0A1A2F',
                    color: '#0A1A2F',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    borderWidth: 2,
                    '&:hover': {
                      borderColor: '#142850',
                      background: 'rgba(10,26,47,0.1)',
                      borderWidth: 2,
                      animation: `${pulse} 0.6s ease-in-out`,
                    },
                  }}
                >
                  Watch Demo
                </Button>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  background: '#fff',
                  borderRadius: 4,
                  p: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  position: 'relative',
                  animation: `${slideInRight} 1s ease-out`,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -10,
                    left: -10,
                    right: -10,
                    bottom: -10,
                    background: 'linear-gradient(45deg, #FFD600, #FFC400)',
                    borderRadius: 5,
                    zIndex: -1,
                  }
                }}
              >
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, #0A1A2F 0%, #142850 100%)',
                    borderRadius: 3,
                    p: 4,
                    color: '#fff',
                    textAlign: 'center',
                    mb: 3,
                    animation: `${pulse} 4s ease-in-out infinite`,
                  }}
                >
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: '#FFD600' }}>
                    Medoli Dashboard
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, color: '#B0C4DE' }}>
                    Real-time patient monitoring and AI-powered insights
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 2 }}>
                    <Box sx={{ textAlign: 'center', animation: `${float} 6s ease-in-out infinite` }}>
                      <Typography variant="h4" sx={{ fontWeight: 700, color: '#FFD600' }}>
                        99.8%
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#B0C4DE' }}>
                        Accuracy Rate
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center', animation: `${float} 6s ease-in-out infinite 2s` }}>
                      <Typography variant="h4" sx={{ fontWeight: 700, color: '#FFD600' }}>
                        &lt; 2s
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#B0C4DE' }}>
                        Response Time
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center', animation: `${float} 6s ease-in-out infinite 4s` }}>
                      <Typography variant="h4" sx={{ fontWeight: 700, color: '#FFD600' }}>
                        24/7
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#B0C4DE' }}>
                        Availability
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ color: '#0A1A2F', fontWeight: 600, mb: 2 }}>
                    Key Features
                  </Typography>
                  <Grid container spacing={2}>
                    {[
                      { icon: '🤖', label: 'AI Diagnostics' },
                      { icon: '📱', label: 'Mobile App' },
                      { icon: '🔒', label: 'HIPAA Compliant' },
                      { icon: '📊', label: 'Analytics' },
                      { icon: '🏥', label: 'EHR Integration' },
                      { icon: '⚡', label: 'Real-time' }
                    ].map((feature, index) => (
                      <Grid item xs={4} sm={2} key={index}>
                        <Box 
                          sx={{ 
                            textAlign: 'center',
                            animation: `${fadeInUp} 0.8s ease-out ${1.2 + index * 0.1}s both`,
                            '&:hover': {
                              animation: `${pulse} 0.6s ease-in-out`,
                            }
                          }}
                        >
                          <Typography variant="h4" sx={{ mb: 1 }}>
                            {feature.icon}
                          </Typography>
                          <Typography variant="caption" sx={{ color: '#4A5568', fontWeight: 500 }}>
                            {feature.label}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box
        id="about"
        sx={{
          py: { xs: 8, md: 12 },
          background: '#fff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            fontSize: '3rem',
            animation: `${rotate} 25s linear infinite`,
            opacity: 0.05,
          }}
        >
          🧬
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: '30%',
            left: '5%',
            fontSize: '2.5rem',
            animation: `${float} 8s ease-in-out infinite`,
            opacity: 0.05,
          }}
        >
          🔬
        </Box>

        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  color: '#0A1A2F',
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  animation: `${slideInLeft} 1s ease-out`,
                }}
              >
                About Tech Adivas
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#4A5568',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 3,
                  animation: `${slideInLeft} 1s ease-out 0.2s both`,
                }}
              >
                We are a forward-thinking technology company specializing in AI-powered healthcare solutions. 
                Our mission is to revolutionize healthcare delivery through innovative technology that enhances 
                human potential and improves patient outcomes.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#4A5568',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 4,
                  animation: `${slideInLeft} 1s ease-out 0.4s both`,
                }}
              >
                With years of experience in healthcare technology and artificial intelligence, our team 
                combines deep domain expertise with cutting-edge technical skills to deliver solutions 
                that make a real difference.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  background: 'linear-gradient(135deg, #0A1A2F 0%, #142850 100%)',
                  borderRadius: 4,
                  p: 4,
                  color: '#fff',
                  textAlign: 'center',
                  animation: `${slideInRight} 1s ease-out`,
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, animation: `${pulse} 4s ease-in-out infinite` }}>
                  500+
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Healthcare Providers Served
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, animation: `${pulse} 4s ease-in-out infinite 1s` }}>
                  95%
                </Typography>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Client Satisfaction Rate
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, animation: `${pulse} 4s ease-in-out infinite 2s` }}>
                  24/7
                </Typography>
                <Typography variant="h6">
                  Support Available
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box
        id="services"
        sx={{
          py: { xs: 8, md: 12 },
          background: '#F7FAFC',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 1,
          marginTop: '-80px', // Compensate for fixed header
          paddingTop: { xs: '120px', md: '140px' }, // Add extra padding to account for header
        }}
      >
        {/* Animated background elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '15%',
            left: '5%',
            fontSize: '4rem',
            animation: `${float} 9s ease-in-out infinite`,
            opacity: 0.05,
          }}
        >
          🏥
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            right: '8%',
            fontSize: '3rem',
            animation: `${rotate} 30s linear infinite`,
            opacity: 0.05,
          }}
        >
          ⚕️
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '60%',
            left: '15%',
            fontSize: '2.5rem',
            animation: `${pulse} 6s ease-in-out infinite`,
            opacity: 0.05,
          }}
        >
          🔬
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: '60%',
            right: '20%',
            fontSize: '3rem',
            animation: `${float} 10s ease-in-out infinite`,
            animationDelay: '4s',
            opacity: 0.05,
          }}
        >
          💊
        </Box>

        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                color: '#0A1A2F',
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: '2rem', md: '2.5rem' },
                animation: `${fadeInUp} 1s ease-out`,
              }}
            >
              Our Services
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#4A5568',
                fontWeight: 500,
                maxWidth: 600,
                mx: 'auto',
                animation: `${fadeInUp} 1s ease-out 0.3s both`,
              }}
            >
              Comprehensive AI-powered solutions for modern healthcare
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                title: 'AI Diagnostics',
                description: 'Advanced diagnostic tools powered by machine learning for accurate and rapid disease detection.',
                icon: '🔬'
              },
              {
                title: 'Patient Management',
                description: 'Comprehensive patient data management systems with intelligent insights and predictive analytics.',
                icon: '📊'
              },
              {
                title: 'Telemedicine Platform',
                description: 'Secure and scalable telemedicine solutions for remote patient consultations and care.',
                icon: '🏥'
              },
              {
                title: 'Healthcare Analytics',
                description: 'Data-driven insights and analytics to optimize healthcare operations and improve outcomes.',
                icon: '📈'
              },
              {
                title: 'Custom AI Solutions',
                description: 'Tailored AI solutions designed specifically for your healthcare organization\'s unique needs.',
                icon: '🤖'
              },
              {
                title: 'Integration Services',
                description: 'Seamless integration with existing healthcare systems and third-party applications.',
                icon: '🔗'
              }
            ].map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    background: '#fff',
                    borderRadius: 3,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    animation: `${fadeInUp} 0.8s ease-out ${0.6 + index * 0.1}s both`,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                      '& .service-icon': {
                        animation: `${pulse} 0.6s ease-in-out`,
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Typography 
                      variant="h1" 
                      className="service-icon"
                      sx={{ 
                        fontSize: '3rem', 
                        mb: 2,
                        animation: `${float} 6s ease-in-out infinite ${index * 0.5}s`,
                      }}
                    >
                      {service.icon}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: '#0A1A2F',
                        fontWeight: 700,
                        mb: 2,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#4A5568',
                        lineHeight: 1.6,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        id="contact"
        sx={{
          py: { xs: 8, md: 12 },
          background: '#0A1A2F',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '25%',
            left: '10%',
            fontSize: '3rem',
            animation: `${pulse} 5s ease-in-out infinite`,
            opacity: 0.1,
          }}
        >
          📞
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: '30%',
            right: '15%',
            fontSize: '2.5rem',
            animation: `${float} 7s ease-in-out infinite`,
            opacity: 0.1,
          }}
        >
          📧
        </Box>

        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                color: '#fff',
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: '2rem', md: '2.5rem' },
                animation: `${fadeInUp} 1s ease-out`,
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#B0C4DE',
                fontWeight: 500,
                maxWidth: 600,
                mx: 'auto',
                animation: `${fadeInUp} 1s ease-out 0.3s both`,
              }}
            >
              Ready to transform your healthcare with AI? Let's discuss your needs.
            </Typography>
          </Box>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  p: 4,
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: 3,
                  border: '1px solid rgba(255,255,255,0.1)',
                  animation: `${slideInLeft} 1s ease-out`,
                }}
              >
                <Typography variant="h6" sx={{ color: '#FFD600', mb: 3, fontWeight: 600 }}>
                  Contact Information
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, animation: `${fadeInUp} 0.8s ease-out 0.4s both` }}>
                    <EmailIcon sx={{ color: '#FFD600', mr: 2, fontSize: '1.5rem' }} />
                    <Typography variant="body1" sx={{ color: '#fff' }}>
                      admin@techadivas.com
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, animation: `${fadeInUp} 0.8s ease-out 0.6s both` }}>
                    <LocationOnIcon sx={{ color: '#FFD600', mr: 2, fontSize: '1.5rem' }} />
                    <Typography variant="body1" sx={{ color: '#fff' }}>
                      123 Tech Street, Innovation City, IC 12345
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1" sx={{ color: '#B0C4DE', lineHeight: 1.6, animation: `${fadeInUp} 0.8s ease-out 1s both` }}>
                  We're here to help you implement cutting-edge AI solutions in your healthcare practice. 
                  Reach out to us for a consultation or to learn more about our services.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  p: 4,
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: 3,
                  border: '1px solid rgba(255,255,255,0.1)',
                  animation: `${slideInRight} 1s ease-out`,
                }}
              >
                <Typography variant="h6" sx={{ color: '#FFD600', mb: 3, fontWeight: 600 }}>
                  Send us a Message
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <TextField
                    name="name"
                    label="Name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#fff',
                        '& fieldset': {
                          borderColor: 'rgba(255,255,255,0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#FFD600',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#FFD600',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#B0C4DE',
                        '&.Mui-focused': {
                          color: '#FFD600',
                        },
                      },
                    }}
                  />
                  <TextField
                    name="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#fff',
                        '& fieldset': {
                          borderColor: 'rgba(255,255,255,0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#FFD600',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#FFD600',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#B0C4DE',
                        '&.Mui-focused': {
                          color: '#FFD600',
                        },
                      },
                    }}
                  />
                  <TextField
                    name="message"
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: '#fff',
                        '& fieldset': {
                          borderColor: 'rgba(255,255,255,0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#FFD600',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#FFD600',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: '#B0C4DE',
                        '&.Mui-focused': {
                          color: '#FFD600',
                        },
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isSubmitting}
                    sx={{
                      background: '#FFD600',
                      color: '#0A1A2F',
                      fontWeight: 700,
                      py: 1.5,
                      '&:hover': {
                        background: '#FFC400',
                        animation: `${heartbeat} 0.6s ease-in-out`,
                      },
                      '&:disabled': {
                        background: 'rgba(255,214,0,0.5)',
                        color: 'rgba(10,26,47,0.5)',
                      },
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />

      {/* Success/Error Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{
            width: '100%',
            background: snackbar.severity === 'success' ? '#4caf50' : '#f44336',
            color: '#fff',
            '& .MuiAlert-icon': {
              color: '#fff',
            },
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}

export default App;
