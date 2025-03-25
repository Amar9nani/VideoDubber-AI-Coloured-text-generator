import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // This is a frontend-only application
  // We don't need any custom API routes
  
  // Add route to serve static HTML for Netlify deployments
  app.get("/static", (req: Request, res: Response) => {
    res.sendFile(path.join(process.cwd(), "static", "index.html"));
  });
  
  const httpServer = createServer(app);
  return httpServer;
}
