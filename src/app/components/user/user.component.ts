import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

 userInfo!:any[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.userService.getUsers().subscribe((value:any)=> this.userInfo = value.data)
  }

}
