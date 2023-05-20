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
                        <div class="col-md-6">
                            <h5 class="card-header ">Create Vote Form</h5>
                        </div>
                        <div class="col-md-6">
                            <router-link to="/user-list" class="btn btn-secondary add-new btn-primary">All Vote list</router-link>
                        </div>
                    </div>
                </div>

                <div class="card-body">
                  <div class="mb-3 row">
                    <label for="html5-text-input" class="col-md-2 col-form-label">Heading</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text" placeholder="Enter Heading" id="" />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="html5-search-input" class="col-md-2 col-form-label">Option 1</label>
                    <div class="col-md-10">
                      <input class="form-control" type="email"  placeholder="Enter Option 1" id="" />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="html5-email-input" class="col-md-2 col-form-label">Option 2</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text"  placeholder="Enter Option 2" id="" />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="html5-password-input" class="col-md-2 col-form-label">Option 3</label>
                    <div class="col-md-10">
                      <input class="form-control" type="text" placeholder="Enter Option 3" />
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