Ext.define('WEB_BASE.view.Test.Hbox.Hbox_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'Hbox_View',
    id: 'Hbox_View',

    controller: 'Hbox_ViewController',
    viewModel: {
        type: 'Hbox_ViewModel'
    },

    layout: 'hbox',
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Họ và tên:',
            emptyText: 'Hãy nhập họ và tên của bạn',
        },
        {
            xtype: 'datefield',
            fieldLabel: 'Ngày sinh:',
            emptyText: 'Hãy nhập ngày sinh của bạn',
        },
        {
            xtype: 'textfield',
            vtype: 'email',
            fieldLabel: 'Email:',
            emptyText: 'Hãy nhập Email của bạn',
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Địa chỉ:',
            emptyText: 'Hãy nhập địa chỉ của bạn',
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Số điện thoại:',
            emptyText: 'Hãy nhập số điện thoại của bạn',
        }
    ]
})