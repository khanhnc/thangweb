import { Component, Inject } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) document) {
    setTimeout(() => {
      document.getElementById('nb-global-spinner').style.display = 'none';

    }, 2000);
  }

  ngOnInit(): void {
  }
}
