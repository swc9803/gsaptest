<template>
  <div class="container">
    <div v-if="result" class="dd" style="text-align: center"><h2>결과</h2></div>
    <div class="divider"/>
    <div class="wrapper">
      <h3 class="box people">조원 선택</h3> <br>
      <button class="option box" @click="showtrans1">사람1</button>
      <button class="option box" @click="showtrans1">사람2</button> <br>
      <div v-if="show1">
        <h3 class="box Transport">사람1 집</h3> <br>
        <button class="option box" @click="showtrans2">택시</button>
        <button class="option box" @click="showtrans2">지하철</button>
        <button class="option box" @click="showtrans2">버스</button>
        <button class="option box" @click="showtrans2">도보</button> <br>
      </div>
      <div v-if="show2">
        <h3 class="box Transport">하계역</h3> <br>
        <button class="option box" @click="showtrans3">택시</button>
        <button class="option box" @click="showtrans3">지하철</button>
        <button class="option box" @click="showtrans3">버스</button>
        <button class="option box" @click="showtrans3">도보</button> <br>
      </div>
      <div v-if="show3">
        <h3 class="box Transport">면목역</h3> <br>
        <button class="option box" @click="showtrans4">택시</button>
        <button class="option box" @click="showtrans4">지하철</button>
        <button class="option box" @click="showtrans4">버스</button>
        <button class="option box" @click="showtrans4">도보</button> <br>
      </div>
      <div v-if="show4">
        <button class="option bigbox" @click="showresult">확인</button>
        <button class="option bigredbox" @click="cancel">초기화</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const show1 = ref(false)
    const show2 = ref(false)
    const show3 = ref(false)
    const show4 = ref(false)
    const result = ref(false)
    const showtrans1 = () => {
      show1.value = true
    }
    const showtrans2 = () => {
      show2.value = true
    }
    const showtrans3 = () => {
      show3.value = true
    }
    const showtrans4 = () => {
      show4.value = true
    }
    const showresult = () => {
      result.value = true
    }
    const cancel = () => {
      show1.value = false
      show2.value = false
      show3.value = false
      show4.value = false
      result.value = false
    }
    return {
      show1,
      show2,
      show3,
      show4,
      result,
      showresult,
      showtrans1,
      showtrans2,
      showtrans3,
      showtrans4,
      cancel
    }
  }
}
</script>

<style scoped>
.dd {
  position: absolute;
  border: rgb(90, 65, 65) solid 4px;
  top: 50px;
  left: 1100px;
  width: 650px;
  height: 800px;
}
.option {
  margin: 5px;
}
.box {
  padding: 10px;
  color: white;
  background: skyblue;
  display: inline-block;
}
.bigbox {
  font-size: 35px;
  width: 150px;
  height: 100px;
  margin-top: 200px;
  padding: 10px;
  color: white;
  background: slateblue;
  display: inline-block;
}
.bigredbox {
  font-size: 35px;
  width: 150px;
  height: 100px;
  margin-top: 200px;
  padding: 10px;
  color: white;
  background: rgb(221, 73, 73);
  display: inline-block;
}
.divider {
  position: absolute;
  left: 50%;
  width: 5px;
  height: 900px;
  background: skyblue;
}
</style>
