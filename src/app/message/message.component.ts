import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input() text: string = '';
  @Input() type: 'info' | 'error' | 'success' = 'info';

  getClass() {
    return {
      'info': this.type === 'info',
      'error': this.type === 'error',
      'success': this.type === 'success'
    };
  }
}

