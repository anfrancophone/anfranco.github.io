<script>
function changeImage(button, direction) {
  // Get the article that contains this button
  const article = button.closest('.item');
  
  // Get all images in this slider
  const images = article.querySelectorAll('.slider-image');
  
  // Find the currently active image
  let activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
  
  // Calculate new index
  let newIndex = activeIndex + direction;
  
  // Loop around (if at end, go to start; if at start, go to end)
  if (newIndex >= images.length) {
    newIndex = 0;
  } else if (newIndex < 0) {
    newIndex = images.length - 1;
  }
  
  // Hide all images
  images.forEach(img => img.classList.remove('active'));
  
  // Show the new image
  images[newIndex].classList.add('active');
}
</script>
