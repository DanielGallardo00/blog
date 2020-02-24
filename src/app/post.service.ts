import { Injectable } from '@angular/core';
import { Post } from './models/post';
import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService implements OnInit {

  arrPost: Post[];
  numero:any;

  constructor() { 
    this.arrPost =  [
      new Post('Deporte', 'victor', 'Este es el texto del blog deporte', 'https://supercurioso.com/wp-content/uploads/2019/04/Deporte-cambios-tecnolo%CC%81gicos.jpg', 'deportes'),
      new Post('Noticias', 'alejandro', 'Este es el texto del blog noticias', 'https://eltorotv.com/wp-content/uploads/2020/01/noticias-ok.jpg', 'noticias'),
      new Post('Deporte', 'Fernando', 'Este es otro texto sobre deporte', 'https://www.imdsg.es/wp-content/uploads/fondo.jpg', 'deportes'),
      new Post('Cultura', 'Maria', 'Este es el texto del blog cultura', 'https://www.estrelladigital.es/media/estrelladigital/images/2018/01/25/2018012518003080195.jpg', 'cultura'),
      new Post('Cultura', 'alejandro', 'Este es otro texto del blog cultura', 'https://miro.medium.com/max/1200/1*C8j_EmN2Ao6wNfY_X3153g.png', 'cultura'),
      new Post('Television', 'Cristina', 'Este es el texto del blog de television', 'https://www.lavanguardia.com/television/programacion-tv/images/channels/programacion_tv.jpg', 'television'),
    ] 

    this.arrPost.push(JSON.parse(localStorage.getItem('publicacion')));
   

  }

  ngOnInit(){ 
  }

  agregarPost(post){

    this.arrPost.unshift(post)
    localStorage.setItem('publicacion',JSON.stringify(this.arrPost));
  }

  getAllPosts(): Post[]{
  return this.arrPost= JSON.parse(localStorage.getItem('publicacion'))

  }

  getPostsByCategoria(pCategoria):Promise<Post[]>{
    let prom = new Promise<Post[]>((resolve,reject)=>{
      const arrFiltrado = this.arrPost.filter((item)=> item.categoria == pCategoria)
      console.log(arrFiltrado)
    resolve (arrFiltrado);
    })
    // console.log(prom)
    return prom;
  }

  borrar(pId):Promise<Post[]>{

    const prom = new Promise<Post[]>((resolve,reject)=>{
      const positionId = this.arrPost.findIndex(post=>post.id==pId)

      resolve(this.arrPost.splice(positionId,1))

      localStorage.setItem('publicacion',JSON.stringify(this.arrPost))
    })
    return prom


  }


}
