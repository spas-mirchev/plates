
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
  <h1>List of items ({{ searchResult.pagination.total }})</h1>
    <div class="container">
    <div v-for="facet in searchResult.data.aggregations">
      <h5 style="margin-bottom: 5px;"><strong style="color: #337ab7;">{{ facet.title }}</strong></h5>

      <ul class="browse-list list-unstyled long-list" style="margin-bottom: 0;">
        <li v-for="bucket in facet.buckets">
        <div class="checkbox block" style="margin-top: 0; margin-bottom: 0;">
          <label>
            <!--<input class="checkbox" type="checkbox" v-on:click="updateFilters(facet.name, bucket.key)" v-model="filters[bucket.key]" value="{{ bucket.key }}" v-bind:value="isChecked2()">-->
            <!--<input class="checkbox" type="checkbox" v-on:click="updateFilters(facet.name, bucket.key)" v-model="filters[bucket.key]" v-bind:value="bucket.key">-->
            <input class="checkbox" type="checkbox" v-model="filters[facet.name]" v-bind:value="bucket.key">
            {{ bucket.key }} ({{ bucket.doc_count }})
          </label>
        </div>
        </li>
      </ul>
    </div>
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
          <label >
            <input type="checkbox" >

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
          <div class="column is-one-third" >
            <section class="box is-paddingless has-text-centered">
              <figure class="image">
                <img >
              <p class="title is-5"></p>
              <br>

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

const itemsjs = require('itemsjs')(data, configuration);
// const items = itemsjs.search();
// console.log(items);
const data = require('./data.json');

var configuration =  {
  sortings: {
    name_asc: {
      field: 'name',
      order: 'asc'
    }
  },
  aggregations: {
    type: {
      title: 'Type',
      size: 3
    },
    size: {
      title: 'Size',
      size: 4
    },
    capacity: {
      title: 'Capacity',
      size: 5
    },
    colour: {
      title: 'Colour',
      size: 2
    },
    shape: {
      title: 'Shape',
      size: 3
    }
  },
  searchableFields: ['name', 'colour']
};
// console.log(data);
// console.log(configuration);
export default {
  name: 'Tech',
  data () {

    var filters = {};
    Object.keys(configuration.aggregations).map(function(v) {
      filters[v] = [];
    })

    return {
      query: '',
      // initializing filters with empty arrays
      filters: filters,
    }
  },

  computed: {
    searchResult: function () {

      var result = itemsjs.search({
        query: this.query,
        filters: this.filters
      })
      console.log(result.data.aggregations);
      return result
    }
  }
}
</script>
