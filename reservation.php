
<?php require_once "inc/header.inc.php"; ?>
</section>

<div class="reservation">
  <div class="reservationPartieGauche">
    <h2>Indiquez-nous vos dates de séjour<br>
        Nous vous recontactons dans les plus brefs délais</h2>
    <form action="">
      <div class="formulaireReservation">
        <div class="labelReservation">
          <label for="nom">Nom</label>
          <label for="prenom">Prénom</label>
          <label for="telephone">Téléphone</label>
          <label for="mail">E-Mail</label>
          <label id="chambreLabel" for="chambre">Chambre</label>
          <label for="dateArrivée">Date Arrivée</label>
          <label for="dateDepart">Date Départ</label>
          <label id="demandeLabel" for="demande">Demande</label>
        </div>
        <div class="inputReservation">
          <input type="text" name="nom" id="nom" minlength="3" required>
          <input type="text" name="prenom" id="prenom" minlength="3" required>
          <input type="tel" name="telephone" id="telephone" minlength="10" maxlength="10" pattern="^[0-9]{10}$">
          <input type="email" name="mail" id="mail" minlength="6" required>
          <select id="chambre" name="chambre">
            <option>Chambre Map Monde</option>
            <option>Chambre Onyx</option>
            <option>Chambre Boiserie</option>
          </select>
          <input type="date" name="dateArrivee" id="dateArrivee" value="defaut" required>
          <input type="date" name="dateDepart" id="dateDepart" value="defaut2" required>
          <!-- <input type="text" name="demande" id="demande"> -->
          <textarea name="demande" id="demande"></textarea>
        </div>
      </div>

      <div id="checkContactComplet">
        <input type="checkbox" id="checkContact">
        <label for="checkContact" class="checkContact">J’accepte d’être recontacté par Hotel Success et ses partenaires.</label>
      </div>

      <div class="boutonReservation">  
      <input type="submit" value="Veuillez remplir les champs" id="submitContact" disabled>
      </div>
    </form>
  </div>

  <div class="reservationPartieDroite">
    <div class="reservationCadreBlanc">
      <h2>Meilleurs tarifs garantis</h2>
      <p>Réservez en toute confiance</p>
      <p class="traitReservation"></p>
    </div>
  </div>
</div>

<?php require_once "inc/footer.inc.php";?>

<script src="script/scriptReservation.js"></script>

</body>
</html>