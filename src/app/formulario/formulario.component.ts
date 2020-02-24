import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Post } from '../models/post';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  form: FormGroup;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.form = new FormGroup({
      titulo: new FormControl(""),
      texto: new FormControl(""),
      autor: new FormControl(""),
      imagen: new FormControl(""),
      fecha: new FormControl(""),
      categoria: new FormControl("")
    });
  }
 enviarPost(){
   const postNuevo: Post = new Post(
     this.form.value.titulo,
     this.form.value.autor,
     this.form.value.texto,
     this.form.value.imagen,
     this.form.value.categoria,
   )

   this.postService.agregarPost(postNuevo)
 }
 onSubmit(){

 }





}
