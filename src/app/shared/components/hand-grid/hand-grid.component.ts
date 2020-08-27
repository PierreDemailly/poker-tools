import { MouseService } from './../../services/mouse/mouse.service';
import { HandGridService } from './../../services/hand-grid/hand-grid.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hand-grid',
  templateUrl: './hand-grid.component.html',
  styleUrls: ['./hand-grid.component.scss']
})
export class HandGridComponent implements OnInit {
  isMouseDown = false;
  cardArray = Array.from(Array(13), (_, index) => this.handGridService.getCardSymbolFromIndex(index)).reverse();

  constructor(
    private handGridService: HandGridService,
    private mouseService: MouseService,
  ) { }

  // TODO: scavenger
  ngOnInit(): void {
    this.mouseService.isMouseDown$.subscribe(bool => this.isMouseDown = bool);
  }

  selectHand(btn: HTMLButtonElement, isClick = false): void {
    if (!isClick && !this.isMouseDown) return;
    
    const isSelected = btn.classList.contains('selected');
    if (isSelected) btn.classList.remove('selected');
    else btn.classList.add('selected');
  }

  selectAll(): void {
    const hands = document.getElementsByClassName('hand') as unknown as HTMLButtonElement[];
    for (const hand of hands) {
      if (hand.classList.contains('selected')) continue;
      hand.classList.add('selected');
    }
  }

  clearAll(): void {
    const hands = document.getElementsByClassName('hand') as unknown as HTMLButtonElement[];
    for (const hand of hands) {
      hand.classList.remove('selected');
    }
  }
}
