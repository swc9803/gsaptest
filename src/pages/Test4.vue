<template>
  <div class="container">
    <div class="circle" />
    <div class="fixed"/>
  </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  setup () {
    onMounted(() => {
      const circle = document.querySelector('.circle')
      document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX
        const mouseY = e.clientY
        circle.style.left = mouseX + 'px'
        circle.style.top = mouseY + 'px'
      })
    })
  }
}
</script>

<style scoped>
.container {
  position: absolute;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
}
.fixed {
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/city1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: absolute;
  /* filter: grayscale(10); */
}
.circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: gray;
  opacity: 0.7;
  filter: grayscale(0);
  transform: translate(-50%, -50%);
  z-index: 1;
}
</style>
