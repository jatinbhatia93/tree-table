import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  files: any[];
  cols: any[];
  selectedRows: any[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getFilesystem().then(files => {
      this.files = files;
      console.log(this.files);
    });

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' }
  ];
    
  }

  nodeSelect(event) {
    console.log(event)
}
}
