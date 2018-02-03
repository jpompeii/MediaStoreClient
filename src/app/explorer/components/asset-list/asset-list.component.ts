import { Component, OnInit } from '@angular/core';
import { Asset } from '../../models/asset';
import { Observable } from 'rxjs/Observable';
import { AssetService } from '../../services/asset.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {
  assets$: Observable<Asset[]>;
  constructor(private assetService: AssetService) { }

  ngOnInit() {
    this.assets$ = this.assetService.getAllAssets();
  }

  cardClick(assetId: string): void {
  }
}
