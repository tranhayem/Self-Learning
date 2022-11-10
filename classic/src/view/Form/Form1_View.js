Ext.define('WEB_BASE.view.Form.Form1_View', {
    extend: 'Ext.tab.Panel',
    xtype: 'Form1_View',
    id: 'Form1_View',

    controller: 'Form1_ViewController',
    viewModel: {
        type: 'Form1_ViewModel'
    },

    items: [
        {
            title: 'Field',
            xtype: 'Field_View'
        },
        {
            title: 'Form Login',
            xtype: 'Form_Login_View'
        },
        {
            title: 'Form Signup',
            xtype: 'Form_Signup_View'
        }
    ]
})