import { Component, OnInit } from '@angular/core';
import { ApiFeedService } from 'src/app/core/http/api-feed.service';
import { Observable } from 'rxjs';
import { Feed } from 'src/app/shared/models/feed.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent {

  constructor(private router: Router, private apiFeedService: ApiFeedService) { }
  feedsList = this.apiFeedService.getFeeds();

  openDetail(item) {
    this.router.navigate(['/feeds', item._id]);
  }
}
