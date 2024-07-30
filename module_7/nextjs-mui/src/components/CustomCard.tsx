import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { ReactNode } from "react";

interface ICustomCardProps {
  title: string;
  children?: ReactNode;
}

export default function CustomCard({ title, children }: ICustomCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          alt="iguana"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            {children}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
        >
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
