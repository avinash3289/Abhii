import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent{
    formdata:any;
    constructor(private route:Router,private api:ApiService){}
    ngOnInit(){
      this.formdata=new FormGroup({
        username:new FormControl("",Validators.required),
        password:new FormControl("",Validators.required),
      });
    }

    log(result){
      if(result.username.length>0 && result.password.length>0){
        if(result.username=='admin' && result.password=='9471'){
          alert("admin successfully login");
          this.route.navigate(["/dashboard"]); 
        }
        else{
          alert("wrong id and password for admin");
          this.formdata.reset();
        }
      }
      else{
        alert("data must be fill");
        this.formdata.reset();
      }
    }

     
}
