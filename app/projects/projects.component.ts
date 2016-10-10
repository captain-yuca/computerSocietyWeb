import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../shared/project';
import { ProjectService} from '../shared/project.service';
@Component({
    selector: 'projects',
    templateUrl: 'app/projects/projects.component.html',
    styleUrls: ['css/main.css']
})
export class ProjectsComponent{
    projects: Project[];
    constructor(
        private router: Router,
        private projectService: ProjectService) { }
  getProjects(): void {
    this.projectService.getProjects().then(projects => this.projects = projects);
  }

  ngOnInit(): void {
    this.getProjects();
  }
}
