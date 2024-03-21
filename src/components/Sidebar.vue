<template>
  <!-- Mobile Hamburger Menu Button -->
  <button id="mobile-menu-btn" class="md:hidden p-4 bg-primary text-white">
    <svg
      class="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16m-7 6h7"
      ></path>
    </svg>
  </button>

  <!-- Left Sidebar Menu -->
  <div
    id="sidebar"
    class="flex flex-col md:flex-row h-screen bg-primary text-white fixed top-0 left-0 transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out"
  >
    <div class="flex-shrink-0 w-64 p-4 rounded-2xl">
      <h1 class="text-2xl font-semibold mb-4">Informer</h1>
      <ul>
        <li class="mb-2 group" v-for="item in menuData" :key="item.title">
          <div class="flex items-center justify-between">
            <a
              href="#"
              class="block p-2 rounded hover:bg-secondary focus:outline-none focus:shadow-outline"
              >{{ item.title }}</a
            >
            <!-- Dropdown Icon -->
            <svg
              class="h-5 w-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
          <!-- Dropdown Menu -->
          <ul class="ml-4 hidden group-hover:block">
            <li v-for="child in item.children" :key="child.title">
              <router-link :to="child.path" class="block p-2 rounded hover:bg-secondary">
                    {{ child.title }}
            </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const menuData = ref([
  {
    title: 'dashbord',
    path: '/'
  },
  {
    title: 'Employees',
    children: [{ title: 'All employees', path: '/employees' }, { title: 'New', path: '/employees' }]
  },
  {
    title: 'Attendances',
    children: [
      { title: 'Today', path: '/' },
      { title: 'Advanced repot', path: '/' }
    ]
  },
  {
    title: 'Equipment',
    children: [
      { title: 'List', path: '/' },
      { title: 'Assign to Employee', path: '/' }
    ]
  },
  {
    title: 'My actions',
    children: [
      { title: 'Submit attendances', path: '/' },
      { title: 'view Attendances', path: '/' },
      { title: 'Request Equipment', path: '/' },
      { title: 'Request Leave', path: '/' }
    ]
  }
])

const isSidebarOpen = ref(false)

onMounted(() => {
  // Add click event listener to toggle dropdown visibility
  document.querySelectorAll('.dropdown-toggle').forEach((toggle) => {
    toggle.addEventListener('click', function (e) {
      e.preventDefault()
      this.parentNode.querySelector('.hidden').classList.toggle('block')
    })
  })

  // Add click event listener to toggle sidebar visibility
  const mobileMenuBtn = document.getElementById('mobile-menu-btn')

  mobileMenuBtn.addEventListener('click', () => {
    isSidebarOpen.value = !isSidebarOpen.value
  })
})
</script>

<style></style>
