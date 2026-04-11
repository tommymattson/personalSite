/* main.js */

class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <div class="nav-top">
                <a href="/" class="logo">Thomas Mattson</a>
                <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
                    <span class="hamburger"></span>
                </button>
            </div>
            <div class="nav-links">
                <a href="/" id="link-home">Home</a>
                <a href="/resume/" id="link-resume">Resume</a>
                <a href="/calculators/" id="link-calc">Calculators</a>
            </div>
        </nav>
        `;

        const toggle = this.querySelector('.nav-toggle');
        const links = this.querySelector('.nav-links');

        toggle.addEventListener('click', () => {
            const isOpen = links.classList.toggle('open');
            toggle.classList.toggle('active', isOpen);
            toggle.setAttribute('aria-expanded', isOpen);
        });

        // Close menu when a link is tapped
        links.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                links.classList.remove('open');
                toggle.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
}

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p>
                <a href="https://linkedin.com/in/thomas-d-mattson" target="_blank" style="color: inherit;">LinkedIn</a>
                &bull; <a href="https://github.com/tommymattson" target="_blank" style="color: inherit;">GitHub</a>
                &bull; &copy; 2026 Thomas Mattson
            </p>
        </footer>
        `;
    }
}

customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);
