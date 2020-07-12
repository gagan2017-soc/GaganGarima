import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-page-faq',
  templateUrl: './page-faq.component.html',
  styleUrls: ['./page-faq.component.css'],
  providers: [MessageService]
})
export class PageFaqComponent implements OnInit {
  index: number = -1;
  constructor(private messageService: MessageService) {
    
   }

  ngOnInit(): void {
  }
  onTabClose(event) {
    this.messageService.add({severity:'info', summary:'Tab Closed', detail: 'Index: ' + event.index})
}

onTabOpen(event) {
    this.messageService.add({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
}

openNext() {
    this.index = (this.index === 3) ? 0 : this.index + 1;
}

openPrev() {
    this.index = (this.index <= 0) ? 3 : this.index - 1;
}

}
