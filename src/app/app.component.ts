import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) document, private route: ActivatedRoute) {

    console.log(this.route.snapshot)
    setTimeout(() => {
      document.getElementById('nb-global-spinner').style.display = 'none';
    }, 2000);
  }

  ngOnInit(): void {
  }
}
