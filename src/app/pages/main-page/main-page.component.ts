import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OperatorService } from '@services/OperatorService';
import { Operator } from '@interfaces/index';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass'],
})
export class MainPageComponent implements OnInit {
  operators: Operator[];
  buttonText: string = 'Пополнить счет';

  constructor(private operator: OperatorService, private router: Router) {}

  goTo(operator: string): void {
    this.router.navigate([`/operator/${operator}`]);
  }

  ngOnInit(): void {
    this.operator.getOperators().subscribe(
      (data) => {
        this.operators = data.operators;
      },
      (err) => {
        this.router.navigate([`/404`]);
      }
    );
  }
}
