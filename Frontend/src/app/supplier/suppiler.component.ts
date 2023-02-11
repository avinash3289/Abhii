import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-suppiler',
  templateUrl: './suppiler.component.html',
  styleUrls: ['./suppiler.component.css']
})
export class SuppilerComponent {
  supdata:any;
  constructor(private st:ApiService,private rt:Router){}
  ngOnInit(){
    this.supdata=new FormGroup({
      username:new FormControl(""),
      password:new FormControl("")
    })
  }
supp(sdata){
  if(sdata.username.length>0 && sdata.password.length>0){
    this.st.supplier(sdata).subscribe((res)=>{
      if(res.submit==true){
        alert("Login successfull");
        this.rt.navigate(['/supbd']);
        this.supdata.reset();
      }
      else{
        alert("incorrect credintials ");
        this.supdata.reset();
      }
    },
    (err)=>{
      alert("error occured");
      console.log(err);
      
    }
    )

  }
}
  

}
