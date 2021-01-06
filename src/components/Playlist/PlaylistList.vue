<template>
 <section class="play-list row">
 <Playlists
 v-for="playlist in playlists"
 :key="playlist.playlistId"
 :playlist="playlist"
 />
 </section>
</template>
 
<script>
import Playlists from './Playlists'
 
export default {
 components: { Playlists },
 name: 'PlaylistsList',
 props: { playlists: Array },
}
</script>