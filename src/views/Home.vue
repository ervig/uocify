<template>
    <main class="page-home">
        <div class="container container-thin">
            <img class="logo" src="@/assets/icon.svg" alt="logo">
            <h1 class="main-title">¿En busca de música?</h1>
            <p class="lorem-textum">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus arcu, feugiat eu molestie in, finibus sit amet lorem. Phasellus consectetur ipsum in imperdiet ultrices. </p>
            <Playlists :playlists="variableRetorn" />
        </div>
    </main>
</template>

<script>
    import Playlists from '../components/Playlist/PlaylistList'
    import { getPlaylists } from '../api'
    
    export default {
        name:'Home',
        components : {
            Playlists
        },
        data: function() {
            return {
                variableRetorn : []
            };
        },
        methods : {
            async loadPlaylist(){
                const response = await getPlaylists() ;
                this.variableRetorn = response.data;
                console.log(this.variableRetorn[0].id);
            }
        },
        created : function() {
            this.loadPlaylist()
        }
        
    }
</script>


<style lang="scss">
    .page-home{
        text-align: center;
        padding-left:30px;
        padding-right:30px;

        .logo{
            width: 200px;
            margin-top: 35px;
            margin-bottom: 35px;
        }

    }
</style>