<template>
  <div class="not-found">
    <h1>404 - Page non trouvée</h1>
    <p>Désolé, la page que vous cherchez n'existe pas.</p>
    <router-link to="/" class="home-link">
      Retour à l'accueil
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 2rem;
}

.home-link {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #42b883;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.home-link:hover {
  background-color: #369870;
}
</style>
