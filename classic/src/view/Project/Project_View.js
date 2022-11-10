Ext.define('WEB_BASE.view.Project.Project_View', {
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
    ]
})