Vue.component('app-website', {
    template:
    `
    <section :style="resize" class="container mx-auto p-8 pt-0 xl:pt-8 flex flex-col">
        <section class="flex-grow">
            <article class="swiper-container h-full">
                <div class="swiper-wrapper h-full">
                    <div class="swiper-slide h-full px-0 md:px-4 lg:px-0" v-for="(data, index) in banners">
                        <div class="h-full w-3/4 mx-auto flex flex-col p-8" @mouseover="showDeets(index)" @mouseleave="hideDeets(index)">
                            <div class="w-full h-full max-h-3 relative">
                                <img :src="data.image" :alt="data.title" class="h-3/4 lg:h-full w-full shadow-lg rounded-lg object-cover transition-all" :class="[popUp ? 'bg-blur' : '']">
                                <div class="w-full absolute bottom-0 left-0 overflow-hidden z-40 transition-all hidden lg:flex items-center justify-center" :class="[popUp ? 'h-full' : 'h-0']">
                                    <div class="p-8 lg:p-10 border-4 border-turquoise flex flex-col text-center bg-black bg-opacity-50">
                                        <h1 class="text-5xl sm:text-6xl text-light">{{data.title}}</h1>
                                        <div class="w-full md:ml-0 h-1.5 bg-turquoise my-8 line-animate"></div>
                                        <div ref="description" v-html="data.description"></div>
                                        <a :href="data.link" class="text-turquoise block text-lg font-medium mt-8 xl:mt-10 link-animate-off">Check It Out <i class="fas fa-angle-double-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <a v-if="data.caption" class="text-center text-sm font-medium text-light opacity-50 mt-4">{{data.caption}}</a>
                            <div class="w-full flex lg:hidden items-center justify-center">
                                <div class="flex flex-col text-center">
                                    <h1 class="text-2xl text-light">{{data.title}}</h1>
                                    <div class="w-full md:ml-0 h-1.5 bg-turquoise my-8 line-animate"></div>
                                    <div ref="description" v-html="data.description"></div>
                                    <a :href="data.link" class="text-turquoise block text-lg font-medium mt-8 xl:mt-10 link-animate-off">Check It Out <i class="fas fa-angle-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </section>
        <nav class="hidden lg:flex justify-between items-center text-light mt-8">
            <div class="flex items-center pb-2 pr-2 border-b-2 nav-animate" :class="[currentSlide == 0 ? 'opacity-100 border-turquoise' : 'opacity-50 border-transparent']" @click="changeSlide(0)">
                <span class="text-turquoise text-sm inline-block mr-4">00</span>
                <span class="text-light text-sm inline-block">TheShadesLab</span>
            </div>
            <div class="flex items-center pb-2 pr-2 border-b-2 nav-animate" :class="[currentSlide == 1 ? 'opacity-100 border-turquoise' : 'opacity-50 border-transparent']" @click="changeSlide(1)">
                <span class="text-turquoise text-sm inline-block mr-4">01</span>
                <span class="text-light text-sm inline-block">AGAS Revamp</span>
            </div>
            <div class="flex items-center pb-2 pr-2 border-b-2 nav-animate" :class="[currentSlide == 2 ? 'opacity-100 border-turquoise' : 'opacity-50 border-transparent']" @click="changeSlide(2)">
                <span class="text-turquoise text-sm inline-block mr-4">02</span>
                <span class="text-light text-sm inline-block">ALIEN SPACE CRAB</span>
            </div>
            <div class="flex items-center pb-2 pr-2 border-b-2 nav-animate" :class="[currentSlide == 3 ? 'opacity-100 border-turquoise' : 'opacity-50 border-transparent']" @click="changeSlide(3)">
                <span class="text-turquoise text-sm inline-block mr-4">03</span>
                <span class="text-light text-sm inline-block">SWIMBRIGHT</span>
            </div>
            <div class="flex items-center pb-2 pr-2 border-b-2 nav-animate" :class="[currentSlide == 4 ? 'opacity-100 border-turquoise' : 'opacity-50 border-transparent']" @click="changeSlide(4)">
                <span class="text-turquoise text-sm inline-block mr-4">04</span>
                <span class="text-light text-sm inline-block">TIANEN PORTFOLIO</span>
            </div>
        </nav>
        <nav class="flex lg:hidden justify-center items-center">
            <div class="w-4 h-4 rounded-full mr-4" :class="[currentSlide == 0 ? 'opacity-100 bg-turquoise' : 'opacity-50 bg-light']" @click="changeSlide(0)"></div>
            <div class="w-4 h-4 rounded-full mr-4" :class="[currentSlide == 1 ? 'opacity-100 bg-turquoise' : 'opacity-50 bg-light']" @click="changeSlide(1)"></div>
            <div class="w-4 h-4 rounded-full mr-4" :class="[currentSlide == 2 ? 'opacity-100 bg-turquoise' : 'opacity-50 bg-light']" @click="changeSlide(2)"></div>
            <div class="w-4 h-4 rounded-full mr-4" :class="[currentSlide == 3 ? 'opacity-100 bg-turquoise' : 'opacity-50 bg-light']" @click="changeSlide(3)"></div>
            <div class="w-4 h-4 rounded-full" :class="[currentSlide == 4 ? 'opacity-100 bg-turquoise' : 'opacity-50 bg-light']" @click="changeSlide(4)"></div>
        </nav>
    </section>
    `,
    props: ["header"],
    data() {
        return {
            resize: {
                height: '900px'
            },
            swiper: undefined,
            currentSlide: 0,
            banners: [
                {
                    id: 0,
                    title: "TheShadesLab",
                    description: `
                        <p class="font-sub text-light">A product website for <span class="font-sub text-turquoise font-bold">TheShadesLab</span></p>
                        <p class="font-sub text-light mt-4">Frameworks: Laravel (Nova), VueJS, InertiaJS</p>
                        <p class="font-sub text-light mt-4">Developed during my internship period @ PixelSquad Pte Ltd</p>
                        <p class="font-sub text-light mt-4">Project Duration: <span class="font-sub text-turquoise font-bold">4-8 Weeks</span></p>
                    `,
                    socialMedia: true,
                    link: "https://theshadeslab.com",
                    image: "./resources/images/theshadeslab.png",
                    caption: "TheShadesLab"
                },
                {
                    id: 1,
                    title: "AGAS Revamp",
                    description: `
                        <p class="font-sub text-light">A gallery website for the <span class="font-sub text-turquoise font-bold">Art Galleries Association of Singapore</span></p>
                        <p class="font-sub text-light mt-4">Frameworks: WordPress, VueJS</p>
                        <p class="font-sub text-light mt-4">Developed during my internship period @ PixelSquad Pte Ltd</p>
                        <p class="font-sub text-light mt-4">Project Duration: <span class="font-sub text-turquoise font-bold">3-5 Weeks</span></p>
                    `,
                    socialMedia: true,
                    link: "https://agas.org.sg",
                    image: "./resources/images/agasrevamp.png",
                    caption: "AGAS Revamp"
                },
                {
                    id: 2,
                    title: "ALIEN SPACE CRAB",
                    description: `
                        <p class="font-sub text-light">A product website for the people of <span class="font-sub text-turquoise font-bold">Alien Space Crab</span></p>
                        <p class="font-sub text-light mt-4">Framework: SquareSpace</p>
                        <p class="font-sub text-light mt-4">Developed during my internship period @ PixelSquad Pte Ltd</p>
                        <p class="font-sub text-light mt-4">Project Duration: <span class="font-sub text-turquoise font-bold">3-5 Weeks</span></p>
                    `,
                    socialMedia: true,
                    link: "https://alienspacecrab.com",
                    image: "./resources/images/alienspacecrab.png",
                    caption: "ALIEN SPACE CRAB"
                },
                {
                    id: 3,
                    title: "SWIM BRIGHT",
                    description: `
                        <p class="font-sub text-light">An advertising website for a freelance swimming company - <span class="font-sub text-turquoise font-bold">SWIM BRIGHT</span></p>
                        <p class="font-sub text-light mt-4">Frameworks: WordPress, VueJS</p>
                        <p class="font-sub text-light mt-4">Developed as a freelancer</p>
                        <p class="font-sub text-light mt-4">Project Duration: <span class="font-sub text-turquoise font-bold">3-5 Weeks</span></p>
                    `,
                    socialMedia: true,
                    link: "http://swimbright.sg",
                    image: "./resources/images/swimbright.png",
                    caption: "SWIMBRIGHT"
                },
                {
                    id: 4,
                    title: "Tian En's Portfolio",
                    description: `
                        <p class="font-sub text-light">A portfolio website for my girlfriend - <span class="font-sub text-turquoise font-bold">Tian En's Portfolio</span></p>
                        <p class="font-sub text-light mt-4">Frameworks: HTML, CSS, JS</p>
                        <p class="font-sub text-light mt-4">Assisted in development</p>
                        <p class="font-sub text-light mt-4">Project Duration: <span class="font-sub text-turquoise font-bold">3 Weeks</span></p>
                    `,
                    socialMedia: true,
                    link: "https://tianen0699.github.io",
                    image: "./resources/images/tianen.png",
                    caption: "TIAN EN"
                },
            ],
            popUp: false,
        }
    },
    methods: {
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
        showDeets(index) {
            console.log(index);
            this.popUp = true;
        },
        hideDeets(index) {
            this.popUp = false;
        }
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