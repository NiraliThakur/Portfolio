import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  livedemo: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Quiz Website',
      description: 'Interactive Quiz website using HTML, CSS, JavaScript.',
      image: 'assets/images/project1.png',
      github: 'https://github.com/NiraliThakur/quiz_app_project.git',
      livedemo: 'https://niralithakur.github.io/quiz_app_project/'
    },
    {
      title: 'Pizza Ordering Website',
      description: 'Pizza Website using HTML, CSS, Bootstrap, Python, Django.',
      image: 'assets/images/project2.png',
      github: 'https://github.com/NiraliThakur/Food_ordering_website.git',
      livedemo: 'https://food-ordering-website-urjn.onrender.com/'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}