import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductCard = ({ title, description, price, img, id }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title="green iguana"
      />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         { title }
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         $ {price} .-
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver detalle</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
