import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Customer} from '../../../models/customer';
// @ts-ignore
import {CustomerService} from '../../../service/customer.service';
import customerData from '../json/customer.json';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  submitted = false;
  customers = customerData;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

  save() {
    this.customerService
      .createCustomer(this.customer).subscribe(data => {
        console.log(data);
        this.customer = new Customer();
      },
      error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/customers']);
  }

}
