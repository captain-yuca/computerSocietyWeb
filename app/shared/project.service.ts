import { Injectable } from '@angular/core';
import { Project } from './project';
import { PROJECTS } from './data/project-items';
@Injectable()
export class ProjectService {
  getProjects(): Promise<Project[]> {
    return Promise.resolve(PROJECTS);
  }
}
