import * as React from "react";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
const url =
  "https://gateway.pinata.cloud/ipfs/QmNXUTHomuVcwTWfwCkTrBj3EWiRbfv5N9Nhrd2qaJVAJ2";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Image(props) {
  const navigate = useNavigate();
  const [img, setImg] = useState();
  const fetchImage = async () => {
    const res = await fetch(url);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };
  useEffect(() => {
    fetchImage();
  }, []);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div align="center">
      <h1>Welcome</h1>
      <Card sx={{ maxWidth: 450 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              1
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="JavaScript Task 1"
          subheader="July 31, 2022"
        />
        <CardMedia
          component="img"
          height="204"
          image={img}
          alt="Paella dish"
          width="100%"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" align="left">
            1) Create a new app using create-react-app in the folder. <br />
            2) Check if the app launches locally using npm start.
            <br />
            3) Fetch the link which should return an image
            <br />
            4) Make the appropriate object to display the image file on the main
            page.
          </Typography>
        </CardContent>
        <CardActions disableSpacing></CardActions>
      </Card>
      <Button
        variant="outlined"
        onClick={() => {
          navigate("/images");
          props.onClickStore();
        }}
      >
        next task
      </Button>
    </div>
  );
}
