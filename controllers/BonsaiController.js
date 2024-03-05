import BonsaiModel from "../models/BonsaiModel.js"

export const getAllBonsais = async (request, response) => {

    try {
        const bonsais =  await BonsaiModel.findAll();
        response.status(200).json(bonsais);
    }
    catch(error){
        response.json({message: error.message});
    }
}


