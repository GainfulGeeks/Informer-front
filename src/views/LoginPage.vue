<template>
  <div class="flex h-screen p-5">
    <!-- Right Pane -->
    <div class="w-full bg-white lg:w-1/3 flex items-center justify-center rounded-2xl">
      <div class="max-w-md w-full p-6 space-y-4">
        <h1 class="text-3xl font-semibold mb-6 text-black text-center">Sign in</h1>
          <ITextField
            v-model="userInfo.email"
            label="Email"
            id="email"
            rule="email"
            placeholder="Enter your email address"
          />
          <ITextField
            v-model="userInfo.password"
            label="Password"
            id="password"
            rule="password"
            placeholder="Enter your Password"
          />
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input type="checkbox" id="rememberMe" name="rememberMe" class="mr-2" />
              <label for="rememberMe" class="text-sm text-gray-500">Remember me</label>
            </div>
            <a href="#" class="text-sm text-gray-500 hover:underline">Forgot Password?</a>
          </div>
          <div>
            <button
              @click="submit"
              class="rounded-full w-full bg-primary text-white p-2 hover:bg-gray-800 focus:bg-black transition-colors duration-300"
            >
              Log In
            </button>
          </div>
      </div>
    </div>
    <!-- Left Pane -->
    <div class="hidden lg:flex items-center justify-center flex-1 bg-primary text-black rounded-2xl">
      <div class="max-w-md text-center">
        <img src="../assets/images/login.svg" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ITextField from '/src/components/kit/ITextField.vue';
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import router from '@/router';

const userInfo = ref({
  email: null,
  password: null,
})

const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
})
const { validate: validateForm } = useForm({
  validationSchema: loginSchema
})
const isFromValid = ref(false)
const validate = async () => {
  await validateForm().then(res => {
    if(res.valid) isFromValid.value = true
  })
}
const submit = async () => {
  await validate()
  if(isFromValid.value) {
    alert(`Form is valid!!!  ====${JSON.stringify(userInfo.value)}====`)
    localStorage.setItem('token', 'sadhfaasdfhbaksdb')
    router.push('/employees')
  } 
}



</script>
