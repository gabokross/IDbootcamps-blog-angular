import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {

  newPostForm: FormGroup;

  constructor() {
    this.newPostForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.maxLength(50)
      ]),
      message: new FormControl('', [
        Validators.required,
        Validators.maxLength(300)
      ]),
      author: new FormControl('', [
        Validators.required,
        Validators.maxLength(50)
      ]),
      category: new FormControl(),
      date: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.newPostForm.value);
  }

  checkError(field: string, error: string): boolean | undefined {
    return this.newPostForm.get(field)?.hasError(error)
      &&
      this.newPostForm.get(field)?.touched
  }

}
