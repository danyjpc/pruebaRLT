import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor( private router: Router) { }
  title = 'pruebaRLT';
  redirect(){
    this.router.navigate(['']);
  }
}
