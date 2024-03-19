
import { ITemplate } from "./template.interface";
import { BaseRepository } from "../../base-repository/base.repository";

export class TemplateRepository extends BaseRepository<ITemplate> {

    addTemplate = (template: ITemplate) => {
        return this.create(template)
    }

    getTemplates = (query?: any) => {
        return this.find(query)
    }

    getOneTemplate = (options: any) => {
        return this.findOne(options)
    }

    getTemplateById = (id: string) => {
        return this.findById(id);
    }

    updateTemplate = (id: string, template: ITemplate) => {
        return this.update(id, template)
    }

    deleteTemplate = (id: string) => {
        return this.delete(id)
    }

    paginateTemplates = (reqQuery, populate) => {
        return this.paginate(reqQuery, populate)
    }

}