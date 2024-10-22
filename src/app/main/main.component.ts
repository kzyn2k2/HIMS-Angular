import { Component } from '@angular/core';
import { NavbarComponent } from '../util/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  links: string[] = [ "Departments", "Doctors", "Nurses", "Patients"];
  icons: string[] = ["fa-solid fa-house", "fa-solid fa-user-doctor", "fa-solid fa-user-nurse", "fa-solid fa-user"];
  routes: string[] = ["/admin/departments", "/admin/doctors", "/admin/nurses", "/admin/patients"]
}
