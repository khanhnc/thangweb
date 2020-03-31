import { Component, OnInit } from '@angular/core';
import { faPhoneAlt, faMapMarkedAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faPhone = faPhoneAlt;
  faMarker = faMapMarkedAlt;

  faEnvelope = faEnvelope;
  faFacebook = faFacebook;
  constructor() { }

  ngOnInit(): void {
  }

}
