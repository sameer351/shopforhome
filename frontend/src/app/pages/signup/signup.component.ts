import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User;

  constructor( private location: Location,
               private userService: UserService,
               private router: Router) {
    this.user = new User();

  }

  registerForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+(com|in)$")]),
      name: new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern('^[a-zA-Z]+$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9!@#$%^&*]+$')]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern("^\\d{10}$")]),
      address: new FormControl('', [Validators.required]),

    }

    
  );

  get u() {
    return this.registerForm.controls;
  }



  ngOnInit() {


  }

  
  onSubmit() {
  //  this.user = this.registerForm.value
    this.user.email = this.registerForm.value.email
    this.user.name = this.registerForm.value.name
    this.user.password = this.registerForm.value.password
    this.user.phone = this.registerForm.value.phone
    this.user.address = this.registerForm.value.address
    this.user.active = true;

    this.userService.signUp(this.user).subscribe(u => {
      this.router.navigate(['/login']);
    },
        e => {
          console.log(e)
        });
  }

}
