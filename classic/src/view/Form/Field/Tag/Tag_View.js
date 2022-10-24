Ext.define('WEB_BASE.view.Form.Field.Tag.Tag_View', {
    extend: 'Ext.form.Panel',
    xtype: 'Tag_View',
    id: 'Tag_View',

    controller: 'Tag_ViewController',
    viewModel: {
        type: 'Tag_ViewModel'
    },

    layout: 'vbox',
    items: [
        {
            xtype: 'tagfield',
            fieldLabel: 'Tag',
            displayField: 'name',
            bind: {
                store: '{Tag_Store}'
            },
            filterPickList: true // xóa những tag đã chọn khỏi filter
        }
    ]
});