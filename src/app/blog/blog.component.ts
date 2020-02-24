import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrPost: Post[];

  constructor(private postService: PostService) { }

  ngOnInit(){
  this.arrPost =  this.postService.getAllPosts();
  }


 async manejarCategoria($event){
  console.log($event.target.value)
  this.arrPost = await this.postService.getPostsByCategoria($event.target.value);
  }

  async manejarClick($event){
    await this.postService.borrar($event.target.id)
    this.arrPost = await this.postService.getAllPosts()
  }

}
