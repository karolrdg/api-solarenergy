const Generation = require('../../models/generation');

async function listGenerationId(request, response) {
  try {
    const generation = await generation.findByPk(request.params.id, {
    });

    if (!generation)
      return response.status(404).json({ message: "Não encontrado" });

    return response.status(200).json(generation);
  } catch (error) {
    console.error("Não foi possível processar a requisição", error.message);
    return response.status(500).json({ message: "Não foi possível processar a requisição" });
  }
}

module.exports = listGenerationId;