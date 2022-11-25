import { Component, OnInit } from '@angular/core';
import { CentersService } from '../../services/centers.service';

@Component({
  selector: 'app-centro',
  templateUrl: './centro.component.html',
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit{
  
  constructor(
    private centroService: CentersService
  ) {}

  ngOnInit(): void {
      this.centroService.getCenters();
  }
}
