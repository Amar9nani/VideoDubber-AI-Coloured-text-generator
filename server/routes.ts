import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // This is a frontend-only application
  // We don't need any custom API routes
  
  const httpServer = createServer(app);
  return httpServer;
}
