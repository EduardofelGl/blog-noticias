<template>
    <div>
      <Navbar />
      <div class="hero">
        <h1>Últimas Noticias</h1>
      </div>
      <div class="container">
        <div class="row">
          <div v-for="news in newsList" :key="news.id" class="col-md-4">
            <div class="card">
              <img :src="news.image" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{ news.title }}</h5>
                <p class="card-text">{{ news.summary }}</p>
                <a :href="'/news/' + news.id" class="btn btn-primary">Leer más</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from '../components/NavbarQ.vue'
  import { firestore } from '../firebase';
  
  export default {
    components: { Navbar },
    data() {
      return {
        newsList: []
      };
    },
    created() {
      firestore.collection('news').orderBy('date', 'desc').onSnapshot(snapshot => {
        this.newsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      });
    }
  };
  </script>
  
  <style scoped>
  .hero {
    padding: 2rem;
    background-color: #f8f9fa;
    text-align: center;
  }
  </style>
  