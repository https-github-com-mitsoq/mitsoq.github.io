<template>
    <div id="header" class="header">
        <nav class="logo">
            <img class="logo__thumbnail" alt="Logo" src="../assets/logo.png"/>
        </nav>
        <div class="menu">
            <ul class="menu-list">
                <li class="menu-list__item">
                    <router-link to="/" class="cta-text">Home</router-link>
                </li>
                <li class="menu-list__item">
                    <router-link to="/login" class="cta-text">Login</router-link>
                </li>
                <li class="menu-list__item">
                    <router-link to="/about" class="cta-text">About</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Menu',
        props: {
            text: {
                type: String,
                default: 'Something'
            },
            myFunc: {
                type: Function,
                default: () => {
                    return
                }
            }
        },
        data() {
            return {
                styles: {
                    margin: '0 5px 0 0',
                    textAlign: 'left'
                }
            }
        }
    }
</script>
<style>
    .header {
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .logo__thumbnail {
        width: 100px;
    }

    .menu-list {
        display: block;
        font-style: none;
        margin: 0 auto;
    }
    .menu-list__item {
        display: inline-block;
        margin: 0 15px 0 0;
    }

    .cta-text {
        color: gray;
        text-transform: lowercase;
    }
    .cta-text:focus,
    .cta-text:visited,
    .cta-text:hover {
        color: gray;
    }
</style>
