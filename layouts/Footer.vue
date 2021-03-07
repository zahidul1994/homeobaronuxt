<template>
    
    <span>
         <!--subscribe area-->
    <section id="subscribe">
        <div class="container">
            <div class="row">
            
                <div class="text-white">বাংলাদেশের প্রথম হোমিও  ব্লগ  সাইটে আপনাকে স্বাগতম  । Homeobari যুক্ত আছেন দেশের বিখ্যাত সকল হোমিও ডাক্তার ও হোমিও বিশ্ববিদ্যালয়ের শিক্ষক,ছাত্র-ছাত্রী ও বাংলা ভাষী হোমিও সেবার সাথে যুক্ত সকল নাগরিক ।  Homeobari পাবেন নতুন নতুন হোমিও ঔষুধের নাম  ও তার ক্রিয়া সহ সকল তথ্য । দেশ বিদেশের খবর, ব্লগ, বিনোদন সহ আরো অনেক কিছু। আপনি যদি এখানে লিখতে আগ্রহী হন আমাদের সাথে যোগাযোগ   <NuxtLink :to="`/contact`">করুন</NuxtLink>।</div>
                
            </div>
        </div>
    </section>
    
<!--    foter area-->


<!-- Load Facebook SDK for JavaScript -->
      

<!--copy area-->
<section id="copy">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <a href="https://www.facebook.com/shohiitbd">
                    &copy;  {{ new Date().getFullYear() }} — <strong>ShohiitBD IT</strong>
                </a>
            </div>
        </div>
    </div>
</section>
</span>
</template>
<script>

export default {
    
    name: "Footer",
    data(){
        return {
   
        };
    },



}


</script>