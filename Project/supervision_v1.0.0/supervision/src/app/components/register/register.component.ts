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
  // register() {
  //   console.log("this ", this.signupForm.value);
  //   this.signup.signups(this.signupForm.value).subscribe(
  //     data => {
  //       if (data.message) {
  //         console.log(data.data);
          
  //         let playload = {
  //           firstname: '',
  //           lastname: '',
  //           address: '',
  //           phonenumber: '',
  //           userId: data.data._id
  //         }
  //         this.address.addAddress(playload).subscribe(
  //           data => {
  //             console.log(data);
  //           },
  //           err => {
  //             console.log(err);
  //           }
  //         )
  //         this.router.navigate(['/signin']);
  //       } else {
  //         alert('Cannot Sign up');
  //       }
  //     },
  //     err => {
  //       console.log(err);
  //       alert('Cannot Sign up');
  //     });
  // }
  get fromdata() {
    console.log(this.signupForm.controls);
    return this.signupForm.controls
  }
}
