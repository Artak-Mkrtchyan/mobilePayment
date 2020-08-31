import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
})
export class ButtonComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() color: 'primary' | 'accent' = 'primary';
  @Input() text: string;

  @Output() onClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  onSubmit() {
    this.onClick.emit();
  }

  ngOnInit(): void {}
}
