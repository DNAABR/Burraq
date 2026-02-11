import { Box, Container, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { LocalShipping, CardGiftcard, Star } from '@mui/icons-material';

const Home = () => {
  const navigate = useNavigate();
  const featuredProducts = products.filter((p) => p.featured).slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #050505 0%, #121212 50%, #050505 100%)',
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 8, md: 12 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 60%)', // More subtle glow
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  color: 'secondary.main',
                  textTransform: 'uppercase',
                  letterSpacing: '0.4em',
                  mb: 1,
                  fontWeight: 400,
                  fontSize: { xs: '0.75rem', md: '1rem' },
                }}
              >
                Shine Like Burraq
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  mb: 2,
                  textShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
                }}
              >
                Premium Dates & Gift Boxes
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'text.secondary',
                  mb: 6,
                  maxWidth: '700px',
                  mx: 'auto',
                  fontStyle: 'italic', // Added elegance
                  fontWeight: 300,
                }}
              >
                Exquisite dates filled with premium dry fruits, crafted for those who appreciate luxury
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/products')}
                  sx={{ minWidth: '200px' }}
                >
                  View Collection
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/contact')}
                  sx={{ minWidth: '200px' }}
                >
                  Contact Us
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* USP Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Box sx={{ textAlign: 'center', p: 3 }}>
                  <Star sx={{ fontSize: 60, color: 'secondary.main', mb: 2 }} />
                  <Typography variant="h5" sx={{ mb: 2, color: 'secondary.main' }}>
                    Premium Quality
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    Handcrafted dates filled with the finest dry fruits for an exceptional taste
                    experience
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Box sx={{ textAlign: 'center', p: 3 }}>
                  <CardGiftcard sx={{ fontSize: 60, color: 'secondary.main', mb: 2 }} />
                  <Typography variant="h5" sx={{ mb: 2, color: 'secondary.main' }}>
                    Perfect Gifts
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    Elegant gift boxes perfect for any occasion, making every moment special
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Box sx={{ textAlign: 'center', p: 3 }}>
                  <LocalShipping sx={{ fontSize: 60, color: 'secondary.main', mb: 2 }} />
                  <Typography variant="h5" sx={{ mb: 2, color: 'secondary.main' }}>
                    Pakistan-Wide Delivery
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    Small orders in Karachi, nationwide delivery for orders above ₨10,000
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      {/* Featured Products */}
      <Box sx={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)', py: 8 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              sx={{ textAlign: 'center', mb: 6, fontSize: { xs: '2rem', md: '2.75rem' } }}
            >
              Featured Collection
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {featuredProducts.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      cursor: 'pointer',
                      maxWidth: '340px', // Restrict width for sharper appearance
                      mx: 'auto', // Center in grid item
                    }}
                    onClick={() => navigate('/products')}
                  >
                    <Box sx={{ p: 2, pb: 0 }}> {/* Added padding for "framed" look */}
                      <CardMedia
                        component="img"
                        image={product.image}
                        alt={product.name}
                        sx={{
                          height: 240,
                          width: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          },
                        }}
                      />
                    </Box>
                    <CardContent sx={{ flexGrow: 1, textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="h5" sx={{ mb: 1, color: 'secondary.main', minHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {product.name}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 2, color: 'text.primary', minHeight: '50px' }}>
                        {product.description}
                      </Typography>
                      <Box sx={{ mt: 'auto', pt: 2, display: 'flex', justifyContent: 'center', gap: 2, alignItems: 'center', borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}>
                        <Typography
                          variant="body2"
                          sx={{ textDecoration: 'line-through', color: 'text.secondary' }}
                        >
                          ₨{product.originalPrice}
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'secondary.main', fontWeight: 700 }}>
                          ₨{product.price}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/products')}
              sx={{ minWidth: '250px' }}
            >
              View All Products
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
