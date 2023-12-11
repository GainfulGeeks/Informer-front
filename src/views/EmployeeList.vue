
<template>

<div class="min-w-full overflow-x-auto">
                <!-- Employee Table -->
                <table class="min-w-full bg-white border border-gray-300 rounded-2xl">
                    <thead>
                        <tr>
                            <th class="py-2 px-4 border-b text-center">Picture</th>
                            <th class="py-2 px-4 border-b text-center">Name</th>
                            <th class="py-2 px-4 border-b text-center">Personnel Code</th>
                            <th class="py-2 px-4 border-b text-center">Phone Number</th>
                            <th class="py-2 px-4 border-b text-center">State</th>
                            <th class="py-2 px-4 border-b text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Employee Row  -->
                        <tr v-for="employee in employeeData" :key="employee.id">
                            <td class="py-2 px-4 border-b text-center flex justify-center">
                                <!-- SVG Placeholder for Employee Picture -->
                                <div class="bg-primary p-2 rounded-full w-10 h-10 flex justify-center items-center">
                                    <svg class="w-8 h-8 mx-auto" fill="#ffffff" viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                        </g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z">
                                            </path>
                                        </g>
                                    </svg>

                                </div>
                            </td>
                            <td class="py-2 px-4 border-b text-center">{{ employee.name }}</td>
                            <td class="py-2 px-4 border-b text-center">{{employee.personnelCode}}</td>
                            <td class="py-2 px-4 border-b text-center">{{employee.phoneNumber}}</td>
                            <td class="py-2 px-4 border-b text-center">{{employee.state}}</td>
                            <td class="py-2 px-4 border-b text-center">
                                <!-- Delete Icon -->
                                <button class="text-red-500 hover:text-red-700 focus:outline-none">

                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                        </g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M10 11V17" stroke="#CC3232" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                            <path d="M14 11V17" stroke="#CC3232" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                            <path d="M4 7H20" stroke="#CC3232" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                            <path
                                                d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                                                stroke="#CC3232" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                            <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                                                stroke="#CC3232" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                        </g>
                                    </svg>
                                </button>

                                <!-- Edit Icon -->
                                <button class="text-blue-500 hover:text-blue-700 ml-2 focus:outline-none">


                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                        </g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M8.56078 20.2501L20.5608 8.25011L15.7501 3.43945L3.75012 15.4395V20.2501H8.56078ZM15.7501 5.56077L18.4395 8.25011L16.5001 10.1895L13.8108 7.50013L15.7501 5.56077ZM12.7501 8.56079L15.4395 11.2501L7.93946 18.7501H5.25012L5.25012 16.0608L12.7501 8.56079Z"
                                                fill="#24b314"></path>
                                        </g>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    
                    </tbody>
                </table>

            </div>

  </template>
  
  <script setup>
import {ref} from 'vue';

const employeeData = [
{name: "ali", personnelCode:"123456" , phoneNumber: "09121234567", state:"Active", id:1 },
{name: "mamad", personnelCode:"12365755" , phoneNumber: "091212336567", state:"Active", id:2}, 
{name: "maryam", personnelCode:"123334654" , phoneNumber: "09101233667", state:"Inactive", id:3}, 
{name: "nazi", personnelCode:"11323654" , phoneNumber: "09115673667", state:"Inactive", id:4}, 
{name: "zahra", personnelCode:"12334654" , phoneNumber: "03651233667", state:"Active" ,id:5} 
]



  </script>
  


<style></style>