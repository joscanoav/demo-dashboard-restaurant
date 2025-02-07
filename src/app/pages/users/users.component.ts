import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-users',
  imports: [TableModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe(data => {
      this.users = data.users; // Extraemos los usuarios de db.json
    });
  }
}
