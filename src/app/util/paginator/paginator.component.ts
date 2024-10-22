import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {

  @Input() totalItems: number = 0;
  @Output() pageChangeEvent = new EventEmitter<number>();


  itemsPerPage: number = 10;
  currentPage: number = 1;
  totalPages: number = 0;
  pages: number[] = [];
  visiblePages: number = 5;


  ngOnChanges(changes: SimpleChanges): void {
    if(changes['totalItems'] || changes['itemsPerPage']) {
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      this.calculatePages();
    }
  }

  calculatePages() {
    this.pages = [];

    let start = Math.max(this.currentPage - Math.floor(this.visiblePages / 2), 1);
    let end = Math.min(start + this.visiblePages - 1, this.totalPages);

    if (end - start < this.visiblePages - 1) {
      start = Math.max(end - this.visiblePages + 1, 1);
    }

    for (let i = start; i <= end; i++) {
      this.pages.push(i);
    }
    console.log(this.pages)
  }

  toPage(pageNumber: number) {
    if(pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      this.pageChangeEvent.emit(this.currentPage - 1);
      this.calculatePages();
    }
  }

  previousPage() {
   
    if(this.currentPage > 1) {
      this.toPage(this.currentPage - 1);
    }
  }

  nextPage() {
    if(this.currentPage < this.totalPages) {
      this.toPage(this.currentPage + 1);
    }
  }

}
