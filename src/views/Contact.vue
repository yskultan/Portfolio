<template>
   <div class=" flex-col justify-center text-center">
        <h1 class="font-bold text-secondary  sm:text-5xl text-4xl">{{ contactsPage[language].title }}</h1>
        <br/>
        <div class="my-8">
            <span class="text-info text-xl my-8">
                {{ contactsPage[language].description}}
            </span><br>
            <form method="POST" data-netlify="true" class="p-6 mt-6 sm:w-100 md:w-1/2 ml-auto mr-auto flex flex-col justify-center">
                <div class="flex flex-col mt-2">
                    <input type="email" name="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-sm bg-background border-2 border-accent-transparent text-info focus:border-secondary focus:outline-none">
                </div>
                <div class="flex flex-col mt-2">
                    <input type="name" name="name" placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-sm bg-background border-2 border-accent-transparent text-info focus:border-secondary focus:outline-none">
                </div>
                <div class="flex flex-col mt-2">
                    <textarea v-model="mes" placeholder="Message" class="w-100 h-32 mt-2 py-3 px-3 rounded-sm bg-background border-2 border-accent-transparent text-info focus:border-secondary focus:outline-none">
                    </textarea>
                </div>
                <button type="submit" class="sm:w-100 md:w-1/2 ml-auto mr-auto my-6 rounded-sm text-lg p-4 border-2 text-secondary hover:bg-secondary-transparent">
                    {{ contactsPage[language].label }}
                </button>
            </form>
        </div>
        <div class="my-8">
            <span class="text-info text-xl my-8">
                {{ contactsPage[language].subtitle }}
            </span>
            <br>
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
