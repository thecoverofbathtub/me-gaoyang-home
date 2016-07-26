<template>
  <div id="app">
    <img id="logo"
         src="./assets/gaoyang.png"
         v-show="!showContent"
         v-on:mouseover="showContent = !showContent"
    >
    <div id="content"
         v-show="showContent"
         v-on:mouseleave="showContent = !showContent"
    >
      <h1>Hello, I'm Yang Gao</h1>
      <p>I'm a software developer and passionate technologist living in the city of Toronto. My interests and professional experiences span many topics including programming, design and making of things, and creative uses of technology.</p>
      <p>Outside of the tech world, you could find me practicing kendo, playing ukulele or biking on the Waterfront trail on the eastern boundary of Toronto.</p>
      <div id="content-link">
        <a href="https://www.linkedin.com/in/thisisyanggao" target="_blank">LinkedIn</a>
        <a href="mailto:me@gaoyang.me" target="_blank">Email</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showContent: false
      };
    }
  }
</script>

<style>
  html, body {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  @-webkit-keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: scale(.97);
    }
    100% {
      opacity: 1;
    }
  }

  #logo {
    width: 256px;
    height: 256px;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-name: fadeInUp;
    -webkit-animation-duration: 2s;
  }

  #content {
    line-height: 1.5;
    max-width: 32em;
  }

  #content-link {
    margin-top: 24px;
  }
</style>

<style scoped>
  h1 {
    font-family: 'Roboto Slab', serif;
    margin: 0;
  }

  p {
    font-family: 'Open Sans', sans-serif;
  }

  a {
    color: #000;
    font-family: 'Lato', serif;
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 10px;
    border-bottom: 2px solid #eee;
  }

  a:hover {
    border-color: skyblue;
  }
</style>
