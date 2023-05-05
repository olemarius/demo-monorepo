import { createSSRApp, h } from 'vue';
import PageLayout from './PageLayout.vue';

import { inject } from '@vercel/analytics';
export { createApp };
inject();

import en from '../locales/en.json';
import fr from '../locales/fr.json';

import { createI18n } from 'vue-i18n';

type MessageSchema = typeof en


const i18n = createI18n<[MessageSchema], 'en' | 'fr'>({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
        en,
        fr,
    }
});

function createApp(pageContext: any) {
    const { Page, pageProps } = pageContext;
    
    const PageWithLayout = {
        render() {
            return h(
                PageLayout,
                {},
                {
                    default() {
                        return h(Page, pageProps || {});
                    },
                },
            );
        },
    };

    const app = createSSRApp(PageWithLayout);
    app.use(i18n);
    return app;
}