<template>
    <div class="content-wrapper">
        <!-- Content -->

        <div class="container-xxl flex-grow-1 container-p-y">

          <div class="row">
            
            <div class="col-xl-10">
              <!-- HTML5 Inputs -->
              <div class="card mb-4">
                
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6  mt-4">
                            <h5 class="card-header ">Create User Form</h5>
                        </div>
                        <div class="col-md-6 mt-5">
                            <router-link to="/dashboard/user-list" class="btn btn-secondary add-new btn-primary">All User</router-link>
                        </div>
                    </div>
                </div>

                <div class="card-body">
                  <div class="mb-3 row">
                    <label for="html5-text-input" class="col-md-2 col-form-label">Name</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text" placeholder="Enter user name" id="" />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="html5-search-input" class="col-md-2 col-form-label">Email</label>
                    <div class="col-md-10">
                      <input class="form-control" type="email"  placeholder="Enter user email" id="" />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="html5-email-input" class="col-md-2 col-form-label">Phone</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text"  placeholder="Enter user Phone" id="" />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="html5-url-input" class="col-md-2 col-form-label">Address</label>
                    <div class="col-md-10">
                    <input class="form-control" type="text"  placeholder="Enter user Address" id="" />
                    </div>
                  </div>
                 
                  <div class="mb-3 row">
                    <label for="html5-password-input" class="col-md-2 col-form-label">Password</label>
                    <div class="col-md-10">
                      <input class="form-control" type="password" value="password" id="" />
                    </div>
                  </div>
                
                  <div class="row">
                    <label for="html5-range" class="col-md-2 col-form-label"></label>
                    <div class="col-md-10">
                      <button class="btn btn-success" type="button">Submit</button>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
        <!-- / Content -->


        <div class="content-backdrop fade"></div>
      </div>
</template>