import { Injectable } from '@angular/core';
import { Asset } from '../models/asset';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AssetService {

  private assets: Asset[];

  constructor() {
    this.assets = [
      {id: '123', name: 'sample.jpg }
    ];
  }

  getAllAssets(): Observable<Asset[]> {
    return of(this.assets);
  }

}
