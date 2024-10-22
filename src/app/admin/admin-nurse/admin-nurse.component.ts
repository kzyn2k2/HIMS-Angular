import { Component } from '@angular/core';
import { NurseDetail } from '../../model/nurse.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NurseService } from '../../service/nurse.service';

@Component({
  selector: 'app-admin-nurse',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-nurse.component.html',
  styleUrl: './admin-nurse.component.scss'
})
export class AdminNurseComponent {

  nurse!: NurseDetail;

  constructor(private nurseService: NurseService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.getNurse();
  }

  getNurse() {
    let id = this.route.snapshot.paramMap.get("id");
    this.nurseService.getNurseDetail(id).subscribe({
      next: nurse => {
        this.nurse = nurse;
      }
    })
  }

  removeNurse() {
    let id = this.route.snapshot.paramMap.get("id");
    this.nurseService.removeNurse(id).subscribe({
      next: res => {
        this.router.navigate(['/admin/nurses']);
      }
    })
  }

}
