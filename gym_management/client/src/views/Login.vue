<style>
.modal-dialog {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.modal-content{
  height: auto;
  min-height: 100%;
  border-radius: 0;
}

.modal-full {
    min-width: 100%;
    margin: 0;
}

</style>

<template> 

    <div class= "container-fluid" style= "background-color: #660066;" >
    
        <div v-if="loggedIn != true" class= "login-container" style= "margin-left: 50px; padding-top: 50px;">
            
            <h1 style= "color: #000000"> <b>Login to your account below!</b> </h1> <br>
            <input type= "text"  v-model="userLogin.firstName"   name = "firstName" placeholder= "Enter First Name" required/>
            <input type= "text"  v-model="userLogin.lastName" name = "lastName"  placeholder= "Enter Last Name" required/>
            <div style = "padding-top: 20px; padding-bottom: 50px"> <a to = "..." @click.prevent="loginUser()" class= "btn btn-primary" role= "button"> Login</a></div>
            
            

            <h3 style= "color: #000000"> <b>If you are not a user, click the Sign up button below to become a gym management user! </b></h3>
            <div style = "padding-top: 20px;"> <a to = "..." @click.prevent="gotoSignup()" class= "btn btn-primary" role= "button"> Sign up</a></div>

        </div>

        <div v-if="loggedIn" class= "container-fluid" style="padding-top: 50px;">

            <h1 style = "color:#ffffff; margin-left: 50px; padding-bottom: 30px"> <b> Welcome back, {{user.firstName}} ! </b></h1>
            <h3 style = "color:#ffffff; margin-left: 50px;"> Add Equipment <a to = "..." @click.prevent="showEquipment()" class="btn btn-primary" role="button"> Add Equipment </a></h3>

            <!--Add new equipment modal-->
            <modal name="equipment-modal" height="auto">
                    <div class="modal-header">
                        <h5 class="modal-title" id="equipmentLabel">Add Equipment Below</h5>
                    </div>
                    <div class="form-group">
                        <label for="equipment-text" class="col-form-label">Equipment:</label>
                        <input type="text" class="form-control" v-model="userEquipment.name" id="equipmentname">
                    </div>
                    <div class="form-group">
                        <label for="cost-text" class="col-form-label">Cost:</label>
                        <input type="text" class="form-control" v-model="userEquipment.cost" id="cost">
                    </div>   
                    <div class="modal-footer">
                        <button type="button" @click.prevent="$modal.hide('equipment-modal')" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" @click.prevent="sendEquipment()" class="btn btn-primary">Add Equipment</button>
                    </div>       
            </modal>

            <div class="container" style = "padding-top: 30px; text-align: center;">
                <ul class="list-group list-group-flush">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Equipment Name</th>
                            <th scope="col">Equipment Cost</th>
                            <th scope="col">Date Added</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="e in equipment" :key="e.name">
                            <td>{{e.name}}</td>
                            <td>{{e.cost}}</td>
                            <td>{{e.Date}}</td>
                            </tr>
                        </tbody>
                    </table>
                </ul>
            </div>

            <div style = "padding-top: 50px; padding-bottom: 50px"> <a to = "..." @click.prevent="logoutUser()" class= "btn btn-primary" role= "button"> Logout</a></div>

            
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Login',
    data ()
    {
        return{
             userLogin: {},
             message: {},
             equipment:[],
             userEquipment:{},
             user:{},
             loggedIn: false
        }
            
    
    },
    methods: {
        loginUser()
        {
            this.$http.post(`http://localhost:3000/login`, this.userLogin).then(result => {
            this.user = result.body[0]
            console.log(this.user)
            this.loggedIn = true;
            this.equipment = this.user.EquipmentList;
            this.$forceUpdate();

            })
        },
        logoutUser()
        {
            this.loggedIn = false;
            this.$router.push('/')
            this.$forceUpdate();
        },
        gotoSignup()
        {
            this.$router.push('/signup')
            this.$forceUpdate();
        },
        showEquipment()
        {
            this.$modal.show('equipment-modal')
        }, 
       async sendEquipment()
        {
            this.userEquipment.Date = new Date().toLocaleString()
            await this.$http.post(`http://localhost:3000/equipment/${this.user._id}`, this.userEquipment).then(result => {
            
            })
           await this.getUser();
            this.$modal.hide('equipment-modal')
            this.$forceUpdate();
        },
        getUser()
        {
            this.$http.get(`http://localhost:3000/user/${this.user._id}`).then(result => {
            this.user = result.body
            this.equipment = this.user.EquipmentList
            this.$forceUpdate();
            })
        }


    }
}
</script>