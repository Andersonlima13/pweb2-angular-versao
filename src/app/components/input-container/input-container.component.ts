import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-container',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-container.component.html',
  styleUrl: './input-container.component.css'
})
export class InputContainerComponent {
  @Input({ required: true }) form!: FormGroup;
  @Output() submitted = new EventEmitter<void>();

  onSubmit() {
    this.submitted.emit();
  }
}