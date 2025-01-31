import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationList = [
    {
      degree: 'Bachelor of Engineering',
      year: '2018 - 2022',
      institution: 'Dr Babasaheb Ambedkar College of Engeneering and Research Nagpur, Maharashtra.', 
      description: 'CGPA - 7.67'
    },
    {
      degree: 'H.S.C',
      year: '2016-2018',
      institution: '  D.B. Science College Gondia, Maharashtra.',
      description: 'Percentage - 64.15'
    },
    {
      degree: 'S.S.C',
      year: '2015-2016',
      institution: 'Ravindranath Tagore High School Gondia, Maharashtra.',
      description: 'Percentage - 70.00'
    }
  ]; 
}