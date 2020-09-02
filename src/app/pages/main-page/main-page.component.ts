import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { OperatorService } from '@services/operator.service';
import { Operator } from '@interfaces/index';
import { AppState } from '@store/state/app.state';
import { show } from '@store/actions/loader.action';
import { timer } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass'],
})
export class MainPageComponent implements OnInit {
  operators: Operator[];
  buttonText: string = 'Пополнить счет';

  constructor(private operator: OperatorService, private router: Router, private store: Store<AppState>) {}

  goTo(operator: string): void {
    this.store.dispatch(show());
    timer(2000).subscribe(() => this.router.navigate([`/operator/${operator}`]));
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
