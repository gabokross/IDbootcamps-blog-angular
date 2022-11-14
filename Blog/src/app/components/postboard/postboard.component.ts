import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-postboard',
  templateUrl: './postboard.component.html',
  styleUrls: ['./postboard.component.css']
})
export class PostboardComponent implements OnInit {

  postsList: Post[];

  constructor(private postService: PostsService) {
    this.postsList = this.postService.getAll();
  }

  ngOnInit(): void {
  }


  filterbyCategory(pCategory: string) {
    this.postsList = this.postService.getByCategory(pCategory)
  }

}
