import { defineConfig } from 'unocss'
import { ogogoPreset } from '@tumarsoft/ogogo-ui'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  presets: [presetUno(), ogogoPreset()],
})
