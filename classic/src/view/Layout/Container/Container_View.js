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
            fieldLabel: 'H??? v?? t??n:',
            emptyText: 'H??y nh???p h??? v?? t??n c???a b???n',
        },
        {
            xtype: 'datefield',
            fieldLabel: 'Ng??y sinh:',
            emptyText: 'H??y nh???p ng??y sinh c???a b???n',
        },
        {
            xtype: 'textfield',
            vtype: 'email',
            fieldLabel: 'Email:',
            emptyText: 'H??y nh???p Email c???a b???n',
        },
        {
            xtype: 'textfield',
            fieldLabel: '?????a ch???:',
            emptyText: 'H??y nh???p ?????a ch??? c???a b???n',
        },
        {
            xtype: 'textfield',
            fieldLabel: 'S??? ??i???n tho???i:',
            emptyText: 'H??y nh???p s??? ??i???n tho???i c???a b???n',
        }
    ]
})