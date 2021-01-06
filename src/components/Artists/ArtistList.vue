<template>
    <section class="artist-list row">
        <Artist
            v-for="artist in artists"
            :key="artist.artistId"
            :artist="artist"
        />
    </section>
</template>

<script>
import Artist from './Artist'

export default {
    components: { Artist },
    name: 'ArtistList',
    props: { artists: Array },
}
</script>