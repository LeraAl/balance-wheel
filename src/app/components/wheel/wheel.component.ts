import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

import { RadarChart, color } from '../../d3-custom/radarChart';
import { Sector, SectorsService } from 'src/app/services/sectors.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.css']
})
export class WheelComponent implements OnInit, OnDestroy {
  private destroySource: Subject<void> = new Subject<void>();

  public svg: any = null;

  public radarChartOptions: any = {};

  public constructor(private sectorsService: SectorsService) {
  }

  ngOnInit(): void {
    this.initRadar()
  }

  ngOnDestroy(): void {
    this.destroySource.next();
    this.destroySource.complete();
  }

  private initRadar() {
    this.initOptions();

    this.sectorsService.getSectors()
      .pipe(takeUntil(this.destroySource))
      .subscribe((sectors: Sector[]) => {
        //Call function to draw the Radar chart
        this.svg = RadarChart(".radar-chart", [sectors], this.radarChartOptions);
      });
  }

  private initOptions() {
    const margin = { top: 100, right: 100, bottom: 100, left: 100 },
      width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
      height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

    this.radarChartOptions = {
      w: width,
      h: height,
      margin: margin,
      maxValue: 10,
      levels: 5,
      roundStrokes: true,
      color: color
    };
  }

  public trackByIdx(index: number, obj: any): any {
    return index;
  }

  public save() {
    const svgElement = document.querySelector('.radar-chart') as HTMLElement;

    html2canvas(svgElement).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = 'image.png';
      link.click();
    });
  }


}
declare function html2canvas(svgElement: HTMLElement | null): Promise<any>;
