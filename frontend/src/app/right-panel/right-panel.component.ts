import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { TimelineModule } from 'primeng/timeline';
@Component({
  selector: 'app-right-panel',
  imports: [CarouselModule, TimelineModule],
  templateUrl: './right-panel.component.html',
  styleUrl: './right-panel.component.scss'
})
export class RightPanelComponent {

  skillList: {iconName:string , title: string}[] = [
    {iconName:'typescript', title:'TypeScript'},
    {iconName:'nodejs', title:'NodeJs'},
    {iconName:'mongodb', title:'MongoDb'},
    {iconName:'angular', title:'Angular'},
    {iconName:'aws', title:'AWS cloud'},
    {iconName:'react', title:'React'},
    {iconName:'sass', title:'Sass'},
    {iconName:'postgres', title:'PostgresDB'},
    {iconName:'postman', title:'PostMan'},
    {iconName:'html', title:'HTML'},
    {iconName:'css', title:'CSS'},
    {iconName:'javascript', title:'JavaScript'},
  ]


  projectList: {projectName:string , activity: string[]}[] = [
    {
      projectName:'TS&K Project',
       activity:[
          'Developed an internal web application for talent and skills management',
          'Built interactive dashboards using AngularJS, TypeScript, RxJS, and HighchartsJS',
          'Designed and developed a scalable Node.js backend integrated with AWS RDS',
        ]
    },
    {
      projectName:'Emerging Leaders Program',
       activity:[
          'Selected as a finalist in Schneider Electric\'s strategic initiative to develop high-potential talent',
          'Trained and certified as a Scrum Master with hands-on experience in software project management',
          'Led project planning and execution using Azure DevOps Boards',
        ]
    },
    {
      projectName:'Data Unification Project',
       activity:[
          'Built a distributed desktop application for real-time plant operations monitoring',
          'Achieved 2x cost savings and significant quality improvements',
          'Applied object-oriented principles to design, develop, and deploy a scalable monitoring system',
        ]
    },
    {
      projectName:'Kemira Project',
       activity:[
          'Contributed to an IIoT-based solution for optimizing plant operations',
          'Developed advanced JavaScript business logic to analyze real-time plant data',
          'Engineered a robust Node.js backend with RESTful APIs',
        ]
    },
  ]


}

// Global Innovation Award for Sustainability:

// Proposed and developed an AI model that monitors PEM Electrolyzer operations in real-time.
// Optimized parameters to maintain efficiency and extend the lifespan of electrolyzers.
// Supported sustainable hydrogen production, advancing cleaner energy initiatives.
// EEC Ideation Campaign:

// Successfully implemented an innovative solution as the Tech Lead.
// Developed a desktop application using WPF and C# for dynamic document merging.
// Achieved an 80% reduction in man-hours and marked improvements in documentation quality.
