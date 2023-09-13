const { Router } = require("express");
const {
  createGeneration,
  listGeneration,
  editGeneration,
  deleteGeneration,
} = require("../controller/generation.controller");
const { auth } = require("../midlleware/auth")
class GenerationRouter {
  routesFromGeneration() {
    const generationRoutes = Router();
    generationRoutes.get("/v1/geracao", auth, listGeneration);
    generationRoutes.post("/v1/geracao", auth, createGeneration);
    generationRoutes.put("/v1/geracao/:id", auth, editGeneration);
    generationRoutes.delete("/v1/geracao/:id", auth, deleteGeneration);
    return generationRoutes;
  }
}

module.exports = new GenerationRouter();
