import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, debounce, debounceTime } from 'rxjs';
import { StorageService } from './storage.service';

export interface Sector {
  axis: string;
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class SectorsService {
  private storageKey = 'balance-wheel-sectors';
  private sectorsSource: BehaviorSubject<Sector[]>;

  constructor(private storageService: StorageService) {
    this.sectorsSource = new BehaviorSubject(this.storageService.getData(this.storageKey) || []);

    this.sectorsSource.pipe(debounceTime(500)).subscribe(sectors => {
      this.storageService.saveData(this.storageKey, sectors);
    });
  }

  public saveSectors(sectors: Sector[]) {
    this.sectorsSource.next(sectors);
  }

  public getSectors() {
    return this.sectorsSource.asObservable();
  }


}
