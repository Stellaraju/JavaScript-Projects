 // Get all gallery images
 const galleryItems = document.querySelectorAll('.gallery-item');

 // Get the lightbox and its elements
 const lightbox = document.getElementById('lightbox');
 const lightboxImg = document.getElementById('lightbox-img');
 const closeBtn = document.querySelector('.close');
 
 // Open the lightbox when an image is clicked
 galleryItems.forEach(item => {
   item.addEventListener('click', function() {
     lightbox.style.display = 'flex'; // Show lightbox
     lightboxImg.src = this.src; // Set the image source for the lightbox
   });
 });
 
 // Close the lightbox when the close button is clicked
 closeBtn.addEventListener('click', function() {
   lightbox.style.display = 'none'; // Hide lightbox
 });
 
 // Close the lightbox if the user clicks outside the image
 lightbox.addEventListener('click', function(e) {
   if (e.target === lightbox) {
     lightbox.style.display = 'none'; // Hide lightbox if clicked outside the image
   }
 });