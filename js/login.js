let app = new Vue({
    el: '.form-signin',
    data: {
        errorMessage: "",
        hasError: false,
        userName: "",
        password: ""
    },
    methods: {
        login: function(){

            app.hasError = false;
            
            // 模拟登录从后台获取登录结果
            let randomUrl = 
                Math.round(Math.random()) === 1 ? 
                "https://cumtzzp.github.io/login-failure.json" : 
                "https://cumtzzp.github.io/login-success.json";
            /*
                由于涉及到密码，此处实际上应该用 $.post()
                为了获取模拟的 .json 数据，使用了 $.get()，参数实际上是一样的
            */
            // 防止跨域请求出错
            qwest.setDefaultOptions({ cache: true });
            // ajax 请求
            qwest.get(randomUrl, { user: app.userName, pswd: app.password })
                .then(function(xhr, msg) {
                    if (msg.success) {
                        document.location = "slide.html";
                        //alert("登录成功！");
                    }
                    else {
                        app.hasError = true;
                        app.errorMessage = msg.message;
                    }
                }
            );

            /*
            $.get(
                randomUrl, 
                { user: app.userName, pswd: app.password }, 
                function(msg){
                    if (msg.success) {
                        //document.location = "slide.html";
                        alert("登录成功！");
                    }
                    else {
                        app.hasError = true;
                        app.errorMessage = msg.message;
                    }
                }
            );
            */
        }
    }
});




