import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../services/data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDrop: boolean = false;
  @ViewChild('city') city: ElementRef;
  cityName: string = '';
  constructor(private router: Router, private wService: WeatherService) {}

  ngOnInit(): void {}
  toggle(num: number) {
    this.isDrop = !this.isDrop;
    if (num == 1) {
      this.router.navigate(['/']);
    }
  }
  search(name: HTMLInputElement) {
    this.cityName = name.value;
    this.wService.city.next(this.cityName);
  }
}
