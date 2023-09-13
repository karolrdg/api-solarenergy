const { Router } = require("express");
const {
  createGeneration,
  listGeneration,
  editGeneration,
  deleteGeneration,
} = require("../controller/generation.controller");

class GenerationRouter {
  routesFromGeneration() {
    const generationRoutes = Router();
    generationRoutes.get("/v1/geracao", listGeneration);
    generationRoutes.post("/v1/geracao", createGeneration);
    generationRoutes.put("/v1/geracao/:id", editGeneration);
    generationRoutes.delete("/v1/geracao/:id", deleteGeneration);
    return generationRoutes;
  }
}

module.exports = new GenerationRouter();
