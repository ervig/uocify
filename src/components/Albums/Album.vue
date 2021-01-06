<template>
    <article class="album col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <img class="album-cover" :src="album.cover_medium" :alt="album.title">
        <span class="album-title">{{album.title}}</span>
        <span class="album-artist">{{album.artist.name}}</span>
    </article>
</template>

<script>

export default {
    name: 'Album',
    props: { album: Object },
}
</script>

<style lang="scss">
    .album{
        margin-bottom: 15px;
        line-height: 1.3em;
    }

    .album-title{
        display: block;
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;   
        font-weight: 600;     
    }

    .album-artist{
        font-size: 12px;
    }

    .album-cover{
        width: 100%;
        height: auto;
        margin-bottom: 10px;
        background: $grey-light;
        border: 1px solid $border-color;
    }
</style>
