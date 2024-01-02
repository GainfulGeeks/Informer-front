<template>
<div class="flex h-screen">
  <!-- Right Pane -->
  <div class="w-full bg-white lg:w-1/3 flex items-center justify-center rounded-2xl">
    <div class="max-w-md w-full p-6">
      <h1 class="text-3xl font-semibold mb-6 text-black text-center">Sign in</h1>
      <form action="#" method="POST" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-500">Email</label>
          <input placeholder="Enter your email address" type="text" id="email" name="email" class="mt-1 p-2 w-full border-b-2 border-gray-300 focus:border-b-primary focus:outline-none transition-colors duration-300">
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-500">Password</label>
          <input placeholder="Enter your Password" type="password" id="password" name="password" class="mt-1 p-2 w-full border-b-2 border-gray-300 focus:border-b-primary focus:outline-none transition-colors duration-300">
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input type="checkbox" id="rememberMe" name="rememberMe" class="mr-2">
            <label for="rememberMe" class="text-sm text-gray-500">Remember me</label>
          </div>
          <a href="#" class="text-sm text-gray-500 hover:underline">Forgot Password?</a>
        </div>
        <div>
          <button type="submit" class="rounded-full w-full bg-primary text-white p-2 hover:bg-gray-800 focus:bg-black  transition-colors duration-300">Log In</button>
        </div>
      </form>
    </div>
  </div>
    <!-- Left Pane -->
    <div class="hidden lg:flex items-center justify-center flex-1 bg-primary text-black rounded-2xl">
    <div class="max-w-md text-center">
        <img src="../assets/images/login.svg">
    </div>
  </div>
</div>
</template>
