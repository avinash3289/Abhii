import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private rout:Router,private useapi:ApiService){}
  userform:any;
  ngOnInit(){
    this.userform=new FormGroup({
      user:new FormControl(""),
      pass:new FormControl("")
    })
  }
   user(userdata){
     
      this.useapi.supplier(userdata).subscribe((res)=>{
        if(res.submit==true){
          alert("Login successfull");
           
        }
        else{
          alert("incorrect credintials ");
           
        }
      },
      (err)=>{
        alert("error occured");
        console.log(err);
        
      }
      )
  
    
   }
  }
  