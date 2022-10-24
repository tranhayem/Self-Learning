Ext.define('WEB_BASE.view.Form.Form_Login.Form_Login_View', {
    extend: 'Ext.form.Panel',
    xtype: 'Form_Login_View',
    id: 'Form_Login_View',

    controller: 'Form_Login_Controller',
    viewModel: {
        type: 'Form_Login_ViewModel'
    },

    layout: 'center',
    items: [
        {
            xtype: 'form',
            border: true,
            layout: 'auto',
            title: 'Form Đăng Nhập',
            bodyPadding: 10,
            defaults: {
                allowBlank: false,
                msgTarget: 'under'
            },
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Tên Đăng Nhập:',
                    emptyText: 'Nhập tài khoản',
                    blankText: 'Chưa nhập tài khoản',
                    bind: {
                        value: '{username}'
                    }
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Mật Khẩu:',
                    emptyText: 'Nhập mật khẩu',
                    inputType: 'password',
                    blankText: 'Chưa nhập mật khẩu',
                    bind: {
                        value: '{password}'
                    }
                },
                {
                    xtype: 'checkboxfield',
                    boxLabel: 'Ghi nhớ mật khẩu'
                },
                {
                    xtype: 'button',
                    text: 'Đăng nhập',
                    width: '50%',
                    formBind: true,
                    listeners: {
                        click: 'onlogin'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Đăng Ký',
                    width: '50%',
                    listeners: {
                        click: 'signup'
                    }
                }
            ]
        }
    ]
});