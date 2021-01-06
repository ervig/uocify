<template>
    <article class="playlist col-sm-6 col-md-4 col-lg-3 col-xl-2">
       <router-link :to="{ name : 'Playlist', params : { id : playlist.id }}">
        <img class="playlist-cover" :src="playlist.picture_medium" :alt="playlist.title">
        <span class="playlist-title">{{playlist.title}}</span>
       </router-link>
    </article>
</template>

<script>

export default {
    name: 'Playlists',
    props: { playlist: Object },
}
</script>

<style lang="scss">
    .playlist{
        margin-bottom: 15px;
        line-height: 1.3em;
    }

    .playlist-title{
        display: block;
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;   
        font-weight: 600;     
    }

    .playlist-cover{
        width: 100%;
        height: auto;
        margin-bottom: 10px;
        background: $grey-light;
        border: 1px solid $border-color;
    }
</style>
