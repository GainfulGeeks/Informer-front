<template>
    <div class="flex-1 overflow-x-hidden overflow-y-auto p-4 m-5 md:ml-64">
      <h2 class="text-2xl font-semibold mb-4">Employee List</h2>
      <EmployeeTable />
    </div>
  </template>
  
  <script setup>
  import EmployeeTable from "@/components/EmployeeTable.vue";
  </script>
  
  <style>
  </style>