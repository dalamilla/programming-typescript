<script setup lang="ts">
import type { Component } from '../types/component'
import IconStatus from '../components/icons/IconStatus.vue'
defineProps<{
  component?: Component
}>()

const statusClass = (status: string | undefined) => {
  switch (status) {
    case 'operational':
      return 'component-status-green'
    case 'degraded_performance':
      return 'component-status-yellow'
    case 'partial_outage':
      return 'component-status-orange'
    case 'major_outage':
      return 'component-status-red'
    default:
      return 'component-status-gray'
  }
}
</script>
<template>
  <div class="component">
    <div class="component-title">
      <h4>
        {{ component?.name }}
      </h4>
      <p>
        {{ component?.description }}
      </p>
    </div>
    <div class="component-status" :class="statusClass(component?.status)">
      <IconStatus />
      <p>
        {{ component?.status }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.component {
  display: inherit;
  background-color: var(--component-bg-color);
  width: 300px;
  height: 60px;
  margin: 2px;
  padding: 10px;
  border: 1px solid var(--component-br-color);
  border-radius: 5px;
}

.component-title {
  width: 75%;
}
.component-title p {
  color: var(--p-color);
  padding-top: 2px;
  font-size: 10px;
}

.component-status {
  display: flex;
  padding: 5px;
  border: 1px solid var(--component-br-color);
  border-radius: 25px;
  height: 10px;
  width: 25%;
}
.component-status p {
  color: var(--p-color);
  font-size: 10px;
}
.component-status svg {
  padding-right: 10px;
  width: 10px;
  height: 10px;
}
.component-status-green {
  fill: green;
}
.component-status-yellow {
  fill: yellow;
}
.component-status-orange {
  fill: orange;
}
.component-status-red {
  fill: red;
}
.component-status-gray {
  fill: gray;
}
</style>
