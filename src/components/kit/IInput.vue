<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-500">{{ label }}</label>
    <Field :name="id" rules="required">
    <input
        v-model="modelValue"
        :placeholder="placeholder"
        :id="id"
        :name="id"
        class="mt-1 p-2 w-full border-b-2 border-gray-300 focus:border-b-primary focus:outline-none transition-colors duration-300"
      /> 

    </Field>
    <ErrorMessage :name="id" />
  </div>
</template>

<script setup>
import { defineProps, defineModel } from 'vue'
import { Field, ErrorMessage } from 'vee-validate'

defineProps({
  id: String,
  label: String,
  placeholder: String
})

const modelValue = defineModel()

</script>

<style lang="scss" scoped></style>
