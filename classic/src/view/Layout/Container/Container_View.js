Ext.define('WEB_BASE.view.Test.Container.Container_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'Container_View',
    id: 'Container_View',

    controller: 'Container_ViewController',
    viewModel: {
        type: 'Container_ViewModel'
    },

    layout: 'container',
    items: [
        {
            xtype: 'checkboxgroup',
            fieldLabel: 'checkbox',
            columns: 2,
            items: [
                { boxLabel: 'test1' },
                { boxLabel: 'test2' },
                { boxLabel: 'test3' },
                { boxLabel: 'test4' },
                { boxLabel: 'test5' },
                { boxLabel: 'test6' },
                { boxLabel: 'test7' },
                { boxLabel: 'test8' },
                { boxLabel: 'test9' },
                { boxLabel: 'test10' }
            ]
        },
        {
            xtype: 'radiogroup',
            fieldLabel: 'radio',
            columns: 4,
            vertical: true,
            items: [
                { boxLabel: 'test1' },
                { boxLabel: 'test2' },
                { boxLabel: 'test3' },
                { boxLabel: 'test4' },
                { boxLabel: 'test5' },
                { boxLabel: 'test6' },
                { boxLabel: 'test7' },
                { boxLabel: 'test8' },
                { boxLabel: 'test9' },
                { boxLabel: 'test10' }
            ]
        },
        {
            xtype: 'form',
            bodyPadding: 10,
            title: 'vietnam',
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'bac'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'trung'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'nam'
                }
            ]
        },
        {
            xtype: 'form',
            bodyPadding: 10,
            title: 'vietnam',
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'bac'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'trung'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'nam'
                }
            ]
        },
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