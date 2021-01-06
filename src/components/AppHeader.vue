<template>
    <header class="header">
        <div class="header-container container-fluid">
            <router-link to="/">
                <img class="logo" src="@/assets/logo.svg" alt="Logo de uocify">
                <img class="icono" src="@/assets/icon.svg" alt="Icono de uocify">
            </router-link>		            
            <search-bar />
            <div v-if="isLoggedIn" class="user">
                <span class="user-name">{{currentUser}}</span> 
                <fa-icon icon="user" class="icon" />

                <button v-on:click="logout" class="btn-icon"><fa-icon icon="sign-out-alt" class="sign-out" /></button>
            </div>

            <ul v-if="!isLoggedIn" class="session">
                <li><router-link to="/login">Iniciar sesión</router-link></li>
                <li><router-link to="/register">Registrar</router-link></li>
            </ul>            
        </div>
    </header>
</template>


<script>
    import SearchBar from '@/components/SearchBar'
    import firebase from 'firebase'

    export default {
        name:'AppHeader',
        components:{SearchBar},
        data() {
            return {
                isLoggedIn: false,
                currentUser: ""
            };
        },
        created() {
            firebase.auth().onAuthStateChanged((user) => {
                if (user != null) {
                    this.currentUser = user.email;
                    this.isLoggedIn = true;
                } else {
                    this.isLoggedIn = false;
                    this.currentUser = "";
                }
            });
        },
        methods: {
            logout: function() {
                firebase
                    .auth()
                    .signOut()
                    .then(() => {
                        this.$router.push('/').catch(() => {})
                    });
            }
        }        
    }
</script>


<style lang="scss">
    .header {
        background: white;
        top: 0px;
        box-shadow: 0 4px 8px 0 rgba(13, 10, 44, 0.04);  
        position: fixed;
        width: 100%;
        z-index: 100;

        .logo{
            width: 170px;

            @media #{$max-sm} {
                display: none;
            } 
        }

        .icono{
            width: 40px;

            @media #{$min-sm} {
                display: none;
            }             
        }


        .search-bar{
            flex: 1 1;
        }

        .session{
            display: flex;
            list-style: none;
            font-weight: 600;
            font-size: 14px;
            margin:0;

            li{
                &:first-child{
                    margin-right: 15px;
                }
                a{
                    color: $text-color;
                }
            }
        }

        .user{
            display: flex;
            align-items: center;

            .user-name{
                font-weight: 600;
                font-size: 14px;
                @media #{$max-sm} {
                    display: none;
                } 
            }

            .icon{
                background: $grey-light;
                padding: 10px;
                height: 40px;
                width: 40px;
                border-radius: 50%;
                margin-left: 10px;
            }
        }

        .sign-out{
            margin-left: 5px;
            color: $blue;
        }
    }

    .header-container {
        align-items: center;
        display: flex;
        height: 70px;
    
        @media #{$min-sm} {
            justify-content: space-between;
        }  
    }
</style>