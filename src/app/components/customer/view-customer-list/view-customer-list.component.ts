import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../models/customer';
import {CustomerService} from '../../../service/customer.service';
import {Observable} from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';
import customerData from '../json/customer.json';

@Component({
  selector: 'app-view-customer-list',
  templateUrl: './view-customer-list.component.html',
  styleUrls: ['./view-customer-list.component.scss']
})
export class ViewCustomerListComponent implements OnInit {
  customers: Observable<any>;
  filterStatus = '';
  page = 1;

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.customerService.getCustomerList().subscribe(data => {
        this.customers = data;
      },
      error => console.log(error));
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  customerDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateCustomer(id: number) {
    this.router.navigate(['update', id]);
  }

}
