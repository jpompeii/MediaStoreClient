import { Injectable } from '@angular/core';
import { Asset } from '../models/asset';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AssetService {

  private assets: Asset[];

  constructor() {
    this.assets = [
      {Id: '123', Name: 'sample.jpg', CurrentVersion: 1, DateCreated: new Date(2018, 1, 1), LastUpdate: new Date(2018, 1, 1)  },
      {Id: '456', Name: 'mypicture.jpg', CurrentVersion: 2, DateCreated: new Date(2018, 1, 2), LastUpdate: new Date(2018, 1, 2)  }
    ];
  }

  getAllAssets(): Observable<Asset[]> {
    return of(this.assets);
  }

}
