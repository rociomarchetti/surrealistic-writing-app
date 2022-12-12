import { Sentence } from './../interfaces/texts.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'words',
})
export class WordsPipe implements PipeTransform {
  transform(value: Sentence[]): string {
    let lastInput = value[value.length - 1].sentence;
    let lastWords = lastInput.split(' ');
    let twoWords = lastWords.slice(lastWords.length - 2);
    return twoWords.join(' ');
  }
}
