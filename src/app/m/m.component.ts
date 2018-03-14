import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m',
  templateUrl: './m.component.html',
  styleUrls: ['./m.component.css']
})
export class MComponent implements OnInit {
  title = 'app';
  checked = false;
  indeterminate = false;
  // align = 'start';
  disabled = false;
  isShow = false;
  public global = 'xin chao viet nam';
  public name = 'day la co hoi dau tien !';
  public gender: any = 0;
  private fonttS;
  isChange: Boolean = false;
  text: number;
  array1: String[] = [
    'vu van tien', 'nguyen ngoc ngan', 'luong bich huu'];
  array2: String[] = [
    'vu van tien', 'nguyen ngoc ngan', 'luong bich huu', 'vu ngoc thien', 'ta dinh quang'];
  product: any[] = [
    { 'id': 1, 'so_luong': 1000, 'name': 'vu van tien' },
    { 'id': 2, 'so_luong': 21000, 'name': 'nguyen ngoc ngan' },
    { 'id': 3, 'so_luong': 31000, 'name': 'luong bich huu' },
    { 'id': 4, 'so_luong': 41000, 'name': 'vu ngoc thien' }
  ];
  // swicht
  tabChan: Number = 1;
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.isShow = !this.isShow;
  }
  onChange(value) {
    this.isChange = value;
    // console.log(value);
  }
  isNumber1() {
    console.log(this.text);
  }
  loadData() {
    this.array1 = this.array2;
  }
  // swichcase
  changeTab(tabChan) {
    // tabChan = this.tabChan;
    console.log(tabChan);
  }


}
