<template>
<modal name="loginregister" 
    :min-width="200"
    :pivot-y="0.5"
    :scrollable="true"
    :reset="true"
     :resizable="true"
    width="60%"
    height="auto">
         <section id="main">
        <div class="container">

            <div class="row">
                <div class="col-md-6 col-sm-10 offset-md-3">
                   
                        <div class="row">
                            <div class="col-md-12">
                                <h2 class="text-center">
                                    User Login
                                </h2>
                            </div>
                        </div>

                        <div class="card-body text-center">
                             <form  @submit.prevent="userlogin" @keydown="form.onKeydown($event)">
                               <div class="input-group mb-4 mt-3">
                                   
                                     <input v-model="form.email" type="email" required class="form-control" :class="{ 'is-invalid': form.errors.has('email') }" id="inputEmail3" placeholder="Email">
                             
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <i class="far fa-user"></i>
                                        </div>
                                    </div>
                                    <has-error :form="form" field="email"></has-error>
                                </div>
                                <div class="input-group mb-3 mt-4">
                                      <input type="password"  v-model="form.password" required  class="form-control" :class="{ 'is-invalid': form.errors.has('password') }" id="password" placeholder="Password">
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <i class="fas fa-key"></i>
                                        </div>
                                    </div>
                                     <has-error :form="form" field="password"></has-error>
                                </div>

                                <div class="row bt-padd">
                                    <div class="col-12 text-center">

                                        <button class="log mt-3" :disabled="form.busy">
                                            Login
                                        </button>
                                    </div>
                                    <!-- /.col -->
                                </div>
                            </form>

                            <div class="row mt-5">
                                <div class="col-md-6 btm">
                                    <form action="">
                                        <input type="checkbox"> <span class="clr">Remember Me</span>
                                    </form>
                                </div>

                                <div class="col-md-6 btm">
                                    <router-link to="/forgatepassword" class="text-danger">Forgate Password?</router-link>
                                    
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>

      
    </section>
    </modal> 
</template>

<script>
export default {
    name:"NewPassword",
    data() {
    return {
        
       form: new Form({
        email: "",
        password: ""
      })
    };
  },


   methods: {
    userlogin() {
      localStorage.clear();
      this.form.post("/login", this.form)
        .then(response => {
          toastr.success("Login  Successfully");
          if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
              this.$modal.hide('loginregister');
             this.$router.go(0);
          }
        })
        .catch(response => {
          toastr.warning("Email Or Password In-Valid", "Login Fail")});
    },
        
   
  }
}
</script>