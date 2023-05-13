import { Component, OnInit, inject, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserResponse } from '../../models/reponses/user.response';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRequest } from '../../models/requests/user.request';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  users: UserResponse[] = [];
  usersSingal = signal<UserResponse[]>([]);
  showUser = signal<boolean>(false);
  form: FormGroup;
  userIdSelected: number;

  private userService = inject(UserService);

  ngOnInit(): void {
    this.createForm();
    this.getAllUsers();
  }

  getAllUsers() {
    // this.userService.getUsers().subscribe((data) => {
    //   this.users = data
    // }, error => {
    //   console.log(error);
    // }, () => {
    //   console.log('Complete');
    // });

    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data
        this.usersSingal.set(data);
        console.log(data);

      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log('Complete');
      }
    })
  }

  cancel() {
    this.showUser.set(false);
    this.form.reset();
  }

  showAddUser() {
    this.form.patchValue({isEdit: false});
    this.showUser.set(!this.showUser());
  }

  editUser(id: number) {
    this.userService.getUserById(id).subscribe({
      next: (user) => {
        this.form.patchValue({
          name: user.name,
          lastname: user.lastname,
          email: user.email,
          phone: user.phone,
          isEdit: true
        });
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        this.userIdSelected = id;
        this.showUser.set(true);
      }

    });


  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log('Complete');
        this.getAllUsers();
      }
    });
  }

  save() {
    console.log(this.form);
    let user: UserRequest = {
      name: this.form.value.name,
      lastname: this.form.value.lastname,
      email: this.form.value.email,
      phone: this.form.value.phone
    };
    let observer: Observable<UserResponse>;
    this.form.value.isEdit ? observer = this.userService.updateUser(user, this.userIdSelected) :
                             observer = this.userService.createUser(user);
    observer.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: err => {
        console.log(err);
      },
      complete: () => {
        console.log('Complete');
        this.showUser.set(false);
        this.form.reset();
        this.getAllUsers();
      }
    });

  }



  createForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\+?[1-9]\d{1,3}[-.\s]?\d{3}[-.\s]?\d{4}$/)]),
      isEdit: new FormControl(false)
    })
  }


}
