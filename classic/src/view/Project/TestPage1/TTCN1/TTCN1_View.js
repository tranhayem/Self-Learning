Ext.define('WEB_BASE.Project.TestPage1.TTCN1.TTCN1_View', {
    extend: 'Ext.panel.Panel',
    xtype: 'TTCN1_View',
    id: 'TTCN1_View',

    controller: 'TTCN1_ViewController',
    viewModel: {
        xtype: 'TTCN1_ViewModel'
    },
})