import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project = [];
  apartments = [];

  constructor( private readonly projectService: ProjectService,
               private readonly apartmentService: ApartmentService,
               private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      if (params.id) {
        this.getProjectById(params.id);
        this.getApartmentsByProjectId(params.id);
      }
    });
  }

  getProjectById(id: number) {
    this.projectService.gerProject().subscribe((res: any) => {
      this.project = res.data.filter((item: { id: number }) => item.id == id);
      console.log(this.project);
    });
  }

  getApartmentsByProjectId(id: number) {
    this.apartmentService.getApartments().subscribe((res: any) => {
      this.apartments = res.data.filter((item: { projectId: number }) => item.projectId == id);
      console.log(this.apartments);
    });
  }

}
