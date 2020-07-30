// 测试：
const testUrl = 'http://ajax.frontend.itheima.net'
// 生产：
const proUrl = 'http://ajax.frontend.itheima.net'

$.ajaxPrefilter(function (options) {
    options.url = testUrl + options.url
})