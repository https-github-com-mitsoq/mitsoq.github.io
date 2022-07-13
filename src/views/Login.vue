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
        </fieldset>
        <vue-recaptcha
            ref="recaptcha"
            @verify="onCaptchaVerified"
            @expired="onCaptchaExpired"
            size="visible"
            text-align="left"
            sitekey="6LdT8usgAAAAABQun-G6QYcIRU9A-3_iT0jLfdh_"
        ></vue-recaptcha>
        <input :disabled="status==='submitting'" type="submit" value="Submit" />
    </form>

  </section>
</template>

<script>
    import VueRecaptcha from 'vue-recaptcha'
    import axios from 'axios'
    export default {
        name: 'Login',
        components: { VueRecaptcha },
        data () {
            return {
                full_name: '',
                recaptchaToken: '',
                recaptchaSuccessful: false,
                serverError: '',
                status: ''
            }
        },
        methods: {
            loginSubmission () {
                this.$refs.recaptcha.execute();
            },
            getErrorMessage (err) {
                let responseBody;
                responseBody = err.response;
                if (!responseBody)
                    responseBody = err;
                else
                    responseBody = err.response.data || responseBody;
                return responseBody.message || JSON.stringify(responseBody);
            },
            onCaptchaVerified () {
                const self = this
                self.status = "submitting"
                self.$refs.recaptcha.reset()
                axios.post('http://localhost:3000/logins', {
                    name: self.full_name,
                    recaptchaToken: self.recaptchaToken
                }, {
                    headers: {
                        'content-type': 'application/json'
                    }
                }
                ).then(res => {
                    this.recaptchaSuccessful = res.body.message
                    console.log('AXIOS', res.body)
                }).catch(err => {
                    self.serverError = this.getErrorMessage(err);
                    console.log('ERROR', err)
                }).then(() => {
                    self.status = ""
                })
            },
            onCaptchaExpired: function () {

                this.$refs.recaptcha.reset();
            }
        }
    }
</script>