// p5.js sketch URLs for each project
const projectSketches = {
  'optical-illusion': {
    url: 'https://editor.p5js.org/theachammas/full/8-JlUPUD7',
    title: 'Optical Illusion',
    description: 'Using For Loops and Nested Loops, I got inspired by Vasarely\'s work to recreate this illusion in reference to his collaboration with David Bowie on a LP cover in 1969.'
  },
  'face-generator': {
    url: 'https://editor.p5js.org/theachammas/full/bmWY3ZiqH',
    title: 'Face Generator',
    description: 'Based on simple shapes, I experimented with all the variables and randomness of elements I could use. This being one of my first coding projects, I\'ve realized that with very simple shapes and tools, you can always end up doing something interesting. Just because you\'re not a coding pro doesn\'t mean you can only do boring stuff.'
  },
  'experimental-clock': {
    url: 'https://editor.p5js.org/theachammas/full/ZHoOeso18',
    title: 'Experimental Clock',
    description: 'Ever since I was a kid, my mood, sleep cycles and energy level were irregular in a way I couldn\'t comprehend, until my mum some day told me after I suffered from an insomnia "it\'s because yesterday was a full moon". She turned out to be right. Every time I suffered from insomnia and would check the moon cycle, it was a full moon.'
  },
  'autobiographical-game': {
    url: 'https://editor.p5js.org/theachammas/full/OJViTRhf6',
    title: 'Autobiographical Game',
    description: 'In my friends group, I am the designated driver. As much as driving in Lebanon is insane and people hate it as it drives them crazy, I actually enjoy it so much as it takes the focus off my hyperactive brain and I get to drive around with my favorite music playing in the background.'
  },
  'lost-and-found': {
    url: 'https://editor.p5js.org/theachammas/full/j_A2P5Bi2',
    title: 'Lost and Found',
    description: 'Given that this was my first time ever coding, I decided to have a flat 2d sketch that would allow me to start getting familiar with the p5js language. It took me a lot more time than it probably should, looks a lot less like what it certainly should, but I guess it does look like a garden with foliage and two trees.'
  },
  'exquisite-corpse': {
    url: 'https://editor.p5js.org/theachammas/full/SqFZ6ogto',
    title: 'Exquisite Corpse',
    description: 'Out of modular shapes, Rob was born to fit into almost every single environment. Whether he mixes with human beings, animals or any other strange creature, he is sure to fit in. His anatomy is so functional that wherever he\'s thrown into, his body parts are still distinguishable, and that\'s what makes him the cooolest robot on the web.'
  },
  'data-portrait': {
    url: 'https://editor.p5js.org/theachammas/full/ebILPYSIk',
    title: 'Data Portrait',
    description: 'A couple of years ago, when I got extremely ill, the doctors asked me to keep a diary tracking down my hunger and thirst cues to find out exactly what was wrong with me and save my life. And it actually did work. So I decided to work with this idea as it was the most personal one and track my cues throughout the whole week. Each time I got hungry or thirsty, I wrote it down in my notes (with the time of the cue), and wrote the level of it on a scale of 1 to 4. I then calculated the average levels daily, and worked on my sketch accordingly.'
  }
};

