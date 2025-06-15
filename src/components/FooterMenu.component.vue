<template>
  <footer class="footer overlay border-gradient">
    <div class="footer-content container">
      <!-- Section principale -->
      <div class="footer-main">
        <!-- Logo et description -->
        <div class="footer-brand">
          <h3 class="text-primary text-glow brand-title">
            Enzo Fournier
          </h3>
          <p class="footer-description">
            Développeur passionné en étude informatique.
          </p>
          <div class="footer-social">
            <a v-for="social in socialLinks" :key="social.name" :href="social.url" :aria-label="social.name"
              class="social-link" target="_blank" rel="noopener noreferrer">
              <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path :d="social.iconPath" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Navigation rapide -->
        <div class="footer-nav">
          <h4 class="footer-title">Navigation</h4>
          <ul class="footer-links">
            <li v-for="link in navLinks" :key="link.path">
              <router-link :to="link.path" class="footer-link">
                {{ link.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Projets récents -->
        <div class="footer-projects">
          <h4 class="footer-title">Projets</h4>
          <ul class="footer-links">
            <li v-for="project in recentProjects" :key="project.name">
              <a :href="project.url" class="footer-link" target="_blank" rel="noopener noreferrer">
                {{ project.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer-contact">
          <h4 class="footer-title">Contact</h4>
          <div class="contact-info">
            <router-link to="/contact" class="contact-link">
              <span class="contact-icon">✉️</span>
              Me contacter
            </router-link>
            <div class="contact-item">
              <span class="contact-icon">📍</span>
              France
            </div>
          </div>
        </div>
      </div>

      <!-- Barre de copyright -->
      <div class="footer-bottom">
        <div class="footer-divider"></div>
        <div class="footer-copyright">
          <p class="copyright-text">
            © {{ currentYear }} Enzo Fournier. Tous droits réservés.
          </p>
          <div class="footer-legal">
            <router-link to="/mentions-legales" class="legal-link">
              Mentions légales
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Année actuelle
const currentYear = computed(() => new Date().getFullYear());

// Liens de navigation
const navLinks = [
  { label: 'Accueil', path: '/' },
  { label: 'Projets', path: '/projets' },
  { label: 'Contact', path: '/contact' }
];

// Projets récents
const recentProjects = [
  { name: 'Application ERP', url: '#' },
  { name: 'Site web pokémon', url: '#' },
  { name: 'Api pokémon', url: '#' },
  { name: 'tic-tac-toe en réseau', url: '#' }
];

// Réseaux sociaux avec vraies icônes SVG
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/fydyr',
    iconPath: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/enzofournier',
    iconPath: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
  }
];
</script>

<style scoped>
/* ========================================
   FOOTER PRINCIPAL
   ======================================== */
.footer {
  background: var(--bg-primary);
  border-top: 2px solid;
  border-image: var(--border-gradient);
  margin-top: auto;
  position: relative;
}

.footer-content {
  padding: 3rem 0 1rem;
}

.footer-main {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

/* ========================================
   BRAND SECTION
   ======================================== */
.footer-brand {
  max-width: 350px;
}

.brand-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  letter-spacing: var(--letter-spacing-wide);
}

.footer-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-family: var(--font-primary);
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: var(--bg-card);
  border: var(--border-primary);
  border-radius: var(--border-radius);
  color: var(--text-primary);
  text-decoration: none;
  transition: var(--transition-smooth);
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent, rgba(0, 255, 255, 0.2), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.social-link:hover {
  background: var(--bg-hover);
  border-color: var(--border-glow);
  box-shadow: var(--shadow-glow);
  transform: translateY(-2px);
}

.social-link:hover::before {
  opacity: 1;
}

.social-icon {
  width: 20px;
  height: 20px;
  z-index: 1;
  position: relative;
  transition: var(--transition-fast);
}

/* ========================================
   SECTIONS DE NAVIGATION
   ======================================== */
.footer-title {
  color: var(--primary-color);
  font-family: var(--font-primary);
  font-size: 1.1rem;
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing);
  margin-bottom: 1.5rem;
  text-shadow: var(--text-glow);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-family: var(--font-primary);
  transition: var(--transition-fast);
  display: inline-block;
  position: relative;
}

.footer-link:hover {
  color: var(--primary-color);
  text-shadow: var(--text-glow);
  transform: translateX(5px);
}

.footer-link::before {
  content: '→';
  position: absolute;
  left: -15px;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: var(--primary-color);
}

.footer-link:hover::before {
  opacity: 1;
}

/* ========================================
   SECTION CONTACT
   ======================================== */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-family: var(--font-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition-fast);
}

.contact-link:hover {
  color: var(--primary-color);
  text-shadow: var(--text-glow);
}

.contact-item {
  color: var(--text-secondary);
  font-family: var(--font-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-icon {
  font-size: 1rem;
  width: 20px;
  text-align: center;
}

/* ========================================
   FOOTER BOTTOM
   ======================================== */
.footer-bottom {
  margin-top: 2rem;
}

.footer-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
  margin-bottom: 1.5rem;
  opacity: 0.3;
}

.footer-copyright {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright-text {
  color: var(--text-secondary);
  font-family: var(--font-primary);
  font-size: 0.9rem;
  margin: 0;
}

.footer-legal {
  display: flex;
  gap: 1.5rem;
}

.legal-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-family: var(--font-primary);
  font-size: 0.9rem;
  transition: var(--transition-fast);
}

.legal-link:hover {
  color: var(--primary-color);
  text-shadow: var(--text-glow);
}

/* ========================================
   RESPONSIVE
   ======================================== */
@media (max-width: 1024px) {
  .footer-main {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .footer-brand {
    grid-column: 1 / -1;
    max-width: none;
  }
}

@media (max-width: 768px) {
  .footer-content {
    padding: 2rem 0 1rem;
  }

  .footer-main {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-social {
    justify-content: center;
  }

  .footer-copyright {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .footer-legal {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer-content {
    padding: 1.5rem 0 1rem;
  }

  .footer-main {
    gap: 1.5rem;
  }

  .brand-title {
    font-size: 1.3rem;
    text-align: center;
  }

  .footer-description {
    text-align: center;
    font-size: 0.9rem;
  }

  .footer-title {
    text-align: center;
    font-size: 1rem;
  }

  .footer-links {
    text-align: center;
  }

  .contact-info {
    align-items: center;
  }

  .social-link {
    width: 40px;
    height: 40px;
  }

  .footer-legal {
    flex-direction: column;
    gap: 0.5rem;
  }
}

@media (max-width: 320px) {
  .footer-content {
    padding: 1rem 0;
  }

  .brand-title {
    font-size: 1.1rem;
  }

  .footer-description {
    font-size: 0.85rem;
  }

  .social-link {
    width: 36px;
    height: 36px;
  }

  .social-icon {
    width: 18px;
    height: 18px;
  }
}
</style>
