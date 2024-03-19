import { NextFunction, Request, Response } from "express";
import TemplateService from "./template.service";
import { asyncHandler } from "../../middlewares/async-handler";

class TemplateController {
  templateService: TemplateService;
  constructor() {
    this.templateService = new TemplateService();
  }

  Default(req: Request, res: Response): void {
    res.end("Template controller works.");
  }

  Create = asyncHandler(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      const entries = await this.templateService.create(req.body);
      res.json({
        success: true,
        data: entries,
      });
    }
  );

  GetOne = asyncHandler(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      const entries = await this.templateService.getById(req.params.id);
      res.json({
        success: true,
        data: entries,
      });
    }
  );

  GetAll = asyncHandler(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      const entries = await this.templateService.getAll();
      res.json({
        success: true,
        data: entries,
      });
    }
  );

  UpdateOne = asyncHandler(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      const entries = await this.templateService.updateById(
        req.params.id,
        req.body
      );
      res.json({
        success: true,
        data: entries,
      });
    }
  );

  DeleteOne = asyncHandler(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      const entries = await this.templateService.deleteById(req.params.id);
      res.json({
        success: true,
        data: entries,
      });
    }
  );
}

export default new TemplateController();
