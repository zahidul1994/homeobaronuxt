<template>
    <section id="main">
        <div class="container">

            <div class="row">
                <div class="col-md-4 offset-md-4">
                    <div class="card">
                        <div class="row">
                            <img :src="require('@/assets/fontimage/homeobari.png')" alt="" class="w-75 m-auto">

                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <h2 class="text-center mt-3">
                                    Password Reset
                                </h2>
                            </div>
                        </div>

                        <div class="card-body text-center">
                              <form  @submit.prevent="ForgatePassword" @keydown="form.onKeydown($event)">
                               <div class="input-group mb-4 mt-3">
                                   
                                     <input v-model="form.email" type="email" required class="form-control" :class="{ 'is-invalid': form.errors.has('email') }" id="inputEmail3" placeholder="Your Email">
                             
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <i class="far fa-user"></i>
                                        </div>
                                    </div>
                                    <has-error :form="form" field="email"></has-error>
                                </div>
                               


                                <div class="row bt-padd">
                                    <div class="col-12 text-center">

                                        <button class="log mt-3" :disabled="form.busy">
                                            Submit
                                        </button>
                                    </div>
                                    <!-- /.col -->
                                </div>
                            </form>

                            <div class="row mt-5">
                                <div class="col-md-6 btm">
                                    <router-link to="/register" class="text-danger">Create Account?</router-link>
                                </div>

                                <div class="col-md-6 btm">
                                    <router-link to="/login" class="text-danger">Login</router-link>
                                    
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

export default {
    name: "ForgatePassword",
    data() {
    return {
        form: new $vform({
        email: "",
    })
    };
  },
mounted(){

},

   methods: {
    ForgatePassword() {
     this.form.post("/forgatepassword", this.form)
        .then(response => {
          toastr.success("'Your Pass Comfamation Code sent to' +response.data.email+ ","Well Done");
          this.$router.push({name: 'Changepassword', params:"'+response.data.email+'" });
        })
        .catch(response => {
          toastr.warning("Email  In-Valid", "Sorry")});
    },
        
   
  }
}
</script>