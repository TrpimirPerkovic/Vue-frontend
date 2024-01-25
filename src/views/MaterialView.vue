<template>
  <div>
    <nav-bar></nav-bar>
  </div>

  <div class="sections">
    <div class="centered-content">
      <router-link to="finance" class="link">Finance</router-link> |
      <router-link to="programming" class="link">Programming</router-link> |
      <router-link to="math" class="link">Math</router-link> |
      <router-link to="novels" class="link">Novels</router-link> |
      <router-link to="dsa" class="link"
        >Data Structures and Algorithms</router-link
      >
    </div>
  </div>

  <div class="books-section bg-dark"></div>
</template>

<style scoped>
.sections {
  margin-top: 10%;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.sections .centered-content {
  text-align: center;
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
  background-color: #38040e;
  text-decoration: none;
  border-radius: 10px;
}
</style>
