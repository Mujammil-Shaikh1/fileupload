import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private api:ApiService) { }


  ngOnInit(): void {
  }
  userimg:any


  userimage(img:any)
  {

    this.userimg=img.target.files[0]
  }

  saveuser(data:any)
  {

   var formdata=new FormData();

   formdata.append("user_name",data.value.name);
   formdata.append("user_email",data.value.email);
   formdata.append("user_img",this.userimg)

   this.api.postdata(formdata).subscribe(res=>console.table(res))
  }
}
