const Generation = require("../../models/generation");

async function registerGeneration(request, response) {
  try {
    const infoGeneration = {
      id: request.body.id,
      reference_date: request.body.reference_date,
      total_generated: request.body.total_generated,
      idUnidade: request.body.idUnidade,
    };

    if (
      !infoGeneration.id ||
      !infoGeneration.reference_date ||
      !infoGeneration.total_generated ||
      !infoGeneration.idUnidade
    ) {
      return response.status(400).json({
        message: "Todas as informações obrigatórias devem ser preenchidas.",
      });
    }

    const unidade = await Unidade.findOne({
      where: { id: infoGeneration.idUnidade },
    });
    if (!unidade) {
      return response
        .status(400)
        .json({ message: "ID da unidade vinculada não é válido." });
    }

    const existGeneration = await Generation.findOne({
      where: {
        id: infoGeneration.id,
        reference_date: infoGeneration.reference_date,
        idUnidade: infoGeneration.idUnidade,
      },
    });

    if (existGeneration) {
      return response
        .status(409)
        .json({ message: "Registro de geração já existe." });
    }

    const newGeneration = await Generation.create(infoGeneration);
    return response.status(201).json({ message: 'Inserção de um novo documento bem sucedido', newGeneration });
  } catch (error) {
    console.error("Requisição não processada", error.message);
    response.status(500).json({ message: "Requisição não processada" });
  }
}

module.exports = registerGeneration;
