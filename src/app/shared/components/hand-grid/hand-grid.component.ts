import { HandGridService } from './../../services/hand-grid/hand-grid.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hand-grid',
  templateUrl: './hand-grid.component.html',
  styleUrls: ['./hand-grid.component.scss']
})
export class HandGridComponent implements OnInit {
  cardArray = Array.from(Array(13), (_, index) => this.handGridService.getCardSymbolFromIndex(index)).reverse();

  constructor(private handGridService: HandGridService) { }

  ngOnInit(): void {
  }

}
