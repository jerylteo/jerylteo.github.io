Vue.component('app-landing', {
    template:
    `
    <section style="max-width: 99vw; overflow: hidden;" class="vh-100 container-fluid d-flex flex-column h-100 p-5 landingPage">
        <header class="row mt-5 mt-sm-0">
            <div class="col-md-3 col-12 d-block justify-content-center mb-3 mb-md-0" @click.prevent="router.push('/');" style="cursor: pointer;">
                <div class="d-md-block d-flex align-items-center justify-content-center ">
                    <h3 class="mb-0 mr-3 mr-md-0 text-nowrap" style="font-weight: 500; line-height: 3rem;">JERYL TEO</h3>
                    <p class="mb-0">Portfolio</p>
                </div>
                <div class="d-md-block d-flex align-items-center justify-content-center mt-3">
                    <a class="text-light" href="https://www.facebook.com/jerylteoSI"><i class="fab fa-facebook fa-2x"></i></a>
                    <a href="https://www.instagram.com/jerylteo.si/" class="text-light"><i class="fab fa-instagram fa-2x mx-3"></i></a>
                    <a href="https://www.linkedin.com/in/jerylteo/" class="text-light"></a><i class="fab fa-linkedin-in fa-2x"></i>
                    <a href="http://be.net/jerylteo" class="text-light ml-3"></a><i class="fab fa-behance fa-2x"></i>
                </div>
            </div>
            <div class="offset-xl-3 col-xl-6  col-md-9 col-12 d-sm-flex justify-content-between align-items-center d-none">
                <h5 class="light mb-0">Full Stack Web Developer</h5>
                <span style="font-size: 4rem;" class="mb-2">·</span>
                <h5 class="light mb-0">Swimming Instructor</h5>
                <span style="font-size: 4rem;" class="mb-2">·</span>
                <h5 class="light mb-0">Photographer</h5>
            </div>
        </header>
        <article class="row flex-grow-1 mb-5 landingContent">

            <div class="col-12 h-100 d-flex flex-column align-items-center">
                <div class="row h-100 w-100">
                    <div class="col-3 d-flex flex-column align-items-center justify-content-around">
                        <h5 @mouseover="state='landing'" class="lrotate text-nowrap" id="landing">The Hub</h5>
                        <h5 @mouseover="state='website'" class="lrotate text-nowrap" id="website">Develop Websites</h5>
                    </div>
                    <div class="col-6 d-flex align-items-center justify-content-center">
                        <div class="landingCon">
                            <div class="landingImg" style="overflow: hidden;">
                                <img id="landimg" src="/images/hero.png" alt="landing" class="img-fluid">
                                <img id="photimg" src="/images/gal2.jpg" alt="photography" class="img-fluid">
                                <img id="swimimg" src="/images/swim.jpg" alt="swimming" class="img-fluid">
                                <img id="webimg" src="/images/website.png" alt="swimming" class="img-fluid">
                                <h1 class="d-none d-sm-block in" id="heroT" @animationend="removeAnim()">{{heroT}}</h1>
                                <h1 class="d-none d-sm-block in" id="heroB" @animationend="removeAnim()">{{heroB}}</h1>
                            </div>
                            <h1 class="d-none d-sm-block" id="heroT" @animationend="removeAnim()">{{heroT}}</h1>
                            <h1 class="d-none d-sm-block" id="heroB" @animationend="removeAnim()">{{heroB}}</h1>
                            <p style="font-size: 1rem;" class="text-muted font-weight-light text-center mt-4 d-none d-md-block">Hover over any of the links!</p>
                        </div>
                    </div>
                    <div class="col-3 d-flex flex-column align-items-center justify-content-around">
                        <h5 @mouseover="state='swimming'" class="rrotate text-nowrap" id="swimming">Learn Swimming</h5>
                        <h5 @mouseover="state='photography'" class="rrotate text-nowrap" id="photography">Get Photographed</h5>
                    </div>
                </div>
                <div class="row w-sm-75 w-100">
                    <div class="col-12 d-flex align-items-end justify-content-between justify-content-sm-around">
                        <h5 @mouseover="state='about'" class="scale">About Me</h5>
                        <h5 @mouseover="state='contact'" class="scale">Contact Me</h5>
                    </div>
                </div>
            </div>

        </article>
    </section>
    `,
    data() {
        return {
            heroT: "THE",
            heroB: "HUB",
            state: "",
        }
    },
    watch: {
        state() {
            this.animation();
        }
    },
    methods: {
        animation() {
            switch(this.state) {
                case "landing":
                    $('body').css('background-color', '#1e2022');
                    $('.landingCon h1').addClass('animate__animated animate__fadeOutRight');
                    $('.landingCon h1').css('color', 'white');
                    $('.in').css('color', '#41444b');
                    this.heroT = "THE";
                    this.heroB = "HUB";
                    $('.landingImg img').css('opacity', 0);
                    $('#landimg').css('opacity', 1);
                    break;
                case "photography":
                    $('body').css('background-color', '#2b2b28');
                    $('.landingCon h1').addClass('animate__animated animate__fadeOutRight');
                    $('.landingCon h1').css('color', '#94d3ac');
                    $('.in').css('color', 'white')
                    this.heroT = "TAKE";
                    this.heroB = "PICTURES";
                    $('.landingImg img').css('opacity', '0');
                    $('#photimg').css('opacity', 1);
                    break;
                case "swimming":
                    $('body').css('background-color', '#222831')
                    $('.landingCon h1').addClass('animate__animated animate__fadeOutRight');
                    $('.landingCon h1').css('color', '#28abb9');
                    $('.in').css('color', 'white')
                    this.heroT = "LEARN";
                    this.heroB = "SWIMMING";
                    $('.landingImg img').css('opacity', '0');
                    $('#swimimg').css('opacity', 1);
                    break;
                case "website":
                    $('body').css('background-color', '#29252c');
                    $('.landingCon h1').addClass('animate__animated animate__fadeOutRight');
                    $('.landingCon h1').css('color', '#ffc7c7');
                    $('.in').css('color', '#41444b')
                    this.heroT = "DEVELOP";
                    this.heroB = "WEBSITES";
                    $('.landingImg img').css('opacity', '0');
                    $('#webimg').css('opacity', 1);
                    break;
                case "about":
                    $('body').css('background-color', '#1e2022');
                    $('.landingCon h1').addClass('animate__animated animate__fadeOutRight');
                    $('.landingCon h1').css('color', 'white');
                    $('.in').css('color', '#41444b')
                    this.heroT = "ABOUT";
                    this.heroB = "ME";
                    $('.landingImg img').css('opacity', 0);
                    $('#landimg').css('opacity', 1);
                    break;
                case "contact":
                    $('body').css('background-color', '#1e2022');
                    $('.landingCon h1').addClass('animate__animated animate__fadeOutRight');
                    $('.landingCon h1').css('color', 'white');
                    $('.in').css('color', '#41444b')                    
                    this.heroT = "CONTACT";
                    this.heroB = "ME";
                    $('.landingImg img').css('opacity', 0);
                    $('#landimg').css('opacity', 1);
                    break;

            }
        },
        removeAnim() {
            $('.landingCon h1').removeClass('animate__animated animate__fadeOutRight');
            $('.landingCon h1').addClass('animate__animated animate__fadeInLeft');
        },
    },
    mounted() {
        this.state = "landing";
    }
})