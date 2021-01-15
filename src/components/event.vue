<template>
    <div class="bg-background-light py-6 px-8 my-4 text-info rounded-sm shadow-lg event">
        <span class="text-info text-sm ">{{parentData.startDate}} - {{parentData.endDate}}</span><br>
        <span class="text-primary  event-title text-xl "><b>{{parentData.name}}</b></span><br>
        <span class="text-accent text-base "><b>{{parentData.role}}</b></span>
        <p class="text-info text-base ">{{parentData.description}}</p>
        <span class="text-accent text-sm "><i>{{parentData.type}}</i></span>
         <div v-for="item in parentData.roles" v-bind:key="item.name" class="m-1">
            <a :href="item.link" class="text-sm text-info">
               <span class="text-accent"> ➔ </span> <span>{{item.description}}</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "event",
	props: {
		parentData: Object,
		index: Number
	}
}
</script>

<style lang="scss" scoped>
.event {
    animation: mouseOut 0.3s ease-in;
    .event-title {
        animation: mouseOut 0.3s ease-in; 
    }
}
.event:hover{
    animation: mouseOver 0.3s ease-in forwards;
    .event-title {
        animation: mouseOver 0.3s ease-in forwards;
    }
}
</style>