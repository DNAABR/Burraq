import { Box, Container, Typography, IconButton, Divider, Grid } from '@mui/material';
import { Phone, WhatsApp, LocalShipping } from '@mui/icons-material';

const Footer = () => {
  const phoneNumber = '+923089862689';
  const whatsappMessage = 'Hello! I am interested in Burraq premium dates.';

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
        borderTop: '2px solid rgba(212, 175, 55, 0.3)',
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <img
                src="/burraqlogonobg.png"
                alt="Burraq Logo"
                style={{ height: '60px', width: 'auto' }}
              />
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                Burraq
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'secondary.main', mb: 2, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
              Shine Like Burraq
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              Premium dates and gift boxes. Crafted with excellence, delivered with care.
            </Typography>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, color: 'secondary.main' }}>
              Get in Touch
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone sx={{ color: 'secondary.main' }} />
                <Typography
                  component="a"
                  href={`tel:${phoneNumber}`}
                  sx={{
                    color: 'text.primary',
                    textDecoration: 'none',
                    '&:hover': { color: 'secondary.light' },
                  }}
                >
                  +92 308 9862689
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <WhatsApp sx={{ color: 'secondary.main' }} />
                <Typography
                  component="a"
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'text.primary',
                    textDecoration: 'none',
                    '&:hover': { color: 'secondary.light' },
                  }}
                >
                  WhatsApp us
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Shipping Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, color: 'secondary.main' }}>
              Delivery Information
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
              <LocalShipping sx={{ color: 'secondary.main', mt: 0.5 }} />
              <Box>
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  <strong>Karachi:</strong> No minimum order required. No shipping charges.
                </Typography>
                <Typography variant="body2">
                  <strong>Rest of Pakistan:</strong> Standard shipping charges apply.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: 'rgba(212, 175, 55, 0.2)' }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © {new Date().getFullYear()} Burraq. All rights reserved. Premium Dates & Gift Boxes.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
