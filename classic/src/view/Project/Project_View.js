Ext.define('WEB_BASE.Project.Project_View', {
    extend: 'Ext.tab.Panel',
    xtype: 'Project_View',
    id: 'Project_View',

    controller: 'Project_ViewController',
    viewModel: {
        type: 'Project_ViewModel'
    },

    // plain: true, // xóa phông
    
    items: [
        {
            title: 'Trang test 1',
            xtype: 'TestPage1_View'
        },
        {
            title: 'Trang test 2',
            xtype: ''
        },
        {
            title: 'Trang test 3',
            xtype: ''
        },
        {
            title: 'Trang test 4',
            xtype: ''
        },
        {
            title: 'Trang test 5',
            xtype: ''
        },
        {
            title: 'Trang test 6',
            xtype: ''
        },
        {
            title: 'Trang test 7',
            xtype: ''
        },
        {
            title: 'Trang test 8',
            xtype: ''
        },
        {
            title: 'Trang test 9',
            xtype: ''
        },
        {
            title: 'Trang test 10',
            xtype: ''
        },
        {
            title: 'Trang test 11',
            xtype: ''
        },
        {
            title: 'Trang test 12',
            xtype: ''
        },
        {
            title: 'Trang test 13',
            xtype: ''
        },
        {
            title: 'Trang test 14',
            xtype: ''
        },
        {
            title: 'Trang test 15',
            xtype: ''
        },
        {
            title: 'Trang test 16',
            xtype: ''
        },
        {
            title: 'Trang test 17',
            xtype: ''
        },
        {
            title: 'Trang test 18',
            xtype: ''
        },
        {
            title: 'Trang test 19',
            xtype: ''
        },
        {
            title: 'Trang test 20',
            xtype: ''
        },
    ]
})