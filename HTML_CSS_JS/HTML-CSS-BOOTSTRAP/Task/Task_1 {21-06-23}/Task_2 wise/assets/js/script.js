var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
function changeImage(imageIndex) {
    var image = document.getElementById('myImage');
    
    // Update image source based on the selected image index
    if (imageIndex === 1) {
      image.src = 'assets/images/medium_packmojo_platform_product_catalog_495f9da5a5.webp';
      image.alt = 'Image 1';
    } else if (imageIndex === 2) {
      image.src = 'assets/images/packmojo_platform_get_packaging_quotes_e9060d1f0a.webp';
      image.alt = 'Image 2';
    } else if (imageIndex === 3) {
      image.src = 'assets/images/packmojo_platform_set_up_shipping_instructions_bf5e02af19.webp';
      image.alt = 'Image 3';
    } else if (imageIndex === 4) {
      image.src = 'assets/images/packmojo_platform_access_dielines_upload_artwork_d885c94ed7.webp';
      image.alt = 'Image 4';
    } else if (imageIndex === 5) {
      image.src = 'assets/images/packmojo_platform_track_production_shipping_status_67ac476c52.webp';
      image.alt = 'Image 5';
    }
    image.style.maxWidth = 100 + '%';
  }
  function toggleDropdown(buttonNumber) {
    var dropdown = document.getElementById('dropdown' + buttonNumber);
    var allDropdowns = document.getElementsByClassName('dropdown');
  
    // Close all dropdowns except the one associated with the clicked button
    for (var i = 0; i < allDropdowns.length; i++) {
      if (allDropdowns[i] !== dropdown) {
        allDropdowns[i].style.display = 'none';
      }
    }
  
    // Toggle the display of the clicked button's dropdown
    if (dropdown.style.display === 'none') {
      dropdown.style.display = 'block';
    } else {
      dropdown.style.display = 'none';
    }
  }
  
  