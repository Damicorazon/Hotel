 
<?php require_once "inc/header.inc.php"; ?>

<section>

<section id="banniere-page-index">
<h1>Hôtel 4 étoiles<br><span>success</span></h1>
</section>



<div id="myModal" class="modal">
		<div class="modal-content">
				<div id="gaucheNews">
					<img src="img/reception-recadre.png">
				</div>
					<div id="droiteNews">
					<div class="close">&times;</div>

						<h5>Newsletter</h5>
						<p>Laissez-nous votre adresse <br>mail pour être
							informé.e <br>de nos actualités</p>

					<div id="blocMail">
                          <input type="email" id="emailNews" placeholder="Votre mail" >
                    <input id="validateNews" type="submit" value="ENVOYER" > 
					<div class="clear"></div>

                 </div>
			
				</div>
		</div>
	</div>

<section id="presentation"> 
		
 <p> L'hôtel <span>Success</span> est un lieu où 
 l'élégance et le conford se rencontrent. <br> Découvrez Paris
 depuis le 16ème arrondissement, ou bien <br> organisez vos séminaires.<br>
 Notre personnel est là pour que votre séjour soit... un succès ! </p>
</section>


<section id="les-chambres">
 		 <h2><span>Les chambres</span></br>
		Dans un esprit cosy et chic </h2> 

 	<div id="bouton">
		<a href="chambre.php">découvrir</a>
	</div>

</section>

 
<section id="vide">
</section>  


<section id="les-services">
	<h2>Les services</h3>
 </section>


<section id="confort">
	<h2> Votre confort est notre succès</h2>



	<div class="icons-haut">
			<div class="content-icon">
				<img src="img/icons/wifi.png" alt="wifi" >
					<p>Accès internet gratuit </p> 
					</div>
		
					<div class="content-icon">
						<img src="img/icons/sport.png" alt="sport">
						<p>Salle de sport</p>
					</div>

				<div class="content-icon">
						<img src="img/icons/pressing.png" alt="pressing">
					<p>Pressing</p>
				</div>
	</div>
	


	<div class="icons-bas">
			<div class="content-icon">
				<img src="img/icons/meeting.png" alt="reunion" >
					<p>Salle de réunion </p> 
			</div>
				
			<div class="content-icon">
				<img src="img/icons/print.png" alt="impression">
						<p>Service affaires</p>
					</div>

			<div class="content-icon">
					<img src="img/icons/resto.png" alt="resto">
				<p>Restauration</p>
			</div>
	</div>

</section>


<section id="emplacement">

<h2>L'emplacement</h2>
		<!-- <img src="img/tour.png"> -->
		<div id="conteneur">
					<div id="divGauche">
							<h3>La Tour Eiffel, épicentre du Paris culturel et historique</h3>
							<p> A proximité de nombreux musées, le quartier est également un haut de la restauration
								et de balades sur la Seine. </p>  
							<h4>123 rue de la Tour Eiffel, 75016 Paris </h4>
					</div>

					<div id="map">	</div> 

		</div> 	
</section>

<section id="contact">

	<h2>Contactez-nous</h2>
	<h3>Nous vous recontacterons dans les plus brefs délais </h3>

<div id="bloc-form"> 

    <form action="" method="post" class="form" id="formulaire">

            <div class="form-style-1">
 
                    <input type="text" id="nom" name="nom" class="field-divided" placeholder="Nom" minlength="2"  required /> 
                    <input type="text" id="prenom" name="prenom" class="field-divided" placeholder="Prenom" minlength="2" required/>
                    
                    <input type="email" id="email" name="email" class="field-divided" placeholder="Email" minlength="6"  required/>
                    <input type="tel" id="tel"  name="tel" class="field-divided" placeholder="Telephone" minlength="10" maxlength="14" required/>
   
					<textarea name="message" id="message" class="field-long field-textarea" placeholder="Votre message" minlength="10" required ></textarea>
					<br><br>

					<label> 
					<input type="checkbox" id="RGPD" name="#">
						<label for="RGPD">J’accepte les conditions d’utilisations de mes données personnelles*</label><br><br>
					<input id="envoyerForm" type="submit" value="envoyer" disabled/>
                     
            </div>   
	</form> 

</div>  


</section>






 
     <?php require_once "inc/footer.inc.php";?>


     <script src="script/scriptAccueil.js"></script>
	<script src="script/pop-up-newsletter.js"></script>

	
</body>

</html>

