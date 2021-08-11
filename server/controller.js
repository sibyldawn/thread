const fetch = require(node-fetch)





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
    }
}