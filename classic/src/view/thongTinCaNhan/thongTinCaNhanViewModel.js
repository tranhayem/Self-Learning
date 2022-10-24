Ext.define('WEB_BASE.view.thongTinCaNhan.thongTinCaNhanView.js', {
    extend: 'Ext.panel.Panel',
    xtype: 'thongTinCaNhanView',
    id: 'thongTinCaNhanView',

    controller: 'thongTinCaNhanViewController',
    viewModel: {
        type: 'thongTinCaNhanViewModel'
    },

    
})