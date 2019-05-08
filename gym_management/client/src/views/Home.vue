<style>

.parent-container {
   display: flex;
}

.carousel-control-prev-icon1,
.carousel-control-next-icon1 {
  height: 50px;
  width: 50px;
  outline: black;
  background-size: 100%, 100%;
  border-radius: 50%;
  border: 1px solid black;
  background-image: none;
}

.carousel-control-next-icon1:after
{
  content: '>';
  font-size: 27px;
  color: blue;
}

.carousel-control-prev-icon1:after {
  content: '<';
  font-size: 27px;
  color: blue;
}

</style>

<template>
            
                <div class= "parent-container" style= "background-color: #660066; margin-top: -10px; height: 550px; padding-top: 50px">
                    <div class= "container">
                        <div class="row"> 
                            <div class="col"> 
                                <div id="carousel" class="carousel slide" data-ride="carousel" style="padding-top: 100px">  
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img alt="..." src="../assets/treadmill.jpg" id="treadmill" style= "margin-left: 180px; width:400px; height:300px; border: 3px solid black">
                                        </div>
                                        <div class="carousel-item">
                                            <img alt="..." src="../assets/bike.jpg" id="bike" style= "margin-left: 180px; width:400px; height:300px; border: 3px solid black">
                                        </div>
                                        <div class="carousel-item">
                                            <img alt="..." src="../assets/abdominal crunch.jpg" id="abdominal" style= "margin-left: 180px; width:400px; height:300px; border: 3px solid black">
                                        </div>
                                        <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev" style="margin-left: 90px">
                                            <span class="carousel-control-prev-icon1" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carousel" role="button" data-slide="next" style="margin-right: 5px">
                                            <span class="carousel-control-next-icon1" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                                        
                    <div class="container" style= "margin-right: 50px; padding-top: 50px">
                        <div class="row">
                            <div class="col">
                                <h1 style= "text-align: center; color: #0000FF"> <b>Manage Your Gym Equipment!</b></h1>
                                <h4 style= "background-color: #000000; color: #ffffff; padding-top: 20px; padding-right:80px; border:3px; border-style:solid; border-color:#ffffff; display: inline-block; padding: 1.5em;"> <b>This site can be used as a personal gym management system! Go to the equipment tab on the navigation bar to view various types of gym equipment! Sign up and start managing NOW!</b></h4>
                            </div>
                        </div>
                    </div>
                </div>
            
</template>