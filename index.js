Vue.component('app-li',{
    props:['hobby'],
    data:function(){
        return {
            //username:'Bob'
        }
    },
    template:'<li v-on:click="removeHobby(hobby)">{{hobby}}</li>',
    methods:{
        removeHobby(){
            this.$emit("hobbyremoved", this.hobby)
        }
    }
})

new Vue({
    el:"#app",
    data:{
        hobbies:["Swimming", "Cooking", "Video Games"],
        newHobby:"", 
        itemDeleted: false
    },
    methods: {
        addHobby: function(){
            this.hobbies.push(this.newHobby);
            this.newHobby="";
        },
        removeHobby:function(hobby){
            var position = this.hobbies.indexOf(hobby);
            this.hobbies.splice(position,1);
            this.itemDeleted = true;
        },
        getColor: function(){
            return this.hobbies.length >3 ? "green" :"blue";
        }
        
    }
})