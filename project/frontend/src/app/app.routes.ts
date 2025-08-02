import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { Home } from './home/home';
import { About } from './about/about';
import { Login } from './login/login';
import { Register } from './register/register';
import { Profile } from './profile/profile';
import { Contact } from './contact/contact';
import { Todo } from './todo/todo';
import { Navbarn } from './navbarn/navbarn';




export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path:'home', component:Home},
    {path:'about', component: About},
    {path: 'login', component: Login},
    {path:'register', component:Register},
    {path:'profile', component:Profile},
    {path:'contact', component:Contact},
    {path:'todolist', component:Todo},
    {path:'navbarn', component:Navbarn}


];
