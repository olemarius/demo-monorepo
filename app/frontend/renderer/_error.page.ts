// renderer/_error.page.js

export { Page };

function Page(pageProps: any) {
    if (pageProps.is404) {
    // Return a UI component "Page Not Found."
    } else {
    // Return a UI component "Our server is having problems. Sincere apologies. Try again later."
    }
}