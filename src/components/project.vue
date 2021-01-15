<template>
    <div class="project shadow-lg bg-background-light" >
        <div class="w-full rounded-sm p-6 flex flex-col justify-between leading-normal">
            <div>
                <div class="my-4 clearfix">
                    <font-awesome-icon class="float-left text-info text-4xl" :icon="parentData.icon"/>
                    <a class="float-right" :href="parentData.link">
                        <font-awesome-icon class="text-lg text-info hover:text-primary-light" icon="link"/>
                    </a>
                </div>
                <div class="text-primary  project-title font-bold text-xl mb-2">{{parentData.name}}</div>
                <p class="text-info text-base">{{parentData.description}}</p>
            </div>
            <div class="py-2 ">
                <div class="flex items-center py-4">
                    <div class="text-sm">
                        <p class="text-info">{{parentData.startDate}} - {{parentData.endDate}}</p>
                    </div>
                </div>
                <span class="inline-block rounded-full text-sm text-accent mr-1"
                    v-for="(item, index) in parentData.tags"
                    :key="index"
                    :index="index"
                    :tagData="item">{{item.name }} 
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "project",
	props: {
		parentData: Object,
	}
};
</script>

<style lang="scss" scoped>
.project {
    display: grid;
    animation: mouseOut 0.3s ease-in;
    .project-title {
        animation: mouseOut 0.3s ease-in; 
    }
}
.project:hover {
    animation: mouseOver 0.3s ease-in forwards;
    .project-title {
        animation: mouseOver 0.3s ease-in forwards;
    }
}
@media only screen and (max-width: 600px) {
    .project { 
        display: block;
        width: 100%;
    }
}
</style>
