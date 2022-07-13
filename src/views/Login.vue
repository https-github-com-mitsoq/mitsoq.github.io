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
            sitekey="6LdKA-wgAAAAAIMGFVPr0EPqGAxRZy22v20Emvym"
        ></vue-recaptcha>
        <input type="submit" value="Submit" />
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
                recaptchaVerify: '',
                serverError: '',
                status: '',

            }
        },
        mounted () {
            console.log('Test', this.recaptchaVerify)
        },
        methods: {
            loginSubmission (recaptchaToken) {
                if (this.status !== 'ok') return
                //this.$refs.recaptcha.execute();
                axios.post('http://localhost:3000/logins', {
                    name: this.full_name,
                    recaptchaToken: recaptchaToken
                }, {
                    headers: {
                        'content-type': 'application/json'
                    }
                }
                ).then(res => {
                    this.recaptchaSuccessful = res.body.message
                    console.log('AXIOS', this.recaptchaSuccessful)
                }).catch(err => {
                    self.serverError = this.getErrorMessage(err);
                    console.log('ERROR', err)
                })
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
            onCaptchaVerified (response) {
               this.status = 'ok'
               this.recaptchaVerify = response
               console.log(response)
                //self.$refs.recaptcha.reset()
            },
            onCaptchaExpired: function () {
                this.$refs.recaptcha.reset();
            }
        }
    }
</script>