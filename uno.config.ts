import { defineConfig, presetUno, transformerDirectives, transformerVariantGroup, presetIcons, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        // these will extend the default theme
        worksans: {
          name: 'Work Sans',
          weights: [700],
          italic: true
        }
      }
    })
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ],
  theme: {
    colors: {
      primary: '#43caf2',
      secondary: '#f8c02c'
    }
  },
  shortcuts: {
    'break-anywhere': '[word-break:break-word] [@supports(overflow-wrap:anywhere)]:[overflow-wrap:anywhere] [@supports(overflow-wrap:anywhere)]:[word-break:normal]',

    'bg-gradient-primary': 'bg-gradient-to-r from-sky-500 to-primary', //  from-30% to-80%
    'bg-brand': 'bg-gradient-to-r from-20% to-80% from-primary to-secondary',

    'text-clip-bg': 'inline-block text-transparent bg-clip-text',
    'text-gradient-primary': 'bg-gradient-primary text-clip-bg',
    'text-brand': 'bg-brand text-clip-bg'
  }
})
