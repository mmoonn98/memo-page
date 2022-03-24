Vue.component('memo-component', {
    //임의로 생성해준 속성, 변수
    props :['id','colorid'],
    template :
    `<div>
        <h3><slot></slot><button @click="deletememo">X</button></h3>
        <hr>
        <textBox-component></textBox-component>
        <p>{{time}}년</p>
    </div>`,
    data : function() {
        return  {
            time : new Date().getFullYear()
        }
    },
    methods :{
        deletememo : function(){
            this.$emit("delete", this.id );
        }
    }
})
