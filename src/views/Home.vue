<template>
    <div class="my-8 flex flex-col md:justify-center">
        <div>
            <label for="toggle" class="flex w-20 mb-12 cursor-pointer">
                <div class="mr-3 text-accent font-medium uppercase">RU</div>
                <div class="relative">
                    <input @click="changeLang" id="toggle" type="checkbox" class="hidden" />
                    <div class="mt-1 toggle-line w-10 h-4 border-2 border-accent bg-transparent rounded-sm"></div>
                    <div class="mt-1 toggle-dot absolute w-5 h-4 bg-accent rounded-sm inset-y-0"></div>
                </div>
                <div class="ml-3 text-accent font-medium uppercase">EN</div>
            </label>
            <h3 class="text-secondary  text-lg font-bold ">➔ {{ header[language].hello }}</h3>
            <h1 class="text-primary  font-bold sm:text-5xl text-4xl ">
                {{ profile[language].name }} {{ profile[language].surname }}.
            </h1>
            <div class="bg-primary  text-background shadow-lg text-center rounded-sm ">
                <h1 class="font-bold md:text-3xl sm:text-2xl  text-xl ">{{ header[language].quote }}</h1>
            </div>
        </div>
        <scene></scene>
        <div class="w-full my-2">
            <div class="text-info text-xl">
                {{ header[language].description[0] }}
                {{ age }}
                {{ header[language].description[1] }}
            </div>
            <button class="text-accent w-40 rounded-sm text-lg p-4 border-2 hover:bg-primary-transparent my-4" 
                onclick="location.href='mailto:y.skultan@gmail.com'">
                {{ header[language].label }}
            </button>
<!--             <a href="resume.pdf" download>
                <button class="ml-5 text-primary  rounded-sm text-lg p-4 border-2 hover:bg-primary-transparent my-4" >
                    Get Resume
                </button>
            </a> -->
        </div>
    </div>
</template>

<script>
import scene from "@/components/scene.vue";
import { mapGetters } from "vuex";
export default {
    components: { scene },
    methods: {
        changeLang() {
            this.$store.commit("change_lang")
            document.title = this.title
            document.description = this.description
        },
    },
    computed: { ...mapGetters(["header", "profile", "projects", "age", "language", "title", "description"]) }  
};
</script>
<style scoped>
.toggle-dot {
  transition: all 0.1s ease-in-out;
}

input:checked ~ .toggle-dot {
  transform: translateX(100%);
}
</style>