document.addEventListener('DOMContentLoaded', function() {
  
  // Create navigation if it doesn't exist
  if (!document.querySelector('nav')) {
    const nav = document.createElement('nav');
    
    // Determine which page we're on for proper link paths
    const inProjectsFolder = window.location.pathname.includes('/projects/');
    const pathPrefix = inProjectsFolder ? '../' : '';
    
    const isAboutPage = window.location.pathname.includes('about.html');
    const isContactPage = window.location.pathname.includes('contact.html');
    
    const aboutLink = isAboutPage ? (inProjectsFolder ? '../index.html' : 'index.html') : `${pathPrefix}about.html`;
    const aboutText = isAboutPage ? 'Back to Projects' : 'About Théa';
    const contactLink = isContactPage ? (inProjectsFolder ? '../index.html' : 'index.html') : `${pathPrefix}contact.html`;
    const contactText = isContactPage ? 'Back to Projects' : 'Contact';
    
    nav.innerHTML = `
      <div class="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="nav-links">
        <a href="${aboutLink}">${aboutText}</a>
        <a href="${contactLink}">${contactText}</a>
      </div>
    `;
    document.body.insertBefore(nav, document.body.firstChild);
  }

  // Create side menu
  const sideMenuOverlay = document.createElement('div');
  sideMenuOverlay.className = 'side-menu-overlay';
  document.body.appendChild(sideMenuOverlay);

  const sideMenu = document.createElement('div');
  sideMenu.className = 'side-menu';
  
  // Determine if we're already in the projects folder
  const inProjectsFolder = window.location.pathname.includes('/projects/');
  const projectPath = inProjectsFolder ? '' : 'projects/';
  
  // Build menu HTML - now linking to pages instead of modals
  let menuHTML = '<h2 class="side-menu-title">All Projects</h2><ul class="side-menu-list">';
  
  menuHTML += `
    <li class="side-menu-item">
      <a href="${projectPath}lost-and-found.html">Lost and Found</a>
    </li>
    <li class="side-menu-item">
      <a href="${projectPath}face-generator.html">Face Generator</a>
    </li>
    <li class="side-menu-item">
      <a href="${projectPath}experimental-clock.html">Experimental Clock</a>
    </li>
    <li class="side-menu-item">
      <a href="${projectPath}exquisite-corpse.html">Exquisite Corpse</a>
    </li>
    <li class="side-menu-item">
      <a href="${projectPath}optical-illusion.html">Optical Illusion</a>
    </li>
    <li class="side-menu-item">
      <a href="${projectPath}data-portrait.html">Data Portrait</a>
    </li>
    <li class="side-menu-item">
      <a href="${projectPath}autobiographical-game.html">Autobiographical Game</a>
    </li>
  `;
  
  menuHTML += '</ul>';
  sideMenu.innerHTML = menuHTML;
  document.body.appendChild(sideMenu);

  // Create modal for p5 sketches
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title"></div>
        <button class="close-modal">&times;</button>
      </div>
      <iframe class="modal-iframe" src="" allowfullscreen></iframe>
    </div>
  `;
  document.body.appendChild(modal);

  // Handle thumbnail clicks to open modal with p5 sketch
  const thumbs = document.querySelectorAll('.thumb a');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalTitle = document.querySelector('.modal-title');
  const modalIframe = document.querySelector('.modal-iframe');
  const closeModalBtn = document.querySelector('.close-modal');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const projectKey = href.split('/').pop().replace('.html', '');
      
      if (projectSketches[projectKey]) {
        modalTitle.textContent = projectSketches[projectKey].title;
        modalIframe.src = projectSketches[projectKey].url;
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close modal handlers
  closeModalBtn.addEventListener('click', closeModal);
  
  modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  function closeModal() {
    modalOverlay.classList.remove('active');
    modalIframe.src = '';
    document.body.style.overflow = '';
  }

  // Handle side menu project clicks
  const sideMenuLinks = sideMenu.querySelectorAll('a[data-project]');
  sideMenuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const projectKey = this.getAttribute('data-project');
      
      if (projectSketches[projectKey]) {
        // Close side menu
        menuIcon.classList.remove('active');
        sideMenu.classList.remove('active');
        sideMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // Open modal with project
        modalTitle.textContent = projectSketches[projectKey].title;
        modalIframe.src = projectSketches[projectKey].url;
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Menu toggle functionality
  const menuIcon = document.querySelector('.menu-icon');
  if (menuIcon) {
    menuIcon.addEventListener('click', function() {
      this.classList.toggle('active');
      sideMenu.classList.toggle('active');
      sideMenuOverlay.classList.toggle('active');
      
      // Prevent body scroll when menu is open
      if (sideMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
  }

  // Close side menu when clicking overlay
  sideMenuOverlay.addEventListener('click', function() {
    menuIcon.classList.remove('active');
    sideMenu.classList.remove('active');
    sideMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Close side menu with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
      menuIcon.classList.remove('active');
      sideMenu.classList.remove('active');
      sideMenuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Add subtle parallax effect to hero title
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.3;
      heroTitle.style.transform = `translateY(${rate}px)`;
    });
  }

  // Add hover effect enhancement for thumbnails
  const allThumbs = document.querySelectorAll('.thumb');
  allThumbs.forEach(thumb => {
    thumb.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    });
  });

  // Smooth reveal animation on page load
  const galleryStrip = document.querySelector('.gallery-strip');
  const hero = document.querySelector('.hero');
  
  if (galleryStrip && hero) {
    galleryStrip.style.opacity = '0';
    galleryStrip.style.transform = 'translateY(20px)';
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      galleryStrip.style.transition = 'all 0.8s ease';
      galleryStrip.style.opacity = '1';
      galleryStrip.style.transform = 'translateY(0)';
    }, 100);
    
    setTimeout(() => {
      hero.style.transition = 'all 0.8s ease';
      hero.style.opacity = '1';
      hero.style.transform = 'translateY(0)';
    }, 300);
  }

  // Add click event to greater symbol for fun interaction
  const greater = document.querySelector('.greater');
  if (greater) {
    greater.addEventListener('click', function() {
      this.style.transform = 'rotate(180deg)';
      setTimeout(() => {
        this.style.transform = 'rotate(0deg)';
      }, 300);
    });
  }
});