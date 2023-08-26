import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isAdmin = false

  constructor(private route: Router) {
    const token = localStorage.getItem('jwtToken')
    if (token) {
      this.isAdmin = false
      localStorage.removeItem('adminJwtToken')
    }
    const jwtToken = localStorage.getItem("adminJwtToken")
    if (jwtToken) {
      localStorage.removeItem('jwtToken')
      this.isAdmin = true
    }
  }
  ngOnInit(): void {
    const token = localStorage.getItem('jwtToken')
    if (token) {
      this.isAdmin = false
      localStorage.removeItem('adminJwtToken')
    }
    const jwtToken = localStorage.getItem("adminJwtToken")
    if (jwtToken) {
      localStorage.removeItem('jwtToken')
      this.isAdmin = true
    }
  }

  onLogout() {
    localStorage.removeItem('jwtToken')
    localStorage.removeItem('adminJwtToken')
    window.alert("Logout Successful!")
    this.route.navigate(['/home'])
    this.isAdmin = false
  }
}
