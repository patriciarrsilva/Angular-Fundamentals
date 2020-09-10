import {
  Directive,
  OnInit,
  Inject,
  ElementRef,
  Input
} from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
  selector: '[modalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  @Input('modalTrigger') modalId: string;
  private el: HTMLElement;

  constructor(
    ref: ElementRef,
    @Inject(JQ_TOKEN) private $: any
  ) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', () => {
      this.$(`#${this.modalId}`).modal({});
    });
  }
}
