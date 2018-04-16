import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  callLoginPage:boolean = false;
  overlay_view:boolean = false;
  login_filed_block:boolean = true;
  reg_filed_block:boolean = false;
  showinLogin:boolean = true;
  showinreg:boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotouser()
  {
    this.router.navigate(['./userMod']);
  }
  showLogin()
  {
    this.callLoginPage = true;
    this.overlay_view = true;
  }
  showRegBlock()
  {
    this.login_filed_block = false;
    this.reg_filed_block = true;
    this.showinreg = true;
    this.showinLogin = false;
  }
  showLoginBlock()
  {
    this.login_filed_block = true;
    this.reg_filed_block = false;
    this.showinreg = false;
    this.showinLogin = true;
  }
  closePopup()
  {
    this.callLoginPage = false;
    this.overlay_view = false;
  }
}
