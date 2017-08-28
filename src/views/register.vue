
<template>

<div class="wrapper">
	<h2>注册圈圈账号</h2>
    <div class="login">
        <i-form ref="formInline" :model="formInline" :rules="ruleInline">
            <Form-item prop="nickname">
                <Input v-model="formInline.nickname" placeholder="请输入昵称"></Input>
            </Form-item>
            <Form-item prop="user">
                <Input v-model="formInline.user" placeholder="请输入手机号"></Input>
            </Form-item>
            <Form-item prop="password">
                <Input v-model="formInline.password" placeholder="请输入密码" type="password"></Input>
            </Form-item>
            <Form-item prop="code">
                <Input v-model="formInline.code" placeholder="请输入验证码"></Input>
            </Form-item>
            <Form-item>
                <i-button type="success" @click.native="handleSubmit('formInline')" long>注册</i-button>
            </Form-item>
        </i-form>
        <Row>
        	<Col span="12">
                <a href=""></a>
        	</Col>
        	<Col span="12">
        		<a href="#" @click="toLoginView" style="color:#000000;margin-left:50px">登录账号</a>
        	</Col>
    	</Row>
    </div>
</div>

</template>

<script>

export default {
    data() {
            return {
                formInline: {
                    user: '',
                    password: '',
                },
                ruleInline: {
                    user: [{
                        required: true,
                        message: '请填写用户名',
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '请填写密码',
                        trigger: 'blur'
                    }, {
                        type: 'string',
                        min: 6,
                        message: '密码长度不能小于6位',
                        trigger: 'blur'
                    }],
                    code: [{
                        required: true,
                        message: '请输入验证码',
                        trigger: 'blur'
                    }, {
                        type: "number",
                        min: 4,
                        message: '验证码不能小于4位',
                        trigger: 'blur'
                    }],
                    nickname: [{
                        required: true,
                        message: '请输入昵称',
                        trigger: 'blur'
                    }]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                    this.$refs[name].validate((valid) => {
                        if (valid) {
                            this.$Message.success('提交成功!');
                            this.$router.push('/about');
                        } else {
                            this.$Message.error('表单验证失败!');
                        }
                    })
                },
                handleReset(val) {
                    console.log(val)
                },
                toLoginView() {
                    this.$router.push('/login');
                }
        }
}

</script>

<style scoped>

.wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 110px;
    padding-bottom: 140px;
    /*background: -webkit-gradient(linear, 0 0, 0 bottom, from(#ff0000), to(rgba(0, 0, 255, 0.5)));*/
    /*background: #fff;*/
    /*url(http://78rbeb.com1.z0.glb.clouddn.com/wp-content/uploads/2014/03/free-blurred-web-backgrounds-04.jpg);*/
}
.wrapper > h2{
  text-align: center;
  vertical-align: middle;
  margin-bottom: 20px;
  color: #000;
}
.login {
    margin: 0 auto;
    padding: 200px auto;
    width: 200px;
    height: 100%;
}

</style>
