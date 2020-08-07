import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from './shared/event.service';

@Component({
  templateUrl: './create-event.component.html',
  styles: [
    `
      em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }

      .error input {
        background-color: #e3c3c5;
      }

      .error ::placeholder {
        color: #999;
      }
    `
  ]
})
export class CreateEventComponent {
  newEvent;
  isDirty = true;

  constructor(
    private router: Router,
    private eventService: EventService
  ) {}

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}
