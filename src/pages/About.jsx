import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Verified, CardGiftcard, LocalShipping, Star } from '@mui/icons-material';

const About = () => {
  const values = [
    {
      icon: <Verified sx={{ fontSize: 50 }} />,
      title: 'Premium Quality',
      description:
        'We source only the finest dates and dry fruits to create our exceptional products that exceed expectations.',
    },
    {
      icon: <CardGiftcard sx={{ fontSize: 50 }} />,
      title: 'Perfect for Gifting',
      description:
        'Our elegant gift boxes are designed to make every occasion special, from celebrations to corporate gifts.',
    },
    {
      icon: <LocalShipping sx={{ fontSize: 50 }} />,
      title: 'Reliable Delivery',
      description:
        'Serving Karachi with small orders and delivering across Pakistan for orders above ₨10,000.',
    },
    {
      icon: <Star sx={{ fontSize: 50 }} />,
      title: 'Customer Satisfaction',
      description:
        'We are committed to providing exceptional service and products that bring joy to our customers.',
    },
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
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
              About Burraq
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'text.primary',
                maxWidth: '800px',
                mx: 'auto',
                mb: 4,
                lineHeight: 1.8,
              }}
            >
              Where tradition meets luxury in every bite
            </Typography>
          </Box>
        </motion.div>

        {/* Story Section */}
        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                component="img"
                src="/burraqlogo.jpeg"
                alt="Burraq"
                sx={{
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                  margin: '0 auto',
                  display: 'block',
                  filter: 'drop-shadow(0 8px 32px rgba(212, 175, 55, 0.3))',
                }}
              />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h3" sx={{ mb: 3, color: 'secondary.main' }}>
                Our Story
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                Burraq was founded with a vision to bring the finest dates and premium dry fruit
                combinations to discerning customers. We believe that luxury should be accessible, and
                that every gift should be memorable.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                Our name, Burraq, symbolizes excellence and swiftness in delivering quality products to
                your doorstep. Each piece in our collection is carefully crafted, combining traditional
                flavors with contemporary elegance.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                From intimate gatherings to grand celebrations, our premium dates and gift boxes are
                designed to add a touch of sophistication to every moment.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        {/* Values Section */}
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
            What We Stand For
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    textAlign: 'center',
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
                  <Box sx={{ color: 'secondary.main', mb: 2 }}>{value.icon}</Box>
                  <Typography variant="h5" sx={{ mb: 2, color: 'secondary.main' }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.primary', lineHeight: 1.7 }}>
                    {value.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Mission Statement */}
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
              Our Mission
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.primary',
                maxWidth: '900px',
                mx: 'auto',
                lineHeight: 1.8,
                fontStyle: 'italic',
              }}
            >
              "To deliver premium quality dates and gift boxes that transform ordinary moments into
              extraordinary memories, while maintaining the highest standards of excellence in every
              product we create."
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
