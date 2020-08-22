import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

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

  mask = MASK;
  amountMask = AMOUNT_MASK;

  constructor(
    private operatorService: OperatorService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    const name = this.route.snapshot.params.name;
    this.operator = operatorService.getOperator(name);

    this.form = this.fb.group({
      phone: [
        '',
        [
          Validators.required,
          operatorCodeValidator(this.operator.codes),
          Validators.pattern(
            /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm
          ),
        ],
      ],
      amount: [
        '',
        [Validators.required, Validators.min(1), Validators.max(1000)],
      ],
    });
  }

  ngOnInit(): void {}
}
