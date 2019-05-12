import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator, MatTableDataSource, PageEvent } from '@angular/material';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  constructor(private _router: Router) { console.log(44444); }
  hasList = true;
  displayedColumns: string[] = ['articleTitle', 'articleContent', 'articleType', 'articleStatus', 'articleDate', '操作'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;

  pageEvent: PageEvent;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  editItem(item): any {
    this.hasList = false;
    this._router.navigate(['/app/user/editUser']);
  }
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
}

export interface PeriodicElement {
  articleTitle: string;
  articleContent: string;
  articleStatus: string;
  articleDate: string;
  articleType: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {articleTitle: 'Hydrogen', articleContent: '这是一个内容', articleStatus: '不通过', articleDate: '2018-09-09', articleType: '生活常识'},
  {articleTitle: 'Hydrogen', articleContent: '这是一个内容', articleStatus: '不通过', articleDate: '2018-09-09', articleType: '生活常识'},
  {articleTitle: 'Hydrogen', articleContent: '这是一个内容', articleStatus: '不通过', articleDate: '2018-09-09', articleType: '生活常识'},
  {articleTitle: 'Hydrogen', articleContent: '这是一个内容', articleStatus: '不通过', articleDate: '2018-09-09', articleType: '生活常识'},
  {articleTitle: 'Hydrogen', articleContent: '这是一个内容', articleStatus: '不通过', articleDate: '2018-09-09', articleType: '生活常识'},
  {articleTitle: 'Hydrogen', articleContent: '这是一个内容', articleStatus: '不通过', articleDate: '2018-09-09', articleType: '生活常识'},
  {articleTitle: 'Hydrogen', articleContent: '这是一个内容', articleStatus: '不通过', articleDate: '2018-09-09', articleType: '生活常识'},
  {articleTitle: 'Hydrogen', articleContent: '这是一个内容', articleStatus: '不通过', articleDate: '2018-09-09', articleType: '生活常识'},
  {articleTitle: 'Hydrogen', articleContent: '这是一个内容', articleStatus: '不通过', articleDate: '2018-09-09', articleType: '生活常识'},
  {articleTitle: 'Hydrogen', articleContent: '这是一个内容', articleStatus: '不通过', articleDate: '2018-09-09', articleType: '生活常识'}
];

