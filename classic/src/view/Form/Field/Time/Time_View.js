Ext.define('WEB_BASE.view.Form.Field.Time.Time_View', {
    extend: 'Ext.form.Panel',
    xtype: 'Time_View',
    id: 'Time_View',

    controller: 'Time_ViewController',
    viewModel: {
        type: 'Time_ViewModel'
    },

    layout: 'vbox',
    items: [
        {
            xtype: 'timefield',
            fieldLabel: 'Time',
            minValue: '13', // giờ nhỏ nhất
            maxValue: '15', // giờ lớn nhất
            increment: 0.5 // số phút giữa hai giá trị thời gian liên tiếp, mặc định 15p
        }
    ]
});