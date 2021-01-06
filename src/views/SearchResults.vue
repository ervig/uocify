<template>
    <main class="page-search">
        <h1 class="main-title">Resultados de <span>{{query}}</span></h1>
        <b-tabs>
            <b-tab id="tabAll" title="Todo" active>
                <h2 class="title">Canciones <fa-icon icon="chevron-right" class="icon" /></h2>
                <span class="album" v-if="tracksRebudes">Cerca sense Resultats</span>
                <span class="album" v-if="tracksTooManyRequests">Error : Too many requests</span>
                <track-list :tracks="tracks.slice(0,6)" />

                <h2 class="title">Álbumes <fa-icon icon="chevron-right" class="icon" /></h2>
                <span class="album" v-if="albumsRebuts">Cerca sense Resultats</span>
                <span class="album" v-if="albumsTooManyRequests">Error : Too many requests</span>
                <album-list :albums="albums.slice(0,6)" />

                <h2 class="title">Artistas <fa-icon icon="chevron-right" class="icon" /></h2>
                <span class="album" v-if="artistsRebuts">Cerca sense Resultats</span>
                <span class="album" v-if="artistsTooManyRequests">Error : Too many requests</span>
                <artist-list :artists="artists.slice(0,6)" />                

            </b-tab>            
            <b-tab id="tabTracks" title="Canciones">
                <h2 class="title">{{tracksTotal}} canciones</h2>
                <track-list :tracks="tracks" />
            </b-tab>
            <b-tab id="tabAlbums" title="Álbumes">
                <h2 class="title">{{albumsTotal}} álbumes</h2>
                <album-list :albums="albums" />
            </b-tab>            
            <b-tab id="tabArtists" title="Artistas">
                <h2 class="title">{{artistsTotal}} artistas</h2>
                <artist-list :artists="artists" />
            </b-tab>
        </b-tabs>
    </main>
</template>

<script>

import TrackList from '@/components/Tracks/TrackList'
import AlbumList from '@/components/Albums/AlbumList'
import ArtistList from '@/components/Artists/ArtistList'
import { getTracks, getAlbums, getArtists } from '../api'

export default {
    name:'SearchResults',
    components:{ AlbumList, ArtistList, TrackList },
    data(){
        return{
            /*tracks: tracksjson.data,
            albums: albumsjson.data,
            artists: artistsjson.data,
            tracksTotal: tracksjson.total,
            albumsTotal: albumsjson.total,
            artistsTotal: artistsjson.total,*/
            query: this.$route.params.q || '',
            variableRetorn : [],
            tracks : [],
            albums : [],
            artists : [],
            tracksTotal : [],
            albumsTotal: [],
            artistsTotal: [],
            tracksRebudes : Boolean,
            albumsRebuts : Boolean,
            artistsRebuts : Boolean,
            artistsTooManyRequests : Boolean,
            albumsTooManyRequests : Boolean,
            tracksTooManyRequests : Boolean
        }
    },
    methods : {
        async updateTracks(){
            const response = await getTracks(this.query);
            //console.log("updateTracks : " + typeof(response));
            this.tracksRebudes = false;
            this.tracksTooManyRequests = false;
            this.c = false;
            if ( typeof(response) === 'object') {
                if (response.data.length === 0 ) {
                    console.log("updateTracks : consulta sense resultats" );
                    this.tracksRebudes = true;
                } else {
                    this.tracks = response.data;
                    this.tracksTotal = response.total;
                    console.log("loadGetTracks : " + this.tracks.length);
                }
            }else {
                console.log("Ha hagut un problema : " + response)
                this.tracksTooManyRequests = true;
            }
        },
        async updateAlbums(){
            const response = await getAlbums(this.query);
            this.albumsRebuts = false;
            this.albumsTooManyRequests = false;
            if (typeof(response) === 'object'){
                if ( response.data.length === 0 ) {
                    console.log("updateAlbums : consulta sense resultats ") ;
                    this.albumsRebuts = true ;
                } else {
                    this.albums = response.data;
                    this.albumsTotal = response.total;
                } 
            } else {
                console.log("Ha hagut un problmea : " + response);
                this.albumsTooManyRequests = true;
            }             
        },
        async updateArtists(){
            const response = await getArtists(this.query);
            this.artistsRebuts = false;
            this.artistsTooManyRequests = false;
            if(typeof(response) === 'object'){
                if ( response.data.length === 0 ) {
                    console.log("updateArtists : consulta sense resultats ") ;
                    this.artistsRebuts = true ; 
                } else {
                    this.artists = response.data;
                    this.artistsTotal = response.total;    
                }
            } else {
                console.log("Ha hagut algun problmea : " + response);
                this.artistsTooManyRequests = true;
            }  
        },
        search(){
            this.tracks = [],
            this.albums = [],
            this.artists = [],
            this.tracksTotal = [],
            this.albumsTotal = [],
            this.artistsTotal = [],
            this.updateTracks();
            this.updateAlbums();
            this.updateArtists();
            //fasdfsadfasdf
        }
    },
    watch: {
        '$route.params.q': function (q) {
            this.query = q;
            this.search();
        }
    },
    created : function(){
        console.log("query : " + this.query)
        this.search();
    }
}
</script>


<style lang="scss" >

    .page-search{
        display: flex;
        flex-direction: column;
        height: 100%;

        .main-title {
            margin-bottom: 20px;

            span{
                color: $grey-label;
            }
        }

        .tabs{
            background: white;
            flex: 1;
            height: 100%;
        }

        #tabAll{
            .title{
                font-size: 18px;

                .icon{
                    font-size: 14px;
                    margin-left: 3px;
                }
            }

            .track-list{
                margin-bottom: 30px;
                thead{
                    display: none;
                }
            }

            section{
                margin-bottom: 30px;
            }
        }
    }


</style>