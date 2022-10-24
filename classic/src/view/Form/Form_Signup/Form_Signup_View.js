Ext.define('WEB_BASE.view.Form.Form_Signup.Form_Signup_View', {
    extend: 'Ext.form.Panel',
    xtype: 'Form_Signup_View',
    id: 'Form_Signup_View',

    controller: 'Form_Signup_ViewController',
    viewModel: {
        type: 'Form_Signup_ViewModel'
    },

    layout: 'center',
    items: [
        {
            xtype: 'fieldset',
            title: 'Form Đăng Ký',
            width: 350,
            layout: {
                type: 'vbox',
                align: 'center'
            },
            bodyPadding: 10,
            items: [
                {
                    xtype: 'fieldset',
                    width: '100%',
                    title: 'Thông tin tài khoản',
                    defaults: {
                        width: '100%',
                        allowBlank: false,
                        msgTarget: 'under',
                        labelWidth: 120
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Tài khoản:',
                            emptyText: 'Hãy nhập tài khoản của bạn',
                            blankText: 'Chưa nhập tài khoản',
                            bind: {
                                value: '{username}'
                            }
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Mật khẩu:',
                            emptyText: 'Hãy nhập mật khẩu của bạn',
                            inputType: 'password',
                            blankText: 'Chưa nhập mật khẩu',
                            bind: {
                                value: '{password}'
                            }
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Xác nhận mật khẩu:',
                            emptyText: 'Hãy nhập lại mật khẩu của bạn',
                            inputType: 'password',
                            blankText: 'Chưa nhập lại mật khẩu',
                            bind: {
                                value: '{repassword}'
                            }
                        },
                    ]
                },
                {
                    xtype: 'fieldset',
                    width: '100%',
                    title: 'Thông tin cá nhân',
                    layout: 'vbox',
                    defaults: {
                        width: '100%',
                        allowBlank: false,
                        msgTarget: 'under',
                        labelWidth: 120
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Họ và tên:',
                            emptyText: 'Hãy nhập họ và tên của bạn',
                            blankText: 'Chưa nhập họ và tên',
                            bind: {
                                value: '{name}'
                            }
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: 'Ngày sinh:',
                            emptyText: 'Hãy nhập ngày sinh của bạn',
                            blankText: 'Chưa nhập ngày sinh',
                            bind: {
                                value: '{dob}'
                            }
                        },
                        {
                            xtype: 'textfield',
                            vtype: 'email',
                            fieldLabel: 'Email:',
                            emptyText: 'Hãy nhập Email của bạn',
                            blankText: 'Chưa nhập email',
                            invalidText: '{0} không phải định dạng Email hợp lệ. Định dạng email: user@gmail.com',
                            bind: {
                                value: '{email}'
                            }
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Địa chỉ:',
                            emptyText: 'Hãy nhập địa chỉ của bạn',
                            blankText: 'Chưa nhập địa chỉ',
                            bind: {
                                value: '{address}'
                            }
                        },
                        {
                            xtype: 'numberfield',
                            hideTrigger: true,
                            fieldLabel: 'Số điện thoại:',
                            emptyText: 'Hãy nhập số điện thoại của bạn',
                            blankText: 'Chưa nhập số điện thoại',
                            bind: {
                                value: '{phone}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'button',
                    width: '33%',
                    text: 'Đăng ký',
                    height: 30,
                    margin: '0 0 10 0',
                    formBind: true,
                    listeners: {
                        click: 'login'
                    }
                }
            ]
        }
    ]
});