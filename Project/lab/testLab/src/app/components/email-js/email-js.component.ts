import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-email-js',
  templateUrl: './email-js.component.html',
  styleUrls: ['./email-js.component.css']
})



export class EmailJSComponent implements OnInit {

  
  ngOnInit(){}
  myData = [
    { text: 'book', value: 10 },
    { text: 'Movies, Music & Games', value: 2 },
    { text: 'Electronics & Computers', value: 3 },
    { text: 'Home, Garden & Tools', value: 4 },
    { text: 'Health & Beauty', value: 5 },
    { text: 'Toys, Kids & Baby', value: 6 },
    { text: 'Clothing & Jewelry', value: 7 },
    { text: 'Sports & Outdoors', value: 8 },
    { text: 'Automotive & Industrial', value: 9 }
  ]
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_xbfbeea', 'template_el9d6ub', e.target as HTMLFormElement, 'a4JHmb-29gdsVimXa')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  

}
