import Vue from 'vue'
import moment from 'moment'
//for details short area start
Vue.filter('shortlength', function(text, length, suffix) {
    return text.substring(0, length) + suffix;
});
Vue.filter('vHTML', function(value) {
    return value.slice(0, 200) + ' ...' ;
});
//for details short area end|
//for change  time format
Vue.filter('timeformat',(arg)=>{
    return moment(arg).format("ll")
})
//for change  time format
Vue.filter('MinitAgo',(arg)=>{
    return moment(arg).startOf('hour').fromNow();
});


