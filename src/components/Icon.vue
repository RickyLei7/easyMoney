<template>
  <div>
    <svg class="icon" @click="$emit('click', $event)">
      <use :xlink:href="'#'+name"/>
    </svg>
  </div>
</template>

<script lang="ts">
  const importAllSVG = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try {
    importAllSVG(require.context('../assets/icons', true, /\.svg$/));
  } catch (error) {
    console.log(error);
  }
  export default {
    name: 'Icon',
    props: ['name']
  };
</script>

<style lang="scss" scoped>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>