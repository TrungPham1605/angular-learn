import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../vd25-interaction-components/data-storage.service';

@Component({
  selector: 'app-tracking-data',
  standalone: true,
  imports: [],
  templateUrl: './tracking-data.component.html',
  styleUrl: './tracking-data.component.scss'
})
export class TrackingDataComponent {
  recievedData = '';

  constructor(private storageSvc: DataStorageService) { }

  ngOnInit(): void {
    this.storageSvc.startTracking()
      .subscribe(data => this.recievedData = data);
  }

}
