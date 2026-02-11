import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar position="sticky" elevation={2}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo Section */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              gap: 2,
            }}
          >
            <motion.img
              src="/burraqlogonobg.png"
              alt="Burraq Logo"
              style={{ height: '50px', width: 'auto' }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, #F4E4BC 0%, #D4AF37 100%)', // Updated gradient
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: { xs: 'none', sm: 'block' },
                letterSpacing: '0.05em', // More spaced out
              }}
            >
              Burraq
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  color: isActive(item.path) ? '#FFD700' : '#D4AF37',
                  borderBottom: isActive(item.path)
                    ? '2px solid #FFD700'
                    : '2px solid transparent',
                  borderRadius: 0,
                  px: { xs: 1.5, sm: 2 },
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  fontWeight: isActive(item.path) ? 600 : 500,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#FFD700',
                    borderBottom: '2px solid #FFD700',
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
