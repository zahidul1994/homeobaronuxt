<template>
    <section id="main">
        <div class="container">

            <div class="row">
                <div class="col-md-4 offset-md-4">
                    <div class="card">
                        <div class="row">
                            
                     <img :src="require('@//assets/fontimage/homeobari.png')" alt="bikebd" />

                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <h2 class="text-center mt-3">
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
                                    <NuxtLink to="/forgatepassword" class="text-danger">Forgate Password?</NuxtLink>
                                    
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

</template>

     <script>
export default  {
  name: "UserLogin",
  data() {
    return {
      form: new Form({
        email: "",
        password: ""
      })
    };
  },
  mounted() {
  
    var user = localStorage.getItem("user");

    if ( user) {
      this.$router.push({ name: "UserDashboard" });
    }
  },
  methods: {
    userlogin() {
     this.form.post("/login", this.form)
        .then(response => {
          toastr.success("Login  Successfull");
          
          if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
              [this.$router.push({ name: "Index" })];
          }
        })
        .catch(response => {
          console.log(response);
          [toastr.warning("Sorry Try Agin", "! OPS")];
        });
    }
   
  }
};
</script>
