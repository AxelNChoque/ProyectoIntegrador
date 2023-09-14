const axios = require("axios");


// const getCharById = (res, id) => {
//     const character = {};
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(({data}) => {
//             // character = {
//             //     id: data.id,
//             //     name: data.name,
//             //     gender: data.gender,
//             //     species: data.species,
//             //     origin: data.origin.name,
//             //     image: data.image,
//             //     status: data.status,
//             // }
//             const { name, id, gender, species, origin, status, image} = data;
//             res
//                 .writeHead(200,{
//                 'content-type':'application/json',
//                 })
//                 .end(JSON.stringify({ name, id, gender, species, origin, status, image}));
//         })
//         .catch(err => {
//             res
//                 .writeHead(500,{
//                     'content-type': 'text/plain',
//                 })
//                 .end(err.message)
//         })
// }

// module.exports= getCharById

//EXPRESS

// const getCharById = (req,res) => {
//     const { id } = req.params;
//     axios
//         .get(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(response => {
//             const { id, status, name, species, origin, image, gender } = response.data;
//             name ? 
//                 res.status(200).json({ id, status, name, species, origin, image, gender }) :
//                 res.status(404).send('Not found');
//         })
//         .catch(err => {
//             res.status(500).json({message: err.message});
//         })
// }

const getCharById = async (req,res) => {
    try{
        const { id } = req.params;

        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        const { data } = response;
        const character = {
            id:data.id,
            status:data.status,
            name: data.name,
            origin: data.origin?.name,
            image: data.image,
            gender: data.gender,
        }
        character.name ? 
            res.status(200).json(character) :
            res.status(404).send('Not found');
    } 
    catch(err) {
        res.status(500).json({message: err.message});
    }
}

module.exports= getCharById;
