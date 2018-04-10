
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
   <div class="column is-9">
<div class="columns is-multiline">
        <div class="column is-one-third" v-for = "item of searchResult.data.items">
          <section class="box is-paddingless has-text-centered">
            <figure class="image">
              <img :src="item.image_url">
            <p class="title is-5">{{ item.name }}</p>
            <br>
            </figure>
          </section>
        </div>
      </div>
   </div>
</div>
  </div>
  <br>
  
  <br>

</div>
</template>

<script>
var Itemsjs = require('itemsjs')

const data = require('./data.json');
data.find


for( let image of data ) {
  image.image_url = require('../assets/' + image.image_url)
}




var configuration =  {
  searchableFields: [],
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
};

var itemsjs = Itemsjs(data, configuration);

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
  methods: {
    reset: function () {
      var filters = {};
      Object.keys(configuration.aggregations).map(function(v) {
        filters[v] = [];
      })
      this.filters = filters;
      this.query = '';
    }
  },

  computed: {
    searchResult: function () {

      var result = itemsjs.search({
        query: this.query,
        filters: this.filters
      })

      console.log(result);
      return result
    }
  }
}
</script>
