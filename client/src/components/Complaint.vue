<template>
  <b-container>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Your Name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group 
      id="input-group-2" 
      label="Your Room Number:" 
      label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.roomNumber"
          required
          placeholder="Enter Room Number"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Complaint Type:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.type"
          :options="complainType"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-textarea 
      id="input-group-4" 
      placeholder="Explain issue in detail:" 
      v-model="form.description"
      required
      rows= "4"
      max-rows="6">
      </b-form-textarea>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    
  </div>
</b-container>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'Complaint',
  data() {
      return {
        form: {
          name: '',
          roomNumber: '',
          type: '',
          description: ''
        },
        complainType: [{ text: 'Select One', value: null }, 'Plumbing', 'Electricity', 'Fitting', 'Water'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        const self = this
        console.log(JSON.stringify(self.form))
        axios.post('/complaint',this.form)
          .then(() => {
            console.log("Successfully written in db")
          })
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        this.form.name = ''
        this.form.roomNumber = ''
        this.form.type = null
        this.form.description = ''
        
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
