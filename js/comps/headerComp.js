Vue.component('Header', {
    template:
    `
    <header class="container mx-auto px-8 py-8 flex items-center justify-between">
        <button class="text-light" @click.prevent="link('landing')">
            <span class="text-turquoise">< </span>
            <h1 class="inline-block text-xl">JERYL TEO</h1>
            <span class="text-turquoise"> /></span>
        </button>
        <button class="block lg:hidden" @click.prevent="showMenu">
            <div class="w-8 h-8">
                <img src="./resources/icons/menu.svg" alt="Menu">
            </div>
        </button>
        <nav class="hidden lg:flex flex-col lg:flex-row justify-center lg:justify-between items-end lg:items-center lg:w-2/3 xl:w-7/12 2xl:w-1/2 text-light z-50" ref="navMenu">
            <button class="block lg:hidden absolute top-8 right-8" @click.prevent="closeMenu">
                <div class="w-8 h-8">
                    <img src="./resources/icons/cancel.svg" alt="Cancel">
                </div>
            </button>
            <button @click="link('landing')" class="block mb-10 mr-8 lg:mb-0 lg:mr-0"><span class="text-turquoise text-xl lg:text-sm">< </span><p class="inline text-3xl lg:text-base transition-all hover:text-white" :class="[currentComp=='landing' ? 'text-light' : 'text-turquoise']">LANDING PAGE</p><span class="text-turquoise text-lg lg:text-sm"> /></span></button>
            <button @click="link('website')" class="block mb-10 mr-8 lg:mb-0 lg:mr-0"><span class="text-turquoise text-xl lg:text-sm">< </span><p class="inline text-3xl lg:text-base transition-all hover:text-white" :class="[currentComp=='website' ? 'text-light' : 'text-turquoise']">WEBSITE</p><span class="text-turquoise text-lg lg:text-sm"> /></span></router-link></button>
            <button @click="link('swimming')" class="block mb-10 mr-8 lg:mb-0 lg:mr-0"><span class="text-turquoise text-xl lg:text-sm">< </span><p class="inline text-3xl lg:text-base  transition-all hover:text-white" :class="[currentComp=='swimming' ? 'text-light' : 'text-turquoise']">SWIMMING</p><span class="text-turquoise text-lg lg:text-sm"> /></span></router-link></button>
            <button @click="link('photography')" class="block mb-10 mr-8 lg:mb-0 lg:mr-0"><span class="text-turquoise text-xl lg:text-sm">< </span><p class="inline text-3xl lg:text-base transition-all hover:text-white" :class="[currentComp=='photography' ? 'text-light' : 'text-turquoise']">PHOTOGRAPHY</p><span class="text-turquoise text-lg lg:text-sm"> /></span></router-link></button>
            <button @click="link('contact')" class="block mr-8 lg:mr-0"><span class="text-turquoise text-xl lg:text-sm">< </span><p class="inline text-3xl lg:text-base transition-all hover:text-white" :class="[currentComp=='contact' ? 'text-light' : 'text-turquoise']">CONTACT</p><span class="text-turquoise text-lg lg:text-sm"> /></span></router-link></button>
        </nav>

    </header>
    `,
    props: ['currentComp'],
    data() {
        return {

        }
    },
    methods: {
        link(link) {
            this.closeMenu();
            this.$emit("link", link);
        },
        showMenu() {
            let navMenu = this.$refs.navMenu;
            navMenu.classList.remove("closeMenu");
            navMenu.classList.remove("hidden");
            navMenu.classList.add("showMenu");
            navMenu.classList.add("flex");
            (window.innerWidth < 768) ? navMenu.classList.add("w-full") : navMenu.classList.add("w-1/2");
            navMenu.classList.add("fixed");
            navMenu.classList.add("top-0");
            navMenu.classList.add("h-screen");
            navMenu.classList.add("bg-grey");
        },
        closeMenu() {
            let navMenu = this.$refs.navMenu;
            navMenu.classList.add("closeMenu");
            navMenu.classList.remove("flex");
            (window.innerWidth < 768) ? navMenu.classList.remove("w-full") : navMenu.classList.remove("w-1/2");
            navMenu.classList.remove("fixed");
            navMenu.classList.remove("top-0");
            navMenu.classList.remove("h-screen");
            navMenu.classList.remove("bg-grey");
            navMenu.classList.add("hidden");
        },
    }
})