// --
// Template
<template>
    <div class="max-w-5xl m-auto flex flex-col text-center align-center justify-center mt-20">
        <Spinner />

        <div id="GeneratedQRCode" class="m-auto"></div>

        <a 
            id="SaveImageLink"
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5"
            href="#"
        >
            Save Image
        </a>
    </div>
</template>


// --
// Script and Setup
<script>
    import Spinner from './Spinner.vue';

    export default {
        name: 'GeneratedCode',
        components: { Spinner },
        data () {
            return {}
        },
        computed: {},
        methods: {}
    }
</script>


// --
// Style
<style scoped>
    #SaveImageLink {
        display: none;
    }
</style>