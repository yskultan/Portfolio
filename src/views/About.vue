<template>
 <div class="flex-col justify-center">
    <h1 class="font-bold text-primary md:text-5xl text-4xl ">{{ profile[language].title }}</h1>
    <div class="my-8 md:flex bg-background-light rounded-sm p-8">
        <img class="h-24 w-24 full mx-auto md:my-auto md:mx-0 xs:mb-6 sm:mb-6 md:mr-6" src="../assets/img/profile.png">
        <div class="text-justify">
            <p class="text-info xs:text-xs sm:text-sm md:text-base">
                <span class="uppercase font-bold text-accent">
                    {{ profile[language].startDescription }}
                </span>
                {{ profile[language].description }}
            </p>
        </div>
    </div>

    <div class="w-full my-4"> 
        <h1 class="text-secondary  font-bold text-lg my-2"> ➔ {{ technologies[language].title }}</h1>
        <div class="skills">
            <div class="shadow-lg rounded-sm bg-background-light p-6 ">
                <span class="text-accent font-bold text-lg my-2">{{ technologies[language].subtitles[0] }}</span>
                <technology
                    v-for="(item, index) in technologies.frontend"
                    :key="index"
                    :index="index"
                    :parentData="item">
                </technology>
            </div>

            <div class="shadow-lg rounded-sm bg-background-light p-6 ">
                <span class="text-accent font-bold text-lg my-2">{{ technologies[language].subtitles[1] }}</span>
                <technology
                    v-for="(item, index) in technologies.backend"
                    :key="index"
                    :index="index"
                    :parentData="item">
                </technology>
            </div> 
        </div>
        <div class="shadow-lg rounded-sm bg-background-light p-6 my-4">
            <span class="text-accent font-bold text-lg my-2">{{ technologies[language].subtitles[2] }}</span><br>
            <span v-for="item in technologies.tools" v-bind:key="item.name" class="m-1 text-accent"> ➔ <span class="text-info">{{item.name}}</span></span>
        </div>
    </div>
    
    <div class="w-full my-8">
        <span class="text-secondary font-bold text-lg my-2">➔ {{ technologies[language].subtitles[3] }}</span>
        <timeline></timeline>
    </div>
</div>
</template>

<script>
import technology from '@/components/technology.vue';
import timeline from '@/components/timeline.vue';
import { mapGetters } from "vuex";
export default {
  components: { technology, timeline },
  
  data: () => { return {}},
    computed: {
        ...mapGetters(["age", "profile", "technologies", "language"])  
    },
};
</script>


<style scoped>

.skills{
    display: grid;
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    grid-template-columns: repeat(2, 1fr);
}

@media only screen and (max-width: 1200px) {
    .skills{
        display: grid;
        grid-column-gap: 1em;
        grid-row-gap: 1em;
        grid-template-columns: repeat(2, 1fr);
    }
}

@media only screen and (max-width: 768px) {
    .skills{
        display: grid;
        grid-row-gap: 1em;
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
