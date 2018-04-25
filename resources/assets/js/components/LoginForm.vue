<template>
  <div>
    <h3>Prisijungimas</h3>
    <form class="form-control">
      <label for="email">El. paštas<br />
        <input id="email" type="email" placeholder="Įveskite el. paštą" />
      </label><br />
      <label for="password">Slaptažodis<br />
        <input id="password" type="password" placeholder="Įveskite slaptažodį" />
      </label><br />
      <button type="submit" class="btn btn-primary">Prisijungti</button>
    </form>
  </div>
</template>

<script>
  export default {
      mounted() {
          console.log('Component mounted.')
      }
  }
</script>

<style>
</style>
