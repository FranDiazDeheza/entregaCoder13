
let libros = []


class Libro {
  constructor(titulo,autor,año) {
    this.titulo = titulo
    this.autor = autor
    this.año = año
  }
}



$(() => {
    $('#formLibro').submit((e) => {
      e.preventDefault()


 
  
  
      let libro = new Libro($('#titulo').val(),$('#autor').val(),$('#año').val())
      libros.push(libro)

      localStorage.setItem('libroDato',JSON.stringify(libros))
      $('#formAuto').trigger("reset")
    })
  
  
  
  $('#boton1').on('click', () => {
     $('#divLibs').html(` <table class="table table-hover">
     <thead>
       <tr>
         <th scope="col">#</th>
         <th scope="col">Titulo</th>
         <th scope="col">Autor</th>
         <th scope="col">Año de Publicacion</th>
       </tr>
     </thead>
     <tbody id="table-body">
 
     </tbody>
   </table>
   `)

  let libroStorage = JSON.parse(localStorage.getItem('libroDato'))   
  
  libroStorage.forEach((librosEnArray, indice) => { 
      $('#table-body').append(`
      <tr class="table-dark">
      <th scope="row">${indice+1}</th>
      <td>${librosEnArray.titulo}</td>
      <td>${librosEnArray.autor}</td>
      <td>${librosEnArray.año}</td>
    </tr>
      `)
  });

  })
  
  })

 