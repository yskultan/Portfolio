<template>
    <div class="" >
        <span class="text-sm text-info">{{parentData.name}}</span>
        <div class="bg-background rounded-full">
            <div class="bg-primary  rounded-full h-1" :style="getStyle()"></div>
        </div><br>
    </div>
</template>
<script>
export default {
    name: "technology",
	props: {
		parentData: Object,
	},
    methods:{
        getStyle() {
            return ("width:" + this.parentData.level + "%")
        }
    }
};
</script>

<style>
</style>
