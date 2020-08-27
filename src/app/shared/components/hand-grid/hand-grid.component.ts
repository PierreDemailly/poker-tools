import { MouseService } from './../../services/mouse/mouse.service';
import { HandGridService } from './../../services/hand-grid/hand-grid.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-hand-grid',
  templateUrl: './hand-grid.component.html',
  styleUrls: ['./hand-grid.component.scss']
})
export class HandGridComponent implements OnInit {
  isMouseDown = false;
  cardArray = Array.from(Array(13), (_, index) => this.handGridService.getCardSymbolFromIndex(index)).reverse();

  @Input() range: string[];
  @Output() change = new EventEmitter<string[]>();

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

    this.emitChanges();
  }

  selectAll(): void {
    const hands = document.getElementsByClassName('hand') as unknown as HTMLButtonElement[];
    for (const hand of hands) {
      if (hand.classList.contains('selected')) continue;
      hand.classList.add('selected');
    }

    this.emitChanges(hands);
  }

  clearAll(): void {
    const hands = document.getElementsByClassName('hand') as unknown as HTMLButtonElement[];
    for (const hand of hands) {
      hand.classList.remove('selected');
    }

    this.emitChanges(hands);
  }

  emitChanges(hands?: HTMLButtonElement[]): void {
    if (!hands) hands = document.getElementsByClassName('hand') as unknown as HTMLButtonElement[];
    const selectedHands = Array.from(hands).filter(hand => hand.classList.contains('selected')).map(hand => hand.innerHTML.trim());
    this.change.emit(selectedHands);
  }
}
