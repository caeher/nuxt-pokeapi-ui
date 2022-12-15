export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('click-outside', {
        mounted (el, binding, vnode) {
            el.clickOutsideEvent = (e: Event) => {
                // console.log(el, binding, vnode)
            }

            addEventListener('click', el.clickOutsideEvent)
        },
        unmounted (el) {
            removeEventListener('click', el.clickOutsideEvent)
        }
    })
})
