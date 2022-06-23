<template>
  <div class="timer">{{ counter }}</div>
</template>

<script setup lang="ts">
import { useInterval } from './timer'
import { useCounter } from './counter'

const { value: counter, increment } = useCounter()

let delta = 1
useInterval(() => {
  if (delta > 0 && counter.value > 4 || delta < 0 && counter.value < 1) {
    delta = -delta
  }
  counter.value += delta
}, 250)
</script>
