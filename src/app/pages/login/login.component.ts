import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor() {}
  username: any = '';
  ngOnInit(): void {}
  loguear() {
    console.log(this.username);
  }
}
