/* main.js */

class MyHeader extends HTMLElement {
    connectedCallback() {
        // Check if we are inside the 'posts' folder
        const isInPosts = window.location.pathname.includes('/posts/');
        const prefix = isInPosts ? '../' : '';

        this.innerHTML = `
        <nav>
            <a href="${prefix}index.html" class="logo">Thomas Mattson</a>
            <div class="nav-links">
                <a href="${prefix}index.html" id="link-home">Home</a>\
                <a href="${prefix}blog.html" id="link-blog">Blog</a>
                <a href="${prefix}resume.html" id="link-resume">Resume</a>
            </div>
        </nav>
        `;
    }
}

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p>
                <a href="https://linkedin.com/in/thomas-d-mattson" target="_blank" style="color: inherit;">LinkedIn</a> 
                &bull; &copy; 2026 Thomas Mattson
            </p>
        </footer>
        `;
    }
}

customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);
