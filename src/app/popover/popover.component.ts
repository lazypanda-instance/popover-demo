import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit, AfterViewInit, OnDestroy {
  popoverApplied = false;
  lblPopoverTextValue = 'Simple popover text on Hovering on <label> tag';
  btnPopoverTextValue = 'Sample text on button click!';
  btnPopoverTemplate = `<div>
                          <div class="arrow"></div>
                          <h3 class="popover-header">Custom Title</h3>
                          <div class="popover-body">Sample description</div>
                        </div>`;
  autoPopoverTxtValue = 'Hi, I am an automatic popover!'


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      $('#auto-popover-lbl').popover('show');
    }, 1000);

    if (!this.popoverApplied) {
      $('[data-toggle="popover"]').popover();
      this.popoverApplied = true;
    }
  }

  showPopover(event: any): void {
    $(document.getElementById('click-me-btn')).popover('show');
  }

  showPopoverWithTemplate(event: any): void {
    $(document.getElementById('hover-me-btn')).popover('show');
  }

  ngOnDestroy(): void {
    $('[data-toggle="popover"]').popover('dispose');
    this.popoverApplied = false;
  }

}
