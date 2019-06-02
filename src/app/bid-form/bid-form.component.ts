import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';

@Component({
  selector: 'bid-form',
  templateUrl: './bid-form.component.html',
  styleUrls: ['./bid-form.component.css']
})
export class BidFormComponent {

  public greeting='';
  onSubmit(f: NgForm, value: any) {
    console.log(value);
    this.greeting = "   Thank you! You can expect to hear from us within two business days.";
    f.resetForm();
  }

}
