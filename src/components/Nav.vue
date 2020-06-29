<template>
  <div class="nav">
    <router-link to="/money">
      <svg>
        <use xlink:href="#labels"></use>
      </svg>
      Money
    </router-link>
    |
    <router-link to="/labels">Labels</router-link>
    |
    <router-link to="/statistics">Statistics</router-link>
  </div>
</template>

<script lang="ts">
  const importAllSVG = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
  try{
    importAllSVG(require.context('../assets/icons',true, /\.svg$/));
  }catch (error) {
    console.log(error);
  }
 





  export default {
    name: 'Nav'
  }
</script>

<style lang="scss" scoped>
  .nav {border: 1px solid red;}
</style>