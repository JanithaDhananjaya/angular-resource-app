import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {PageEvent} from '@angular/material/paginator';
import {ItemService} from '../service/item.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  url = 'http://localhost:4000/api/items';

  items: Observable<any>;
  filterStatus = '';

  totalItems;
  currentPage;
  pageSize;
  totalPages;


  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(x => this.loadPage(x.page || 1));
  }

  private loadPage(page) {
    this.http.get<any>(this.url).subscribe(x => {
      this.items = x.pageOfItems;
      this.totalPages = x.pager.totalItems;
      console.log(x);
    });
  }

  onPaginate(pageEvent: PageEvent) {
    this.currentPage = +pageEvent.pageIndex + 1;
    // this.itemService.getItems(this.postPerPage, this.pageNumber);


    const queryParams = `?page=${this.currentPage}`;
    return this.http.get<any>(this.url + queryParams)
      .subscribe((res) => {
        console.log(res);
        this.items = res.pageOfItems;
        this.totalPages = res.pager.totalItems;
      });
  }

  filter() {
    console.log(this.filterStatus);
  }
}
