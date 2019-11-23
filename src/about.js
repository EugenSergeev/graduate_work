import "./pages/about.css"
import "../node_modules/@glidejs/glide/dist/css/glide.core.min.css"
import "../node_modules/@glidejs/glide/dist/glide.min.js"

import Glide from '@glidejs/glide'
import { Controls, Breakpoints } from '../node_modules/@glidejs/glide/dist/glide.modular.esm'

var glide = new Glide('.glide', {
  type: 'slide',
  perView: 4,
  gap: 16,
  peek: 1,
  focusAt: 'center',
})

glide.mount({ Controls, Breakpoints })
