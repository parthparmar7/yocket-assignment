<template>
		<div class="bimg">
			<b-container>
				<div class="margin1">
					<b-form-group class="list">
						<h2>Upcoming Events</h2>
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
export default{
	name: 'showEvents',
	data(){
		return {
			events: []
		}
	},
	created(){
		const self=this;
		self.getEvents();
	},
	methods: {
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
	}
}
</script>

<style scoped>

.bimg{
	background-image: url('../assets/section-two.png');
	padding-bottom: 50%;
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
h2{
	font-family: Lucida console;
	color: #191919;
}
</style>