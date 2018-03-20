<template>
  <div class="about">
    <div class="container">
      <figure class="image">
        <img src="src/assets/chin9.png">
      </figure>
      <p class="title is-3">ATLANTIC</p>
      <a class="title is-6">Animate the Tabletop</a>
      <br>
</div>
<br>
<div class="container">
  <div class="columns">
    <!-- Filters column -->
    <div class="column">
      <section class="box">
        <p class="title is-5">TYPE</p>
        <label class="checkbox">
          <input type="checkbox">
          Plates (3)
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
        <label class="checkbox">
          <input type="checkbox">
          0–10 (2)
        </label>
        <br>
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
      </section>
      <section class="box">
        <p class="title is-5">CAPACITY (CL)</p>
        <label class="checkbox">
          <input type="checkbox">
          0–10 (2)
        </label>
        <br>
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
    <div class="column">


      <section class="box is-paddingless has-text-centered" v-for="plate in plates">
        {{ plate.size }}
        <figure class="image">
          <img :src="plate.image_url">
          <br>
        <p class="title is-5">{{ plate.name }}</p>
        {{ plate.image_url }}
        <br>
        </figure>
      </section>

      <section class="box is-paddingless has-text-centered">
        <figure class="image">
          <img src="src/assets/Collection/col8.png">
          <br>
        <p class="title is-5">LARGE PLATE</p>
        <br>
        </figure>
        </section>
        <section class="box is-paddingless has-text-centered">
          <figure class="image">
            <img src="src/assets/Collection/col8.png">
            <br>
          <p class="title is-5">LARGE BOWL</p>
          <br>
          </figure>
          </section>
    </div>
    <div class="column">
      <section class="box is-paddingless has-text-centered">
        <figure class="image">
          <img src="src/assets/Collection/col8.png">
          <br>
        <p class="title is-5">MEDIUM PLATE</p>
        <br>
        </figure>
        </section>
    </div>
    <div class="column">
      <section class="box is-paddingless has-text-centered">
        <figure class="image">
          <img src="src/assets/Collection/col8.png">
          <br>
        <p class="title is-5">SMALL PLATE</p>
        <br>
        </figure>
        </section>
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
  data() {
    var myPlates = []

    var plate1 = {
      name: "Large plate",
      image_url: "src/assets/Collection/col8.png",
      type: "Plates",
      size: "20-30"
    }

    var plate2 = {
      name: "Medium plate",
      image_url: "src/assets/Collection/col9.jpg",
      type: "Plates",
      size: "10-20"
    }

    myPlates.push(plate1)
    myPlates.push(plate2)

    console.log(myPlates);
    return {
      plates: myPlates,
      items: [
         { message: 'Foo' },
         { message: 'Bar' }
       ]
    }
  }
}
</script>

<style scoped>

</style>
