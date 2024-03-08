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

export const deleteBonsai = async (request, response) => {

    try {
        const { id } =request.params;
        const bonsai = await BonsaiModel.destroy({ where: { id }});
        response.status(200).json(bonsai);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}


