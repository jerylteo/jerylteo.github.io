const mainComp = {template: '<app-main></app-main>'};
// const landingComp = {template: '<app-landing></app-landing>'};
// const websiteComp = {template: '<app-website></app-website>'};
// const swimmingComp = {template: '<app-swimming></app-swimming>'};
// const photographyComp = {template: '<app-photography></app-photography>'};
// const aboutComp = {template: '<app-about></app-about>'};
// const contactComp = {template: '<app-contact></app-contact>'};

const routes = [
    {path: '/', component: mainComp},
];

const router = new VueRouter({routes});