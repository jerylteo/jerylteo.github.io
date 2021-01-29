Vue.component('app-main', {
    template:
    `
    <section class="w-screen min-h-screen bg-dark relative" style="cursor: none;" @mousemove="mouseMove" @mouseup="mouseUp" @mousedown="mouseDown" @mouseleave="mouseLeave" @mouseenter="mouseEnter">
        <Header :currentComp="currentComp" @link="changeComp" ref="header"></Header>
        <transition name="fade" mode="out-in">
            <app-landing :header="header" v-if="currentComp == 'landing'"></app-landing>
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
            header: this.$refs.header,
            currentComp: "",
            cursor: undefined,
            resize: {
                height: '900px'
            },
        }
    },
    methods: {
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
        }
    },
    mounted() {
        this.currentComp = "landing";
        this.header = this.$refs.header;
        this.initCursor();
    },
})