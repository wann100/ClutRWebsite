<template>
  <div class="admin bulma" id="admin">
    <!-- The admin page layout -->

    <!-- The admin header-->
    <header class="has-sub">
      <div class="head-container">
        <navbar></navbar>
      </div>
    </header>
    <!--The admin main page for a sidebar and content-->
    <div class="columns is-gapless ia-contentarea">
      <div>
          <sidebar></sidebar>
        </div>
      <!-- The admin page content -->
      <div class="admin-wrapper">
        <section class="hero is-light is-medium is-bold" v-if="$route.name === 'Admin'">
          <div class="hero-body ">
            <div class="container has-text-centered">
              <div class="titleAdmin">
                <h1 class="title">
                  Welcome to ClutR admin panel
                </h1>
              </div>
              <router-link to="/">

                <div>
                </div>
              </router-link>
              <p>Version v0.3.0</p>
            </div>
          </div>
        </section>
        <router-view :key="$route.path" />
      </div>

    </div>
  </div>
</template>

<script>
import Navbar from '@/admin/components/layout/Navbar'
import Sidebar from '@/admin/components/layout/Sidebar'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'admin',
  components: {
    'navbar': Navbar,
    'sidebar': Sidebar
  },
  // prevent unauthenticated users from accessing the admin area
  // and direct them to the login page
  beforeRouteEnter (to, from, next) {
    // get the current logged in user
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // continue to /admin
        next()
      } else {
        // redirect to /login
        next('/login')
      }
    })
  }
}

</script>

<style lang="sass">
@import '../styles/index'
</style>
