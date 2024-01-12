<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-500">{{ label }}</label>
    <input
      v-model="modelValue"
      :placeholder
      type="text"
      :id
      name="email"
      class="mt-1 p-2 w-full border-b-2 border-gray-300 focus:border-b-primary focus:outline-none transition-colors duration-300"
    />
  </div>
</template>

<script setup>
import { string, bool } from 'vue-types'
import { defineModel } from 'vue'
defineProps({
  id: string().def(undefined),
  disabled: bool(),
  label: string(),
  placeholder: string()
})

const modelValue = defineModel()
</script>

<style lang="scss" scoped></style>
