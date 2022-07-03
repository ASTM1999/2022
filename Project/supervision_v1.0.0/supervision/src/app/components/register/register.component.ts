import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage'
import { SignupService } from 'src/app/services/signup.service';
import { AddressService } from 'src/app/services/address.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    role: new FormControl('')
  });
  constructor(private router: Router, private local: LocalStorageService, private signup: SignupService, /*private cart: CartService,*/ private address: AddressService) { }
  ngOnInit(): void {
  }
  getUser() {
    return this.local.get('user').result.username
  }
 
  get fromdata() {
    console.log(this.signupForm.controls);
    return this.signupForm.controls
  }
}
