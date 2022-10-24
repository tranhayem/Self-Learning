Ext.define('WEB_BASE.view.Form.Field.Text.Text_View', {
    extend: 'Ext.form.Panel',
    xtype: 'Text_View',
    id: 'Text_View',

    controller: 'Text_ViewController',
    viewModel: {
        type: 'Text_ViewModel'
    },

    layout: 'vbox',
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Text'
        },
        {
            xtype: 'textfield',
            vtype: 'email',
            fieldLabel: 'Email:',
            emptyText: 'Hãy nhập Email của bạn',
            allowBlank: false, // báo lỗi nếu không có gì được nhập
            msgTarget: 'under', // nơi hiển thị lỗi
            blankText: 'Chưa nhập email',
            invalidText: '{0} không phải định dạng Email hợp lệ. Định dạng email: user@gmail.com',
            bind: {
                value: '{email}'
            }
        },
    ]
});