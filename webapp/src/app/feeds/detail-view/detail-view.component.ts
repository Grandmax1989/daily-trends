import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiFeedService } from 'src/app/core/http/api-feed.service';
import { Feed } from 'src/app/shared/models/feed.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  form: FormGroup = new FormGroup({
    _id: new FormControl(null),
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
    publisher: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)]),
    source: new FormControl('', [Validators.required]),
  });

  disabled: boolean;

  constructor(
    private route: ActivatedRoute, private apiFeedService: ApiFeedService, private router: Router, private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Feed) => {
        if (params.id) {
          this.apiFeedService.getFeedById(params.id).subscribe((data: any) => {
            this.form.reset(data);
          });
        }

      }
    );
  }
  submit(feed?) {
    this.apiFeedService.postFeeds(feed).subscribe(
      () => {
        this.openSnackBar('Notícia');
        this.return();
      }
    );
  }

  return() {
    this.router.navigate(['/feeds']);
  }

  delete(feed) {
    console.log(feed)
    console.log(this)
    this.apiFeedService.deleteFeed(feed._id).subscribe(
      () => {
        this.openSnackBar('Notícia Borrada');
        this.return();
      }
    );
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, null, {
      duration: 2000,
      verticalPosition: 'top',
      panelClass: ['red-snackbar']
    });
  }
}
