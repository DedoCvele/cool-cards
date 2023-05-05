document.addEventListener("DOMContentLoaded", function(event) {
    const gallery = document.querySelector(".gallery");
    window.onmousemove = e => {
      const mouseX = e.clientX,
            mouseY = e.clientY;
  
      const xDecimal = mouseX / window.innerWidth,
            yDecimal = mouseY / window.innerHeight;
  
      const rect = gallery.getBoundingClientRect();
      const maxX = rect.width - window.innerWidth,
            maxY = rect.height - window.innerHeight;
  
      const panX = maxX * xDecimal * -1,
            panY = maxY * yDecimal * -1;
  
      gallery.animate({
        transform: `translate(${panX}px, ${panY}px)`
      }, {
        duration: 4000,
        fill: "forwards",
        easing: "ease"
      });
    };
  });