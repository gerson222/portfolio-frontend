import { Component } from '@angular/core';
import { AboutMe, aboutMeData } from '../../models/aboutme';

@Component({
  selector: 'app-about-me',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutMeComponent {
  aboutMeData: AboutMe[] = aboutMeData;
}
