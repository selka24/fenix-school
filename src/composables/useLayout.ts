import {computed} from 'vue';
import {useRoute} from 'vue-router';
import DefaultPage from "../layouts/DefaultPage.vue";
import NoLayout from "../layouts/NoLayout.vue";

export const useLayout = () => {
    const route = useRoute();

    const layout = computed(() => {
        const layoutName = route.meta.layout
        if (layoutName === 'empty') return NoLayout;
        return DefaultPage
    })

    return {
        layout
    }
}