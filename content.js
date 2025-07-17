//header
class THeader extends HTMLElement{
 connectedCallback(){
    this.innerHTML =`
    <header>
    <div class="logo">Christ & Code</div>
    <img src="resources/icons/icons8-menu-squared-100.png" class="hamburger">
    <nav>
            <a href="index.html">Home</a>
            <a href="about-us.html">About</a>
            <a href="#">Stories</a>
            <a href="#">Enquiries</a>
            <a href="#">Connect With Us</a>
            <a href="#" class="btn">Donate</a>
        </nav>
    </header>
    `;
 }
}
customElements.define("t-header", THeader);

//section
class TSection extends HTMLElement{
    connectedCallback(){
        const selector = this.getAttribute("selector");
        const boldParagraph = this.getAttribute("boldParagraph");
        const heading = this.getAttribute("heading");
        const paragraph = this.getAttribute("paragraph");
        const link = this.getAttribute("link");
        const linkText = this.getAttribute("linkText");
        const img = this.getAttribute("img");
        const imageStyling = this.getAttribute("imageStyling");


        this.innerHTML =`
        <section class="${selector}">
        <div class="primary">
            <p class="bold">${boldParagraph}</p>
            <h2>${heading}</h2>
            <p>${paragraph}</p>
            <button><a href="${link}" class"btn">${linkText}</a></button>
        </div>
        <img src="${img}" class="${imageStyling}" />
        </section>
        `;
    }
}
customElements.define("t-section", TSection);


//text-only section
class TTextOnlySection extends HTMLElement{
    connectedCallback(){
        const selector = this.getAttribute("selector");
        const heading = this.getAttribute("heading");
        const paragraph = this.getAttribute("paragraph");
        const buttonText = this.getAttribute("buttonText");
        const buttonStyle = this.getAttribute("buttonStyle");

        this.innerHTML = `
        <section class="${selector}">
        <h1>${heading}</h1>
        <p>${paragraph}</p>
        <button class="${buttonStyle}">${buttonText}</button>
        </section>
        `;
    }
}
customElements.define("t-text-only-section", TTextOnlySection);


//Footer
class TFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <footer>
            <div class"footer-left">
                <div class="logo">Christ & Code</div>
            </div>
            <div class="footer-quick-links">
                <h3>Quick Links</h3>
                <ul>
                    <a href="index.html">Home</a>
                    <a href="about-us.html">About</a>
                    <a href="#">Stories</a>
                    <a href="#">Enquiries</a>
                    <a href="#">Connect With Us</a>
                    <a href="#">Donate</a>
                </ul>
            </div>
            <div class="footer-contact-info">
                <h3>Contact Us</h3>
                <p>+234 911 288 9402</p>
                <p>hello@christandcode.com</p>
                <p>7 ChristTech Lane, Eden's Garden</p>
            </div>
            <div class="footer-right">
                <div class="follow-us-text">
                    <h3>Follow Us</h3>
                </div>    
                <div class="social-media-icons">
                    <img src="resources/icons/icons8-facebook-64.png"/>                    
                    <img src="resources/icons/icons8-instagram-64.png"/>
                    <img src="resources/icons/icons8-linkedin-64.png"/>
                    <img src="resources/icons/icons8-x-64.png"/>
                </div>
                <p>7 ChristTech Lane, Eden's Garden
                <br>+234 911 288 9402
                <br>hello@christandcode.com
                </p>
            </div>
            <div class="copyright-text">
                <p>&copy; Copyright Christ & Code 2024. All Rights Reserved.
            </div>
            </footer>
        `;
    }
}
customElements.define("t-footer", TFooter);