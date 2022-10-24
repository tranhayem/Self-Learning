Ext.define('WEB_BASE.view.Form.Field.Number.Number_View', {
    extend: 'Ext.form.Panel',
    xtype: 'Number_View',
    id: 'Number_View',

    controller: 'Number_ViewController',
    viewModel: {
        type: 'Number_ViewModel'
    },

    layout: 'vbox',
    items: [
        {
            xtype: 'numberfield',
            fieldLabel: 'Number',
            hideTrigger: true // default: false
            // keyNavEnable: false // tắt các nút lên xuống
            // mouseWheelEnabled: false // tắt lăn chuột
        }
    ]
});