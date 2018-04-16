import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-user-inbox',
  templateUrl: './user-inbox.component.html',
  styleUrls: ['./user-inbox.component.less']
})
export class UserInboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      var windowHeight = $(window).height();
      //alert(windowHeight);
      $('.maillist_block').css({ 'max-height': windowHeight -260 + "px" });
      $('.message_views').css({ 'max-height': windowHeight -200 + "px" });
    });
  }

}
