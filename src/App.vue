<template>
  <div id="app">
    <header class="level container is-center">
      <div class="level-left">
        <figure class="image is-64x64">
          <img src="src/assets/logo.png">
        </figure>
          <h1 class="title is-4">Robocop</h1>
        </div>
        <div class="level-right ">
            <div>
              <br>
            <p> My brochure 0 items    <router-link to="/login">Login</router-link></p>
            <br>
          <div class="level-item">
            <div class="field has-addons">
                    <p class="control">
                      <input class="input" type="text" placeholder="Find a post">
                    </p>
                    <p class="control">
                      <button class="button">
                        Search
                      </button>
                    </p>
                  </div>
            </div>
          </div>
      </div>
    </header>
    <nav class="level container is-center is-size-7">
       <p class="level-item has-text-centered is-size-5">
          <router-link to="/">Home</router-link>
       </p>
      <div class="dropdown is-hoverable">
        <div class="dropdown-trigger">
            <p class="level-item has-text-centered is-size-5">
              <router-link to="/Collections" >Collections</router-link>
            <span class="icon is-small is-info">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
            </p>

        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <p class="dropdown-item">
              <router-link to="/Horeca">Horeca</router-link>
            </p>
            <a href="#" class="dropdown-item">
              Airplane
            </a>
            <a href="#" class="dropdown-item">
              Events
            </a>
            <a href="#" class="dropdown-item">
              Art
            </a>
          </div>
        </div>
      </div>
    <p class="level-item has-text-centered is-size-5">
      <router-link to="/Helloworld">About</router-link>
    </p>
    </p>
    <p class="level-item has-text-centered is-size-5">
      <router-link to="/Tech">What's new</router-link>
    </p>
    </p>
    <p class="level-item has-text-centered is-size-5">
      <router-link to="/Contact">Contact Us</router-link>
    </p>
    </nav>
    <router-view />

    <div class=" container notification is-info has-text-centered">
         <i class="fab fa-twitter"></i>
         <i class="fab fa-facebook-f"></i>
         <i class="fab fa-instagram"></i>
       </div>
<footer class="footer container">
  <div class="container">
    <div class="content has-text-centered">
      <p>
        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
      </p>
    </div>
  </div>
</footer>

</div>
  </div>
</template>

<script>
import Skills from './components/Skills.vue'
export default {
  name: 'app',
  components: {
    Skills
  }
}
</script>

<style>


</style>
