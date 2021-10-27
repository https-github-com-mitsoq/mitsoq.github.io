<template>
  <section class="profiles">
    <ul class="profiles-names" v-for="(user, i) in getUsers" :key="`item=${i}`">
        <li class="profiles-names__item">
            <p>{{ user.name.title }} {{ user.name.last }} {{ user.name.first }}</p>
        </li>
    </ul>
  </section>
</template>

<script>
    import { mapGetters, mapActions, mapMutations } from 'vuex'
    export default {
        name: 'Profiles',
        computed: {
            ...mapGetters({ getUsers: 'getUsers' })
        },
        mounted () {
            console.log('GETTER =>', this.getUsers)
            console.log('ACTION =>', this.fetchUsers())
            console.log('MUTATION =>', this.updateUsersState())
        },
        methods: {
            ...mapActions({ fetchUsers: 'FETCH_USER' }),
            ...mapMutations({ updateUsersState: 'UPDATE_USER_STATE' }),
        }
    }
</script>

<style>
    .profiles-names {
        margin: 0;
        padding: 0;
    }
    .profiles-names__item {
        list-style: none;
    }
</style>
