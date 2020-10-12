import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  viewImg: string = "./../assets/second.jpg";
  title = 'my-gallery';

  onSelectImg(src: string): void {
    this.viewImg = src;
  }
}
