Vue.component('app-website', {
    template:
    `
    <section class="websitePage" @mousemove="mouseMove" @mouseup="mouseUp" @mousedown="mouseDown" @mouseleave="mouseLeave" @mouseenter="mouseEnter">
        <section class="vh-100 webMain">
            <nav class="navbar navbar-expand-lg navbar-light py-5 col-10 offset-1">
                <a class="navbar-brand" href="#"><h3 class="mb-0">/*JERYL TEO*/</h3></a>
                <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span>   
                        <i class="fas fa-bars" style="color:#222222; font-size:28px;"></i>
                    </span>
                </button>
            
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mr-lg-3 mr-xl-5">
                    <a @click.prevent="router.push('/')" class="nav-link" href="#"><h5>Landing Page</h5></a>
                    </li>
                    <li class="nav-item mr-lg-3 mr-xl-5">
                    <a class="nav-link" href="#aboutme" @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave"><h5>About Me</h5></a>
                    </li>
                    <li class="nav-item mr-lg-3 mr-xl-5">
                    <a class="nav-link" href="#myworks" @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave"><h5>My Works</h5></a>
                    </li>
                    <li class="nav-item mr-lg-3 mr-xl-5">
                    <a class="nav-link" href="#myservices" @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave"><h5>My Services</h5></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#contactme" @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave"><h5>Contact Me</h5></a>
                    </li>
                </ul>
                </div>
            </nav>
            <section class="webHero row d-flex justify-content-center align-items-center">
                <article class="col-12 text-center">
                    <div class="row">
                        <h1 class="cssanimation effect3d sequence col-2 text-right">/*</h1>
                        <div class="col-8 text-center">
                            <h1 class="cssanimation effect3d sequence">FULL STACK</h1>
                            <h1 class="cssanimation effect3d sequence">WEB DEVELOPER</h1>
                        </div>
                        <h1 class="cssanimation effect3d sequence col-2 text-left d-flex align-self-end">*/</h1>
                    </div>
                    <p class="my-5">&lt;!--<br>
                        Hello and welcome!<br>
                        I am Jeryl Teo, and I aim to please. <br>
                        Scroll down for more information about me! <br>
                            
                        --&gt;
                    </p>
                    <button class="btn btn-block w-50 mx-auto" @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave" >JOIN ME ON AN ADVENTURE</button>
                </article>
            </section>
            <div class="d-flex flex-column justify-content-center align-items-center">
                <i class="fas fa-mouse fa-3x animate__animated animate__bounce"></i>
                <p class="mb-0 mt-2 text-muted font-italic">Scroll</p>
            </div>
        </section>
        <section class="webAbout" id="aboutme">
            <article class="row vh-100">
                <div class="col-10 col-sm-5 offset-1 align-self-center">
                    <h1>&lt;!--</h1>
                    <div class="text-center">
                        <h3>Jeryl Teo</h3>
                        <p>Full Stack Web Developer</p>
                        <p>Nanyang Polytechnic</p>
                        <p>WorldSkills Competitor</p>
                        <p>Your Friend</p>
                        <div class="d-flex justify-content-center align-items-center mt-5">
                            <a class="text-dark mr-4" href="https://www.facebook.com/jerylteoSI"><i class="fab fa-facebook fa-3x"></i></a>
                            <a class="text-dark mr-4" href="https://www.instagram.com/jerylteo.si/"><i class="fab fa-instagram fa-3x mx-3"></i></a>
                            <a class="text-dark mr-5" href="https://www.linkedin.com/in/jerylteo/"><i class="fab fa-linkedin-in fa-3x"></i></a>
                            <a class="text-dark" href="http://be.net/jerylteo"><i class="fab fa-behance fa-3x"></i></a>
                        </div>
                    </div>
                    <h1 class="text-right">--&gt;</h1>
                </div>
                <div class="d-none col-sm-5 offset-sm-1 d-sm-flex align-items-sm-center">
                    <div class="myImg" style="position: relative;">
                        <img style="z-index: 1; border-radius: 1rem; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16); max-height: 75rem;" class="img-fluid" src="/images/jeryl.png" alt="jeryl">
                    </div>
                </div>
            </article>
        </section>

        <section class="webServices col-10 offset-1" style="padding: 5rem; margin-bottom: 15rem;" id="myservices">
            <h2 class="text-center">//My Services</h2>
            <section class="row mt-5">
                <article class="col-12 col-sm-4 d-flex flex-column align-items-center">
                    <i style="color: #52575D;" class="fas fa-bezier-curve fa-9x"></i>
                    <h4 class="text-center mt-5">Designing &<br>Illustrating</h4>
                </article>
                <article class="col-12 col-sm-4 d-flex flex-column align-items-center">
                    <i style="color: #52575D;" class="fab fa-chrome fa-9x"></i>
                    <h4 class="text-center mt-5">Front End<br>Development</h4>
                </article>
                <article class="col-12 col-sm-4 d-flex flex-column align-items-center">
                    <i style="color: #52575D;" class="fas fa-sitemap fa-9x"></i>
                    <h4 class="text-center mt-5">Back End<br>Development</h4>
                </article>
            </section>
        </section>
        <section class="webWorks d-flex align-items-center justify-content-center" id="myworks" style="color: #eeeeee;">
            <article>
                <h1 class="mb-5 text-center">//My Works</h1>
                <div class="swiper-container">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                        <!-- Slides -->
                        <div class="swiper-slide">
                            <div style="width: 100%; height: 100%;">
                                <img src="/images/WSC2019_BACK/wsc2019_back_graph.png" alt="WSC2019_BACK_GRAPH" style="object-fit: cover; width: 100%; height: 100%;">
                            </div>
                            <div class="swiper-caption">
                                <article class="swiper-bg">
                                    <div class="swiper-bgblur"></div>
                                    <h3>WorldSkills International 2019, Backend Paper</h3>
                                </article>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div style="width: 100%; height: 100%;">
                                <img src="/images/ASC2018/asc2018_start.png" alt="ASC2018_START" style="object-fit: cover; width: 100%; height: 100%;">
                            </div>
                            <div class="swiper-caption">
                                <article class="swiper-bg">
                                    <div class="swiper-bgblur"></div>
                                    <h3>WorldSkills ASEAN 2018, Frontend Paper</h3>
                                </article>
                            </div>
                        </div>
                        <div class="swiper-slide"></div>
                    </div>
                    <!-- If we need pagination -->
                    <div class="swiper-pagination" @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave"></div>
                
                    <!-- If we need navigation buttons -->
                    <div class="swiper-button-prev" @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave"></div>
                    <div class="swiper-button-next" @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave"></div>
                
                    <!-- If we need scrollbar -->
                    <div class="swiper-scrollbar"> @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave"</div>
                </div>
            </article>
        </section>


        
        
        <section class="col-10 offset-1" id="contactme" style="margin-top: 15rem; margin-bottom: 10rem;">
            <h2>//Contact Me</h2>
            <p>&lt;!-- Let's build a future together. Tell me about your project. --&gt;</p>
    
            <section class="row mt-5">
                <article class="col-12 col-lg-5">
                    <form action="mailto:jerylteo@outlook.com" method="post" enctype="text/plain">
                        <div class="form-group">
                            <label for="name"><h5>// NAME</h5></label>
                            <input @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave" type="text" name="name" id="name" class="form-control form-control-lg" placeholder="your name">
                        </div>
                        <div class="form-group my-5">
                            <label for="email"><h5>// EMAIL</h5></label>
                            <input @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave" type="email" name="email" id="email" class="form-control form-control-lg" placeholder="your@email.com">
                        </div>
                        <div class="form-group mb-5">
                            <label for="message"><h5>// MESSAGE</h5></label>
                            <textarea @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave" name="message" id="message" cols="30" rows="10" class="form-control form-control-lg" placeholder="your message"></textarea>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-block" @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave">WORK WITH ME</button>
                        </div>
                    </form>
                </article>
                <article class="d-none d-lg-block col-lg-5 offset-2">
                    <h5>// CONTACT DETAILS</h5>
                    <div class="mt-3 mb-5" style="color: #52575D;">
                        <p @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave"><i class="fas fa-mobile-alt mr-5"></i> +65 8769 1664</p>
                        <p @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave"><i class="fas fa-globe mr-5"></i> <a style="color: #52575D;" href="https://www.jerylteo.com/">https://www.jerylteo.com/</a></p>
                        <p @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave"><i class="fas fa-inbox mr-5"></i> <a style="color: #52575D;" href="mailto:jerylteo@outlook.com">jerylteo@outlook.com</a></p>
                    </div>
                    <h5>// SOCIAL</h5>
                    <div class="d-flex align-items-center mt-3 mb-5" style="color: #52575D;">
                        <a @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave" class="text-dark mr-4" href="https://www.facebook.com/jerylteoSI"><i class="fab fa-facebook fa-3x"></i></a>
                        <a @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave" class="text-dark mr-4" href="https://www.instagram.com/jerylteo.si/"><i class="fab fa-instagram fa-3x mx-3"></i></a>
                        <a @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave" class="text-dark mr-5" href="https://www.linkedin.com/in/jerylteo/"><i class="fab fa-linkedin-in fa-3x"></i></a>
                        <a @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave" class="text-dark" href="http://be.net/jerylteo"><i class="fab fa-behance fa-3x"></i></a>
                    </div>
                    <h5>// PROJECT OPPORTUNITIES</h5>
                    <p class="mt-3" style="color: #52575D;">&lt;!-- I am currently competing in WorldSkills ASEAN and WorldSkills International and will be unavailable for work until October 2021. --&gt;</p>
                </article>
            </section>
        </section>
        <section id="myfooter" style="width: 100vw; background-color: #41444B; color: #eeeeee;" class="row p-5">
            <h3 class="col-12 col-sm-6">/*JERYL TEO*/</h3>
            <div class="mt-3 col-12 col-sm-6 ml-sm-auto d-flex align-items-center justify-content-sm-end justify-content-between">
                <a @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave" class="text-light mr-sm-4" href="https://www.facebook.com/jerylteoSI"><i class="fab fa-facebook fa-3x"></i></a>
                <a @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave" class="text-light mr-sm-4" href="https://www.instagram.com/jerylteo.si/"><i class="fab fa-instagram fa-3x mx-3"></i></a>
                <a @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave" class="text-light mr-sm-5" href="https://www.linkedin.com/in/jerylteo/"><i class="fab fa-linkedin-in fa-3x"></i></a>
                <a @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave" class="text-light" href="http://be.net/jerylteo"><i class="fab fa-behance fa-3x"></i></a>
            </div>
            <div class="col-12 col-lg-6 mt-5 d-flex flex-wrap justify-content-between align-items-center">
                <a @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave" style="color: #eeeeee !important;" @click.prevent="router.push('/')" href="#"><h5>Landing Page</h5></a>
                <a @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave" style="color: #eeeeee !important;" href="#aboutme"><h5>About Me</h5></a>
                <a @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave" style="color: #eeeeee !important;" href="#myworks"><h5>My Works</h5></a>
                <a @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave" style="color: #eeeeee !important;" href="#myservices"><h5>My Services</h5></a>
                <a @mouseenter="linkMouseEnter" @mouseleave="linkMouseLeave" style="color: #eeeeee !important;" href="#contactme"><h5>Contact Me</h5></a>
            </div>
            <p class="col-12 col-lg-6 text-center text-md-right mt-5">Copyright &copy; 2020. All Rights Reserved.</p>
    
        </section>
        <div class="cursor"></div>
    </section>
    `,
    data() {
        return {
            mySwiper: undefined
        }
    },
    methods: {
        mouseMove(e) {
            let cursor = $('.cursor');
            cursor.css({
                'top': e.clientY - cursor.height()/2 +'px',
                'left': e.clientX - cursor.width()/2 +'px',
            })
        },
        mouseUp(e) {
            let cursor = $('.cursor');
            cursor.css({
                'transform': "scale(1)"
            })
        },
        mouseDown(e) {
            let cursor = $('.cursor');
            cursor.css({
                'transform': "scale(.2)"
            })
        },
        mouseEnter(e) {
            let cursor = $('.cursor');
            cursor.css({
                'opacity': "1"
            })
        },
        mouseLeave(e) {
            let cursor = $('.cursor');
            cursor.css({
                'opacity': "0"
            });
        },
        linkMouseEnter(e) {
            let cursor = $('.cursor');
            cursor.css({
                transform: "scale(1.5)"
            })
        },
        linkMouseLeave(e) {
            let cursor = $('.cursor');
            cursor.css({
                transform: "scale(1)"
            })
        }
    },
    mounted() {
        this.mySwiper = new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination'
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            scrollbar: {
                el: '.swiper-scrollbar'
            }
        })
    }
})