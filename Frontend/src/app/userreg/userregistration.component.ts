import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent {
  regdata:any;
  constructor(private rt:ApiService){}
  ngOnInit(){
    this.regdata= new FormGroup({
      name:new FormControl(""),
      email:new FormControl(""),
      password:new FormControl(""),
      username:new FormControl(""),
      confirmpassword:new FormControl(""),
      phoneno:new FormControl(""),
      street:new FormControl(""),
      city:new FormControl(""),
      village:new FormControl(""),
      zipcode:new FormControl(""),
      mandal:new FormControl(""),
      state:new FormControl(""),
      gender:new FormControl("")
      


    })

  }
  userreg(rdata){
    console.log(rdata);
     this.rt.usereg(rdata).subscribe((res)=>{
      if(res.submit==true){
        alert("submitted successfully");
        this.regdata.reset();
      }
      else{
        alert("not submiited");
        this.regdata.reset();
      }
     },
     (err)=>{
      console.log(err);
     }
     )

  }

}
