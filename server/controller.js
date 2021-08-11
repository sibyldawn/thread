const fetch = require('node-fetch')
const API_URL="https://jsonplaceholder.typicode.com/"





module.exports = {
    create: (request,response)=>{
       const {name,url,image} = request.body;
       let newRecipe={
           id: id,
           name: name,
           url: url,
           image: image,
          
       }
       recipes.push(newRecipe);
       id++;

       console.log(recipes);
       response.status(200).json(recipes);
    },
    read: (request,response)=>{
        response.status(200).send(recipes);
    },
    comments: (request,response)=>{
        const {name,email,image} = request.body;
        response.status(200).send(recipes);
    }
}