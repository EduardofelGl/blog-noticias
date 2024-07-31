<template>
    <div>
      <h3>Comentarios</h3>
      <form @submit.prevent="addComment">
        <div class="form-group">
          <label for="comment">Comentario</label>
          <textarea id="comment" v-model="comment" class="form-control"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Agregar Comentario</button>
      </form>
      <div v-for="c in comments" :key="c.id">
        <p>{{ c.text }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { firestore } from '../firebase';
  import firebase from 'firebase/app'; // Asegúrate de importar firebase
  
  export default {
    props: ['newsId'],
    data() {
      return {
        comment: '',
        comments: []
      };
    },
    created() {
      firestore.collection('news').doc(this.newsId).collection('comments').onSnapshot(snapshot => {
        this.comments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      });
    },
    methods: {
      async addComment() {
        if (this.comment.trim()) {
          await firestore.collection('news').doc(this.newsId).collection('comments').add({
            text: this.comment,
            createdAt: firebase.firestore.FieldValue.serverTimestamp() // Usa firebase desde la importación
          });
          this.comment = '';
        }
      }
    }
  };
  </script>
  