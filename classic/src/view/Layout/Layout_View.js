Ext.define('WEB_BASE.view.Layout.Layout_View', {
    extend: 'Ext.tab.Panel',
    xtype: 'Layout_View',
    id: 'Layout_View',

    controller: 'Layout_ViewController',
    viewModel: {
        type: 'Layout_ViewModel'
    },

    items: [
        {
            title: 'Absolute',
            xtype: 'Absolute_View'
        },
        {
            title: 'Accordion',
            xtype: 'Accordion_View'
        },
        {
            title: 'Anchor',
            xtype: 'Anchor_View'
        },
        {
            title: 'Auto',
            xtype: 'Auto_View'
        },
        {
            title: 'Border',
            xtype: 'Border_View'
        },
        {
            title: 'Box',
            xtype: 'Box_View'
        },
        {
            title: 'Card',
            xtype: 'Card_View'
        },
        {
            title: 'Center',
            xtype: 'Center_View'
        },
        {
            title: 'Checkboxgroup',
            xtype: 'Checkboxgroup_View'
        },
        {
            title: 'Column',
            xtype: 'Column_View'
        },
        {
            title: 'ColumnSplitterTracker',
            xtype: 'ColumnSplitterTracker_View'
        },
        {
            title: 'Container',
            xtype: 'Container_View'
        },
        {
            title: 'Fit',
            xtype: 'Fit_View'
        },
        {
            title: 'Form',
            xtype: 'Form_View'
        },
        {
            title: 'Hbox',
            xtype: 'Hbox_View'
        },
        {
            title: 'Table',
            xtype: 'Table_View'
        },
        {
            title: 'Vbox',
            xtype: 'Vbox_View'
        }
    ]
})