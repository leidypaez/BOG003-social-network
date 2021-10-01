import { datePost } from '../firebase.js';

export const home = () => {
  const wall = ` 
  <header class="header">
    <nav>
      <div class="logo-words">
        <img src="img/FIMPRO-LETRA.png" alt="#" width="100">
      </div>
      <ul>
        <li><i class="fas fa-home"></i></li>
        <li><i class="fas fa-power-off"></i></li>
      </ul>
    </nav>
  </header>
  <main>
    <section class="publication parallax">
      <article class="space-mjs">
        <div>
          <textarea name="" id="input-post" placeholder="Cuéntanos cual fue la ultima película que viste, danos tu critica"></textarea>
        </div>
        <div class="error"></div>
        <div class="share">
          <button id="btn-publication">Publicar</button>
        </div>
        <div class="containerText"></div>
        <div class ="container-comment"></div>
      </article>
    </section>
  </main>
  <footer class="container-footer">
    <p><b>Desarrollado por:</b>
    Leidy Paez-Luisa Saenz-Maria Chacon</p>
    <hr>
    <p>Derechos de autor reservados © 2021</p>
  </footer>x
  `;
  const containerHome = document.createElement('div');
  containerHome.innerHTML = wall;

  const btnPublication = containerHome.querySelector('#btn-publication');
  btnPublication.addEventListener('click', () => {
    const inputPost = document.querySelector('#input-post').value;
    const namUser = firebase.auth().currentUser.displayName;
    const uid = firebase.auth().currentUser.uid;
    const errorPost = document.querySelector('.error');
    if (inputPost === '') {
      errorPost.innerHTML = 'No se puede realizar publicaciones vacias';
    } else {
      datePost(namUser, inputPost, uid);
      errorPost.innerHTML = '';
    }
  });
  getposts().onSnapshot(( doublePost ) => {
    const nameComment = firebase.auth().currentUser.displayName;
    const containerText = document.querySelector('.containerText');
    containerText.innerHTML = '';
    containerText.innerHTML += `
    <p>${nameuid}</p> 
    `;
    const userUid = firebase.auth().currentUser.uid;
    const containerComment = document.querySelector('.container-comment');
    containerComment.innerHTML = '';
    doublePost.forEach((doc) => {
      containerComment.innerHTML += `
      <section id="container-comment" class="publication parallax hiden">
        <article class="space-mjs">
        <div class="edit">
          <button>Editar</button>
        </div>
        <div>
          <textarea name="" id="input-post"></textarea>
        </div>
        <div class="icono-medal"><i class="fas fa-medal"></i></div>
        <div class="icono-delete"><i class="fas fa-trash-alt"></i></div>
        </article>
        <button><i class="fas fa-theater-masks"></i></button>
      </section>
    `;
    });
  });

  return containerHome;
};
