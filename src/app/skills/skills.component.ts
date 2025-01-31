import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressBarModule, MatIconModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
    skills = [
    { name: 'Python', level: 80, icon: 'developer_mode' },
    { name: 'Django', level: 75, icon: 'api' },
    { name: 'JavaScipt', level: 70, icon: 'integration_instructions' },
    { name: 'MySQL', level: 70, icon: 'storage' },
    { name: 'Angular', level: 65, icon: 'view_quilt' },
    
  ];

  constructor() { }

  ngOnInit(): void { }
}