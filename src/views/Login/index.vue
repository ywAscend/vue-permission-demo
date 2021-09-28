<template>
    <div id='login'>
        <vue-particles class="log-bg" color="#39AFFD" :particleOpacity="0.7" :particlesNumber="80" shapeType="circle"
            :particleSize="4" linesColor="#8DD1FE" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4"
            :linesDistance="80" :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true"
            clickMode="push">
        </vue-particles>
        <div class="login-content">
            <div class="login-btn">
                <div class="account">
                    <span>账号:</span>
                    <input type="text" v-model="username">
                </div>
                <div class="password">
                    <span>密码:</span>
                    <input type="password" v-model="password">
                </div>
                <div class="loginBtn">
                    <van-button type="primary" :loading="isLoading" color="#009688" size="large" @click="onSubmit"
                        loading-type="spinner">登录</van-button>>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: 'Home',
        components: {},
        data() {
            return {
                username: '',
                password: '',
                isLoading: false
            };
        },
        methods: {
             onSubmit() {
                console.log('submit', this.username, this.password, this.$store);
                //登录接口
                this.isLoading = true
                this.$store.dispatch(`loginInfo/actionLogin`, { username: this.username, password: this.password })
                .then(()=>{
                    this.isLoading = false
                    this.$router.push({ path: '/' })
                }).catch(err=>{
                    this.isLoading = false
                    alert(err)
                })

            },
        },
    }
</script>

<style lang="scss" scoped>
    #login {
        height: 100%;
        position: relative;

        .log-bg {
            height: 100%;
            background: #3E3E3E;
        }

        .login-content {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);

            .login-btn {
                height: 200px;
                width: 300px;

                .account,
                .password {
                    height: 50px;
                    line-height: 50px;
                    padding: 10px 0;
                    display: flex;
                    justify-content: space-around;

                    span {
                        color: #eee;
                    }

                    input {
                        height: 40px;
                        line-height: 40px;
                        background: none;
                        border: .5px solid darkslategray;
                        box-shadow: darkgrey 10px 10px 30px 5px;
                        border-radius: 3px;
                        caret-color: rgb(166, 185, 212);
                        padding-left: 10px;
                        color: #d4cccc;
                    }
                }

                .loginBtn {
                    padding: 10px 60px 10px 110px;
                }
            }
        }
    }
</style>