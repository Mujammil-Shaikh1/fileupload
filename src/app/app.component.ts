import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fileupload';

//   studentimg:any

//   constructor(private api:ApiService){}

//   savestudent(obj:any)
//   {

//     if(this.studentimg)
//     {

//       var formdata= new FormData();
//       formdata.append("student_img",this.studentimg);
//       formdata.append("studename",obj.value.s_name);
//       formdata.append("studentmobile",obj.value.s_mobile)
// this.api.postdata(formdata).subscribe(res=>console.log(res))

//     }
//     else{
//       alert("Please fill form")
//     }
//   }

//   setstudentimage(img:any)
//   {
//     this.studentimg=img.target.files[0];
//   }
}
