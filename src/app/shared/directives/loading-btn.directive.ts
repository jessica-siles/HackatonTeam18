import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ngxLoading]'
})
export class LoadingBtnDirective implements OnChanges {
  @Input() textLoading!: string;
  @Input() textInitial!: string;
  @Input() disabled!: boolean;
  @Input() loadingFlag!: boolean;

  constructor(private elem: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.condition && changes.condition.currentValue) {
      console.log({
        cha: changes.condition,
        c: changes.condition.currentValue
      });
      this.loadingFlag = changes.condition.currentValue;
    }
    this.elem.nativeElement.textContent = (this.loadingFlag) ? this.textLoading : this.textInitial;
    if (!this.loadingFlag) {
      console.log(this.loadingFlag);
      this.elem.nativeElement.disabled = !!(this.disabled);
    }
  }

}
