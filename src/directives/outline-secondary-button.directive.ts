import {Directive, EventEmitter, Host, HostBinding, HostListener, OnInit, Output} from '@angular/core';
import {MailService} from '../services/mail-service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'button[outline]'
})
export class OutlineSecondaryButtonDirective implements OnInit {


  public constructor(public mailService: MailService) {
  }

  @HostBinding('class')
  public targetClass = 'btn btn-outline-secondary';


  @Output()
  public readonly readyEvent: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
    this.readyEvent.emit();
  }

  @HostListener('click')
  public onHostClicked(): void {
  }
}
