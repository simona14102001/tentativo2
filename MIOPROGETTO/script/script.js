<script>
   const eventi = [
   {
    anno: "1087",
    titolo: "Basilica di San Nicola",
    descrizione: "Costruita per custodire le reliquie di San Nicola, è il cuore spirituale della città."
   },
   {
    anno: "XI sec.",
    titolo: "Fortino di Sant'Antonio Abate",
    descrizione: "Struttura difensiva affacciata sul mare, oggi spazio espositivo e panoramico."
   },
   {
    anno: "XI sec.",
    titolo: "Muraglia di Bari",
    descrizione: "Antica cinta muraria che proteggeva la città vecchia.Si estende per cita 1,2 km con torri e baluardi."
   },
   {
    anno: "1132",
    titolo: "Castello Normanno-Svevo",
    descrizione: "Eretto da Ruggero II, ampliato da Federico II; difesa e residenza reale."
   },
   {
    anno: "XIII sec.",
    titolo: "Cattedrale di San Sabino",
    descrizione: "Origini paleocristiane, poi ricostruita in stile romanico tra il XII e XIII secolo."
   },
   {
    anno: "XIII sec.",
    titolo: "Arco Basso",
    descrizione: "Elemento architettonico medievale che segna l'accesso a zone storiche."
   },
   {
    anno: "1914",
    titolo: "Teatro Margherita",
    descrizione: "Costruito su palafitte, simbolo dell’architettura liberty barese sul mare,ad oggi convertito in museo di arte contemporanea."
   },
   {
    anno: "1927",
    titolo: "Palazzo Mincuzzi",
    descrizione: "Capolavoro del liberty barese, simbolo della borghesia commerciale."
   },
   {
    anno: "1930",
    titolo: "Teatro Petruzzelli",
    descrizione: "Teatro più grande di Bari e IV teatro più grande d'Italia, simbolo della vita culturale e musicale di Bari."
   } 
  ];

  const timeline = document.getElementById("timeline");
  const infoTitle = document.getElementById("info-title");
  const infoDesc = document.getElementById("info-desc");

  eventi.forEach((evento, index) => {
    const el = document.createElement("div");
    el.classList.add("timeline-event");
    el.innerHTML = `<strong>${evento.anno}</strong><br>${evento.titolo}`;
    el.addEventListener("click", () => {
      document.querySelectorAll(".timeline-event").forEach(e => e.classList.remove("active"));
      el.classList.add("active");
      infoTitle.textContent = evento.titolo;
      infoDesc.textContent = evento.descrizione;
    });
    timeline.appendChild(el);
   });
  </script>
  <script type="text/javascript">
   let slideIndex = 0;
   showSlides();

  function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2500); // Change image every 2,5seconds
  }

  </script>


  <script>
   document.getElementById('filtroLista').addEventListener('input', function() {
   let filtro = this.value.toLowerCase();
   let cards = document.querySelectorAll('.item-card');

   cards.forEach(card => {
   let testo = card.innerText.toLowerCase();
   if (testo.includes(filtro)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
   });
 });
 </script>
 <script>
  document.querySelectorAll('.paginazione a').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();  // blocca il comportamento del link
    });
  });
  </script>


<script>
  // Ottieni il riferimento alla modale
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

  // Seleziona tutte le immagini con la classe "modal-gallery"
  var images = document.querySelectorAll(".modal-gallery");

  // Aggiungi un evento a ciascuna immagine
  images.forEach(function(img) {
    img.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
  });

  // Chiudi la modale cliccando sulla "X"
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  }
 </script>
