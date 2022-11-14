import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private arrPosts: Post[];

  constructor() {
    if (localStorage.getItem('arrPost')) {
      this.arrPosts = JSON.parse(localStorage.getItem('arrPost')!)
    } else {
      this.arrPosts = [
        {
          title: 'mi primer glob',
          message: 'Esta es la primera vez que utilizo glob!',
          author: 'Kross',
          date: new Date('2022-11-07'),
          category: 'me'
        },
        {
          title: 'Ojalá mis amigos usen pronto glob',
          message: 'Tengo que enseñarles esto a todos, les va a encantar',
          author: 'Kross',
          date: new Date('2022-11-07'),
          category: 'friends'
        },
        {
          title: 'Tarta',
          message: 'Ayer comí la mejor tarta de arándanos que existe',
          author: 'Kross',
          date: new Date('2022-11-07'),
          category: 'family'
        },
        {
          title: 'Dejarlo ya',
          message: '¿En serio vamos a seguir luchando entre nosotros por un trozo de tierra?',
          author: 'Kross',
          date: new Date('2022-11-08'),
          category: 'planet'
        },
        {
          title: 'Calorcito',
          message: 'La cosa se está calentando por aquí. @everyone, ¿cómo va la cosa por ahí?',
          author: 'Kross',
          date: new Date('2022-11-08'),
          category: 'glob'
        }
      ];
    }

  }

  getAll(): Post[] {
    return this.arrPosts;
  }

  createPost(pPost: Post) {
    this.arrPosts.push(pPost);
    localStorage.setItem('arrPost', JSON.stringify(this.arrPosts))

  }


  getByCategory(pCategory: string): Post[] {
    return this.arrPosts.filter(post => post.category === pCategory);
  }




}
