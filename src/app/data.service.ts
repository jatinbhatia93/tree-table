import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  
  getFilesystem() {
    return this.http.get('../assets/data/filesystem.json')
      .toPromise()
      .then(res => res.json().data);
  }

}
