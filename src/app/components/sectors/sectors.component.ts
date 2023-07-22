import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Sector, SectorsService } from 'src/app/services/sectors.service';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent  implements OnDestroy{
  private destroySource: Subject<void> = new Subject<void>();
  
  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;

  public sectors: Sector[] = [];
 
  public isDialogOpened: boolean = false;

  public radarChartOptions: any = {};

  public constructor(private sectorsService: SectorsService) {
    this.sectorsService.getSectors()
      .pipe(takeUntil(this.destroySource))
      .subscribe((sectors: Sector[]) => {
        this.sectors = structuredClone(sectors);
      });
  }

  ngOnDestroy(): void {
    this.destroySource.next();
    this.destroySource.complete();
  }

  public updateSectors() {
    this.sectorsService.saveSectors(this.sectors);
  }

  public trackByIdx(index: number, obj: any): any {
    return index;
  }
  
  public openDialog() {
    this.isDialogOpened = true;
    this.dialog.nativeElement.showModal();
  }

  public sectorsChanged(sectors: Sector[]) {
    this.sectorsService.saveSectors(sectors);
    this.closeDialog();
  }

  public closeDialog() {
    this.isDialogOpened = false;
    this.dialog.nativeElement.close();
  }
}