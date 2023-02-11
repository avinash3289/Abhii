import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-supplierregistration',
  templateUrl: './supplierregistration.component.html',
  styleUrls: ['./supplierregistration.component.css']
})
export class SupplierregistrationComponent {
  regdata:any;
  constructor(private ap1:ApiService){}
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
  reg(data){
    if(data){
        this.ap1.supreg(data).subscribe((res)=>{
          if(res.submit==true){
            alert("successfully registered");
            this.regdata.reset();
            
            
          }
        },
        (err)=>{
          alert("not registerd");
          console.log(err);
        }
        )
    }

  }

}
