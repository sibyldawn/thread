const fetch = require('node-fetch')
const API_URL=" https://my-json-server.typicode.com/sibyldawn/thread"
//posts =  https://my-json-server.typicode.com/sibyldawn/thread/post/1
//comments = https://my-json-server.typicode.com/sibyldawn/thread/comments/3

module.exports = {
    read: (request,response)=>{
        response.status(200).send(recipes);
    },
    comments: (request,response)=>{
        const {name,email,image} = request.body;
        response.status(200).send(recipes);
    },
    filterAuthor:(request,response)=>{
        const {name,email,image} = request.body;
        response.status(200).send(recipes);
    },
}