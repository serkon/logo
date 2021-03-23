import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'counter',
})
export class TimePipe implements PipeTransform {
  transform(value: number): string {
    const totalSeconds = Math.floor(value / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);

    const days = Math.floor(totalHours / 24);
    const hours = Math.floor(totalHours % 24);
    const minutes = Math.floor(totalMinutes % 60);
    const seconds = Math.floor(totalSeconds % 60);

    let readableTime = '';
    console.log('###' + days + ' Gün ' + hours + ' Saat ' + minutes + ' Dakika ' + seconds + ' Saniye');
    if (days > 0) {
      if (days < 10) {
        readableTime += `0${days} Gün `;
      } else {
        readableTime += `${days} Gün `;
      }
    }
    ;

    if (hours > 0) {
      if (hours < 10) {
        readableTime += `0${hours} Saat `;
      } else {
        readableTime += `${hours} Saat `;
      }
    }
    ;

    if (minutes > 0) {
      if (minutes < 10) {
        readableTime += `0${minutes} Dk `;
      } else {
        readableTime += `${minutes} Dk `;
      }
    }
    ;

    if (seconds > 0) {
      if (seconds < 10) {
        readableTime += `0${seconds} Sn`;
      } else {
        readableTime += `${seconds} Sn`;
      }
    }
    ;
    return readableTime;
  }
}
