Vue.component('app-contact', {
    template:
    `
    <section :style="resize" class="container mx-auto p-8 pt-0 xl:pt-8 flex items-center justify-center">
        <article class="w-3/4 mx-auto">
            <h1 class="text-3xl xl:text-5xl text-light font-semibold">{{form.title}}</h1>
            <p v-if="form.description" class="text-light font-medium opacity-50 mt-4">{{form.description}}</p>
            <div class="w-1/2 mx-auto md:ml-0 h-1.5 bg-turquoise my-8 xl:my-14"></div>
            <form>
                <!-- STAGE 1 - FORM BEGINNING -->
                <div id="form-1-services" v-if="form.stage == 1">
                    <label for="webdev" class="font-sub text-sm md:text-base xl:text-lg font-medium text-light bg-turquoise py-4 px-8 shadow rounded flex items-center">
                        <input v-model="form.service" type="radio" name="service" id="webdev" value="webdev" class="bg-dark rounded-full w-6 h-6 mr-4 checked:bg-blue-600 checked:border-transparent">
                        WEB DEVELOPMENT
                    </label>
                    <label for="swimming" class="font-sub text-sm md:text-base xl:text-lg font-medium text-light bg-turquoise py-4 px-8 shadow rounded flex items-center mt-2">
                        <input v-model="form.service" type="radio" name="service" id="swimming" value="swimming" class="bg-dark rounded-full w-6 h-6 mr-4 checked:bg-blue-600 checked:border-transparent">
                        SWIMMING LESSONS
                    </label>
                    <label for="photography" class="font-sub text-sm md:text-base xl:text-lg font-medium text-light bg-turquoise py-4 px-8 shadow rounded flex items-center mt-2">
                        <input v-model="form.service" type="radio" name="service" id="photography" value="photography" class="bg-dark rounded-full w-6 h-6 mr-4 checked:bg-blue-600 checked:border-transparent">
                        PHOTOGRAPHY
                    </label>
                    <label for="others" class="font-sub text-sm md:text-base xl:text-lg font-medium text-light bg-turquoise py-4 px-8 shadow rounded flex items-center mt-2">
                        <input v-model="form.service" type="radio" name="service" id="others" value="others" class="bg-dark rounded-full w-6 h-6 mr-4 checked:bg-blue-600 checked:border-transparent">
                        OTHERS
                    </label>
                </div>
                <!-- STAGE 2 - SERVICE DETAIL -->
                <!-- STAGE 2 - WEB DEVELOPMENT -->
                <div id="form-2-webdev" v-if="form.stage == 2 && form.service=='webdev'">
                    <textarea v-model="form.webdev" class="bg-transparent border-2 custom_border p-2 rounded w-full text-sm md:text-base xl:text-lg text-light h-40" placeholder="Bla bla bla..." name="webdev-info" id="webdev-info"></textarea>
                    <p class="text-turquoise mt-4"><span class="text-sm md:text-base font-medium">Enter ↵</span> to make a line break</p>
                </div>
                <!-- STAGE 2 - SWIMMING -->
                <div id="form-2-swimming" v-if="form.stage == 2 && form.service=='swimming'">
                    <label for="babies" class="font-sub text-sm md:text-base xl:text-lg font-medium text-light bg-turquoise py-4 px-8 shadow rounded flex items-center mt-2">
                        <input v-model="form.swimming" type="radio" name="swimming-type" id="babies" value="babies" class="bg-dark rounded-full w-6 h-6 mr-4 checked:bg-blue-600 checked:border-transparent">
                        BABIES
                    </label>
                    <label for="toddlers" class="font-sub text-sm md:text-base xl:text-lg font-medium text-light bg-turquoise py-4 px-8 shadow rounded flex items-center mt-2">
                        <input v-model="form.swimming" type="radio" name="swimming-type" id="toddlers" value="toddlers" class="bg-dark rounded-full w-6 h-6 mr-4 checked:bg-blue-600 checked:border-transparent">
                        TODDLERS
                    </label>
                    <label for="teenagers" class="font-sub text-sm md:text-base xl:text-lg font-medium text-light bg-turquoise py-4 px-8 shadow rounded flex items-center mt-2">
                        <input v-model="form.swimming" type="radio" name="swimming-type" id="teenagers" value="teenagers" class="bg-dark rounded-full w-6 h-6 mr-4 checked:bg-blue-600 checked:border-transparent">
                        TEENAGERS
                    </label>
                    <label for="adults" class="font-sub text-sm md:text-base xl:text-lg font-medium text-light bg-turquoise py-4 px-8 shadow rounded flex items-center mt-2">
                        <input v-model="form.swimming" type="radio" name="swimming-type" id="adults" value="adults" class="bg-dark rounded-full w-6 h-6 mr-4 checked:bg-blue-600 checked:border-transparent">
                        ADULTS
                    </label>
                </div>
                <!-- STAGE 2 - PHOTOGRAPHY -->
                <div id="form-2-photography" v-if="form.stage == 2 && form.service=='photography'">
                    <label for="portraits" class="font-sub text-sm md:text-base xl:text-lg font-medium text-light bg-turquoise py-4 px-8 shadow rounded flex items-center mt-2">
                        <input v-model="form.photography" type="radio" name="photography-type" id="portraits" value="portraits" class="bg-dark rounded-full w-6 h-6 mr-4 checked:bg-blue-600 checked:border-transparent">
                        PORTRAITS
                    </label>
                    <label for="landscapes" class="font-sub text-sm md:text-base xl:text-lg font-medium text-light bg-turquoise py-4 px-8 shadow rounded flex items-center mt-2">
                        <input v-model="form.photography" type="radio" name="photography-type" id="landscapes" value="landscapes" class="bg-dark rounded-full w-6 h-6 mr-4 checked:bg-blue-600 checked:border-transparent">
                        LANDSCAPES
                    </label>
                    <label for="macro" class="font-sub text-sm md:text-base xl:text-lg font-medium text-light bg-turquoise py-4 px-8 shadow rounded flex items-center mt-2">
                        <input v-model="form.photography" type="radio" name="photography-type" id="macro" value="macro" class="bg-dark rounded-full w-6 h-6 mr-4 checked:bg-blue-600 checked:border-transparent">
                        MACRO/FLORAL
                    </label>
                    <label for="events" class="font-sub text-sm md:text-base xl:text-lg font-medium text-light bg-turquoise py-4 px-8 shadow rounded flex items-center mt-2">
                        <input v-model="form.photography" type="radio" name="photography-type" id="events" value="events" class="bg-dark rounded-full w-6 h-6 mr-4 checked:bg-blue-600 checked:border-transparent">
                        EVENTS
                    </label>
                    <label for="others" class="font-sub text-sm md:text-base xl:text-lg font-medium text-light bg-turquoise py-4 px-8 shadow rounded flex items-center mt-2">
                        <input v-model="form.photography" type="radio" name="photography-type" id="others" value="others" class="bg-dark rounded-full w-6 h-6 mr-4 checked:bg-blue-600 checked:border-transparent">
                        OTHERS
                    </label>
                </div>
                <!-- STAGE 2 - OTHERS -->
                <div id="form-2-others" v-if="form.stage == 2 && form.service=='others'">
                    <textarea v-model="form.others" class="bg-transparent border-2 custom_border p-2 rounded w-full text-sm md:text-base xl:text-lg text-light h-40" placeholder="Bla bla bla..."></textarea>
                    <p class="text-turquoise mt-4"><span class="text-sm md:text-base font-medium">Enter ↵</span> to make a line break</p>
                </div>

                <!-- STAGE 3 - ADDITIONAL DETAILS -->
                <div id="form-3-additional" v-if="form.stage == 3">
                    <textarea v-model="form.additional" class="bg-transparent border-2 custom_border p-2 rounded w-full text-sm md:text-base xl:text-lg text-light h-40" placeholder="Bla bla bla..."></textarea>
                    <p class="text-turquoise mt-4"><span class="text-sm md:text-base font-medium">Enter ↵</span> to make a line break</p>
                </div>
                
                <!-- STAGE 4 - ADDRESS -->
                <div id="form-4-address" v-if="form.stage == 4">
                    <input type="text" v-model="form.name" class="bg-transparent border-2 custom_border p-2 rounded w-full text-sm md:text-base xl:text-lg text-light py-4" placeholder="John Cena"></textarea>
                </div>

                <!-- STAGE 5 - EMAIL -->
                <div id="form-5-email" v-if="form.stage == 5">
                    <input type="email" v-model="form.email" class="bg-transparent border-2 custom_border p-2 rounded w-full text-sm md:text-base xl:text-lg text-light py-4" placeholder="Johncena@email.com"></textarea>
                </div>

                <!-- STAGE 6 - FINAL -->
                

                <p v-if="error.error" class="text-sm md:text-base text-red-300 font-medium mt-8">{{error.msg}}</p>
                <div class="flex justify-between items-end mt-8 flex-wrap sm:flex-nowrap" v-if="form.stage != 6">
                    <button @click="nextFormSection" type="button" class="w-full sm:w-auto transform hover:scale-105 transition-all custom_btn bg-light px-16 py-4 text-base xl:text-lg font-medium font-sub rounded">NEXT</button>
                    <p class="font-sub text-sm opacity-50 text-turquoise mt-2 sm:mt-0 ml-auto">{{form.stage}}/6</p>
                </div>
                <div class="flex justify-between items-end mt-8 flex-wrap sm:flex-nowrap" v-if="form.stage == 6">
                    <button @click="emitHome" type="button" class="w-full sm:w-auto transform hover:scale-105 transition-all custom_btn bg-light px-16 py-4 text-base xl:text-lg font-medium font-sub rounded">BACK TO LANDING PAGE</button>
                    <p class="font-sub text-sm opacity-50 text-turquoise mt-2 sm:mt-0 ml-auto">{{form.stage}}/6</p>
                </div>
            </form>
        </article>
    </section>
    `,
    props: ["header"],
    data() {
        return {
            resize: {
                height: '900px'
            },
            form: {
                title: "Hey there, what would you like to talk about?",
                description: "",
                stage: 1,
                // stage: {
                //     one: true,      // welcome page
                //     two: false,     // service page
                //     three: false,   // additional info
                //     four: false,    // address page
                //     five: false,    // submit
                // },
                service: "",
                webdev: "",
                swimming: "",
                photography: "",
                others: "",
                additional: "",
                name: "",
                email: "",
            },
            error: {
                error: false,
                msg: ""
            }
        }
    },
    methods: {
        dynamicResize() {
            this.resize.height = window.innerHeight - this.header.$el.clientHeight + "px";
        },
        nextFormSection() {
            console.log(this.form);
            if (this.form.stage == 1) {
                if (this.form.service) {
                    this.error.error = false;
                    this.error.msg = "";
    
                    switch (this.form.service) {
                        case "webdev":
                            this.form.title = "Web Development? Awesome. Let me know a little bit more!";
                            this.form.description = "Is this for a portfolio? Maybe an eCommerce website?";
                            break;
                        case "swimming":
                            this.form.title = "Swimming Lessons? Fantastic. Which age group are you targeting?"
                            this.form.description = "";
                            break;
                        case "photography":
                            this.form.title = "Photography? Wonderful. What kind of service are you looking for?"
                            this.form.description = "";
                            break;
                        case "others":
                            this.form.title = "Others? I aim to please. Tell me your desire."
                            this.form.description = "I will try my best!";
                            break;
                    }
                    
                    this.form.stage = 2;
                }
                else {
                    this.error.error = true;
                    this.error.msg = "Please select one of the options before continuing!"
                }
            }
            else if (this.form.stage == 2) {
                if (this.form.swimming || this.form.photography) {
                    this.error.error = false;
                    this.error.msg = "";
                    this.form.title = "Any additional information I should know?"
                    this.form.description = "This is optional, feel free to skip!";
                    this.form.stage = 3;
                }
                else if (this.form.webdev || this.form.others) {
                    this.error.error = false;
                    this.error.msg = "";
                    this.form.title = "How may I address you?";
                    this.form.description = "Or a nickname, if you prefer"
                    this.form.stage = 4;
                }
                else {
                    this.error.error = true;
                    this.error.msg = "Please select an option or provide some information before continuing!"
                }
            }
            else if (this.form.stage == 3) {
                this.error.error = false;
                this.error.msg = "";
                this.form.title = "How may I address you?";
                this.form.description = "Or a nickname, if you prefer"
                this.form.stage = 4;
            }
            else if (this.form.stage == 4) {
                if (this.form.name) {
                    this.error.error = false;
                    this.error.msg = "";
                    this.form.title = "Thanks! Finally, what's the best email address for me to contact you?"
                    this.form.description = "I will be in touch in the next 2-3 days*";
                    this.form.stage = 5;
                }
                else {
                    this.error.error = true;
                    this.error.msg = "I really need to know your name!"
                }
            }
            else if (this.form.stage == 5) {
                Email.send({
                    SecureToken: "c09c03b1-dcd2-4269-88f9-4fadf3497fab",
                    To: "jeryl.teo.si@gmail.com",
                    From: "jeryl.teosi@gmail.com",
                    Subject: "jerylteo.com | New Contact Form - " + this.form.name,
                    Body: `
                        ===== <br>
                        Name: ${this.form.name} <br>
                        Email: ${this.form.email} <br><br>

                        Service: ${this.form.service} <br>
                        ${this.form.service == 'webdev' ? 'Webdev: '+this.form.webdev : ''}
                        ${this.form.service == 'swimming' ? 'Swimming: '+this.form.swimming : ''}
                        ${this.form.service == 'photography' ? 'Photography: '+this.form.photography : ''}
                        ${this.form.service == 'others' ? 'Others: '+this.form.others : ''}

                        <br>
                        ${this.form.additional ? 'Additional Information:'+this.form.additional : ''}
                        =====
                    `
                })
                this.form.title = "Sent! I will get back to you in the next 2-3 days";
                this.form.description = "Let's be friends!";
                this.form.stage = 6;
            }
        },
        emitHome() {
            this.$emit("link", "landing");
        }
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