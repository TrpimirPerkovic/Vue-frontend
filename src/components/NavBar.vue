<template>
  <nav class="navbar bg-dark">
    <div
      class="container-fluid bg-dark d-flex align-items-center justify-content-between"
    >
      <h1 class="doma">FLUX</h1>
      <div class="navbar-brand">
        <img
          src="../assets/bird.jpg"
          alt="Logo"
          width="120"
          height="120"
          class="d-inline-block align-text-top"
        />
      </div>
      <div class="links">
        <router-link to="/about" class="link">O NAMA</router-link>
        <router-link to="/materijali" class="link">MATERIJALI</router-link>
        <router-link to="/somewhere" class="link">INFO</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: [],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.doma {
  font-size: 1.5rem;
  font-family: Train One;
  padding: 5px;
}
.doma:hover {
  background-color: cadetblue;
  border-radius: 5px;
  transition: all 0.5s ease;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #1e1e1e;
  color: #f6d8ae;
  text-align: center;
  padding: 10px 0;
  z-index: 1000;
}

.container-fluid {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  border-radius: 5px;
  margin-right: -240%;
}

.links {
  color: white;
  display: flex;
  margin-right: 20px;
}

.link {
  margin-left: 10px;
  margin-right: 10px;
  color: #f6d8ae;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: bold;
  border-color: white;
  border-style: groove;
  padding: 10px;
}

.link:hover {
  border-color: black;
  border-style: dotted;
  border-width: 1px;
  border-radius: 5px;
  color: black;
  background-color: white;
  transition: all 0.5s ease;
}
</style>
