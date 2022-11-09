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
            title: 'Form Đăng Nhập',
            border: true,
            layout: 'auto',
            bodyPadding: 10,
            width: 300,
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Tên Đăng Nhập:',
                    emptyText: 'Nhập tài khoản',
                    blankText: 'Chưa nhập tài khoản',
                    allowBlank: false,
                    msgTarget: 'under',
                    width: '100%',
                    bind: {
                        value: '{username}'
                    }
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    width: '100%',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Mật Khẩu:',
                            emptyText: 'Nhập mật khẩu',
                            inputType: 'password',
                            blankText: 'Chưa nhập mật khẩu',
                            allowBlank: false,
                            msgTarget: 'under',
                            flex: 1,
                            bind: {
                                value: '{password}'
                            }
                        },
                        {
                            xtype: 'button',
                            style: '',
                            iconCls: 'fa fa-eye',
                            handler: function (button) {
                                var ShowPass = this.iconCls === 'fa fa-eye';
                                this.setIconCls(ShowPass ? 'fa fa-eye-slash' : 'fa fa-eye');
                                this.prev().getEl().query('input', false)[0].set({
                                    'type': ShowPass ? 'text' : 'password'
                                })
                            },
                        }
                    ]
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