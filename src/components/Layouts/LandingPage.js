import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Dialog } from "@material-ui/core/Dialog";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 250
  },
  media: {
    height: 200
  },
  control: {
    padding: theme.spacing(2)
  }
}));

const backgroundImage = {
  backgroundImage:
    "url('https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
  height: "100vh",
  color: "#fff"
};

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className="Home" align="center" style={backgroundImage}>
      {/* <h2>Git Techie, talent at your fingertips.</h2>
      <p className="Intro">
        Welcome, we're here to help you identify local talent in the coding
        industry.
      </p> */}
      <Grid container justify="center" spacing={1}>
        <Grid item xs={5} m={2} l={2} xl={2}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://avatars3.githubusercontent.com/u/52113276?s=400&v=4"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard-1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizard-1 opened her Github repositories in 2019. Interested in
                  front-end development, LizardRoach knows a little bit about
                  backend too.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/login">
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={5} m={2} l={2} xl={2}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://avatars0.githubusercontent.com/u/37378914?s=400&v=4"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard-2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizard-2 opened his Github repositories in 2019. Interested in
                  cyber security, LizardBriody is great with APIs and has a
                  great foundation in the backend.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/login">
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={5} m={2} l={2} xl={2}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://avatars1.githubusercontent.com/u/34141417?s=400&v=4"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard-3
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizard-3 opened her Github repositories in 2019. Interested in
                  full stack development, LizardHall is great with the backend
                  and authentication.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/login">
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={5} m={2} l={2} xl={2}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://ca.slack-edge.com/TL5B79PS6-ULPRQNLAH-440137f9ee8b-512"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard-4
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizard-4 opened his Github repositories in 2019. Interesed in
                  backend development and local storage, LizardBinBin is a good
                  all around full stack jr. developer.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to="/login">
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
