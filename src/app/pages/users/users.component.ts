import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TableModule, DialogModule, ButtonModule, InputTextModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  userDialog: boolean = false;
  user: any = { id: null, name: '', email: '', role: 'customer' };
  isNewUser: boolean = true; // Indica si es un nuevo usuario o edición

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.usersService.getUsers().subscribe(data => {
      this.users = data.users;
    });
  }

  openNewUserModal() {
    this.user = { id: null, name: '', email: '', role: 'customer' };
    this.isNewUser = true;
    this.userDialog = true;
  }

  saveUser() {
    if (this.isNewUser) {
      this.user.id = this.users.length + 1;
      this.users.push({ ...this.user });
    } else {
      this.users = this.users.map(u => (u.id === this.user.id ? this.user : u));
    }
    this.userDialog = false;
  }

  editUser(user: any) {
    this.user = { ...user };
    this.isNewUser = false;
    this.userDialog = true;
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }

  closeDialog() {
    this.userDialog = false;
  }
}

