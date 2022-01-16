import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { DangNhap } from '../dangnhap';
@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.scss']
})
export class DangnhapComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  // powers = ['Nam', 'Nữ'];

  // model = new DangNhap(18, '', this.powers[0]);

  // // submitted = false;

  // // onSubmit() { this.submitted = true;
  // // alert('Tạo tài khoản thành công') }

  // newHero() {
  //   this.model = new DangNhap(42, '', '');
  // }


  model = new DangNhap(1, 'loi123', '2305');

  submitted = false;

  onSubmit() {
    this.submitted = true
    alert('Tạo tài khoản thành công')
    
  }
}
