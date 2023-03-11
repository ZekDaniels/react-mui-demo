import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

export const MuiCard = () => {
  return (
    <Box width="300ox">
      <Card>
        <CardMedia component="img" height="140" image="https://source.unsplash.com/random" alt="random image"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam
            sint quidem minima. Expedita nesciunt minima enim voluptatem beatae.
            Eum obcaecati nostrum fuga dolore iste molestias quos culpa
            reiciendis hic.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
