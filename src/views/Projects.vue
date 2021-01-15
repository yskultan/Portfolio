<template>
   <div class=" flex-col justify-center my-8">
        <h1 class="font-bold text-primary  sm:text-5xl text-4xl ">{{ projectsPage[language].title }}</h1>
        <br/>
        <h3 class="text-info text-xl">
            ➔ {{ projectsPage[language].description }}
        </h3>
        <div class="projects my-8">
            <project
                v-for="(item, index) in projects[language]"
                :key="index"
                :index="index"
                :parentData="item"
            ></project>
        </div>
    </div>
</template>

<script>
import project from '@/components/project.vue';
import { mapGetters } from 'vuex';
export default {
	components: { project },
    created: function(){},
    computed: {
    ...mapGetters(["projects", "projectsPage", "language"])
    },
    methods: {
    }
  }
</script>

<style>
#container {
    padding-top: 4em
}

.projects{
    display: grid;
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    grid-template-columns: repeat(3, 1fr);
}

@media only screen and (max-width: 1200px) {
    .projects{
        display: grid;
        grid-column-gap: 1em;
        grid-row-gap: 1em;
        grid-template-columns: repeat(2, 1fr);
    }
}

@media only screen and (max-width: 768px) {
    .projects{
        display: grid;
        grid-row-gap: 1em;
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
