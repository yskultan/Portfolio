<template>
   <div class=" flex-col justify-center text-center">
        <h1 class="font-bold text-secondary  sm:text-5xl text-4xl">{{ contactsPage[language].title }}</h1>
        <br/>
        <div class="my-8">
            <span class="text-info text-xl my-8">
                {{ contactsPage[language].description}}
            </span>
        </div>
        <div class="my-8">
            <div class="flex flex-wrap justify-center mt-4">
                <div v-for="item in socials" v-bind:key="item.name" class="flex-grow m-2 sm:mx-0 sm:my-4 sm:w-auto md:mx-2 bg-background-light rounded-sm">
                    <a :href="item.link" class="p-4 text-center rounded-sm text-xl text-info hover:text-secondary  hover:bg-secondary-transparent block">
                        <font-awesome-icon :icon="['fab', item.icon]" size="lg" /><br>
                        <span>{{item.name}}</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(["socials", "contactsPage", "language"])
    },
}
</script>

<style scoped>
</style>
