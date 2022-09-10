Ext.application({
    name: 'HelloExt',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'Ext JS 4 application',
                    html : '<h3>Welcome into Ext JS 4!</h3>'
                }
            ]
        });
    }
});