<template>
  Test
  git add test
</template>

<script>
import { gsap } from 'gsap'
import { onMounted } from 'vue'

export default {
  setup () {
    onMounted(() => {
      gsap.to('div', { xPercent: 20 })
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
