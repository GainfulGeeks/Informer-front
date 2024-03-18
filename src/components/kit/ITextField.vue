<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-500">{{ label }}</label>
    <input :type="type" v-model="modelValue" :placeholder="placeholder" :id="id" :name="id" v-on="onEvents"
      class="mt-1 p-2 w-full border-b-2 border-gray-300 focus:border-b-primary focus:outline-none transition-colors duration-300" />
    <div v-if="errorMessage" class="text-red-600">{{ errorMessage }}</div>
  </div>
</template>

<script setup>
import { defineModel, toRef } from 'vue'
import { useField } from 'vee-validate';
import { string } from 'vue-types'

const props = defineProps({
  type: string().def('text'),
  id: string(),
  label: string(),
  placeholder: string(),
  rule: string(),
})
const emit = defineEmits([
  'blur',
  'keydown',
  'input'
])
const modelValue = defineModel()
const name = toRef(props, 'rule')

const { errorMessage, handleChange, handleBlur } = useField(name, undefined)
const onEvents = {
  focus: e => {
    handleBlur(e)
    emit('blur', e)
  },
  blur: e => {
    handleBlur(e)
    emit('blur', e)
  },
  onKeyDown: e => {
    emit('keydown', e)
  },
  input: e => {
    handleChange(e)
    emit('input', e)
  }
}
</script>

<style lang="scss" scoped></style>
