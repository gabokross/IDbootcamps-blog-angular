import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPosts: Post[];

  constructor() {
    this.arrPosts = [
      {
        title: 'mi primer glob',
        message: 'Esta es la primera vez que utilizo glob!',
        author: 'Kross',
        date: new Date('2022-11-07'),
        category: 'Me'
      },
      {
        title: 'Ojalá mis amigos usen pronto glob',
        message: 'Tengo que enseñarles esto a todos, les va a encantar',
        author: 'Kross',
        date: new Date('2022-11-07'),
        category: 'Friends'
      },
      {
        title: 'Tarta',
        message: 'Ayer comí la mejor tarta de arándanos que existe',
        author: 'Kross',
        date: new Date('2022-11-07'),
        category: 'Family'
      }
    ];
  }

  getAll(): Post[] {
    return this.arrPosts;
  }

  createPost(pPost: Post) {
    this.arrPosts.push(pPost);
  }

  getByCategory(pCategory: string): Post[] {
    return this.arrPosts.filter(post => post.category === pCategory);
  }
}
