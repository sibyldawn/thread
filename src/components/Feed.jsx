import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useAxios from 'axios-hooks'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const baseURL = 'https://my-json-server.typicode.com/sibyldawn/thread'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid:{
    marginTop: 20
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 400,
  }
}));


const Feed = () =>  {
  const classes = useStyles();
  let history = useHistory();
  const [{ data, loading, error }, refetch] = useAxios(
    `${baseURL}/posts`
  )
 
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <div className="AppContainer">
       <Typography gutterBottom variant="h4" component="h4">
           Travel Destinations
          </Typography>
      {data.map((post,i)=>{
        return (<Grid container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          className={classes.grid}>
          <Grid item xs={8} onClick={()=>history.push(`/posts/${post.id}`)}>
          <Card className={classes.root}>
          <CardActionArea>
          <CardMedia
          className={classes.media}
          image={post.image}
          title={post.title}
         />
         <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {post.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>history.push(`/posts/${post.id}`)}>
          Comments
        </Button>
      </CardActions>
    </Card>
          </Grid>
          </Grid>
      )})
      }
    </div>
  )
}





export default Feed