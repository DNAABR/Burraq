import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Phone, WhatsApp, LocationOn, Schedule, LocalShipping } from '@mui/icons-material';

const Contact = () => {
  const phoneNumber = '+923089862689';
  const whatsappMessage = 'Hello! I am interested in Burraq premium dates and would like to place an order.';

  const contactInfo = [
    {
      icon: <Phone sx={{ fontSize: 50 }} />,
      title: 'Phone',
      details: '+92 308 9862689',
      action: `tel:${phoneNumber}`,
      actionText: 'Call Now',
    },
    {
      icon: <WhatsApp sx={{ fontSize: 50 }} />,
      title: 'WhatsApp',
      details: '+92 308 9862689',
      action: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      actionText: 'Chat on WhatsApp',
    },
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3rem' },
                textShadow: '0 2px 10px rgba(212, 175, 55, 0.2)',
              }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'text.primary',
                maxWidth: '700px',
                mx: 'auto',
              }}
            >
              We'd love to hear from you. Reach out to place an order or ask any questions.
            </Typography>
          </Box>
        </motion.div>

        {/* Contact Methods */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    height: '100%',
                    background: 'linear-gradient(145deg, #1a1a1a 0%, #0a0a0a 100%)',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      border: '1px solid rgba(212, 175, 55, 0.5)',
                      boxShadow: '0 12px 28px rgba(212, 175, 55, 0.3)',
                    },
                  }}
                >
                  <Box sx={{ color: 'secondary.main', mb: 2 }}>{info.icon}</Box>
                  <Typography variant="h4" sx={{ mb: 2, color: 'secondary.main' }}>
                    {info.title}
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 3, color: 'text.primary' }}>
                    {info.details}
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    href={info.action}
                    target={info.title === 'WhatsApp' ? '_blank' : undefined}
                    rel={info.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                    sx={{ minWidth: '200px' }}
                  >
                    {info.actionText}
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 6, borderColor: 'rgba(212, 175, 55, 0.3)' }} />

        {/* Delivery Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: 'secondary.main',
            }}
          >
            Delivery Information
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  background: 'linear-gradient(145deg, #1a1a1a 0%, #0a0a0a 100%)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOn sx={{ fontSize: 40, color: 'secondary.main', mr: 2 }} />
                  <Typography variant="h5" sx={{ color: 'secondary.main' }}>
                    Karachi
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  Small orders are available for delivery throughout Karachi. Contact us to place your
                  order and we'll arrange quick delivery to your location.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  background: 'linear-gradient(145deg, #1a1a1a 0%, #0a0a0a 100%)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocalShipping sx={{ fontSize: 40, color: 'secondary.main', mr: 2 }} />
                  <Typography variant="h5" sx={{ color: 'secondary.main' }}>
                    All Pakistan
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  For orders with a total amount over ₨10,000, we deliver nationwide across Pakistan.
                  Shipping charges apply. Contact us for delivery details.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>

        {/* Business Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              mt: 8,
              p: 6,
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)',
              border: '2px solid rgba(212, 175, 55, 0.3)',
              borderRadius: 2,
            }}
          >
            <Typography variant="h4" sx={{ mb: 3, color: 'secondary.main' }}>
              Burraq
            </Typography>
            <Typography variant="h6" sx={{ mb: 2, color: 'text.primary' }}>
              Premium Dates & Gift Boxes
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
              Your trusted source for exquisite dates and elegant gift boxes
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap', mt: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Schedule sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Available Daily
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Phone sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  +92 308 9862689
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
