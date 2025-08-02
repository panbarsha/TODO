import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [Navbar, Footer, ],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

}
