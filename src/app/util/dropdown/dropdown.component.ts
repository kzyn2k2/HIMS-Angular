import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export type DropdownOption = {
  optionName: string,
  optionValue: any
}

@Component({
  selector: 'dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {

  @Input() optionName: string = "";
  @Input() options: DropdownOption[] = [];
  @Output() valueSelectedEvent = new EventEmitter<any>();
  open: boolean = false;

  toggle() {
    this.open = !this.open;
  }

  select(option: any) {
    this.valueSelectedEvent.emit(option.optionValue);
    this.optionName = option.optionName;
    this.open = false;
  }

}
