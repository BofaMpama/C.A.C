
//Flex Container
class TFlexContainer extends HTMLElement{
    connectedCallback(){
        const selector = this.getAttribute("selector");

        this.innerHTML =`
        <section class="${selector}">
            <slot></slot>
        </section>
        `;
    }
}
customElements.define("t-flex-container", TFlexContainer);

//Box
class TBox extends HTMLElement{
    connectedCallback(){
        const selector = this.getAttribute("selector");
        const boxDetails = this.getAttribute("box-details");
        const heading = this.getAttribute("heading");
        const paragraph = this.getAttribute("paragraph");

        this.innerHTML = `
        <div class="w-200px flex3 border-radius ${selector}}" style="background: var(--colorDefault2); padding: var(--spacing1) var(--spacing3);">   
            <div class="${boxDetails}">
                <h2>${heading}</h2>
                <p>${paragraph}</p>
            </div>
        </div>
        `;
    }
}
customElements.define("t-box", TBox);

class TSection2 extends HTMLElement{
    connectedCallback(){
        const selector = this.getAttribute("selector");
        const heading = this.getAttribute("heading");
        const paragraph = this.getAttribute("paragraph");
        const paragraph2 = this.getAttribute("paragraph2");


        this.innerHTML = `
        <section class="${selector}">
            <h1>${heading}</h1>
            <p>${paragraph}</p>
            <p>${paragraph2}</p>
            <slot></slot>
        </section>
        `;
    }
}
customElements.define("t-section-2", TSection2);
class TTeamBox extends HTMLElement{
    connectedCallback(){
        const imageUrl = this.getAttribute("imageUrl");
        const name = this.getAttribute("name");
        const role = this.getAttribute("role");

        //icons urls
        const facebookUrl = this.getAttribute("facebookUrl") || "#";
        const twitterUrl = this.getAttribute("twitterUrl") || "#";
        const linkedinUrl = this.getAttribute("linkedinUrl") || "#";
        const githubUrl = this.getAttribute("githubUrl") || "#";

        // Static icon paths
        const facebookIcon = "resources/icons/icons8-facebook-64.png";
        const twitterIcon = "resources/icons/icons8-x-64.png";
        const linkedinIcon = "resources/icons/icons8-linkedin-64.png";
        const githubIcon = "resources/icons/icons8-github-64.png";
       

        this.innerHTML=`
        <div class="img justify-top">
            <img src="${imageUrl}" class="border-radius-2 s-300px">
            <div class=" center">
                <h2>${name}</h2>
                <p>${role}</p>
                <div class="social-media-icons flex">
                    <a href="${facebookUrl}" class="icon-style-2"><img src="${facebookIcon}"></a>
                    <a href="${twitterUrl}" class="icon-style-2"><img src="${twitterIcon}"></a>
                    <a href="${linkedinUrl}" class="icon-style-2"><img src="${linkedinIcon}"></a>
                    <a href="${githubUrl}" class="icon-style-2"><img src="${githubIcon}"></a>
                </div>
            </div>
        </div>
        `;
    }
}
customElements.define("t-team-box", TTeamBox);

fetch('team.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(person => {
            const box = document.createElement('t-team-box');
            box.setAttribute('imageUrl', person.imageUrl);
            box.setAttribute('name', person.name);
            box.setAttribute('role', person.role);
            box.setAttribute('facebookUrl', person.facebookUrl);
            box.setAttribute('twitterUrl', person.twitterUrl);
            box.setAttribute('linkedinUrl', person.linkedinUrl);
            box.setAttribute('githubUrl', person.githubUrl);
            document.getElementById('t-team-section').appendChild(box);
        });
    });


class TValueBox extends HTMLElement{
    connectedCallback(){
        const selector = this.getAttribute("selector");
        const iconPath = this.getAttribute("iconPath");
        const iconStyle = this.getAttribute("icon-style");
        const boxDetails = this.getAttribute("box-details");
        const heading = this.getAttribute("heading");
        const paragraph = this.getAttribute("paragraph");

        this.innerHTML = `
            <div class="card-design1 center">
            <img src="${iconPath}" class="i-100px">
            <div class="${boxDetails}">
                <h2>${heading}</h2>
                <p>${paragraph  }</p>
            </div>
        </div>
        `;
    }
}       
customElements.define("t-value-box", TValueBox);

fetch('values.json')    
    .then(res => res.json())
    .then(data => {
        data.forEach(value => {
            const item = document.createElement("t-value-box");
            item.setAttribute('iconPath', value.iconPath);
            item.setAttribute('heading', value.heading);
            item.setAttribute('paragraph', value.paragraph);
            document.getElementById('t-values-section').appendChild(item);
        });
    });    

