<template>
  <div>
    <h3>Kliento registracijos forma</h3>
    <form class="form-control">
      <fieldset>
        <legend>Prisijungimo duomenys</legend>
        <label for="email">El. paštas<br/>
          <input name="email" type="email" placeholder="Įveskite el. paštą">
        </label><br/>
        <label for="password">Slaptažodis<br/>
          <input name="password" type="password" placeholder="Įveskite slaptažodį">
        </label><br/>
      </fieldset>
      <fieldset>
        <legend>Kontaktiniai duomenys</legend>
        <label for="fname">Vardas<br/>
          <input name="fname" type="text" placeholder="">
        </label><br/>
        <label for="lname">Pavardė<br/>
          <input name="lname" type="text" placeholder="">
        </label><br/>
        <label for="city">Miestas<br/>
          <input name="city" type="text" placeholder="">
        </label><br/>
        <label for="phone">Tel. Nr.<br/>
          <input name="phone" type="text" placeholder="">
        </label><br/>
      </fieldset>
      <button type="submit" class="btn btn-primary">Registruotis</button>
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
