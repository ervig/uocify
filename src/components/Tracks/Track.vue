<template>
    <tr class="track">
        <td class="track-cover">
            <img :src="track.album.cover_small" :alt="track.title">
        </td>
        <td class="track-title">
            {{track.title}}
        </td>
        <td class="track-artist">
            {{track.artist.name}}
        </td>
        <td class="track-album">
            {{track.album.title}}
        </td>
        <td class="track-duration">
            {{ track.duration | getDuration }}
        </td>                                
    </tr>
</template>

<script>
//import getDuration from '../../filters'

export default {
    name: 'Track',
    props: { 
        track: Object,
    },
   // mixins : [getDuration]
}
</script>

<style lang="scss">
    
	.track{
		cursor: pointer;
		transition: all 0.2s linear;
		&:hover{
			background-color: $bg-color;
		}
	}

    .track-album{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;        
    }

    .track-duration{
        color: $grey-label;
        text-align: right;
    }    

    .track-cover img {
        width: 35px;
        height: auto;
        border-radius: 4px;
    }

    @media #{$min-sm} {
        .track-title{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;        
        }
    }    

    @media #{$max-md} {
        .track{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            padding-top: 7px;
            padding-bottom: 7px;
            border-bottom: 1px solid $border-color;
        }

        .track-cover{
           display: none;
        }

        .track-title { 
            font-size: 13px;
            flex-grow: 1;
            font-weight: 600;
            width: 60%;
        }	

        .track-duration {
            flex-shrink: 1;
            order:1;
            margin-left: 3px;
            font-size: 12px;
        }	

        .track-artist {
            font-size: 12px;
            order: 1;
            flex-grow: 1;
        }	

        .track-album { 
            font-size: 12px;
            flex-grow: 1;
            width: 60%;
        }
    }    
</style>
