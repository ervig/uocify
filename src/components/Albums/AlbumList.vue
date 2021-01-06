<template>
    <section class="album-list row">
        <Album
            v-for="album in albums"
            :key="album.albumId"
            :album="album"
        />
    </section>
</template>

<script>
import Album from './Album'

export default {
    components: { Album },
    name: 'AlbumList',
    props: { albums: Array },
}
</script>