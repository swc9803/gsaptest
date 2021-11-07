<template>
<!-- 자연스럽게 바뀌는 애니메이션 + 이미지 자르기 -->
  <div class="container">
    <div class="cir"></div>
    <p class="textt">안녕하세요테스트입니다.</p>
    <!-- <div class="textt"></div> -->
  </div>
</template>

<script>
// import gsap from 'gsap'
// import { onMounted } from 'vue'
export default {
  setup () {
    // onMounted(() => {
    //   gsap.to('.cir', { xPercent: 500 })
    // })
  }
}
</script>

<style scoped>
/* @keyframes textt-ani {
  100% {
    background-position: -822px 0;
  }
}
.textt {
  font-size: 150px;
  width: 150px;
  height: 150px;
  animation: textt-ani 1s infinite steps(11);
  overflow: hidden;
} */
@keyframes cir-ani {
  100% {
    background-position: -1350px 0;
  }
}
.cir {
  width: 150px;
  height: 150px;
  background: url('~@/assets/group.png') no-repeat 0 0 / auto 150px;
  animation: cir-ani 1s infinite steps(9);
}
</style>
