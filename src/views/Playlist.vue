<template>
    <main class="page-home">
        <div class="container">
            <article class="playlist">
                <img class="playlist-cover" :src="variableRetorn.picture_big" :alt="variableRetorn.title">
                <span class="playlist-title">{{variableRetorn.title}}</span>
                <span class="playlist-description">{{variableRetorn.description}}</span>
                <TrackList :tracks="variableRetornTracks"/>
            </article>
        </div>
    </main>
</template>

<script>

import { getTrack } from '../api'
import TrackList from '../components/Tracks/TrackList'

export default {
    data : function() {
        return{
            id: this.$route.params.id || '',
            variableRetorn : [],
            variableRetornTracks : []
        };
    },
    methods : {
        async dataTrack(){
                const response = await getTrack(this.id) ;
                this.variableRetorn = response;
                this.variableRetornTracks = this.variableRetorn.tracks.data;
                //console.log("data : " + this.variableRetorn.picture_big + variableRetorn.description);
                //debugger;
            }
    },
    created : function() {
        this.dataTrack();
    },
    components : {
        TrackList
    }
}
</script>

