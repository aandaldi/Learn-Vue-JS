new Vue({
    el: '#vue-app',
    data: {
        age : 23
    },
    methods: {
        add:function(){
            this.age++;
        },
        substract:function(){
            this.age--;
        }
    }
});