// src/app/pagination/pagination.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 10;
  @Input() totalItems: number;

  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get hasPrevious(): boolean {
    return this.currentPage > 1;
  }

  get hasNext(): boolean {
    return this.currentPage < this.totalPages;
  }

  get showFirstEllipsis(): boolean {
    return this.currentPage > 3;
  }

  get showLastEllipsis(): boolean {
    return this.totalPages - this.currentPage > 2;
  }

  get pages(): number[] {
    const pagesToShow = Math.min(5, this.totalPages);
    const startPage = Math.max(1, this.currentPage - Math.floor(pagesToShow / 2));
    return Array.from({ length: pagesToShow }, (_, i) => startPage + i);
  }

  onPageClick(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }

  onPreviousClick(): void {
    if (this.hasPrevious) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  onNextClick(): void {
    if (this.hasNext) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }
}
