document.addEventListener("DOMContentLoaded", () => {
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
  let searchdonate = document.querySelector('.header .btn-group');
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');
  let sedonlinks = document.querySelectorAll('header .btn-group a');
  let menuContent = document.querySelector('.menu-content');

  if (menuIcon) {
    menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      if (menuContent) {
        menuContent.classList.toggle('active');
      }
    };
  }

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          let target = document.querySelector('header nav a[href*="' + id + '"]');
          if (target) target.classList.add('active');
        });

        sedonlinks.forEach(links => {
          links.classList.remove('active');
          let target = document.querySelector('header .btn-group a[href*="' + id + '"]');
          if (target) target.classList.add('active');
        });
      }
    });
  };


  window.openLightbox = function(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    if (lightbox && lightboxImg) {
      lightboxImg.src = img.src;
      lightbox.style.display = 'block';
    }
  }

  window.closeLightbox = function() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
      lightbox.style.display = 'none';
    }
  }
});

function orderNow(item) {
  document.getElementById('itemName').value = item;
  document.getElementById('orderModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('orderModal').style.display = 'none';
}

document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you for your order! We'll contact you shortly.");
  closeModal();
});




// Image Gallery Viewer
function openGallery(imgElement) {
  const imageList = imgElement.dataset.images.split(',');
  const mainImage = document.getElementById('galleryImage');
  const thumbnailContainer = document.getElementById('thumbnailContainer');
  const galleryModal = document.getElementById('imageGalleryModal');

  thumbnailContainer.innerHTML = ''; // Clear previous thumbnails

  imageList.forEach((src, index) => {
    const thumb = document.createElement('img');
    thumb.src = src.trim();
    if (index === 0) {
      mainImage.src = src.trim();
      thumb.classList.add('active');
    }
    thumb.onclick = () => {
      mainImage.src = src.trim();
      document.querySelectorAll('.thumbnails img').forEach(img => img.classList.remove('active'));
      thumb.classList.add('active');
    };
    thumbnailContainer.appendChild(thumb);
  });

  galleryModal.style.display = 'flex';
}

function closeImageGallery() {
  document.getElementById('imageGalleryModal').style.display = 'none';
}

