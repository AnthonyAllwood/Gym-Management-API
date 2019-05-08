<template>
    <div class= "container-fluid" style= "background-color: #660066; height: 500px">
        <div class= "signup-container" style= "margin-left: 50px; padding-top: 50px">
            <h1 style= "color: #000000"> <b> Signup below to create your gym management account!</b></h1><br>
            <input type= "text" v-model="userSignup.firstName" name = "firstName" placeholder="Enter First Name" required/>
            <input type= "text" v-model="userSignup.lastName" name = "lastName" placeholder="Enter Last Name" required/>
            <div style= "padding-top: 20px; padding-bottom: 50px"> <a to = "..." @click.prevent="signupUser()" class= "btn btn-primary" role= "button"> Signup</a></div>

            <h3 style= "color: #000000"> <b>If you are already a user, click the 'Login' tab on the navigation bar to log in to your account!</b></h3>
        </div>
    </div>


</template>

<script>
export default {
    name: 'Signup',
    data()
    {
        return{
            userSignup: {}
        }
    },
    methods: {
        signupUser()
        {
            this.$http.post('http://localhost:3000/signup', this.userSignup).then(result =>{
                this.$router.push('/')
                this.forceUpdate();
            })
        }
    }
}


</script>