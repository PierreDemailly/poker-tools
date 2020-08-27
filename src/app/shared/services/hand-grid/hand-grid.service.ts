import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandGridService {

  constructor() { }

  /**
   * Returns the symbol from the index.
   * 
   * @param i the index from 0 to 12.
   * @example
   * getCardSymbolFromIndex(0) // '2'
   * getCardSymbolFromIndex(12) // 'A'
   */
  getCardSymbolFromIndex(i: number): string {
    if (i < 0 || i > 12) throw new Error(`Card index cannot be ${i}. It must be from 1 to 14.`);

    switch (i) {
      case 12:
        return 'A';
      case 11:
        return 'K';
      case 10:
        return 'Q';
      case 9:
        return 'J';
      case 8:
        return 'T';
      default:
        return (i + 2).toString();
    }
  }
}
