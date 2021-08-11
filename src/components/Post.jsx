import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Comment from '../components/Comment'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useAxios from 'axios-hooks'
import { useHistory,useParams } from "react-router-dom";
const baseURL = 'https://jsonplaceholder.typicode.com'


const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    margin: 5
  },
  media: {
    height: 140,
  },
});

export default function Post() {
  const {postId} = useParams();
  const classes = useStyles();

  const [{ data, loading, error }, refetch] = useAxios(
    `${baseURL}/posts/${postId}`
  )
 
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
   <div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
         <Typography gutterBottom variant="h3" component="h2">
          {data.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         {data.body}
        </Typography>
        </CardContent>
      </CardActionArea>
     </Card>
     <h1>COMMENTS</h1>
     <Comment postId={postId}/>
     </div>
  );
}


