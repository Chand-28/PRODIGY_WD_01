window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#fff'; 
      navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)'; 
    } else {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'; 
      navbar.style.boxShadow = 'none'; 
    }
  });
  
