Ext.define('WEB_BASE.view.Form.Field.Field_View', {
    extend: 'Ext.tab.Panel',
    xtype: 'Field_View',
    id: 'Field_View',

    controller: 'Field_ViewController',
    viewModel: {
        type: 'Field_ViewModel'
    },

    items: [
        {
            title: 'Checkbox',
            xtype: 'Checkbox_View'
        },
        {
            title: 'Combobox',
            xtype: 'Combobox_View'
        },
        {
            title: 'Date',
            xtype: 'Date_View'
        },
        {
            title: 'Display',
            xtype: 'Display_View'
        },
        {
            title: 'File',
            xtype: 'File_View'
        },
        {
            title: 'FileButton',
            xtype: 'FileButton_View'
        },
        {
            title: 'Hidden',
            xtype: 'Hidden_View'
        },
        {
            title: 'HtmlEditor',
            xtype: 'HtmlEditor_View'
        },
        {
            title: 'Number',
            xtype: 'Number_View'
        },
        {
            title: 'Picker',
            xtype: 'Picker_View'
        },
        {
            title: 'Radio',
            xtype: 'Radio_View'
        },
        {
            title: 'Spinner',
            xtype: 'Spinner_View'
        },
        {
            title: 'Tag',
            xtype: 'Tag_View'
        },
        {
            title: 'Text',
            xtype: 'Text_View'
        },
        {
            title: 'TextArea',
            xtype: 'TextArea_View'
        },
        {
            title: 'Time',
            xtype: 'Time_View'
        },
        {
            title: 'Trigger',
            xtype: 'Trigger_View'
        },
        {
            title: 'Vtype',
            xtype: 'Vtype_View'
        },
    ]
});