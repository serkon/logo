import { Pipe, PipeTransform } from '@angular/core';

import { Lang } from '../lang';

@Pipe({
  name: 'counter',
  pure: true,
})
export class TimePipe implements PipeTransform {
  transform(value: number, local: Lang): string {
    const totalSeconds = Math.floor(value / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const days = Math.floor(totalHours / 24);
    const hours = Math.floor(totalHours % 24);
    const minutes = Math.floor(totalMinutes % 60);
    const seconds = Math.floor(totalSeconds % 60);

    let convertedTime = '';
    if (days > 0) {
      days < 10 ? convertedTime += `<div>0${days}<small>${local.days}</small></div>` : convertedTime += `<div>${days}<small>${local.days}</small></div>`;
    }

    if (hours > 0) {
      hours < 10 ? convertedTime += `<div>0${hours}<small>${local.hours}</small></div>` : convertedTime += `<div>${hours}<small>${local.hours}</small></div>`;
    }

    if (minutes >= 0) {
      minutes < 10 ? convertedTime += `<div>0${minutes}<small>${local.minutes}</small></div>` : convertedTime += `<div>${minutes}<small>${local.minutes}</small></div>`;
    }

    if (seconds >= 0) {
      seconds < 10 ? convertedTime += `<div>0${seconds}<small>${local.seconds}</small></div>` : convertedTime += `<div>${seconds}<small>${local.seconds}</small></div>`;
    } else if (seconds < 0) {
      convertedTime = `<div>00<small>${local.minutes}</small></div><div>00<small>${local.seconds}</small></div>`;
    }
    return convertedTime;
  }
}
