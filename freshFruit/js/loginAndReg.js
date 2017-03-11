/**
 * Created by zhm on 17/3/6.
 */
/*登录页面验证*/
$(function(){
    var main = {
        init:function(){
            this.login();
            this.reg();
            this.getCode();



        },
        login:function(){
            $('.login_btn').click(function(){

                var uname = $(".f_login .uname").val();
                var upwd = $(".f_login .upwd").val();
                if(uname == ""){
                    alert("用户名不能为空！");
                    return false;
                }
                if(upwd == ""){
                    alert("密码不能为空！");
                    return false;
                }

                alert("登录成功");
                $('.f_login input').val('');


            })
        },
        reg:function(){
            $('.reg_btn').click(function(){
                var ualias = $(".f_reg .ualias").val();
                var upwd = $(".f_reg .upwd").val();
                var upwd1 = $(".f_reg .upwd1").val();
                var utel = $(".f_reg .utel").val();
                var uname = $(".f_reg .uname").val();
                var uMessage = $(".f_reg .uMessage").val();
                var ucode = $(".f_reg .ucode").val();



                //账号：以字母开头,其余的是字母数字下划线均可，6-18位
                if (!/^[a-z]\w{5,17}$/i.test(ualias)) {
                    alert("账号格式不正确！");
                    return false;
                }

                //密码：匹配任意字符，但是不能包含空格，6-16位
                if (!/^\S{6,16}$/gi.test(upwd) || upwd != upwd1) {
                    alert("密码格式不正确！或者两次密码不一致");
                    return false;
                }

                //用户名：以字母开头,其余的是字母数字下划线均可，6-18位
                if (!/^[a-z]\w{5,17}$/i.test(uname)) {
                    alert("用户名格式不正确！");
                    return false;
                }

                alert("注册成功");
                $('.f_reg input').val('');



            })


        },
        //随机验证码
        getCode:function(){
            function createCode(){
                //1.将所有字母，数字装入一个数组备用
                var codes = [];
                //2.数字(0-9)大写字母(A-Z)小写字母（a-z）
                for (var i = 48; i <= 57; i++) {
                    codes.push(i);
                }
                for (var i = 65; i <= 90; i++) {
                    codes.push(i);
                }
                for (var i = 97; i <= 122; i++) {
                    codes.push(i);
                }

                //3 从0-61之间取随机数
                var arr = [];
                for(var i = 0;i<4;i++){
                    var index = Math.floor(Math.random() * (61 - 0 + 1)+0);
                    var char = String.fromCharCode(codes[index]);
                    arr.push(char);
                }
                //4.输出验证码
                var code=arr.join("");
                $('.show_code').html(code);
            }
            createCode();
            $('.show_code').click(createCode);
        }



    };



    main.init();



});