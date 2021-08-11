import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useAxios from 'axios-hooks'
const baseURL = 'https://jsonplaceholder.typicode.com'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '2px 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 12,
    
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Comment({postId}) {
  const classes = useStyles();
  const [{ data, loading, error }, refetch] = useAxios(
    `${baseURL}/posts/${postId}/comments`
  )
 
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <Card className={classes.root}>
      {data.map((comment,i)=>{
        return (<Grid container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}>
          <Grid item xs={8}>
            <Paper className={classes.paper} key={i}>
              <strong>{comment.name}</strong>
              <h5>{comment.email}</h5>
              <p>{comment.body}</p>
            </Paper>
          </Grid>
          </Grid>
      )})}
    </Card>
  );
}