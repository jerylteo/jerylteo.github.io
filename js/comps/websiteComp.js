Vue.component('app-website', {
    template:
    `
    <section :style="resize" class="container mx-auto p-8 pt-0 xl:pt-8 flex items-center justify-center">
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