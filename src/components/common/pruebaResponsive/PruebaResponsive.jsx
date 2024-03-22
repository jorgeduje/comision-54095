import { Grid, Typography,Button } from "@mui/material";
import { caja1 } from "../../../styles";

const PruebaResponsive = () => {
  return (
    <div>
      <Grid container>
        <Button variant={"contained"} >Hola</Button>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h1" align="center" color={"primary.alternativo"}>
            Caja 1
          </Typography>
        </Grid>
        <Grid item sx={caja1} xs={12} sm={6} md={4}>
          <Typography>Caja 2</Typography>
        </Grid>
        <Grid item sx={{ backgroundColor: "red" }} xs={12} sm={6} md={4}>
          <Typography variant="h4">Caja 3</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default PruebaResponsive;
