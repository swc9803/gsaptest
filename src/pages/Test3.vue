<template>
  <div id="no01" class="wrapper">
    <div class="boxes">
      <div class="box">GreenSock</div>
      <div class="box">Nice Tool</div>
      <div class="box">GreenSock</div>
      <div class="box">Animate</div>
      <div class="box">Fast & easy</div>
      <div class="box">GreenSock</div>
      <div class="box">The best</div>
    </div>
  </div>

  <div id="no02" class="wrapper">
    <div class="boxes">
      <div class="box">GreenSock</div>
      <div class="box">Nice Tool</div>
      <div class="box">GreenSock</div>
      <div class="box">Animate</div>
      <div class="box">Fast & easy</div>
      <div class="box">GreenSock</div>
      <div class="box">The best</div>
    </div>
  </div>

  <div id="no03" class="wrapper">
    <div class="boxes">
      <div class="box">GreenSock</div>
      <div class="box">Nice Tool</div>
      <div class="box">GreenSock</div>
      <div class="box">Animate</div>
      <div class="box">Fast & easy</div>
      <div class="box">GreenSock</div>
      <div class="box">The best</div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { onMounted } from 'vue'

export default {
  setup () {
    onMounted(() => {
      console.clear()

      gsap.set('.wrapper', { xPercent: -50, yPercent: -50 })
      gsap.set('#no02', { y: 50 })
      gsap.set('#no03', { y: 120 })

      var boxWidth = 250
      var totalWidth = boxWidth * 7 //  * n of boxes
      var no01 = document.querySelectorAll('#no01 .box')
      var no02 = document.querySelectorAll('#no02 .box')
      var no03 = document.querySelectorAll('#no03 .box')
      var dirFromLeft = '+=' + totalWidth
      var dirFromRight = '-=' + totalWidth

      var mod = gsap.utils.wrap(0, totalWidth)

      function marquee (which, time, direction) {
        gsap.set(which, {
          x: function (i) {
            return i * boxWidth
          }
        })
        var action = gsap.timeline()
          .to(which, {
            x: direction,
            modifiers: {
              x: x => mod(parseFloat(x)) + 'px'
            },
            duration: time,
            ease: 'none',
            repeat: -1
          })
        return action
      }

      gsap.timeline()
        .add(marquee(no01, 15, dirFromLeft), 1)
        .add(marquee(no02, 20, dirFromLeft), 2)
        .add(marquee(no03, 20, dirFromRight), 3)
    })
  }
}
</script>

<style lang="scss" scoped>
body {
  background:grey;
  font-family:Asap, sans-serif;
}
.wrapper{
  position:fixed;
  width:150%;
  height:50px;
  left:50%;
  top:40%;
  background:grey;
  overflow:hidden;
}
.wrapper .box{
  position:absolute;
  width: 250px;
  height:50px;
  background-color:grey;
  color:black;
  font-size:40px;
  font-weight:600;
  line-height:50px;
  text-align:center;
}
.wrapper .boxes {
  position:relative;
  left:-250px;
}
</style>
