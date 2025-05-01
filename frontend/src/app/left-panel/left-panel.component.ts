import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-left-panel',
  imports: [MatIconModule],
  templateUrl: './left-panel.component.html',
  styleUrl: './left-panel.component.scss'
})
export class LeftPanelComponent {
  categoriesList: {iconName: string, name: string, url:string}[] =
  [
    { iconName:"flag", name:"About", url:"#About"},
    { iconName:"tools", name:"Skills", url:"#Skills"},
    { iconName:"job", name:"Jobs", url:"#Jobs"},
    { iconName:"code", name:"Projects", url:"#Projects"},
    { iconName:"education", name:"Education", url:"#Education"}
  ]


  SocialLinks: {iconName: string, name: string, url:string}[] =
  [
    { iconName: "linkedin", name:"LinkedIn", url:"https://www.linkedin.com/in/your-profile"  },
    { iconName: "github", name:"GitHub", url:""},
    { iconName: "phone", name:"Phone", url:""},
    { iconName: "mail", name:"Email", url:""},
  ]

}
