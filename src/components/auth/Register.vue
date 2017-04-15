<template>
    <div>
        <h3 class="text-center">Register</h3>

        <input type="email" class="form-control" placeholder="Email address" v-model="user.email">
        <input type="text" class="form-control" placeholder="Username" v-model="user.username">
        <input type="password" class="form-control" placeholder="Password" v-model="user.password">

        <hr>

        <button class="btn btn-lg btn-primary btn-block" @click="register">Register</button>

        <p class="text-center">
            Already have an account? <router-link to="/auth/login">Login</router-link>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'register',
        data() {
            return {
                user: {
                    email: '',
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            register() {
                this.$router.push('/auth/login');
            }
        }
    }
</script>

<style>

</style>
