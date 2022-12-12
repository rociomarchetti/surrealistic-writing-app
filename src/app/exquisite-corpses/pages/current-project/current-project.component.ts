
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FinalText } from './../../interfaces/texts.interface';
import { TextsService } from './../../services/texts.service';

@Component({
  selector: 'app-current-project',
  templateUrl: './current-project.component.html',
  styleUrls: ['./current-project.component.css'],
})
export class CurrentProjectComponent {
  unfinishedTexts: FinalText[] = [];

  getUnifishedTexts(): FinalText[] {
    this.TextsService.getTexts().subscribe((resp) =>
      resp.forEach((element) => {
        if (element.sentences.length < 4) {
          this.unfinishedTexts.push(element);
          console.log(element.sentences[element.sentences.length - 1].sentence)
        }
      })
    );
    return this.unfinishedTexts;
  }

  ngOnInit(): void {
    this.getUnifishedTexts();
    console.log(this.unfinishedTexts);
  }

  constructor(private TextsService: TextsService, private activatedRoute: ActivatedRoute) {}
}
