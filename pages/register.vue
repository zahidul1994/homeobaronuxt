<template>
<section id="main">
        <div class="container">

            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <div class="card">
                        <div class="row">
                              <img :src="require('@/assets/fontimage/homeobari.png')" alt="" class="w-75 m-auto">

                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <h2 class="text-center mt-3">
                                    Sign Up
                                </h2>
                            </div>
                        </div>

                        <div class="card-body text-left">

                       <form  role="form"   @submit.prevent="userregister" enctype="multipart/form-data">

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="firstname">First Name <span class="text-danger">*</span></label>
                                           <input v-model="form.firstname" type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('firstname') }" id="firstname" placeholder="Your First Name"> <has-error :form="form" field="firstname"></has-error>

                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="lastname">Last Name <span class="text-danger">*</span></label>
                                           <input v-model="form.lastname" type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('lastname') }" id="lastname" placeholder="Your Last Name"> <has-error :form="form" field="lastname"></has-error>

                                        </div>
                                    </div>
                                  
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="phone">Phone number <span class="text-danger">*</span></label>
                                           <input v-model="form.phone" type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('phone') }" id="phone" placeholder="Your Phone"> <has-error :form="form" field="phone"></has-error>

                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="username">Username <span class="text-danger">*</span></label>
                                                 <input v-model="form.username" type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('username') }" id="username" placeholder="Your User Name"> <has-error :form="form" field="username"></has-error>

                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="email">Email <span class="text-danger">*</span></label>
                                          <input v-model="form.email" type="email" class="form-control" :class="{ 'is-invalid': form.errors.has('email') }" id="email" placeholder="Your Email"> <has-error :form="form" field="email"></has-error>

                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="password">Password <span class="text-danger">*</span></label>
                                           <input v-model="form.password" type="password" class="form-control" :class="{ 'is-invalid': form.errors.has('password') }" id="password" placeholder="Your Password"> <has-error :form="form" field="password"></has-error>

                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <form>

                                            <div class="form-group">
                                                <label for="ride">You Ride a Bike/Scooter</label>
                                                <select class="form-control" id="ride" v-model="form.ride">
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>

                                                </select>
                                            </div>

                                        </form>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="ridetype">Which Bike/Scooter You Ride <span class="" style="font-size: 13px; color:#666666;">(If Yes)</span></label>
                                             <input v-model="form.ridetype" type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('ridetype') }" id="ridetype" placeholder="Brand Name, Model Name"> <has-error :form="form" field="ridetype"></has-error>
                                            

                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="love">Which Bike/Scooter You Love <span class="" style="font-size: 13px; color:#666666;">(If No)</span></label>
                                        <input v-model="form.love" type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('love') }" id="love" placeholder="Brand Name, Model Name"> <has-error :form="form" field="love"></has-error>
                                        </div>
                                    </div>
                                </div>




                                <div class="row">
                                    <div class="col-md-12">


                                        <div class="form-group">
                                            <label for="whysign">Why you want to sign up <span class="text-danger">*</span></label>
                                            <select class="form-control" id="whysign" v-model="form.whysign">
                                                <option value="I want to buy a new Bike">I want to buy a new Bike</option>
                                                <option value="I want to buy a new Scooter">I want to buy a new Scooter</option>
                                                <option value="Just love to read Bikebd reviews">Just love to read Bikebd reviews</option>
                                                <option value="Just want to help other bikers">Just want to help other bikers</option>
 
                                            </select>
                                        </div>
                                    </div>
                                </div>




                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="dream">What is your Dream Bike </label>
                                          
                          <input v-model="form.dream" type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('dream') }" id="dream" placeholder="Your Dream Bike"> <has-error :form="form" field="dream"></has-error>
                                         </div>
                                    </div>
                                </div>


                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="ridekm">If you have a bike already how many km. you ride</label>
                                            <select class="form-control" id="ridekm" v-model="form.ridekm">
                                                <option value="5000km">5000km</option>
                                                <option value="10000km">10000km</option>
                                                <option value="20000km">20000km</option>
                                                <option value="50000km +">50000km +</option>
                                                </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row bt-padd">
                                    <div class="col-12 text-center">

                                        <button type="submit" class="log mt-3">
                                            Sign Up
                                        </button>
                                    </div>
                                    <!-- /.col -->
                                </div>
                            </form>
                            <div class="row mt-5">
                                <div class="col-md-12 btm">
                                    Already have an account 
                                    <NuxtLink :to="`/login`">Sign In</NuxtLink>
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
            name:'New',
              data(){
              return {
                form: new $vform({
                  firstname:'',
                  lastname:'',
                  phone:'',
                  username:'',
                   email: '',
                   password: '',
                   ride: '',
                  ridetype:'',
                  love:'',
                  whysign:'',
                  ridekm:'',
                }),
               
              }
          },
      mounted () {
               var user= localStorage.getItem("user");
     
      if( user){
       
          this.$router.push({name: 'UserDashboard'})
      
         
      }
       
  },
 



          methods: {
            userregister(){
             // console.log(this.form);
               this.form.post("/register", this.form)
              .then(response => { [toastr.success('Login  Successfull')],[this.$router.push({name: 'UserLogin' })]
              if(response.data.token){
              localStorage.setItem("token", response.data.token); 
             
              }
              })
               .catch(response=> {console.log(response);[toastr.warning("Sorry Try Agin"),] });
            },
           
            changephoto(event){
      var file=event.target.files[0];
      var reader=new FileReader();
      reader.onload=event=>{
        this.form.userimage=event.target.result
      },
      reader.readAsDataURL(file);
    }

            //  [localStorage.setItem("token", response.data.token)], [this.$route.defaults.headers.common['Authorization']="Token " + localStorage.getItem("token")],
          }
        }
      </script>

    
