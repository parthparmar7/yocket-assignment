<template>
	<div class="bimg">
		<b-container>
			<div class="margin1">
			<b-card bg-variant="light">
				<b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
					<b-form-group
				      label-cols-lg="3"
				      label="Add an Event"
				      label-size="lg"
				      label-class="font-weight-bold pt-0"
				      class="mb-0"
				    >
				      <b-form-group
				        label-cols-sm="3"
				        label="Event Name:"
				        label-align-sm="right"
				        label-for="name"
				      >
				        <b-form-input id="name" v-model="form.name"></b-form-input>
				      </b-form-group>

				      <b-form-group
				        label-cols-sm="3"
				        label="Event Description:"
				        label-align-sm="right"
				        label-for="description"
				      >
				        <b-form-textarea id="description" v-model="form.description"></b-form-textarea>
				      </b-form-group>

				      <b-form-group
				        label-cols-sm="3"
				        label="Event Date:"
				        label-align-sm="right"
				        label-for="date"
				      >
				        <b-form-input type="date" id="date" v-model="form.date"></b-form-input>
				      </b-form-group>
				      <b-button type="submit" size="lg" variant="primary">Submit</b-button>
     				  <b-button type="reset" size="lg" variant="danger">Reset</b-button>
				    </b-form-group>
				</b-form>
			</b-card>

			<b-form-group class="list">
				<b-list-group class="list-group">
					<a href="#/eventConsole" class="list-group-item" v-for="event in events">
			        <h4>
    				<font-awesome-icon icon="bullhorn" />
			        	{{ event.name }}
			        </h4><h5>
			        	<font-awesome-icon icon="calendar" />
			      		{{ event.date }}
			      	</h5>
			      	<p class="list-group-item-text">{{ event.description }}</p>
			        <b-button size="sm" class="btn btn-xs btn-danger" @click="deleteEvents(event._id,event)">Delete</b-button>
			      </a>
			  </b-list-group>
			  </b-form-group>
		</div>
		</b-container>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'eventConsole',
	data() {
		return{
			form: {
				name: '',
          		description: '',
          		date: '',
          	},
          	events: [],
			show: true
		}
	},
	created(){
    	const self=this;
    	this.getEvents();
    },
	methods: {
		onSubmit(evt) {
			//console.log(JSON.stringify(form))
			//evt.preventDefault()
        	const self = this
        	console.log(JSON.stringify(self.form))
        	axios.post('/addEvent',this.form)
        	.then(() => {
        		console.log("Successfully written in db")
        	})
      		alert(JSON.stringify(this.form))

      		this.getEvents()
      	},
      	onReset(evt) {
      		evt.preventDefault()
        	this.form.name = ''
        	this.form.description = ''
        	this.form.date = ''
        	this.show = false
        	this.$nextTick(() => {
          	this.show = true
          })
        },
        getEvents() {
	      var self = this;
	      axios.get("/getEvents")
	        .then(function(response) {
	          self.events = response.data;
	          //console.log(JSON.stringify(self.complaints))
	        })
	        .catch(function(error) {
	          console.log(error);
	        });
	    },
	    deleteEvents(item,ind){
	    	event.preventDefault();
	    	const index = this.events.indexOf(ind)
	    	console.log("index"+index)

	    	if(confirm('Are you sure you want to delete this item?') && this.events.splice(index, 1) ){
	    		axios.delete('/deleteEvent/'+item)
	    		.then(response => {
	    			console.log("Successfully deleted")
	    		})
	    		.catch(err => {
	    			console.log("Error in deletion")
    		})
    	}
    },
	}
}

</script>

<style scoped>

.bimg{
	background-image: url('../assets/section-two.png');
	padding-bottom: 30%;
}
.margin1{
	padding-top: 2em;
}
.list{
	padding-top: 30px;
	width: 60%;
	margin-left: 16em;
}
.list-group{
	padding-bottom: 10px;
}
.list-group-item{
	text-align: left;
}
h4{
	font-color: #000000;
}
</style>