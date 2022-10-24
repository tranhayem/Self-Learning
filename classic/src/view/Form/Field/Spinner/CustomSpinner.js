Ext.define('Ext.ux.CustomSpinner', {
    extend: 'Ext.form.field.Spinner',
    alias: 'widget.customspinner',

    // override onSpinUp (using step isn't neccessary)
    onSpinUp: function () {
        var me = this;
        if (!me.readOnly) {
            // loại bỏ "Pack", mặc định là 0 khi phân tích cú pháp không thành công
            var val = parseInt(me.getValue().split(' '), 10) || 0;
            me.setValue((val + me.step) + ' Pack');
        }
    },

    // override onSpinDown
    onSpinDown: function () {
        var me = this;
        if (!me.readOnly) {
            // loại bỏ "Pack", mặc định là 0 khi phân tích cú pháp không thành công
            var val = parseInt(me.getValue().split(' '), 10) || 0;
            if (val <= me.step) {
                me.setValue('Dry!');
            } else {
                me.setValue((val - me.step) + ' Pack');
            }
        }
    }
});