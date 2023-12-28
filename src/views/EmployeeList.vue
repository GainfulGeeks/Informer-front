
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
                        <tr v-for="employee in getEmployee" :key="employee.Id">
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
                            <td class="py-2 px-4 border-b text-center">{{ employee.FirstName }}</td>
                            <td class="py-2 px-4 border-b text-center">{{employee.PersonnelCode}}</td>
                            <td class="py-2 px-4 border-b text-center">{{employee.PhoneNumber}}</td>
                            <td class="py-2 px-4 border-b text-center">{{employee.Address}}</td>
                            <td class="py-2 px-4 border-b text-center">
                                <!-- Delete Icon -->
                                <IButton icon="trash" ></IButton>

                                <IButton icon="pencil" ></IButton>

                            </td>
                        </tr>
                    
                    </tbody>
                </table>

            </div>

  </template>
  
  <script setup>
import {ref} from 'vue';
import IButton from "../components/kit/IButton.vue";

// const employeeData = ref( [
// {name: "ali", personnelCode:"123456" , phoneNumber: "09121234567", state:"Active", id:1 },
// {name: "mamad", personnelCode:"12365755" , phoneNumber: "091212336567", state:"Active", id:2}, 
// {name: "maryam", personnelCode:"123334654" , phoneNumber: "09101233667", state:"Inactive", id:3}, 
// {name: "nazi", personnelCode:"11323654" , phoneNumber: "09115673667", state:"Inactive", id:4}, 
// {name: "zahra", personnelCode:"12334654" , phoneNumber: "03651233667", state:"Active" ,id:5} 
// ])

const getEmployee = async () => {
  const url = "https://localhost:7178/";
  const response = await fetch(url);
  countries.value = await response.json();
};

getEmployee();

  </script>
  


<style></style>