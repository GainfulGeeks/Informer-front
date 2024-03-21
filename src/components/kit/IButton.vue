<template>
 <button class="text-red-500 hover:text-red-700 focus:outline-none">

<svg v-if="icon==='trash'" width="24" height="24" viewBox="0 0 24 24" fill="none"
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

<svg v-if="icon==='pencil'" width="24" height="24" viewBox="0 0 24 24" fill="none"
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
</template>

<script setup>

defineProps({icon:String})
</script>

<style lang="scss" scoped>

</style>