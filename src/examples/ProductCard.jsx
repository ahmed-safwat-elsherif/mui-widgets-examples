import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Chip,
  Button,
  Box,
  Stack,
  Divider,
} from "@mui/material";

const ProductCard = () => {
  return (
    <Card sx={{ maxWidth: 300, m: 2 }}>
      <CardMedia
        component="img"
        height="160"
        image="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg"
        alt="Product"
      />
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h6">Wireless Headphones</Typography>
          <Rating value={4} readOnly />
          <Chip label="In Stock" color="success" />
          <Typography>$99.99</Typography>
        </Stack>
      </CardContent>
      <Divider />
      <Box p={2}>
        <Button variant="contained" fullWidth>
          Add to Cart
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
