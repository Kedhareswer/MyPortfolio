<script>
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.link-item');
  
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        // Get the target popup box ID from the data-target attribute
        const targetId = this.getAttribute('data-target');
  
        // Find the corresponding popup box element
        const targetBox = document.getElementById(targetId);
  
        // Show the target popup box and hide all others
        targetBox.style.display = 'block';
        hideOtherPopupBoxes(targetBox);
      });
    });
  
    function hideOtherPopupBoxes(exceptBox) {
      const popupBoxes = document.querySelectorAll('.popup-box');
      popupBoxes.forEach(box => {
        if (box !== exceptBox) {
          box.style.display = 'none';
        }
      });
    }
  });
  </script>