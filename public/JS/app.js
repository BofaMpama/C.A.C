


//header
class THeader extends HTMLElement{
 connectedCallback(){
    this.innerHTML =`
    
    <header>
    <div class="logo">Christ & Code</div>
        <nav>
            <div class="nav-links">
            <a href="index.html">Home</a>
            <a href="about-us.html">About</a>
            <a href="#">Stories</a>
            <a href="enquiries.html">Enquiries</a>  
            <a href="#">Connect With Us</a> 
            </div>
            <div class="auth-buttons">
            <section id="whenSignedOut">
            <a id="signInBtn" class="btn btn-primary mobile-show left-nav">Sign in with Google</a>
            </section>
            <section id="whenSignedIn" hidden="true">
            <div id="userDetails"></div>
            <a id="signOutBtn" class="btn btn-primary mobile-show left-nav">Sign Out</a>
            </section>
            </div>
        </nav>
            
        <nav class="left-nav auth-nav">
            <a id="login-btn" class="mobile-hide right left-nav">Login</a>
            <a id="signup-btn" class="mobile-hide right left-nav">Sign Up</a> 
            <a id="logout-btn" class="mobile-hide right left-nav hidden">Logout</a>

        </nav>
       </div>
       <div class="spacer"></div>
       <div class="donate-container">
            <a href="donate.html" class="donate-button btn">Donate</a>
        </div> 
        <img src="./resources/icons/icons8-menu-squared-100.png" class="hamburger">
 
    </header>
    `;
     this.setupAuthHandlers();
 }

 setupAuthHandlers(){
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


    const whenSignedIn = this.querySelector("#whenSignedIn");
    const whenSignedOut = this.querySelector("#whenSignedOut");

    const signInBtn = this.querySelector("#signInBtn");
    const signOutBtn = this.querySelector("#signOutBtn");

    const userDetails = this.querySelector("#userDetails");



    //Sign In Event Handler
    if (signInBtn) {
        signInBtn.onclick = () => signInWithPopup(auth, provider).catch((error) => {console.error("Error during sign-in:", error);});
    }


    //Sign Out Event Handler
    if (signOutBtn){
        signOutBtn.onclick = () => signOut(auth).catch((error) => {console.error("Error during sign-out:", error);});
    }


    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in.
            whenSignedIn.hidden = false;
            whenSignedOut.hidden = true;
            userDetails.innerHTML = `<h3>Hello, ${user.displayName}!</h3>`;
        } else {
            // User is signed out.
            whenSignedIn.hidden = true;
            whenSignedOut.hidden = false;
            userDetails.innerHTML ="";
        }
    });    

 }

}
customElements.define("t-header", THeader);



















