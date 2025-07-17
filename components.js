
//Flex Container
class TFlexContainer extends HTMLElement{
    connectedCallback(){
        const selector = this.getAttribute("selector");

        this.innerHTML =`
        <section class="${selector}">
        
        </section>
        `;
    }
}
customElements.define("t-flex-container", TFlexContainer);

//Box
class TBox extends HTMLElement{
    connectedCallback(){
        const selector = this.getAttribute("selector");
        const iconPath = this.getAttribute("icon-path");
        const boxDetails = this.getAttribute("box-details");
        const heading = this.getAttribute("heading");
        const paragraph = this.getAttribute("paragraph");

        this.innerHTML = `
        <div class="${selector}">
            <img src="${iconPath}">
            <div class="${boxDetails}">
                <h2>${heading}</h2>
                <p>${paragraph}</p>
            </div>
        </div>
        `;
    }
}
customElements.define("t-box", TBox);