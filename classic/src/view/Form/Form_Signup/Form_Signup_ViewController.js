Ext.define('WEB_BASE.view.Form.Form_Signup.Form_Signup_ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.Form_Signup_ViewController',

    login: function() {
        password= this.getViewModel().get('password'),
        repassword= this.getViewModel().get('repassword');
        if(password !== repassword) {
            alert('Mật khẩu không khớp, hãy nhập lại mật khẩu')
        } else {
            Ext.create('Ext.window.Window', {
                items: [
                    {
                    xtype: 'Form_Login_View'
                    }
                ]
            }).show()
        }
    }
});