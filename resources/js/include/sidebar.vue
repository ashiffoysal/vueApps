<template>
    <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme" v-show="$route.path ==='/login' ? false:true">
        <div class="app-brand demo">
          <router-link to="/dashboard" class="app-brand-link">
            <span class="app-brand-logo demo">
              <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                  fill="#7367F0"
                />
                <path
                  opacity="0.06"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                  fill="#161616"
                />
                <path
                  opacity="0.06"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                  fill="#161616"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                  fill="#7367F0"
                />
              </svg>
            </span>
            <span class="app-brand-text demo menu-text fw-bold">Vuexy</span>
          </router-link>

          <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto">
            <i class="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i>
            <i class="ti ti-x d-block d-xl-none ti-sm align-middle"></i>
          </a>
        </div>

        <div class="menu-inner-shadow"></div>

        <ul class="menu-inner py-1">
          <!-- Dashboards -->
          <li class="menu-item active open">
            <router-link to="/dashboard" class="menu-link menu-toggle">
              <i class="menu-icon tf-icons ti ti-smart-home"></i>
              <div >Dashboards</div>
            </router-link>
            
          </li>


          <li class="menu-header small text-uppercase">
            <span class="menu-header-text">User Details</span>
          </li>
          <li class="menu-item">
            <router-link to="/dashboard/admin-user-list" class="menu-link">
                <i class="menu-icon tf-icons ti ti-messages"></i>
              <div >Admin User</div>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/dashboard/user-list" class="menu-link">
                <i class="menu-icon tf-icons ti ti-messages"></i>
              <div >All User</div>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/dashboard/user-create" class="menu-link">
                <i class="menu-icon tf-icons ti ti-messages"></i>
              <div >User Register</div>
            </router-link>
          </li>
          <li class="menu-header small text-uppercase">
            <span class="menu-header-text">Apps &amp; Pages</span>
          </li>
          <li class="menu-item">
            <router-link to="/dashboard/create-vote" class="menu-link">
                <i class="menu-icon tf-icons ti ti-messages"></i>
              <div >Create Vote</div>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/dashboard/create-vote-list" class="menu-link">
                <i class="menu-icon tf-icons ti ti-messages"></i>
              <div >Create Vote List</div>
            </router-link>
          </li>
          <!-- Layouts -->
         

          <!-- Apps & Pages -->
          <li class="menu-header small text-uppercase">
            <span class="menu-header-text">Settings</span>
          </li>

          <li class="menu-item">
            <router-link to="/dashboard/company-information-update" class="menu-link">
                <i class="menu-icon tf-icons ti ti-messages"></i>
              <div>Company Information</div>
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/dashboard/logo-favicon-update" class="menu-link mycursor">
                <i class="menu-icon tf-icons ti ti-messages"></i>
              <div>Logo & Favicon</div>
            </router-link>
          </li>

         

          <li class="menu-item">
            <a @click="logout" class="menu-link mycursor">
                <i class="menu-icon tf-icons ti ti-messages "></i>
              <div>Logout</div>
            </a>
          </li>
          <li class="menu-item">
            <router-link to="/" class="menu-link mydesign">
                <i class="menu-icon tf-icons ti ti-messages"></i>
              <div>Live site</div>
            </router-link>
          </li>
     
        </ul>
      </aside>
</template>

<script>


import { useRouter } from "vue-router"
import swal from 'sweetalert';
import store from  "../store/index"
export default{
    setup(){
        const router = useRouter();
      
        function logout(){
            store.dispatch('removeToken');
            router.push({name:'Login'});
            swal("Success!", "Logout Success", "success");
        }
        return {
            logout
        }
    }
}


</script>
<style scoped>
.mydesign{
    border: 1px solid #1be700;
    background: #04ed00;
    color: #fff !important;
}

.mydesign:hover{
  
    color: #000 !important;
}
.mycursor{
  cursor: pointer;
}
</style>
