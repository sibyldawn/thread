import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useAxios from 'axios-hooks'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";


const baseURL = 'https://jsonplaceholder.typicode.com'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));


const FeedByUser = () =>  {
  const classes = useStyles();
  let history = useHistory();
  const [{ data, loading, error }, refetch] = useAxios(
    `${baseURL}/users/1/posts`
  )
 
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <div className="AppContainer">
      {data.map((post,i)=>{
        return (<Grid container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}>
          <Grid item xs={8} onClick={()=>history.push(`/${post.userId}`)}>
            <Paper className={classes.paper} key={i}>
              <h4>{post.title}</h4>
            </Paper>
          </Grid>
          </Grid>
      )})
      }
    </div>
  )
}





export default FeedByUser