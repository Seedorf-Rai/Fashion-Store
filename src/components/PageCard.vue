<template>
    <vs-card type="5">
    <template #title>
      <h3>{{ title }}</h3>
    </template>
    <template #img>
      <img :src="image" class="page-card-img" alt="">
    </template>
    <template #text>
      <p>
        {{ text }}
      </p>
    </template>
    <template #interactions>
      <vs-button danger icon>
        <i class='bx bx-heart'></i>
      </vs-button>
      <vs-button class="btn-chat" shadow primary>
        <i class='bx bx-chat' ></i>
        <span class="span">
          {{ id }}
        </span>
      </vs-button>
    </template>
  </vs-card>

</template>

<script>
export default {
   name: 'PageCard',
   props: ['title','image','text','id']
}
</script>

<style>
.page-card-img{
    
}
</style>