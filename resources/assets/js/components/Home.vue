  <template>
    <div class="mano">
      <h2 class="center">Appointment App</h2>


<div class="mano">
<!-- Modal -->
<div id="aCity" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
      <h4 class="modal-title">Pasirinkite miestą</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
        <div class="checkbox">
            <label><input type="checkbox" value="">Panevėžys</label>
            </div>
            <div class="checkbox">
            <label><input type="checkbox" value="">Kaunas</label>
            </div>
            <div class="checkbox">
            <label><input type="checkbox" value="" >Vilnius</label>
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Ieškoti</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div id="aService" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
      <h4 class="modal-title">Pasirinkite paslaugą</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
        <div class="checkbox">
            <label><input type="checkbox" value="">Odontologija</label>
            </div>
            <div class="checkbox">
            <label><input type="checkbox" value="">Manikiūras</label>
            </div>
            <div class="checkbox">
            <label><input type="checkbox" value="" >Masažas</label>
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Ieškoti</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div id="aSpecialist" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
      <h4 class="modal-title">Pasirinkite specialistą</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
        <div class="checkbox">
            <label><input type="checkbox" value="">Odontologas</label>
            </div>
            <div class="checkbox">
            <label><input type="checkbox" value="">Visažistė</label>
            </div>
            <div class="checkbox">
            <label><input type="checkbox" value="" >Masažistas</label>
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Ieškoti</button>
      </div>
    </div>
  </div>
</div>


    <table class="table">
        <tr>
                <th><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#aCity">Miestas</button></th>
                <th><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#aService">Paslauga</button></th>
                <th><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#aSpecialist">Specialistas</button></th>
        </tr>
      </table>
    </div>
  </div>
  </template>




<script>
 </script>

<style>
.center {
    margin: auto;
    width: 50%;
    border: 2px solid black;
    padding: 5px 5px;
    text-align: center;
}

th {
  border-top: none;
  text-align: center;
}

.mano {
  padding-top: 100px;
}
</style>
