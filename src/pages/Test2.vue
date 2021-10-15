<template>
  <div class="container">
    <Cities class="svg" style="z-index: 9"/>
    <img class="city1" src="@/assets/city1.jpg">
    <img class="city2" src="@/assets/city2.jpg">
    <img class="city3" src="@/assets/city3.jpg">
    <img class="city4" src="@/assets/city4.jpg">
    <img class="city5" src="@/assets/city5.jpg">
  </div>
</template>

<script>
import Cities from '@/components/Cities'
import { gsap } from 'gsap'
import { onMounted } from 'vue'

export default {
  components: {
    Cities
  },
  setup () {
    onMounted(() => {
      const hide1 = gsap.to('#text1', { opacity: 0 })
      const focus1 = gsap.to('#img1', {
        transformOrigin: '50% 50%', scale: 1.2, duration: 0.5, filter: 'blur(0) grayscale(0%)'
      })
      hide1.pause()
      focus1.pause()
      document.querySelector('#text1').addEventListener('mouseenter', function () {
        hide1.play()
        focus1.play()
      })
      document.querySelector('#text1').addEventListener('mouseleave', function () {
        hide1.reverse()
        focus1.reverse()
      })
      const hide2 = gsap.to('#text2', { opacity: 0 })
      const focus2 = gsap.to('#img2', {
        transformOrigin: '50% 50%', scale: 1.2, duration: 0.5, filter: 'blur(0) grayscale(0%)'
      })
      hide2.pause()
      focus2.pause()
      document.querySelector('#text2').addEventListener('mouseenter', function () {
        hide2.play()
        focus2.play()
      })
      document.querySelector('#text2').addEventListener('mouseleave', function () {
        hide2.reverse()
        focus2.reverse()
      })
      const hide3 = gsap.to('#text3', { opacity: 0 })
      const focus3 = gsap.to('#img3', {
        transformOrigin: '50% 50%', scale: 1.2, duration: 0.5, filter: 'blur(0) grayscale(0%)'
      })
      hide3.pause()
      focus3.pause()
      document.querySelector('#text3').addEventListener('mouseenter', function () {
        hide3.play()
        focus3.play()
      })
      document.querySelector('#text3').addEventListener('mouseleave', function () {
        hide3.reverse()
        focus3.reverse()
      })
      const hide4 = gsap.to('#text4', { opacity: 0 })
      const focus4 = gsap.to('#img4', {
        transformOrigin: '50% 50%', scale: 1.2, duration: 0.5, filter: 'blur(0) grayscale(0%)'
      })
      hide4.pause()
      focus4.pause()
      document.querySelector('#text4').addEventListener('mouseenter', function () {
        hide4.play()
        focus4.play()
      })
      document.querySelector('#text4').addEventListener('mouseleave', function () {
        hide4.reverse()
        focus4.reverse()
      })
      const hide5 = gsap.to('#text5', { opacity: 0 })
      const focus5 = gsap.to('#img5', {
        transformOrigin: '50% 50%', scale: 1.2, duration: 0.5, filter: 'blur(0) grayscale(0%)'
      })
      hide5.pause()
      focus5.pause()
      document.querySelector('#text5').addEventListener('mouseenter', function () {
        hide5.play()
        focus5.play()
      })
      document.querySelector('#text5').addEventListener('mouseleave', function () {
        hide5.reverse()
        focus5.reverse()
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
