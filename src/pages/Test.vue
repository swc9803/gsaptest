<template>
  <div class="container">
    <Cities class="svg" style="z-index: 10"/>
    <img class="city1" src="@/assets/city1.jpg">
    <img class="city2" src="@/assets/city2.jpg">
    <img class="city3" src="@/assets/city3.jpg">
    <img class="city4" src="@/assets/city4.jpg">
    <img class="city5" src="@/assets/city5.jpg">
  </div>
</template>

<script>
import Cities from '@/components/Cities'
// import { gsap, Power1 } from 'gsap'
import { onMounted } from 'vue'

export default {
  components: {
    Cities
  },
  setup () {
    onMounted(() => {
      // const hide3 = gsap.to('#text3', { opacity: 0 })
      // const show3 = gsap.from('.city3', { zIndex: 10, transformOrigin: '50%', scaleX: 0.2, duration: 0.5, ease: Power1.easeIn })
      // hide3.pause()
      // show3.pause()
      // document.querySelector('#text3, .city3').addEventListener('mouseenter', function () {
      //   hide3.play()
      //   show3.play()
      // })
      // document.querySelector('#text3, .city3').addEventListener('mouseleave', function () {
      //   hide3.reverse()
      //   show3.reverse()
      // })
      // const hide2 = gsap.to('#text2', { opacity: 0 })
      // const show2 = gsap.from('.city2', { zIndex: 10, transformOrigin: '25%', scaleX: 0.2, duration: 0.5, ease: Power1.easeIn })
      // hide2.pause()
      // show2.pause()
      // document.querySelector('#text2, .city2').addEventListener('mouseenter', function () {
      //   hide2.play()
      //   show2.play()
      // })
      // document.querySelector('#text2, .city2').addEventListener('mouseleave', function () {
      //   hide2.reverse()
      //   show2.reverse()
      // })
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  width: 50%;
  left: 50%;
  transform: translate(-50%, 0);
  .city1 {
    top: 50%;
  }
  img {
    // position: absolute;
    width: 100%;
    // opacity: 0;
  }
  svg {
    position: absolute;
    // opacity: 0;
  }
}
</style>
