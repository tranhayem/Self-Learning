Ext.define('WEB_BASE.view.Form.Form_Login.Form_Login_Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.Form_Login_Controller',

    onlogin: function() {
        username= this.getViewModel().get('username'),
        password= this.getViewModel().get('password'),
        alert('Tài khoản: ' + username + '\n' + 'Mật khẩu: ' + password + '\n' + 'Đăng nhập thành công')
    },

    signup: function() {
        Ext.create('Ext.window.Window', {
            items: [
                {
                    xtype: 'Form_Signup_View'
                }
            ]
        }).show();
    }
});