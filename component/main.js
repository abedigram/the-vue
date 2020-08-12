Vue.component('task',{
    template:
    `<li> 
        {{ message }} <slot></slot>    
    </li>`,

    data(){
        return{
            message: 'the task is: '
        }
    }
})

new Vue({
    el: '#root'
})