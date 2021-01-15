<template>
    <div > 
        <event
            v-for="(item, index) in events[language]"
			:key="index"
			:index="index"
			:parentData="item"/>
    </div>
</template>

<script>
import event from "./event.vue";
import { mapGetters } from "vuex";
export default {
    name: "timeline",
    components: { event },
    computed: { ...mapGetters(["events", "language"]) },
    created: function(){},
	methods: {}
};
</script>
<style></style>