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
        const newBonsai = await BonsaiModel.create(
            request.body
        );

        response.status(201).json(newBonsai);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

//update method
export const updateBonsai = async (request, response) => {
       
       const bonsaiId = request.params.id;
   
       await BonsaiModel.update(
         request.body,
         {
           where: { id: bonsaiId } 
         }
       );

       const updatedBonsai = await BonsaiModel.findByPk(bonsaiId);

       response.status(201).json({
        message:"Updated successfully" , bonsai: updatedBonsai
       })
    }

    export const getOneBonsai = async (request, response) => {

        try {
            const { id } =request.params;
            const bonsais =  await BonsaiModel.findOne({ where: { id }});
            response.status(200).json(bonsais);
        }
        catch(error){
            response.json({message: error.message});
        }
    }



