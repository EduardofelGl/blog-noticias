<template>
    <div>
      <Navbar />
      <div class="container">
        <div v-if="news">
          <h1>{{ news.title }}</h1>
          <img :src="news.image" class="img-fluid" alt="...">
          <p>{{ news.content }}</p>
        </div>
        <div v-else>
          <p>Cargando...</p>
        </div>
      </div>
    </div>
    <Comments :newsId="newsId" />

  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue';
  import { firestore } from '../firebase';
  
  export default {
    components: { Navbar },
    data() {
      return {
        news: null
      };
    },
    created() {
      const newsId = this.$route.params.id;
      firestore.collection('news').doc(newsId).get().then(doc => {
        if (doc.exists) {
          this.news = doc.data();
        }
      });
    }
  };
  </script>
  