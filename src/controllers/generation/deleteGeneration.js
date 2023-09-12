const Generation = require("../../models/generation");

async function deleteGeneration(request, response) {
  try {
    const listGenerationId = request.params.id;

    const existGeneration = await Generation.findByPk(listGenerationId);
    if (!existGeneration) {
      return response.status(400).json({ message: "Id inválido" });
    }

    await existGeneration.destroy();

    return response.status(204).send(); 
  } catch (error) {
    console.error("Requisição não perocessada", error.message);
    response.status(500).json({ message: "Requisição não perocessada" });
  }
}

module.exports = deleteGeneration;
