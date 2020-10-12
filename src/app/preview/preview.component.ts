import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() onClickImg = new EventEmitter<string>();



  //let arrayImages: string[] = ['./../../assets/fifth.jpg','./../../assets/secomd.jpg','./../../assets/third.jpg'];

  
  selectImage(e: any) {
    this.onClickImg.emit(e.target.src);
  }

}
