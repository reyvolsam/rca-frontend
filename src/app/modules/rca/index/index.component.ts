import { Component, OnInit } from '@angular/core';
import { RCAIndex } from 'src/app/models/RCAIndex';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  rca_index:RCAIndex

  constructor() { }

  ngOnInit() {
  }

}
