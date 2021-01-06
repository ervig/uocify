<template>
    <table class="track-list">
        <thead>
            <tr>
                <th></th>
                <th>Canción</th>
                <th>Artista</th>
                <th>Álbum</th>
                <th class="aright">D.</th>
            </tr>
        </thead>
        <tbody>
            <Track
                v-for="track in tracks"
                :key="track.id"
                :track="track"
            />
        </tbody>
    </table>
</template>

<script>
import Track from './Track'

export default {
    components: { Track },
    name: 'TrackList',
    props: { tracks: Array },
}
</script>

<style lang="scss">
    .track-list{
        max-width: 100%;
        width: 100%;

        td{
            border-top: 1px solid $border-color;
        }

        @media #{$max-md} {
            margin-top: -10px;

            thead{
                display: none;
            }

            td{
                border: none;
                padding: 2px 0;
            }
        }
    }
</style>