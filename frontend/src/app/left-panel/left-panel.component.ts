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
    { iconName:"code", name:"Projects", url:"#Projects"},
    { iconName:"job", name:"Achivement", url:"#Achivements"},
    { iconName:"education", name:"Education", url:"#Education"}
  ]


  SocialLinks: {iconName: string, name: string, data:string}[] =
  [
    { iconName: "linkedin", name:"LinkedIn", data:"https://www.linkedin.com/in/gokul-ambalavanan-338a99155/"  },
    { iconName: "github", name:"GitHub", data:"https://github.com/wolfiee27"},
    { iconName: "phone", name:"Phone", data:"8939589721"},
    { iconName: "mail", name:"Email", data:"vannangokul@gmail.com"},
  ]

  socialClickHandler(input: {iconName: string, name: string, data:string}){
    if(input.name === "LinkedIn"){
      window.open(input.data, "_blank")
    }else if(input.name === "GitHub"){
      window.open(input.data, "_blank")
    }else if(input.name === "Phone"){
      window.open("tel:" + input.data)
    }else if(input.name === "Email"){
      window.open("mailto:" + input.data)
    }
  }
}

