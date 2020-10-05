import { Directive } from '@angular/core';
import { FormGroup, Validator } from '@angular/forms';

@Directive({
  selector: '[validateLocation]'
})
export class LocationValidator implements Validator {
  validate(formGroup: FormGroup): { [key: string]: any } {
    const addressControl = formGroup.controls.address;
    const cityControl = formGroup.controls.city;
    const countryControl = formGroup.controls.country;
    const onlineUrlControl = (<FormGroup>formGroup.root)
      .controls.onlineUrl;

    if (
      (addressControl &&
        addressControl.value &&
        cityControl &&
        cityControl.value &&
        countryControl &&
        countryControl.value) ||
      (onlineUrlControl && onlineUrlControl.value)
    ) {
      return null;
    } else {
      return { validateLocation: false };
    }
  }
}
