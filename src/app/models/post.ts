export class Post{
    titulo:string;
    texto:string;
    autor:string;
    imagen: string;
    fecha: Date;
    categoria:string;
    id:number;

    constructor(titulo,autor,texto,imagen,categoria){
        this.titulo = titulo;
        this.autor = autor;
        this.texto = texto;
        this.imagen = imagen;
        this.fecha = new Date();
        this.categoria = categoria;
        this.id = Math.random();


    }
}