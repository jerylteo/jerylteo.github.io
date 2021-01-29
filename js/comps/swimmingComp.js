Vue.component('app-swimming', {
    template:
    `
    <section :style="resize" class="container mx-auto p-8 pt-0 xl:pt-8 flex items-center justify-center">
        <h1 class="text-5xl sm:text-6xl md:text-8xl 2xl:text-9xl text-light">Work In Progress</h1>
        <div class="w-2/3 md:w-full mx-auto">Check back again in a few more days!</div>

    </section>
    `,
    data() {
        return {
            resize: {
                height: '900px'
            },
        }
    },
    props: ['header'],
    methods: {
        dynamicResize() {
            this.resize.height = window.innerHeight - this.header.$el.clientHeight + "px";
        },

    },
    created() {
        window.addEventListener('resize', this.dynamicResize);
    },
    mounted() {
        this.dynamicResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.dynamicResize);
    }
})