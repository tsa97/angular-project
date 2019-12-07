import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-komponenbaru]',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './komponenbaru.component.html',
  styleUrls: ['./komponenbaru.component.css']
})
export class KomponenbaruComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was Created';
  serverName = '';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    if ((<HTMLInputElement>event.target).value = "") {
      this.serverCreationStatus = 'Please do not leave blank';  
    } else {
      this.serverCreationStatus = 'Server was Created, name is ' + this.serverName;
    }
    
  }

  onUpdateServerName($event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetServerName() {
    this.serverName = "";
    this.serverCreationStatus = 'Server Restarted' + this.serverName;
  }

}
