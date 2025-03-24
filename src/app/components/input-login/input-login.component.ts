import {Component, forwardRef, input, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {ForwardRefHandling} from "@angular/compiler";

type InputTypes = 'text' | 'email' | 'password';
@Component({
  selector: 'app-input-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputLoginComponent),
      multi: true
    }
  ],

  templateUrl: './input-login.component.html',
  styleUrl: './input-login.component.scss'
})
export class InputLoginComponent implements ControlValueAccessor{
  @Input() type: InputTypes = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() InputName: string = '';

  value: string = ''
  onChange = (value: string) => {}
  onTouched = () => {}
  onInput(event: Event){
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
  }

}
