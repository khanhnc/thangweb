import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  linkSrc: SafeUrl
  imagesList: SafeUrl[] = [];
  qc_text = [
    "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.",
    "EX EA DIFFICULTATE ILLAE FALLACILOQUAE.",
    "UT AIT ACCIUS, MALITIAE NATAE SUNT",
    "PROCLIVI CURRIT ORATIO. DUO REGES.",
    "MAXIMUS DOLOR, INQUIT, BREVIS EST.",
    "MAXIMUS DOLOR, INQUIT, BREVIS EST.",
  ]
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  constructor(private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(res => {
      res.images.map(img => {
        const reader = new FileReader();
        let urlcreator = window.URL;
        let objectUrl = urlcreator.createObjectURL(img);
        // let sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
        this.imagesList.push(objectUrl);
      })
    })
  }

}
