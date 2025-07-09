<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

import StatusItem from './StatusItem.vue'
import IconLoading from './icons/IconLoading.vue'
import type { Component } from '../types/component'

const GITHUB_STATUS_URL = 'https://www.githubstatus.com/api/v2/summary.json'

const components: Ref<Component[]> = ref([])

const loading = ref(true)
const error = ref(false)
const errorMessage = ref('Failed to communicate with GitHub status, please try again later.')
const status = ref({
  indicator: '',
  description: '',
})
const lastUpdate = ref('')

const fetechStatus = async () => {
  loading.value = true
  error.value = false
  try {
    const response = await fetch(GITHUB_STATUS_URL)
    const data = await response.json()

    status.value = data.status
    components.value = data.components
    lastUpdate.value = new Date(data.page.updated_at).toLocaleString()
  } catch {
    error.value = true
    console.log()
  } finally {
    loading.value = false
  }
}

const getstatus = () => {
  fetechStatus()
}

fetechStatus()
</script>

<template>
  <div class="status">
    <div class="status-head">
      <h1>Github Status</h1>
      <button v-on:click="getstatus">Get Status</button>
    </div>

    <div v-if="loading" class="status-load">
      <IconLoading />
    </div>

    <div v-if="error" class="status-error">
      <img src="../assets/error.png" alt="Communication error" />
      <h2>{{ errorMessage }}</h2>
    </div>

    <div v-if="!loading && !error" class="status-body">
      <div class="status-overall">
        <h2>{{ status.description }}</h2>
        <p>Last Updated: {{ lastUpdate }}</p>
      </div>
      <div class="status-components">
        <StatusItem v-for="component in components" :key="component.id" :component="component" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.status {
  display: flex;
  flex-direction: column;
  width: 150vh;
  height: 50vh;
  background-color: var(--status-bg-color);
  border-radius: 10px;
}

.status-head {
  display: inherit;
  justify-content: space-between;
  background-color: var(--status-h-bg-color);
  border-radius: inherit;
  padding: 10px 20px;
}
.status-head button {
  background-color: var(--button-bg-color);
  border: none;
  color: white;
  padding: 10px;
  border-radius: 10px;
}
.status-head button:hover {
  background-color: var(--button-bgh-color);
}

.status-load {
  flex: 1 1 auto;
  display: inherit;
  justify-content: space-evenly;
  align-items: center;
}
.status-load svg {
  width: 600px;
  height: 300px;
}

.status-error {
  flex: 1 1 auto;
  display: inherit;
  justify-content: space-evenly;
  align-items: center;
}
.status-error img {
  width: 300px;
  height: 300px;
}

.status-body {
  display: inherit;
  flex-direction: column;
  flex: 1 1 auto;
}

.status-overall {
  padding: 20px 40px;
}
.status-overall p {
  color: var(--p-color);
  padding-top: 5px;
  font-size: 12px;
}

.status-components {
  flex: 1 1 auto;
  display: inherit;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0px 40px;
}
</style>
