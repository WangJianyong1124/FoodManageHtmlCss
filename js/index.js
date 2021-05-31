window.onload = function () {

    // 获取button元素
    let btn = document.querySelectorAll('button');
    //获取用户名输入框元素
    let username = document.getElementById('username')
    // 获取密码输入框元素
    let password = document.getElementById('password')
    //获取提示的元素
    let tips = document.getElementsByClassName('tips');

    for (let i = 0; i < btn.length; i++) {
        btn[0].onclick = () => {
            //如果用户名和密码都对则登陆成功
            if (username.value === 'mtwjy' && password.value === 'mtwjy') {
                btn[0].innerText = "登陆中"
                //模拟登录延迟
                setTimeout(() => {
                    //跳转
                    window.location.href = "../pages/productor.html"
                }, 3000)

            } else if (username.value === '' && password.value === '') {
                for (let i = 0; i < tips.length; i++) {
                    tips[0].innerHTML = "用户名不能为空"
                    tips[1].innerHTML = "密码不能为空"
                    //显示
                    tips[i].style.display = 'block'
                }
            } else if (username.value === '') {
                for (let i = 0; i < tips.length; i++) {
                    tips[0].innerHTML = "用户名不能为空"
                    //显示
                    tips[0].style.display = 'block'
                }
            } else if (password.value === '') {
                for (let i = 0; i < tips.length; i++) {
                    tips[1].innerHTML = "密码不能为空"
                    //显示
                    tips[1].style.display = 'block'
                }
            } else if (username.value !== 'admin' || password.value !== 'admin') {
                for (let i = 0; i < tips.length; i++) {
                    //清除输入的值
                    username.value = ""
                    password.value = ""
                    //显示
                    tips[i].style.display = 'block'
                }
                alert("用户名或密码输入错误， 用户名和密码为: mtwjy")
            }
        }
    }

}