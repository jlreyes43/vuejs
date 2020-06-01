<template>
    <div>
        <input v-model="filterText">
        <ul v-for="fruit in filteredFruits">
            {{ fruit }}
        </ul>
    </div>
</template>

<script>

    import { fruitMixin } from './fruitMixin'

    export default {
        mixins: [fruitMixin]
    }
</script>