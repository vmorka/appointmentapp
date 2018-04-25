<template>
  <div>
    <h2>Vartotojai</h2><br />
    <a href="/users/create" class="btn btn-success pull-right">Pridėti naują vartotoją</a><br /><br />
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Vardas</th>
          <th>El. paštas</th>
          <th>Veiksmai</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td><a href="" class="btn btn-primary">Redaguoti</a> ||
             <a href="" class="btn btn-danger">Trinti</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        users: [],
        user: {
          id: 0,
          name: '',
          email: ''
        }
      }
    },
    mounted () {
      this.getUsers()
    },
    methods: {
      getUsers () {
        axios.get('/api/users').then(response => {
          console.log(response)
          this.users = response.data
        })
      }
    }
  }
</script>

<style>
</style>
