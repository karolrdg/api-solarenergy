const Generation = require('../../models/generation');

async function listGeneration(request, response) {
  try {
    const generations = await Generation.findAll();

    if (!generations || generations.length === 0) {
      return response.status(404).json({ message: 'Não encontrado' });
    }

    return response.status(200).json(generations);
  } catch (error) {
    console.error('Requisição não processada', error.message);
    response.status(500).json({ message: 'Requisição não processada' });
  }
}

module.exports = listGeneration;
