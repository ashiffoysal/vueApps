<template>
    <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
        <!-- Menu -->

       <SidebarComponent/>
        <!-- sidebar  -->
       
        <!-- / Menu -->

        <!-- Layout container -->
        <div class="layout-page">
          <!-- Navbar -->

          <NavbarComponent/>

          <!-- / Navbar -->

          <!-- Content wrapper -->
         

             <router-view></router-view>
            
         

            
          
          <!-- Content wrapper -->
        </div>
        <!-- / Layout page -->
      </div>

      <!-- Overlay -->
      <div class="layout-overlay layout-menu-toggle"></div>

      <!-- Drag Target Area To SlideIn Menu On Small Screens -->
      <div class="drag-target"></div>
</div>
</template>

<script>
  import NavbarComponent from "../include/navbar.vue";
  import FooterComponent from "../include/footer.vue";
  import SidebarComponent from "../include/sidebar.vue";


  export default {
  components: {
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    },

    methods:{
      logout(){
        axios.get('/api/auth/logout').then(res=>{
          alert("ok")
        }).catch(err => {
          alert("errror")
        });
      }
    },
}
</script>
<style></style>


