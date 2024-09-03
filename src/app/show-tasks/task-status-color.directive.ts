import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';
import { Task } from '../models/task';
import { State } from '../models/state';

@Directive({
  selector: '[colorTask]',

})
export class TaskStatusColorDirective implements OnChanges {
  @Input() colorTask!: State;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    this.updateColor();
  }

  private updateColor(): void {
    switch (this.colorTask) {
      case 'EN COURS':
        this.el.nativeElement.style.color = 'blue';
        break;
      case 'A FAIRE':
        this.el.nativeElement.style.color = 'red';
        break;
      case 'TERMINEE':
        this.el.nativeElement.style.color = 'green';
        break;
      default:
        this.el.nativeElement.style.color = 'black';
    }
  }
}
