import { Component, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Sector, SectorsService } from 'src/app/services/sectors.service';

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.css']
})
export class MenuDialogComponent implements OnDestroy {
  private destroySource: Subject<void> = new Subject<void>();

  @Output() sectorsChanged = new EventEmitter<Sector[]>();
  @Output() cancelClicked = new EventEmitter();

  public sectors: Sector[] = [];
  public numSectors: number = 1;

  public constructor(private sectorsService: SectorsService) {
    this.sectorsService.getSectors()
      .pipe(takeUntil(this.destroySource))
      .subscribe((sectors: Sector[]) => {
        this.sectors = structuredClone(sectors);
        this.numSectors = this.sectors.length;
      });
  }

  ngOnDestroy(): void {
    this.destroySource.next();
    this.destroySource.complete();
  }

  updateSectorInputs(): void {
    // Ensure numSectors is a positive integer
    this.numSectors = Math.max(1, Math.floor(this.numSectors));

    // Add or remove sectors based on the input value
    while (this.sectors.length < this.numSectors) {
      this.sectors.push({ axis: 'New Sector', value: 5 });
    }
    if (this.sectors.length > this.numSectors) {
      this.sectors = this.sectors.slice(0, this.numSectors);
    }
  }

  deleteSector(index: number): void {
    this.sectors.splice(index, 1);
    this.numSectors = this.sectors.length;
  }

  public addInput() {
    this.sectors.push({ axis: 'New Sector', value: 5 });
  }

  public save() {
    this.sectorsChanged.emit(structuredClone(this.sectors));
  }

  public cancel() {
    this.cancelClicked.emit();
  }

  public trackByIdx(index: number, obj: any): any {
    return index;
  }
}
