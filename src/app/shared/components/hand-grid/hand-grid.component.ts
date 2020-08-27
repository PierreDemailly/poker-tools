import { MouseService } from './../../services/mouse/mouse.service';
import { HandGridService } from './../../services/hand-grid/hand-grid.service';
import { Component, OnInit, Output, EventEmitter, Input, ViewChildren, QueryList, ElementRef } from '@angular/core';

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
  @ViewChildren('hand') hands: QueryList<ElementRef<HTMLButtonElement>>;

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
    for (const hand of this.hands) {
      if (hand.nativeElement.classList.contains('selected')) continue;
      hand.nativeElement.classList.add('selected');
    }

    this.emitChanges();
  }

  clearAll(): void {
    for (const hand of this.hands) {
      hand.nativeElement.classList.remove('selected');
    }

    this.emitChanges();
  }

  emitChanges(): void {
    const selectedHands = Array.from(this.hands).filter(hand => hand.nativeElement.classList.contains('selected')).map(hand => hand.nativeElement.innerHTML.trim());
    this.change.emit(selectedHands);
  }
}
