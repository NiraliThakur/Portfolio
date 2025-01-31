import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
  certifications = [
    {
      title: 'Full-Stack Web Development Internship',
      provider: 'Info-Origin',
      date: 'Aug 2024 - Oct 2024',
      link: 'assets/certificates/internship-certificate.pdf'
    },
  ];
}