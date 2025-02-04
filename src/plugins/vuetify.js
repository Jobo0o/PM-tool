import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi'
    },
    theme: {
        themes: {
            light: {
                primary: '#9652FF',
                success: '#3cd1c2',
                info: '#FFAA2C',
                error: '#F83E70'
            },
            dark: true
        }
    }
});
