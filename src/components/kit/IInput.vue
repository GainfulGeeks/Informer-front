<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-500">{{label}}</label>
    <input
      :placeholder="placeholder"
      type="text"
      :id="id"
      name="email"
      class="mt-1 p-2 w-full border-b-2 border-gray-300 focus:border-b-primary focus:outline-none transition-colors duration-300"
    />
  </div>
</template>

<script setup>
import { string, number, object, oneOfType, bool } from 'vue-types'
 defineProps({
  id: string().def(undefined),
  disabled: bool(),
  modelValue: oneOfType([string(), number(), object()]).def('').isRequired,
  label: string(),
  placeholder:string()
});

</script>

<style lang="scss" scoped></style>
