<script lang="ts">

    export default {
        props: {
            title: String
        }

    }

</script>

<template>
    <div class="backdrop">
    </div>
</template>

<style>

.backdrop{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
}

/* FOR MOZILLA FIREFOX */
.backdrop{
  background-color: rgba(0,0,0,0.2);
}
     
/* FOR GOOGLE CHROME */
@supports ((-webkit-backdrop-filter: blur(35px)) or (backdrop-filter: blur(35px))) {
  .backdrop {
    background: rgba(0,0,0,0.03);
    -webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
  }
}

</style>