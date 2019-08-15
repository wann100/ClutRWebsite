<template>
  <div class="home">

    <app-header></app-header>

    <section class="hero">
      <div class="background-image" :style="{'background-image': `url(${require('@/app/assets/img/background.jpg')})`}">
     <div class="column">
      <span class="welcometext" style=""> Welcome to Clut<h1 style="display: inline; font-size:inherit;
    color:red;letter-spacing: 2px;">R</h1></span>
       </div> 

        <div class="columns"> 
          <div class="column"> 
<div   v-if="showexampleapp(window.width,window.height)"  class="smartphone">
 <div class="iframe-container">
<iframe src="https://xd.adobe.com/embed/d6b069f2-0abc-4404-6536-50a50b9d632d-a081/" scrolling="no" style ="overflow:hidden;"></iframe>
  </div>
</div>
</div>
<div class="column"> 
<b-button class="androiddownload"    variant="primary">
  <img v-bind:src="require('../assets/img/googleplay.png')"></b-button>   
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
  //  <h2 class="title is-2">
  //     Width: {{ window.width }},
  //     Height: {{ window.height }}
  //   </h2>
import { settingsRef } from '@/admin/firebase_config'
import appHeader from '@/app/components/appHeader'
import appFooter from '@/app/components/appFooter'
import sectionWork from '@/app/components/sectionWork'
import sectionService from '@/app/components/sectionService'
import sectionReview from '@/app/components/sectionReview'
import contentFetch from '@/admin/mixins/contentFetch'

export default {
  data() {
    return {
      windowHeight: 0,
        window: {
      width: 0,
      height: 0
    }
     
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  name: 'home',
   watch: {
    windowHeight(newHeight, oldHeight) {
     this.txt = `it changed to ${newHeight} from ${oldHeight}`;
    }
  },
  methods: {
    showexampleapp(width,height){
       if(width > 1600 && height>800){
         console.log(width);
         return true
       }
       //onsole.log(width);
      return false;
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
  
    },
  },
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
    },
    mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowHeight = window.innerHeight
      });
    })
  },
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
  height: 640px;
  margin: auto;
  margin-left:10%;
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
  height: 550px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
}
 .welcometext{
     font-size: 100px; 
    font-family:'suez'; 
    color:#24E4C4;
  }
  .androiddownload{

    background:transparent;
    width:40%;
    margin-right:50%;
     margin-top:20%;
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
   .welcometext{
    font-size: 61px; 
    font-family:'suez'; 
    color:#24E4C4;
  }
}

@media (max-width: 600px) {
  .hero .hero-content {
    padding: 0 30px;
    right: auto;
    text-align: center;
  }
  .welcometext{
    top:50%;
    font-size: 61px; 
    font-family:'suez'; 
    color:#24E4C4;
  }

}
@font-face {
    font-family: 'suez'; /*a name to be used later*/
    src: url('../assets/img/background.jpg'); /*URL to font*/
}
</style>
