import { computed } from 'vue';
import { useStore } from 'vuex'
export const useToast = () => {
    const store = useStore();
    const toastMessage = computed( () => store.state.toastMessage);
    const toastShow = computed( () => store.state.toastShow);
    // 안내창
    const triggerToast = (_m) => {
        store.dispatch('triggerToast',_m);
    };

    return {
        toastMessage,
        toastShow,
        triggerToast,
    }
};