<template>
  <div>
    <nav-bar></nav-bar>
  </div>
  <div class="glavno">
    <h1><b>FLUX</b></h1>
  </div>
  <h3 class="naslov">Glad to have you here :)</h3>

  <div class="about">
    <div class="background">
      <div class="centered-content">
        <h1>TKO SMO MI?</h1>
        <h4>
          Mi smo strastvena zajednica koja vjeruje u pristup obrazovanju i
          informacijama bez prepreka. Naša misija je pružiti besplatan pristup
          kvalitetnim materijalima, od artikala do knjiga, kako bismo potaknuli
          učenje i razvoj svih posjetitelja.
        </h4>
      </div>
    </div>
    <div class="background-2">
      <div class="centered-content">
        <h1>NAŠA VIZIJA</h1>
        <h4>
          Želimo stvoriti mjesto gdje svatko, bez obzira na svoje mogućnosti ili
          financijske resurse, može doći i pronaći obogaćujuće sadržaje.
          Vjerujemo u dijeljenje znanja i podržavamo ideju da obrazovanje treba
          biti dostupno svima.
        </h4>
      </div>
    </div>
    <div class="background-3">
      <div class="centered-content">
        <h1>ŠTO NUDIMO</h1>
        <h4>
          Naša kolekcija besplatnih materijala obuhvaća širok spektar tema, od
          stručnih članaka do inspirativnih knjiga. Sve što pronađete ovdje
          možete preuzeti i koristiti bez ikakvih troškova. Također, redovito
          ažuriramo našu biblioteku kako bismo osigurali svježe i relevantne
          sadržaje.
        </h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glavno {
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  font-family: monospace;
  padding: 10px;
  margin-left: 45.5%;
  font-style: oblique;
}

.naslov {
  margin-left: 37.5%;
  font-family: "Courier New", Courier, monospace;
}

.background {
  padding-bottom: 1rem;
  margin-left: 10%;
  margin-right: 10%;
  border-radius: 10px;
  background-color: lightblue;
}

.background h1 {
  font-family: monospace;
}
.background h4 {
  font-family: "Courier New", Courier, monospace;
  display: block;
  justify-content: center;
  padding: 1.5%;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  font-style: oblique;
  color: #1e1e1e;
}

.background .centered-content {
  text-align: center;
}

.background-2 {
  padding-bottom: 1rem;
  margin-left: 10%;
  margin-right: 10%;
  border-radius: 10px;
  background-color: lightcoral;
  margin-top: 1rem;
  color: #1e1e1e;
  font-family: "Courier New", Courier, monospace;
}

.background-2 .centered-content {
  text-align: center;
}

.background-2 h1 {
  font-weight: 550;
}

.background-3 {
  padding-bottom: 1rem;
  margin-left: 10%;
  margin-right: 10%;
  border-radius: 10px;
  background-color: lightgreen;
  margin-top: 1rem;
  color: #1e1e1e;
  font-family: "Courier New", Courier, monospace;
}

.background-3 .centered-content {
  text-align: center;
}

.background-3 h1 {
  font-weight: 550;
}
</style>
