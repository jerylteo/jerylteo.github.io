Vue.component('app-main', {
    template:
    `
    <section class="w-screen min-h-screen bg-1 relative" style="cursor: none;" @mousemove="mouseMove" @mouseup="mouseUp" @mousedown="mouseDown" @mouseleave="mouseLeave" @mouseenter="mouseEnter">
        <section v-if="loading" class="h-full absolute top-0 bg-turquoise w-screen flex items-center justify-center" style="z-index: 999999" id="loadingScreen">
            <div class="text-center" id="loadingText">
                <div class="flex items-center flex-col md:flex-row">
                    <h1 class="text-5xl sm:text-6xl md:text-8xl 2xl:text-9xl text-light mt-6 md:mt-0 md:mr-6 order-2 md:order-1">JERYL TEO</h1>
                    <span class="animate-spin text-light order-1 md:order-2" v-html="loadingIcon" ref="loadingIconCon"></span>
                </div>
                <p class="font-sub text-light mt-8">Welcome to my Portfolio</p>
            </div>
        </section>
        <Header :currentComp="currentComp" @link="changeComp" ref="header"></Header>
        <transition name="fade" mode="out-in">
            <app-landing @link="changeComp" :header="header" v-if="currentComp == 'landing'"></app-landing>
            <app-website :header="header" v-if="currentComp == 'website'"></app-website>
            <app-swimming :header="header" v-if="currentComp == 'swimming'"></app-swimming>
            <app-photography :header="header" v-if="currentComp == 'photography'"></app-photography>
            <app-contact @link="changeComp" :header="header" v-else-if="currentComp == 'contact'"></app-contact>
            <div class="cursor" ref="cursor"></div>
        </transition>
        <div ref="cursor" class="cursor"></div>
    </section>
    `,
    data() {
        return {
            loading: true,
            loadingIcon: '<i class="fas fa-spinner fa-2x"></i>',
            header: this.$refs.header,
            currentComp: "",
            cursor: undefined,
            resize: {
                height: '900px'
            },
        }
    },
    methods: {
        init() {
            setTimeout(()=> {
                this.$refs.loadingIconCon.classList.remove("animate-spin");
                this.loadingIcon = '<i class="fas fa-check fa-2x"></i>';
            }, 3000);
            setTimeout(()=> {
                this.loading = false;
            }, 5000);
        },
        initCursor() {
            this.cursor = this.$refs.cursor;
        },
        mouseMove(e) {
            this.cursor.style.top =  e.clientY - this.cursor.clientHeight/2 +'px';
            this.cursor.style.left = e.clientX - this.cursor.clientWidth/2 +'px';
        },
        mouseUp(e) {
            this.cursor.style.transform = "scale(1)";
        },
        mouseDown(e) {
            this.cursor.style.transform = "scale(.2)";
        },
        mouseEnter(e) {
            this.cursor.style.opacity = "1";
        },
        mouseLeave(e) {
            this.cursor.style.opacity = "0"
        },
        changeComp(value) {
            this.currentComp = value;
            console.log(this.currentComp);
        },
    },
    mounted() {
        this.currentComp = "landing";
        this.header = this.$refs.header;
        this.initCursor();
        this.init();
    },
})