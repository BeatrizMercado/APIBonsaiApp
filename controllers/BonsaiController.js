import BonsaiModel from "../models/BonsaiModel.js"

export const getAllBonsais = async (request, response) => {   //metodo get//

    try {
        const bonsais =  await BonsaiModel.findAll();
        response.status(200).json(bonsais);
    }
    catch(error){
        response.json({message: error.message});
    }
}

export const deleteBonsai = async (request, response) => {  //metodo delete//

    try {
        const { id } =request.params;
        const bonsai = await BonsaiModel.destroy({ where: { id }});
        response.status(200).json(bonsai);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export const createBonsai = async (request, response) => { //metodo post//
    try {
        const newBonsai = await BonsaiModel.create(request.body)

        response.status(201).json(newBonsai);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

//update//
export const updateBonsai = async (request, response) => {
  try {
    // Extrae el ID del parámetro de la solicitud
    const bonsaiId = request.params.id;

    await BonsaiModel.update(request.body,{where:{id:bonsaiId}});
    
    // Busca el bonsai por ID
    //const bonsai = await BonsaiModel.findByPk(bonsaiId);

    // Si no se encuentra el bonsai, devuelve un error 404
    if (!bonsai) {
      return response.status(404).json({ message: 'Bonsai no encontrado.' });
    }

    // Responde con el bonsai actualizado
    response.status(201).json(bonsai);
  } catch (error) {
    // Maneja errores y responde con un código de estado 500 en caso de error interno
    response.status(500).json({ message: error.message });
  }
};


//metodo getbyId//
export const getByIdBonsai = async (request, response) => {   //metodo get//

    try {
        const {id} = request.params;
        const bonsais =  await BonsaiModel.findOne({ where: {id}});
        response.status(200).json(bonsais);
    }

    catch(error){
        response.json({message: error.message});
    }
}