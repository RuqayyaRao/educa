// Ensure DOM is loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  const navbar = document.querySelector('.navbar');
  const navlist = document.querySelector('.nav-list');
  const rightNav = document.querySelector('.rightnav');

  console.log(burger, navbar, navlist, rightNav); // Check if elements are selected correctly

  burger.addEventListener('click', () => {
      console.log('Burger clicked'); // Check if click event is detected
      rightNav.classList.toggle('v-class-resp');
      navlist.classList.toggle('v-class-resp');
      navbar.classList.toggle('h-nav-resp');

      // Check if classes are applied after toggle
      console.log(rightNav.classList.contains('v-class-resp'));
      console.log(navlist.classList.contains('v-class-resp'));
      console.log(navbar.classList.contains('h-nav-resp'));
  });
});
