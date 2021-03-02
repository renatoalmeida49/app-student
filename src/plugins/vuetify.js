import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
            primary: '#F44336',
            secondary: '#F77C73',
            accent: '#021a64',
            error: '#b71c1c',
            },
        },
    },
});
