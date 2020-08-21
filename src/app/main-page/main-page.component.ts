import { Component, OnInit } from '@angular/core';

import { OperatorService } from '@services/OperatorService';
import { Operator } from '@typings/index';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass'],
})
export class MainPageComponent implements OnInit {
  operators: Operator[];

  constructor(private operator: OperatorService) {}

  ngOnInit(): void {
    this.operator.getOperators().subscribe((operators) => {
      this.operators = operators;
    });
  }
}
