import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'upvote',
  styleUrls: ['./upvote.component.css'],
  template: `
    <div
      class="voting-widget-container pointable"
      (click)="onClick()"
    >
      <div class="well voting-widget">
        <div class="voting-button">
          <i
            *ngIf="voted"
            class="glyphicon glyphicon-heart"
          ></i>
          <i
            *ngIf="!voted"
            class="glyphicon glyphicon-heart-empty"
          ></i>
        </div>

        <div class="badge badge-inverse voting-count">
          <div>{{ count }}</div>
        </div>
      </div>
    </div>
  `
})
export class UpvoteComponent {
  @Input() count: number;
  @Input() voted: boolean;
  @Output() vote = new EventEmitter();

  onClick() {
    this.vote.emit();
  }
}
