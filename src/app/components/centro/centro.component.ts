import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CentersService } from '../../services/centers.service';

@Component({
  selector: 'app-centro',
  templateUrl: './centro.component.html',
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit{
  centers: any;
  center: any;

  constructor(
    private centroService: CentersService
  ) {}

  ngOnInit(): void {
      this.centers = this.centroService.getCenters();
      this.getCenterByID(11);
  }

  getCenterByID(id: number) {
    this.center = this.centers.find((center: any) => center.id === id);
    return this.center;
  }
  
}
