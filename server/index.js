const express = require('express');
const bodyParser = require('body-parser');
const con = require(__dirname + '/controller');


const app = express();
app.use(bodyParser.json());


/* CRUD for Collection */
app.get('/allPosts', con.read);
app.get('/:postId/comments', con.comments);
app.post('/api/recipes', con.create);



const port = 4000;
app.listen(port, () => console.log('server now listening to port 4000'))