const Generation = require("../../models/generation");

async function updateGeneration(request, response) {
  try {
    const generation = await Generation.findByPk(generation);
    if (!generation) {
      return response.status(400).json({ message: "ID inválido" });
    }

    const { id, reference_date, total_generated } = request.body;

    if (!id || !reference_date || !total_generated) {
      return response.status(400).json({
        message:
          "Todos os dados devem ser preenchidos e verificar se o id é válido",
      });
    }

    await Generation.update({
      id,
      reference_date,
      total_generated,
    });

    return response.status(200).json({ message: "Atualizado com sucesso" });
  } catch (error) {
    console.error("Requisição não perocessada", error.message);
    response.status(500).json({ message: "Requisição não perocessada" });
  }
}

module.exports = updateGeneration;
