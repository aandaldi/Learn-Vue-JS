conditional = new Vue({
                el: '#vue-app-conditional',
                data: {
                    error : false,
                    success : false
                },
                methods: {
                    err:function(){
                        alert("error");
                    }
                    
                    },
                computed: {

                }
            });

looping = new Vue({
    el: '#vue-app-loop',
    data: {
        characters:['Mario', 'Marmut', 'Yoshi', 'Bowser'],
        ninjas:[
            {name:'Ryu', age:25},
            {name:'Yoshi', age:35},
            {name:'Ken', age:55}
        ],
    }
})