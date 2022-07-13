<template>
  <section class="login">
    <h1>Login</h1>
    <form @submit.prevent="loginSubmission">
        <fieldset>
            <label
                for="full_name"
                aria-labelledby="First name"
                class="form-label"
            >
                Full name:
            </label>

            <input
                id="full_name"
                v-model="full_name"
                type="text"
                class="form-control"
                name="full_name"
            >
            <input type="submit" value="Submit" />
        </fieldset>

    </form>
  </section>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Login',
        data () {
            return {
                full_name: ''
            }
        },
        methods: {
            loginSubmission () {
                axios.post('http://localhost:3000/logins', {
                    name: this.full_name
                }, {
                    headers: {
                        'content-type': 'application/json'
                    }
                }
                ).then(res => {
                    console.log('AXIOS', res.body)
                }).catch(err => {
                    console.log('ERROR', err)
                })
            }
        }
    }
</script>