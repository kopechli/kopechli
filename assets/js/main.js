/**
 * Main JS file for theme behaviours
 */

// Responsive video embeds
var videoEmbeds = [
  'iframe[src*="youtube.com"]',
  'iframe[src*="vimeo.com"]'
];
reframe(videoEmbeds.join(','));

// Mobile menu
var menuToggle = document.getElementById('menu-toggle');
if (menuToggle) {
  menuToggle.addEventListener('click', function (e) {
    document.body.classList.toggle('menu--opened');
    e.preventDefault();
  }, false);

  document.body.classList.remove('menu--opened');

  window.addEventListener('resize', function () {
    if (menuToggle.offsetParent === null) {
      document.body.classList.remove('menu--opened');
    }
  }, true);
}

// Header background image
var header = document.querySelector('#masthead');
if (header) {
  headerBg = document.querySelector('#header-bg');
  if (headerBg) {
    imagesLoaded(headerBg, { background: true }, function () {
      header.classList.add('bg--loaded');
    });
  } else {
    header.classList.add('bg--loaded');
  }
}

// Back to top
document.querySelector('#to-top').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('#page').scrollIntoView({ behavior: 'smooth' });
});


// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//   var code = document.getElementById("qrCode");
//   var profilePic = document.getElementById("profile_photo");
//   var info = document.getElementsByClassName("c-card__body");
  
//   code.style.display="none";
//   profilePic.style.display ="unset";
//   profilePic.style.textAlign ="center";
//   info[0].style.display="block";
//  }