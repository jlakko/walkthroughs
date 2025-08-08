// Theme switching functionality
class ThemeSwitcher {
  constructor() {
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.init();
  }

  init() {
    // Apply saved theme
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    
    // Set up theme buttons
    this.setupThemeButtons();
    
    // Update active button
    this.updateActiveButton();
  }

  setupThemeButtons() {
    const themeButtons = document.querySelectorAll('.theme-btn');
    
    themeButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const theme = e.target.dataset.theme;
        this.setTheme(theme);
      });
    });
  }

  setTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.updateActiveButton();
    
    // Trigger custom event for other components
    window.dispatchEvent(new CustomEvent('themeChanged', { 
      detail: { theme } 
    }));
  }

  updateActiveButton() {
    const themeButtons = document.querySelectorAll('.theme-btn');
    
    themeButtons.forEach(button => {
      if (button.dataset.theme === this.currentTheme) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }
}

// Progress tracking for chapters
class ProgressTracker {
  constructor() {
    this.progress = JSON.parse(localStorage.getItem('walkthrough-progress') || '{}');
    this.init();
  }

  init() {
    this.updateProgressBars();
    this.markCompletedSections();
  }

  markChapterComplete(chapterId) {
    this.progress[chapterId] = true;
    localStorage.setItem('walkthrough-progress', JSON.stringify(this.progress));
    this.updateProgressBars();
  }

  isChapterComplete(chapterId) {
    return this.progress[chapterId] || false;
  }

  getProgressPercentage() {
    const totalChapters = document.querySelectorAll('.chapter-nav a').length;
    const completedChapters = Object.keys(this.progress).length;
    return totalChapters > 0 ? (completedChapters / totalChapters) * 100 : 0;
  }

  updateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    const percentage = this.getProgressPercentage();
    
    progressBars.forEach(bar => {
      bar.style.width = `${percentage}%`;
    });
  }

  markCompletedSections() {
    const chapterLinks = document.querySelectorAll('.chapter-nav a');
    
    chapterLinks.forEach(link => {
      const chapterId = link.getAttribute('href').replace('/', '').replace('.html', '');
      if (this.isChapterComplete(chapterId)) {
        link.classList.add('completed');
      }
    });
  }
}

// Mobile navigation
class MobileNavigation {
  constructor() {
    this.init();
  }

  init() {
    this.createMobileToggle();
    this.setupEventListeners();
  }

  createMobileToggle() {
    const nav = document.querySelector('.site-nav');
    if (!nav) return;

    const toggle = document.createElement('button');
    toggle.className = 'mobile-nav-toggle';
    toggle.innerHTML = '☰';
    toggle.setAttribute('aria-label', 'Toggle navigation');
    
    nav.appendChild(toggle);
  }

  setupEventListeners() {
    const toggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (toggle && navLinks) {
      toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        toggle.classList.toggle('active');
      });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.site-nav')) {
        navLinks?.classList.remove('active');
        toggle?.classList.remove('active');
      }
    });
  }
}

// Image lazy loading
class LazyImageLoader {
  constructor() {
    this.init();
  }

  init() {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(this.handleIntersection.bind(this));
      this.observeImages();
    } else {
      // Fallback for older browsers
      this.loadAllImages();
    }
  }

  observeImages() {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => this.observer.observe(img));
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.loadImage(entry.target);
        this.observer.unobserve(entry.target);
      }
    });
  }

  loadImage(img) {
    img.src = img.dataset.src;
    img.removeAttribute('data-src');
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
  }

  loadAllImages() {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => this.loadImage(img));
  }
}

// Spoiler toggle functionality
class SpoilerToggle {
  constructor() {
    this.init();
  }

  init() {
    this.setupSpoilerToggleEvent();
    this.markSpoilersCollapsed();
  }

  setupSpoilerToggleEvent() {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.spoiler-header')) {
        e.preventDefault();
        this.toggleSpoiler(e.target.closest('.spoiler-box'));
      }
    });

    // Keyboard accessibility
    document.addEventListener('keydown', (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && e.target.closest('.spoiler-header')) {
        e.preventDefault();
        this.toggleSpoiler(e.target.closest('.spoiler-box'));
      }
    });
  }

  toggleSpoiler(spoilerBox) {
    const header = spoilerBox.querySelector('.spoiler-header');
    const content = spoilerBox.querySelector('.spoiler-content');
    const toggle = spoilerBox.querySelector('.spoiler-toggle');
    
    const isExpanded = content.classList.contains('expanded');
    
    if (isExpanded) {
      content.classList.remove('expanded');
      toggle.classList.remove('expanded');
      header.setAttribute('aria-expanded', 'false');
      
      // Save collapsed state for this spoiler
      this.saveSpoilerState(spoilerBox, false);
    } else {
      content.classList.add('expanded');
      toggle.classList.add('expanded');
      header.setAttribute('aria-expanded', 'true');
      
      // Save expanded state for this spoiler
      this.saveSpoilerState(spoilerBox, true);
    }
  }

  markSpoilersCollapsed() {
    const spoilerBoxes = document.querySelectorAll('.spoiler-box');
    
    spoilerBoxes.forEach(spoilerBox => {
      const header = spoilerBox.querySelector('.spoiler-header');
      const content = spoilerBox.querySelector('.spoiler-content');
      const toggle = spoilerBox.querySelector('.spoiler-toggle');
      
      // Add ARIA attributes for accessibility
      header.setAttribute('role', 'button');
      header.setAttribute('aria-expanded', 'false');
      header.setAttribute('tabindex', '0');
      
      // Check if this spoiler was previously expanded
      const spoilerId = this.getSpoilerId(spoilerBox);
      const wasExpanded = this.getSpoilerState(spoilerId);
      
      if (wasExpanded) {
        content.classList.add('expanded');
        toggle.classList.add('expanded');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  }

  getSpoilerId(spoilerBox) {
    // Create a unique ID based on content or position
    const title = spoilerBox.querySelector('.spoiler-title')?.textContent || '';
    const page = window.location.pathname;
    return `${page}-${title.replace(/\s+/g, '-').toLowerCase()}`;
  }

  getSpoilerState(spoilerId) {
    const states = JSON.parse(localStorage.getItem('spoiler-states') || '{}');
    return states[spoilerId] || false;
  }

  saveSpoilerState(spoilerBox, isExpanded) {
    const spoilerId = this.getSpoilerId(spoilerBox);
    const states = JSON.parse(localStorage.getItem('spoiler-states') || '{}');
    states[spoilerId] = isExpanded;
    localStorage.setItem('spoiler-states', JSON.stringify(states));
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ThemeSwitcher();
  new ProgressTracker();
  new MobileNavigation();
  new LazyImageLoader();
  new SpoilerToggle();
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add copy code functionality
  document.querySelectorAll('pre code').forEach(codeBlock => {
    const button = document.createElement('button');
    button.className = 'copy-code-btn';
    button.textContent = 'Copy';
    button.addEventListener('click', () => {
      navigator.clipboard.writeText(codeBlock.textContent);
      button.textContent = 'Copied!';
      setTimeout(() => {
        button.textContent = 'Copy';
      }, 2000);
    });
    
    codeBlock.parentNode.style.position = 'relative';
    codeBlock.parentNode.appendChild(button);
  });
});