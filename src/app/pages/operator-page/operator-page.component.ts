import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import { OperatorService } from '@services/operator.service';
import { Operator } from '@interfaces/index';
import { operatorCodeValidator, MASK, AMOUNT_MASK } from '@helpers/validator';
import { AppState } from '@store/state/app.state';
import { open } from '@store/actions/snack-bar.action';

@Component({
  selector: 'app-operator-page',
  templateUrl: './operator-page.component.html',
  styleUrls: ['./operator-page.component.sass'],
})
export class OperatorPageComponent implements OnInit {
  operator: Operator;
  form: FormGroup;
  isLoaded = false;
  buttonText: string = 'Пополнить счет';

  mask = MASK;
  amountMask = AMOUNT_MASK;

  constructor(
    private operatorService: OperatorService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {
    const name = this.route.snapshot.params.name;
    operatorService.getOperator(name).subscribe(
      (data) => {
        this.operator = data.operator;
        this.createForm();
        this.isLoaded = true;
      },
      (err) => {
        this.router.navigate([`/404`]);
      }
    );
  }

  createForm() {
    this.form = this.fb.group({
      phone: [
        '',
        [
          Validators.required,
          operatorCodeValidator(this.operator.codes),
          Validators.pattern(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm),
        ],
      ],
      amount: ['', [Validators.required, Validators.min(1), Validators.max(1000)]],
    });
  }

  fillBalance(f: NgForm) {
    this.operatorService.fillBalance().subscribe(
      (res) => {
        this.store.dispatch(open({ message: 'Success', action: 'Payment', duration: 3000, color: 'accent' }));
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 5000);
      },
      (err) => {
        this.router.navigate([`/404`]);
      }
    );
  }

  ngOnInit(): void {}
}
