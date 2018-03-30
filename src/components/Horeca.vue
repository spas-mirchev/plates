<template>
  <div class="about">
    <div class="container">
      <figure class="image">
        <img src="../assets/chin9.png">
      </figure>
      <p class="title is-3">ATLANTIC</p>
      <a class="title is-6">Animate the Tabletop</a>
      <br>
</div>
<br>
<div class="container">
  <div class="columns">
    <!-- Filters column -->
    <div class="column is-3">
      <section class="box">
        <p class="title is-5">TYPE</p>
        <label class="checkbox">
          <input type="checkbox">
          Plates (6)
        </label>
        <br>
        <label>
          <input type="checkbox">
          Bowls (2)
        </label>
      </section>
      <section class="box">
        <p class="title is-5">SHAPE</p>
        <label class="checkbox">
          <input type="checkbox">
          Organic (5)
        </label>
        <br>
        <label>
          <input type="checkbox">
          Oval (9)
        </label>
      </section>
      <section class="box">
        <p class="title is-5">SIZE (CM)</p>
        <label v-for = "size in getSizes()">
          <input type="checkbox" :size="size"  @click="onTypeClick" >
          {{size}}
          <br>
        </label>
      </section>
      <section class="box">
        <p class="title is-5">CAPACITY (CL)</p>
        <label>
          <input type="checkbox">
         10–20 (6)
        </label>
        <br>
        <label class="checkbox">
          <input type="checkbox">
          20–30 (6)
        </label>
        <br>
        <label>
          <input type="checkbox">
         30–40 (1)
        </label>
        <br>
        <label>
          <input type="checkbox">
         50–60 (2)
        </label>
        <br>
        <label class="checkbox">
          <input type="checkbox">
          70–80 (1)
        </label>
        <br>
        <label>
          <input type="checkbox">
         80–90 (1)
        </label>
      </section>
    </div>

    <!-- Plates column -->
    <div class="column is-9">
      <div class="columns is-multiline">
        <div class="column is-one-third" v-for = "plate in plates">
          <section class="box is-paddingless has-text-centered">
            <figure class="image">
              <img :src="plate.image_url">
            <p class="title is-5">{{ plate.name }}</p>
            <br>
            {{ plate.size }}
            </figure>
          </section>
        </div>
      </div>
    </div>

    <br>
  </div>
</div>
<br>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  methods: {
    onTypeClick: function (event) {
      console.log(event)
      if (event.target.checked) {
        let currentSize = event.target.getAttribute("size")
        this.plates = this.plates.filter(plate => plate.size == currentSize)
      } else {
        this.plates = this.allPlates
      }
    },
    getSizes: function () {

      let plateSizes = this.plates.map(plate => plate.size)
      let unique = [...new Set(plateSizes)].sort();
      return unique
    }

  },
  data() {
    var myPlates = []

    var plate1 = {
      name: "Standart",
      image_url: require("../assets/Collection/col8.png"),
      type: "Plates",
      size: "10-20"
    }

    var plate2 = {
      name: "Medium plate",
      image_url: require("../assets/Collection/col8.png"),
      type: "Plates",
      size: "20-30"
    }

    var plate3 = {
      name: "Large plate",
      image_url: require("../assets/Collection/col8.png"),
      type: "Plates",
      size: "30-40"
    }

    var plate4 = {
      name: "Standart",
      image_url: require("../assets/Collection/col8.png"),
      type: "Plates",
      size: "10-20"
    }

    var plate5 = {
      name: "Medium plate",
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
      plates: myPlates,
      allPlates: myPlates
    }
  }
}
</script>

<style scoped>

</style>
