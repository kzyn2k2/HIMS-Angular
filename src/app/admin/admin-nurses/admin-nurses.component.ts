import { Component } from '@angular/core';
import { NurseSummary } from '../../model/nurse.model';
import { NurseService } from '../../service/nurse.service';
import { Pager } from '../../model/model';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from '../../util/paginator/paginator.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-nurses',
  standalone: true,
  imports: [CommonModule, PaginatorComponent, RouterLink],
  templateUrl: './admin-nurses.component.html',
  styleUrl: './admin-nurses.component.scss'
})
export class AdminNursesComponent {

  pager!: Pager<NurseSummary>;
  pageNumber: number = 0;
  pageSize: number = 10;
  nurses: NurseSummary[] = [];

  constructor(private nurseService: NurseService) {

  }

  ngOnInit(): void {
    this.getNurseSummaries();
  }

  getNurseSummaries() {
    this.nurseService.getNurseSummaries(this.pageNumber, this.pageSize).subscribe({
      next: (pager) =>{
        this.pager = pager;
        this.nurses = this.pager.data;
      }
    })
  }

  changeEvent(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.getNurseSummaries();
  }

}
