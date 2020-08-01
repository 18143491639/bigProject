
$(function () {
    // 请求信息
    function getUserInfo() {
        $.ajax({
            type: 'GET',
            url: '/my/userinfo',
            success: function (res) {
                if (res.status !== 0) {
                    return alert(res.message)
                }
                renderAvatar(res.data)
            }
        })
    }

    // 渲染用户的头像
    function renderAvatar(user) {
        const name = user.nickname || user.username
        $('#welcome').text('欢迎' + name)
        if (user.user_pic) {
            $('.layui-nav-img')
                .attr('src', user.user_pic)
                .show()
            $('.text-avatar').hide()
        }
        else {
            $('.layui-nav-img').hide()
            const first = name[0].toUpperCase()
            $('.text-avatar')
                .html(first)
                .show()
        }
    }

    const layer = layui.layer

    getUserInfo()

    $('#btnLogout').on('click', function () {
        // 提示用户是否确认退出
        layer.confirm('确定退出登录?', { icon: 3, title: '提示' }, function (index) {
            //do something
            // 1. 清空本地存储中的 token
            localStorage.removeItem('token')
            // 2. 重新跳转到登录页面
            location.href = '/login.html'

            // 关闭 confirm 询问框
            layer.close(index)
        })
    })
})