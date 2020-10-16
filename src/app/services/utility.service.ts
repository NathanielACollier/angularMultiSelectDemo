import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  next(min, max) {
    return Math.floor( Math.random() * (max - min) + min);
  }

  range(start, count) {
    return Array.apply(0, Array(count))
      .map((element, index) => index + start);
  }

  debounceTimers = [];

  debounce(timerKey: string, timeMS: number, codeToRun: () => void) {
    if (this.debounceTimers[timerKey]) {
      clearTimeout(this.debounceTimers[timerKey]);
    }

    this.debounceTimers[timerKey] = setTimeout(() => {
      codeToRun();
    }, timeMS);
  }

}
