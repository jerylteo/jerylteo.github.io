Vue.component('app-landing', {
    template:
    `
    <section style="height: 100vh; width: 99vw;">
        <header>
            <div>
                <h3>JERYL TEO</h3>
                <p>Portfolio</p>
            </div>
            <div>
                <h5 class="light">Full Stack Web Developer</h5>
                <h5 class="light">Swimming Instructor</h5>
                <h5 class="light">Photographer</h5>
            </div>
        </header>
        <article class="container-fluid">
            <div class="row">
                <div class="col-2">
                    <h5>Develop Websites</h5>
                    <h5>Learn Swimming</h5>
                </div>
                <div class="col-8">
                    <div class="landingCon">
                        <div class="landingImg">
                            <img src="/images/hero.png" alt="hero" class="img-fluid">
                        </div>
                        <h1 id="heroT">LANDING</h1>
                        <h1 id="heroB">PAGE</h1>
                    </div>
                </div>
                <div class="col-2">
                    <h5>Get Photographed</h5>
                    <h5>Get Photographed</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h5>About Me</h5>
                    <h5>Contact Me</h5>
                </div>
            </div>
        </article>
    </section>
    `,
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {
        console.log('hi');
    }
})