import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeSentencePipe'
})
export class CapitalizeSentencePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    let firstLetterInAWord = value.substr(0, 1).toUpperCase();
    return firstLetterInAWord + value.substr(1);
  }
}
