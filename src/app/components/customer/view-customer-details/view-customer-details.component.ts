import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../models/customer';
import { CustomerService } from '../../../service/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import customerData from '../json/customer.json';

@Component({
  selector: 'app-view-customer-details',
  templateUrl: './view-customer-details.component.html',
  styleUrls: ['./view-customer-details.component.scss']
})
export class ViewCustomerDetailsComponent implements OnInit {

  id: number;
  customer: Customer;
  searchCustomer;
  customers = customerData;


  constructor(private route: ActivatedRoute,private router: Router,
              private customerService: CustomerService) { }

  ngOnInit() {
    this.customer = new Customer();

    this.id = this.route.snapshot.params['id'];

    this.customerService.getCustomer(this.id)
      .subscribe(data => {
        this.customer = data;
      }, error => console.log(error));

    // // this.searchCustomer = this.customers.filter(customer => {
    // //   return customer.id == this.id;
    // });
  }

  list(){
    this.router.navigate(['customers']);
  }

}
