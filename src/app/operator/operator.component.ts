import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Validators, FormGroup, FormBuilder, NgForm } from '@angular/forms';

import { OperatorService } from '@services/OperatorService';
import { Operator } from '@typings/index';
import { operatorCodeValidator, MASK, AMOUNT_MASK } from '@helpers/validator';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.sass'],
})
export class OperatorComponent implements OnInit {
  operator: Operator;
  form: FormGroup;
  isLoaded = false;

  mask = MASK;
  amountMask = AMOUNT_MASK;

  constructor(
    private operatorService: OperatorService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
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

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
      panelClass: ['mat-toolbar', 'mat-accent'],
    });
  }

  fillBalance(f: NgForm) {
    this.operatorService.fillBalance().subscribe(
      (res) => {
        this.openSnackBar('Payment', 'Success');
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
