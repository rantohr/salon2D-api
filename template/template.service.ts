import Template from "./template.model";
import { TemplateRepository } from "./template.repository";

export default class TemplateService {
  private readonly templateRepository: TemplateRepository;

  constructor() {
    this.templateRepository = new TemplateRepository(Template);
  }

  create = async (payload) => {
    try {
      let template = await this.templateRepository.addTemplate(payload);
      return template;
    } catch (error) {
      throw error;
    }
  };

  getAll = async () => {
    try {
      let templates = await this.templateRepository.getTemplates();
      return templates;
    } catch (error) {
      throw error;
    }
  };

  getById = async (id) => {
    try {
      let template = await this.templateRepository.getTemplateById(id);
      return template;
    } catch (error) {
      throw error;
    }
  };

  deleteById = async (id) => {
    try {
      await this.templateRepository.deleteTemplate(id);
      return `Template removed successfully`;
    } catch (error) {
      throw error;
    }
  };

  updateById = async (id, payload) => {
    try {
      let template = await this.templateRepository.updateTemplate(id, payload);

      return template;
    } catch (error) {
      throw error;
    }
  };
}
