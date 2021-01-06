<template>
    <form @submit.prevent="search" class="search-bar">
        <label class="visibility-hidden" for="buscador">Buscar</label>
        <input id="buscador" type="text" v-model="query" placeholder="Buscar" class="form-control search-control" />
        
        <button type="submit" aria-label="Buscar" class="btn-icon search-button"><fa-icon icon="search" aria-label="Buscar" /></button>
    </form>
</template>

<script>

export default {
    name:'SearchBar',
    data(){
        return{
            query: this.$route.params.q || ''
        }
    },
    methods: {
        search(){
            // vamos a la página de resultados pasando el valor de 'query' por parámetro
            this.$router.push({
                name: 'search',
                params: { q: this.query },
            }).catch(() => {});
        }
    } 
}
</script>

<style lang="scss">
    .search-bar {
        position: relative;

        .search-control{
            border: 0;
            padding-left: 40px;
        }

        .search-button{
            position: absolute;
            top: 2px;
            left: 5px;
            color: $grey;
            height: 40px;
        }
    }
</style>
