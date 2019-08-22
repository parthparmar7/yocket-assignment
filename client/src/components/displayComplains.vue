<template>
	<b-container>
		<b-list-group>
			<b-row><b-col>
				<h4><b-list-group-item flex-fill variant="dark">Name</b-list-group-item></h4>
			</b-col><b-col>
				<h4><b-list-group-item flex-fill variant="dark">Room Number</b-list-group-item></h4>
			</b-col><b-col>
				<h4><b-list-group-item flex-fill variant="dark">Complaint Type</b-list-group-item></h4>
			</b-col><b-col>
				<h4><b-list-group-item flex-fill variant="dark">Description</b-list-group-item></h4>
			</b-col><b-col>
				<h4><b-list-group-item flex-fill variant="dark">Delete Items</b-list-group-item></h4>
			</b-col></b-row>
		</b-list-group>
	<b-list-group md>
              <div v-for="com in complaints">
              	<b-row>
              		<b-col>
                <b-list-group-item flex-fill  button variant="info">{{ com.name}}</b-list-group-item>
            		</b-col>
            		<b-col>
                <b-list-group-item flex-fill button variant="info">{{com.roomNumber}}</b-list-group-item>
            		</b-col>
            		<b-col>
                <b-list-group-item flex-fill button variant="info">{{com.complaintType}}</b-list-group-item>
           			</b-col>
           			<b-col>
                <b-list-group-item flex-fill button variant="info">{{com.description}}</b-list-group-item>
            		</b-col>
            		<b-col>
            	<b-button variant="danger" @click="deleteComplaint(com._id,com)">Delete</b-button>
            		</b-col>
            		<b-col>
            	 <b-button :pressed.sync="status" @click="updateComplaint(com._id)" variant="primary">Resolved</b-button>
            		</b-col>
        		</b-row>
              </div>
          </b-list-group>
      </b-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'displayComplaint',
  data() {
      return {
        complaints:[],
        status: false,
        form:{
        	resolved : 'status'
        }
      }
    },
    created(){
    	const self=this;
    	this.getComplaints();
    },
    methods: {
      getComplaints() {
      var self = this;
      axios.get("/complaints")
        .then(function(response) {
          self.complaints = response.data;
          //console.log(JSON.stringify(self.complaints))
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    deleteComplaint(item,ind){

    	const index = this.complaints.indexOf(ind)
    	console.log("index"+index)

    	if(confirm('Are you sure you want to delete this item?') && this.complaints.splice(index, 1) ){
    		axios.delete('/deleteComplaint/'+item)
    		.then(response => {
    			console.log("Successfully deleted")
    		})
    		.catch(err => {
    			console.log("Error in deletion")
    		})
    	}
    },
    updateComplaint(item){
    	var self=this;
    	axios.put('/editComplaint/'+item,status)
    	.then(() => {
            console.log("Successfully written in db")
          })
    }
    }
}
</script>