<template>
  <div class="home">

    <app-header></app-header>

    <section class="hero">
      <div class="background-image" :style="{'background-image': `url(${require('@/app/assets/img/background.jpg')})`}">
      
      <span  style="font-size:4em;  text-shadow: 1px 5px 2px #29A4B4;
    color:#24E3C1;"> Welcome to Clut<h1 style="display: inline; font-size:inherit;
    color:red;letter-spacing: 2px;">R</h1></span>
<div class="smartphone">
 <div class="iframe-container">
<iframe src="https://xd.adobe.com/embed/d6b069f2-0abc-4404-6536-50a50b9d632d-a081/" scrolling="no" style ="overflow:hidden;"></iframe>
  </div>
</div>
      
      </div>
      <div class="hero-content">
        <h1>
          {{settings.title}}
        </h1>
        <h3>{{settings.description}}</h3>
        <div class="cta">
        </div>
      </div>
    </section>

    <section-work></section-work>

    <section-service></section-service>

    <section-review></section-review>

    <app-footer></app-footer>
  </div>
</template>

<script>
import { settingsRef } from '@/admin/firebase_config'
import appHeader from '@/app/components/appHeader'
import appFooter from '@/app/components/appFooter'
import sectionWork from '@/app/components/sectionWork'
import sectionService from '@/app/components/sectionService'
import sectionReview from '@/app/components/sectionReview'
import contentFetch from '@/admin/mixins/contentFetch'

export default {
  name: 'home',
  mixins: [contentFetch],
  components: {
    appHeader,
    //sectionWork,
    sectionService,
    //sectionReview,
    appFooter
  },
  firebase: {
    // load settings as object instead of array (default)
    settings: {
      source: settingsRef,
      asObject: true
    }
  }
}

</script>

<style lang="scss" scoped>
@import '@/app/styles/index.scss';

/*----------------
       Hero Section
  ----------------*/

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center !important;
  min-height: 120vh;
  color: #fff;
  text-align: center;
  z-index: 0;
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size:cover;
      background-repeat: no-repeat;
      background-position:center;
    background-color: #2196f3;
    z-index: -1;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      
      opacity: 0.75;
    }
  }
  .hero-content {
    position: absolute;
    right: 20%;
    text-align: left;
    h1 {
      font-size: 32px;
      margin-bottom: 15px;
    }

    h3 {
      font-size: 25px;
      margin-bottom: 20px;
    }

    .cta {
      padding-top: 15px;
    }



  }
}
      .smartphone {
  position: relative;
  width: 320px;
  height: 65%;
  margin: auto;
  border: 16px black solid;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
}
  /* The horizontal line on the top of the device */
.smartphone:before {
  content: '';
  display: block;
  width: 60px;
  height: 5px;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 10px;
}

/* The circle on the bottom of the device */
.smartphone:after {
  content: '';
  display: block;
  width: 35px;
  height: 35px;
  position: absolute;
  left: 50%;
  bottom: -65px;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 50%;
}

/* The screen (or content) of the device */
.smartphone .content {
  width: 100%;
  height:100%;
 
}

.iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 50%;
  background: lightgrey;
}

.iframe-container iframe {
  position: absolute;
  width: 100%;
  height: 560px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
}


@media (max-width: 800px) {
  .hero {
    min-height: 600px;
    h1 {
      font-size: 48px;
    }
    h3 {
      font-size: 24px;
    }
    a.btn {
      padding: 15px 40px;
    }
  }
}

@media (max-width: 600px) {
  .hero .hero-content {
    padding: 0 30px;
    right: auto;
    text-align: center;
  }
}
</style>
