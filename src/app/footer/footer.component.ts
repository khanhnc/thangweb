import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faFacebook = faFacebookSquare;
  faInstagram = faInstagram;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    let setColor = setInterval(() => {
      let logoDocument: any = this.document.getElementById("footer-logo");
      let contentDoc = logoDocument.contentDocument;
      if (contentDoc.getElementsByTagName("svg").length) {
        contentDoc.getElementsByTagName("svg")[0].style.fill = "white";;
        contentDoc.getElementsByTagName("tspan")[0].style.fill = "white";
        let iconPaths = contentDoc.getElementsByTagName("path");
        for (let i = 0; i < iconPaths.length; i++) {
          iconPaths[i].style.stroke = "#6e74dc";
        }
        clearInterval(setColor);
      }
    }, 50)
  }

}
