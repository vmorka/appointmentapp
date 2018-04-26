<template>
  <div>
    <div class="dropdown reg-right">
      <button class="btn btn-info btn-lg dropdown-toggle" type="button" data-toggle="dropdown">Registracija
      <span class="caret"></span></button>
      <ul class="dropdown-menu">
        <li><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#regUser">Registracija vartotojui</button></li>
        <li><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#regCompany">Registracija įmonei</button></li>
      </ul>
    </div>
    <div class="login-right">
      <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#login">Prisijungti</button>
    </div>
    <div id="regUser" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Kliento registracijos forma</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <form class="form-control">
              <fieldset>
                <legend>Prisijungimo duomenys</legend>
                <label for="email">El. paštas<br/>
                  <input name="email" type="email" placeholder="Įveskite el. paštą">
                </label><br/>
                <label for="password">Slaptažodis<br/>
                  <input name="password" type="password" placeholder="Įveskite slaptažodį">
                </label><br/>
                <label for="password">Pakartokite slaptažodį<br/>
                  <input name="password" type="password" placeholder="Pakartokite slaptažodį">
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
            </form>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-info btn-lg">Registruotis</button>
          </div>
        </div>
      </div>
    </div>
    <div id="regCompany" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Įmonės registracijos forma</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <form class="form-control">
              <fieldset>
                <legend>Prisijungimo duomenys</legend>
                <label for="email">El. paštas<br/>
                  <input name="email" type="email" placeholder="Įveskite el. paštą">
                </label><br/>
                <label for="password">Slaptažodis<br/>
                  <input name="password" type="password" placeholder="Įveskite slaptažodį">
                </label><br/>
                <label for="password">Pakartokite slaptažodį<br/>
                  <input name="password" type="password" placeholder="Pakartokite slaptažodį">
                </label><br/>
              </fieldset>
              <fieldset>
                <legend>Kontaktiniai duomenys</legend>
                <label for="company_name">Įmonės pavadinimas<br/>
                  <input name="company_name" type="text" placeholder="">
                </label><br/>
                <label for="city">Miestas<br/>
                  <input name="city" type="text" placeholder="">
                </label><br/>
                <label for="phone">Tel. Nr.<br/>
                  <input name="phone" type="text" placeholder="">
                </label><br/>
                <label for="description">Įmonės aprašymas<br/>
                  <textarea name="phone" type="text" placeholder="Čia galite trumpai aprašyti įmonę..."></textarea>
                </label><br/>
              </fieldset>
            </form>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-info btn-lg">Registruotis</button>
          </div>
        </div>
      </div>
    </div>
    <div id="login" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Prisijungimas</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <form class="form-control">
              <label for="email">El. paštas<br />
                <input id="email" type="email" placeholder="Įveskite el. paštą" />
              </label><br />
              <label for="password">Slaptažodis<br />
                <input id="password" type="password" placeholder="Įveskite slaptažodį" />
              </label><br />
            </form>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-info btn-lg">Prisijungti</button>
          </div>
        </div>
      </div>
    </div>
    <home></home>
  </div>
</template>

<script>
</script>

<style scoped>
.dropdown-menu {
  padding: 0;
  background-color: #17a2b8;
}

.reg-right {
  position: absolute;
  right: 170px;
  top: 20px;
}

.modal-footer {
  justify-content: center;
}

.login-right {
  position: absolute;
  right: 50px;
  top: 20px;
}

.btn-lg {
  width: 100%;
}
</style>
