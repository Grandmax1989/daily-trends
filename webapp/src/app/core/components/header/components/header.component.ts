import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openNewFeed() {
    this.router.navigate(['/feeds/new']);
  }

  refresh() {
    window.location.href = window.location.href;
  }
}
