import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // prefix all routes with /api
  
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store contact message
      const savedMessage = await storage.createContactMessage(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Contact message received successfully",
        data: savedMessage
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.message
        });
      } else {
        res.status(500).json({
          success: false,
          message: "An unknown error occurred"
        });
      }
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact", async (_req: Request, res: Response) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.status(200).json({
        success: true,
        data: messages
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to retrieve contact messages"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
