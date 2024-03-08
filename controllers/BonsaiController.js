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

export const createBonsai = async (request, response) => {
    try {
        console.log("Request body:", request.body);
        const newBonsai = await BonsaiModel.create({
            abonated: request.body.abonated,
            specie: request.body.specie,
            trasplanted: request.body.trasplanted,
            notes: request.body.notes,
            images: request.body.images
        });

        response.status(201).json(newBonsai);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};