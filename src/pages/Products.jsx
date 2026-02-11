import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { products } from '../data/products';

const Products = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3rem' },
                textShadow: '0 2px 10px rgba(212, 175, 55, 0.2)',
              }}
            >
              Our Premium Collection
            </Typography>
            <Typography variant="h6" sx={{ color: 'text.primary', maxWidth: '700px', mx: 'auto' }}>
              Discover our exquisite range of dates, each piece crafted with care and filled with the
              finest ingredients
            </Typography>
          </Box>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <motion.div variants={cardVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      overflow: 'visible',
                      maxWidth: '360px',
                      mx: 'auto',
                    }}
                  >
                    {/* Featured Badge */}
                    {product.featured && (
                      <Chip
                        label="Featured"
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 24, // Adjusted for padding
                          right: 24, // Adjusted for padding
                          zIndex: 2,
                          background: 'linear-gradient(135deg, #F4E4BC 0%, #D4AF37 100%)',
                          color: '#000000',
                          fontWeight: 600,
                          boxShadow: '0 4px 12px rgba(212, 175, 55, 0.4)',
                        }}
                      />
                    )}

                    {/* Product Image */}
                    <Box sx={{ p: 2, pb: 0 }}>
                      <Box sx={{ overflow: 'hidden', position: 'relative' }}>
                        <CardMedia
                          component="img"
                          image={product.image}
                          alt={product.name}
                          sx={{
                            height: 240,
                            width: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease',
                            '&:hover': {
                              transform: 'scale(1.05)',
                            },
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to top, rgba(26, 26, 26, 0.7) 0%, transparent 50%)',
                            opacity: 0,
                            transition: 'opacity 0.4s ease',
                            '&:hover': {
                              opacity: 1,
                            },
                          }}
                        />
                      </Box>
                    </Box>

                    {/* Product Details */}
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        p: 3,
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 1.5,
                          color: 'secondary.main',
                          fontWeight: 600,
                          minHeight: '75px', // Adjusted for consistency
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          mb: 2,
                          color: 'text.primary',
                          minHeight: '85px', // Fixed height for description
                          lineHeight: 1.6,
                        }}
                      >
                        {product.description}
                      </Typography>

                      {/* Pricing */}
                      <Box
                        sx={{
                          mt: 'auto', // Push to bottom
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: 2,
                          pt: 2,
                          borderTop: '1px solid rgba(212, 175, 55, 0.2)',
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            textDecoration: 'line-through',
                            color: 'text.secondary',
                            fontWeight: 400,
                          }}
                        >
                          ₨{product.originalPrice}
                        </Typography>
                        <Typography
                          variant="h4"
                          sx={{
                            color: 'secondary.main',
                            fontWeight: 700,
                            textShadow: '0 2px 8px rgba(212, 175, 55, 0.3)',
                          }}
                        >
                          ₨{product.price}
                        </Typography>
                      </Box>

                      {/* Savings Badge */}
                      <Box sx={{ mt: 2 }}>
                        <Chip
                          label={`Save ₨${product.originalPrice - product.price}`}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(212, 175, 55, 0.2)',
                            color: 'secondary.light',
                            fontWeight: 600,
                          }}
                        />
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Box
            sx={{
              mt: 8,
              p: 4,
              textAlign: 'center',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
              border: '2px solid rgba(212, 175, 55, 0.3)',
              borderRadius: 2,
            }}
          >
            <Typography variant="h4" sx={{ mb: 2, color: 'secondary.main' }}>
              Ready to Order?
            </Typography>
            <Typography variant="h6" sx={{ mb: 3, color: 'text.primary' }}>
              Contact us via WhatsApp or phone to place your order
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              <strong>📞 +92 308 9862689</strong>
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Products;
