<template>
  <div class="about">
    <div class="container">
      <div class="column is-9">
        <div class="columns is-multiline">
          <div class="column is-one-third" v-for="plate in plates">
            <section class="box is-paddingless has-text-centered">
              <figure class="image">
                <img :src="plate.image_url"  v-on:click="show=!show">
                <p v-if = "show">Big image</p>
              <p class="title is-5">{{ plate.name }}</p>
              <br>
              {{ plate.size }}
              </figure>
            </section>
          </div>
        </div>
      </div>
      <label>
        <input type="checkbox">
        10–20 (2)
      </label>
      <label>
        <input type="checkbox">
       20–30 (2)
      </label>
      <label>
        <input type="checkbox">
       30–40 (2)
      </label>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'About',
  computed: {
    plates: function () {
      return
    }
 },
 data() {
   var myPlates = []

   var plate1 = {
     name: "Standart",
     image_url: require("../assets/Collection/col8.png"),
     type: "Plates",
     size: "20-30"
   }

   var plate2 = {
     name: "Medium plate",
     image_url: require("../assets/Collection/col8.png"),
     type: "Plates",
     size: "10-20"
   }

   var plate3 = {
     name: "Large plate",
     image_url: require("../assets/Collection/col8.png"),
     type: "Plates",
     size: "30-40"
   }

   var plate4 = {
     name: "Medium plate",
     image_url: require("../assets/Collection/col8.png"),
     type: "Plates",
     size: "10-20"
   }

   var plate5 = {
     name: "Standart",
     image_url: require("../assets/Collection/col8.png"),
     type: "Plates",
     size: "20-30"
   }

   var plate6 = {
     name: "Large plate",
     image_url: require("../assets/Collection/col8.png"),
     type: "Plates",
     size: "30-40"
   }

   myPlates.push(plate1)
   myPlates.push(plate2)
   myPlates.push(plate3)
   myPlates.push(plate4)
   myPlates.push(plate5)
   myPlates.push(plate6)

   // console.log(myPlates);
   return {
     show: false,
     plates: myPlates
   }
 }
}
</script>

<style scoped>

</style>
