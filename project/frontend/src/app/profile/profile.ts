import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth';
import { Navbarn } from '../navbarn/navbarn';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrl: './profile.css',
  imports:[CommonModule,RouterOutlet,Navbarn,Footer]
})
export class Profile implements OnInit{
  user:any;

  constructor(private auth: AuthService){}

  ngOnInit(){
    this.user = this.auth.getUser();
  }

 
 getUser(){
  return this.user;
 }
 
}

