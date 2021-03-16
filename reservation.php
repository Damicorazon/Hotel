<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style/style.css">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Srisakdi:wght@400;700&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">
  <title>Réservation</title>
</head>
<body>

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
          <input type="text" name="nom" id="nom">
          <input type="text" name="prenom" id="prenom">
          <input type="tel" name="telephone" id="telephone" minlength="10" maxlength="10" pattern="^[0-9]{10}$">
          <input type="email" name="mail" id="mail">
          <select id="chambre" name="chambre">
            <option>Chambre Map Monde</option>
            <option>Chambre Onyx</option>
            <option>Chambre Boiserie</option>
          </select>
          <input type="date" name="dateArrivée" id="dateArrivée">
          <input type="date" name="dateDepart" id="dateDepart">
          <!-- <input type="text" name="demande" id="demande"> -->
          <textarea name="demande" id="demande"></textarea>
        </div>
      </div>

      <div id="checkContactComplet">
        <input type="checkbox" id="checkContact">
        <label for="checkContact" class="checkContact">J’accepte d’être recontacté par Hotel Success et ses partenaires.</label>
      </div>

      <div class="boutonReservation">  
      <input type="submit" value="Demande de réservation" id="submitContact" disabled>
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


<script src="script/scriptReservation.js"></script>

</body>
</html>