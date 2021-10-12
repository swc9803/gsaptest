<template>
  <div class="container">
    <img class="city1" src="@/assets/city1.jpg">
    <img class="city2" src="@/assets/city2.jpg">
    <img class="city3" src="@/assets/city3.jpg">
    <img class="city4" src="@/assets/city4.jpg">
    <img class="city5" src="@/assets/city5.jpg">
    <Cities class="svg"/>
  </div>
</template>

<script>
import Cities from '@/components/Cities'
import { gsap, Power1 } from 'gsap'
import { onMounted } from 'vue'

export default {
  components: {
    Cities
  },
  setup () {
    onMounted(() => {
      const show1 = gsap.from('.city1', { transformOrigin: '0', scaleX: 0.2, duration: 0.5, ease: Power1.easeIn })
      gsap.to('.city1', { zIndex: 6 })
      gsap.from('#text1', { opacity: 1 })
      show1.pause()
      document.querySelector('#text1').addEventListener('mouseenter', function () {
        show1.play()
      })
      document.querySelector('#text1').addEventListener('mouseleave', function () {
        show1.reverse()
      })
      const show2 = gsap.from('.city2', { transformOrigin: '25%', scaleX: 0.2, duration: 0.5, ease: Power1.easeIn })
      show2.pause()
      document.querySelector('.city2').addEventListener('mouseenter', function () {
        show2.play()
      })
      document.querySelector('.city2').addEventListener('mouseleave', function () {
        show2.reverse()
      })
      const show3 = gsap.from('.city3', { transformOrigin: '50%', scaleX: 0.2, duration: 0.5, ease: Power1.easeIn })
      show3.pause()
      document.querySelector('.city3').addEventListener('mouseenter', function () {
        show3.play()
      })
      document.querySelector('.city3').addEventListener('mouseleave', function () {
        show3.reverse()
      })
      const show4 = gsap.from('.city4', { transformOrigin: '75%', scaleX: 0.2, duration: 0.5, ease: Power1.easeIn })
      show4.pause()
      document.querySelector('.city4').addEventListener('mouseenter', function () {
        show4.play()
      })
      document.querySelector('.city4').addEventListener('mouseleave', function () {
        show4.reverse()
      })
      const show5 = gsap.from('.city5', { transformOrigin: '100%', scaleX: 0.2, duration: 0.5, ease: Power1.easeIn })
      show5.pause()
      document.querySelector('.city5').addEventListener('mouseenter', function () {
        show5.play()
      })
      document.querySelector('.city5').addEventListener('mouseleave', function () {
        show5.reverse()
      })
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
  img {
    position: absolute;
    width: 100%;
  }
  svg {
    position: absolute;
    // opacity: 0.5;
  }
}
</style>
