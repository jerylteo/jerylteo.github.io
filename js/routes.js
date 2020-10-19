const landingComp = {template: '<app-landing></app-landing>'};

const routes = [
    {path: '/', component: landingComp},
];

const router = new VueRouter({routes});