Ext.define('WEB_BASE.view.Form.Form_Login.Form_Login_Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.Form_Login_Controller',

    showPass: function (button) {
        var ShowPass = this.iconCls === 'fa fa-eye';
        this.setIconCls(ShowPass ? 'fa fa-eye-slash' : 'fa fa-eye');
        this.prev().getEl().query('input', false)[0].set({
            'type': ShowPass ? 'text' : 'password'
        })
    },

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