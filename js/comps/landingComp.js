Vue.component('app-landing', {
    template:
    `
        <section :style="resize" class="container mx-auto p-8 pt-0 xl:pt-8 flex flex-col">
            <section class="flex-grow">
                <article class="swiper-container h-full">
                    <div class="swiper-wrapper h-full">
                        <div class="swiper-slide h-full grid grid-cols-1 md:grid-cols-2 gap-20 px-0 md:px-4 lg:px-0" v-for="(data, index) in banners">
                            <div class="h-full w-full flex items-center">
                                <div class="w-full text-center md:text-left">
                                    <h1 class="text-5xl sm:text-6xl md:text-8xl 2xl:text-9xl text-light">{{data.title}}</h1>
                                    <div class="w-1/2 mx-auto md:ml-0 h-1.5 bg-turquoise my-10 xl:my-14 line-animate"></div>
                                    <div ref="description" v-html="data.description" class="w-2/3 md:w-full mx-auto"></div>
                                    <div v-if="data.socialMedia" class="mt-8 xl:mt-10 flex justify-center md:justify-start">
                                        <a href="https://www.facebook.com/jerylteoSI" class="block mr-4 cursor-none text-turquoise social-animate">
                                            <i class="fab fa-facebook-f fa-lg"></i>
                                        </a>
                                        <a href="https://www.instagram.com/jerylteo.si/" class="block w-6 h-6 mr-4 cursor-none text-turquoise social-animate">
                                            <i class="fab fa-instagram fa-lg"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/jerylteo/" class="block w-6 h-6 cursor-none text-turquoise social-animate">
                                            <i class="fab fa-linkedin-in fa-lg"></i>
                                        </a>
                                    </div>
                                    <div>
                                        <button @click="link(data.link)" class="text-turquoise text-lg font-medium mt-8 xl:mt-10 text-center lg:text-left link-animate-off">{{data.linkText}}</button>
                                    </div>
                                </div>
                            </div>
                            <div v-if="!data.largeOnly" class="h-full w-full hidden md:flex flex-col justify-center">
                                <div class="w-full flex justify-end items-center" v-html="data.image"></div>
                                <a v-if="data.caption" class="text-right text-sm font-medium text-light opacity-50 mt-4">{{data.caption}}</a>
                            </div>
                        </div>
                    </div>
                </article>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </section>
            <nav class="hidden md:flex justify-between items-center text-light mt-8">
                <div class="flex items-center pb-2 pr-2 border-b-2 nav-animate" :class="[currentSlide == 0 ? 'opacity-100 border-turquoise' : 'opacity-50 border-transparent']" @click="changeSlide(0)">
                    <span class="text-turquoise text-sm inline-block mr-4">00</span>
                    <span class="text-light text-sm inline-block">ABOUT</span>
                </div>
                <div class="flex items-center pb-2 pr-2 border-b-2 nav-animate" :class="[currentSlide == 1 ? 'opacity-100 border-turquoise' : 'opacity-50 border-transparent']" @click="changeSlide(1)">
                    <span class="text-turquoise text-sm inline-block mr-4">01</span>
                    <span class="text-light text-sm inline-block">WEBSITE</span>
                </div>
                <div class="flex items-center pb-2 pr-2 border-b-2 nav-animate" :class="[currentSlide == 2 ? 'opacity-100 border-turquoise' : 'opacity-50 border-transparent']" @click="changeSlide(2)">
                    <span class="text-turquoise text-sm inline-block mr-4">02</span>
                    <span class="text-light text-sm inline-block">SWIMMING</span>
                </div>
                <div class="flex items-center pb-2 pr-2 border-b-2 nav-animate" :class="[currentSlide == 3 ? 'opacity-100 border-turquoise' : 'opacity-50 border-transparent']" @click="changeSlide(3)">
                    <span class="text-turquoise text-sm inline-block mr-4">03</span>
                    <span class="text-light text-sm inline-block">PHOTOGRAPHY</span>
                </div>
            </nav>
            <nav class="flex md:hidden justify-center items-center">
                <div class="w-4 h-4 rounded-full mr-4" :class="[currentSlide == 0 ? 'opacity-100 bg-turquoise' : 'opacity-50 bg-light']" @click="changeSlide(0)"></div>
                <div class="w-4 h-4 rounded-full mr-4" :class="[currentSlide == 1 ? 'opacity-100 bg-turquoise' : 'opacity-50 bg-light']" @click="changeSlide(1)"></div>
                <div class="w-4 h-4 rounded-full mr-4" :class="[currentSlide == 2 ? 'opacity-100 bg-turquoise' : 'opacity-50 bg-light']" @click="changeSlide(2)"></div>
                <div class="w-4 h-4 rounded-full" :class="[currentSlide == 3 ? 'opacity-100 bg-turquoise' : 'opacity-50 bg-light']" @click="changeSlide(3)"></div>
            </nav>
        </section>
    `,
    props: ["header"],
    data() {
        return {
            cursor: undefined,
            resize: {
                height: '900px'
            },
            swiper: undefined,
            currentSlide: 0,
            banners: [
                {
                    id: 0,
                    title: "GREETINGS",
                    description: `
                        <p class="font-sub text-light">My name is <span class="font-sub text-turquoise font-bold">Jeryl Teo</span></p>
                        <p class="font-sub text-light mt-4">I am a Full Stack Web Developer, Swimming Instructor and Photographer</p>
                        <p class="font-sub text-light mt-4 2xl:w-2/3">Hover over the banners at the bottom to explore, or click on my navigation links for services!</p>
                        <p class="font-sub text-light text-xs opacity-75 mt-4 2xl:w-2/3">*Only Landing, Website & Contact Page is working currently.</p>
                    `,
                    socialMedia: true,
                    linkText: "WORK WITH ME >",
                    link: "contact",
                    image: `<img src="./resources/images/about_me.svg" :alt="data.title" class="h-3/4 object-cover">`,
                },
                {
                    id: 1,
                    title: "WEB DEVELOPER",
                    description: `
                        <p class="font-sub text-light">Achieved WorldSkills Singapore - <span class="font-sub text-turquoise font-bold">Gold</span></p>
                        <p class="font-sub text-light mt-4">Providing a <span class="font-sub text-light italic font-bold">solution</span> to everyone's needs</p>
                        <p class="font-sub text-light mt-4 2xl:w-2/3">Portfolios, Web Applications, e-Commerce ...</p>
                    `,
                    linkText: "MORE INFORMATION >",
                    link: "website",
                    image: `<img src="./resources/images/agasrevamp.png" :alt="data.title" class="w-full object-contain rounded shadow">`,
                    caption: "THE SHADES LAB",
                },
                {
                    id: 2,
                    title: "SWIMMING INSTRUCTOR",
                    description: `
                        <p class="font-sub text-light">I am an <span class="font-sub text-turquoise font-bold">Internationally</span> certified Swimming Instructor</p>
                        <p class="font-sub text-light mt-4">I currently teach at <span class="font-sub text-turquoise font-bold">SAFRA</span> and <span class="font-sub text-turquoise font-bold">FREELANCE</span></p>
                        <p class="font-sub text-light mt-4 2xl:w-2/3">First to the egg, swimming till 18, teaching ever since.</p>
                    `,
                    linkText: "LEARN SWIMMING WITH ME >",
                    link: "swimming",
                    image: `<img src="./resources/images/open-doodles-bikini.svg" :alt="data.title" class="w-2/3 object-contain">`,
                },
                {
                    id: 3,
                    title: "FREELANCER",
                    description: `
                        <p class="font-sub text-light">I have an avid <span class="font-sub text-turquoise font-bold">passion</span> for photography</p>
                        <p class="font-sub text-light mt-4">Using a <span class="font-sub text-turquoise font-bold">Nikon ..?</span> as my weapon of choice</p>
                        <p class="font-sub text-light mt-4 2xl:w-2/3">I take portraits, macros, events and more!</p>
                    `,
                    linkText: "TAKE PICTURES WITH ME >",
                    link: "photography",
                    image: `<img src="./resources/images/gal2.jpg" :alt="data.title" class="w-2/3 object-contain rounded shadow">`,
                    caption: "MINI CACTUS @ NATIONAL GALLERY, SINGAPORE",
                    largeOnly: true
                }
            ]
        }
    },
    methods: {
        link(link) {
            this.$emit("link", link);
        },
        dynamicResize() {
            this.resize.height = window.innerHeight - this.header.$el.clientHeight + "px";
            this.banners.forEach(ban => {
                if (ban.id != 0) {
                    ban.largeOnly = (window.innerWidth < 1024) ? true : false;
                }
            })
        },
        initSwiper() {
            this.swiper = new Swiper('.swiper-container', {
                loop: true,
                speed: 500,
                simulateTouch: false,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                observer: true,
                observeParents: true,
                parallax: true,
            })
            this.swiper.on('transitionEnd', ()=> {
                this.currentSlide = this.swiper.realIndex;
            })
        },
        changeSlide(slide) {
            console.log(this.currentSlide + " | " + this.swiper.realIndex);
            this.currentSlide = slide;
            this.swiper.slideTo(this.currentSlide+1);
        },

    },
    created() {
        window.addEventListener('resize', this.dynamicResize);
    },
    mounted() {
        this.dynamicResize();
        this.initSwiper();
    },
    destroyed() {
        window.removeEventListener('resize', this.dynamicResize);
    }
})