import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  linkSrc: SafeUrl
  imagesList: SafeUrl[] = [];
  constructor(private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(res => {
      res.images.map(img => {
        const reader = new FileReader();
        let urlcreator = window.URL;
        let objectUrl = urlcreator.createObjectURL(img);
        let sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
        this.imagesList.push(sanitizedUrl);
      })
    })
  }

}
