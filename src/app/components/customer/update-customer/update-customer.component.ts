import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../models/customer';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../../../service/customer.service';
import customerData from '../json/customer.json';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {

  id: number;
  customer: Customer;
  searchCustomer;
  customers = customerData;

  constructor(private route: ActivatedRoute, private router: Router,
              private customerService: CustomerService) {
  }

  ngOnInit() {
    this.customer = new Customer();

    this.id = this.route.snapshot.params['id'];

    this.customerService.getCustomer(this.id)
      .subscribe(data => {
        this.customer = data;
      }, error => console.log(error));
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.id, this.customer)
      .subscribe(data => {
        console.log(data);
        this.customer = new Customer();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCustomer();
  }

  gotoList() {
    this.router.navigate(['/customers']);
  }
}
