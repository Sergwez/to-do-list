<template>
  <svg class="icon" :style = "`min-width: ${iconwidth}; min-height: ${iconheight}`" fill="currentColor" :width="iconwidth" :height="iconheight" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path class="icon__path" :fill="iconcolor" :d="iconpath"></path>
  </svg>
</template>

<script>
export default {
  name: 'MdiIcon',
  props:{
    iconpath: {
      type: String,
      required: true
      },
    iconwidth: {
      type: String,
      default: '24'
      },
    iconheight: {
      type: String,
      default: '24'
      },
    iconcolor: {
      type: String,
      default: '#000000'
      },
  }
}
</script>


