import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OperatorService } from '@services/OperatorService';
import { Operator } from '@typings/index';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass'],
})
export class MainPageComponent implements OnInit {
  operators: Operator[];

  constructor(private operator: OperatorService, private router: Router) {}

  goTo(operator: string): void {
    this.router.navigate([`/operator/${operator}`]);
  }

  ngOnInit(): void {
    this.operator.getOperators().subscribe((operators) => {
      this.operators = operators;
    });
  }
}
