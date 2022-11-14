import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {

  newPostForm: FormGroup;

  constructor(
    private postsService: PostsService,
    private router: Router
  ) {
    this.newPostForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.maxLength(30)
      ]),
      message: new FormControl('', [
        Validators.required,
        Validators.maxLength(300)
      ]),
      author: new FormControl('', [
        Validators.required,
        Validators.maxLength(30)
      ]),
      date: new FormControl(),
      category: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.postsService.createPost(this.newPostForm.value);
    this.router.navigate(['/posts']);
  }

  checkError(field: string, error: string): boolean | undefined {
    return this.newPostForm.get(field)?.hasError(error)
      &&
      this.newPostForm.get(field)?.touched
  }

}
