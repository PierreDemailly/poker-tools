import { MouseService } from './shared/services/mouse/mouse.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;

  @HostListener('mousedown', ['$event']) onMouseDown(): void {
    this.mouseService.mouseDown();
  }
  @HostListener('mouseup', ['$event']) onMouseUp(): void {
    this.mouseService.mouseUp();
  }

  constructor(
    private mouseService: MouseService,
    private deviceService: DeviceDetectorService,
  ) {}

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    this.isDesktop = this.deviceService.isDesktop();
  }
}
