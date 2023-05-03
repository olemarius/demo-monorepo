import { createSSRApp, h } from 'vue'
import PageLayout from './PageLayout.vue'

import { inject } from '@vercel/analytics';
export { createApp }
inject();

function createApp(pageContext) {
  const { Page, pageProps } = pageContext
  const PageWithLayout = {
    render() {
      return h(
        PageLayout,
        {},
        {
          default() {
            return h(Page, pageProps || {})
          },
        },
      )
    },
  }

  const app = createSSRApp(PageWithLayout)

  return app
}