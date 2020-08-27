import { MouseService } from './shared/services/mouse/mouse.service';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostListener('mousedown', ['$event']) onMouseDown(event: MouseEvent): void {
    this.mouseService.mouseDown();
  }
  @HostListener('mouseup', ['$event']) onMouseUp(): void {
    this.mouseService.mouseUp();
  }

  constructor(private mouseService: MouseService) {}
}
