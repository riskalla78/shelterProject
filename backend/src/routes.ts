import { FastifyInstance } from "fastify";
import { prisma } from "./lib/prisma";

export async function appRoutes(app: FastifyInstance) {
  app.get("/shelters", async (request, reply) => {
    try {
      const shelters = await prisma.shelter.findMany();
      reply.send(shelters);
    } catch (error) {
      reply.status(500).send({ error: "Erro ao buscar abrigos." });
    }
  });
  app.get("/needs", async (request, reply) => {
    try {
      const needs = await prisma.need.findMany();
      reply.send(needs);
    } catch (error) {
      reply.status(500).send({ error: "Erro ao buscar necessidades." });
    }
  });
}
