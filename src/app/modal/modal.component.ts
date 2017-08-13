import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  host: {
    'class': 'modal fade show in'
  }
})
export class ModalComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
