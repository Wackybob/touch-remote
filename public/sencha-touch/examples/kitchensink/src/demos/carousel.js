demos.Carousel = new Ext.Panel({
    cls: 'cards',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    defaults: {
        flex: 1
    },
    items: [{
        xtype: 'carousel',
        cls: 'card',
        items: [{
            html: '<p>Navigate the carousel on this page by swiping left/right or clicking on one side of the circle indicators below.</p>',
            cls: 'card1',
        },
        {
            html: 'Card #2',
            cls: 'card2'
        },
        {
            html: 'Card #3',
            cls: 'card3'
        }]
    }, {
        xtype: 'carousel',
        cls: 'card',
        ui: 'light',
        items: [{
            html: '<p>Carousels can be given a <code>ui</code> of &#8216;light&#8217; or &#8216;dark.&#8217;</p>',
            cls: 'card1',
        },
        {
            html: 'Card #2',
            cls: 'card2'
        },
        {
            html: 'Card #3',
            cls: 'card3'
        }]
    }]
});