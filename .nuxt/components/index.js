export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'
export { default as Footer } from '../../components/footer.vue'
export { default as Login } from '../../components/login.vue'
export { default as Navigation } from '../../components/navigation.vue'
export { default as HomepageBestSellers } from '../../components/homepage/best-sellers.vue'
export { default as HomepageCarousel } from '../../components/homepage/carousel.vue'
export { default as HomepageFeaturedBrand } from '../../components/homepage/featured-brand.vue'
export { default as HomepageNewArrivalOver } from '../../components/homepage/new-arrival-over.vue'
export { default as HomepageNewArrival } from '../../components/homepage/new-arrival.vue'
export { default as HomepageReview } from '../../components/homepage/review.vue'
export { default as HomepageViewshowroom } from '../../components/homepage/viewshowroom.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
