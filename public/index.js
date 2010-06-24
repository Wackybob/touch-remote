Ext.ux.UniversalUI = Ext.extend(Ext.Panel, {
    layout: 'card',
    items: [{
        cls: 'launchscreen',
        html: '<div></div>'
    }],
    initComponent : function() {
        this.backButton = new Ext.Button({
            hidden: true,
            text: 'Back',
            ui: 'back',
            handler: this.onBackButtonTap,
            scope: this
        });

        this.navigationButton = new Ext.Button({
            hidden: Ext.platform.isPhone || Ext.orientation == 'landscape',
            text: 'Navigation',
            handler: this.onNavButtonTap,
            scope: this
        });
        
        this.navigationBar = new Ext.Toolbar({
            ui: 'dark',
            dock: 'top',
            title: this.title,
            items: [this.backButton, this.navigationButton].concat(this.buttons || [])
        });
        
        this.navigationPanel = new Ext.NestedList({
            items: this.navigationItems || [],
            dock: 'left',
            width: 250,
            height: 456,
            hidden: !Ext.platform.isPhone && Ext.orientation == 'portrait',
            toolbar: Ext.platform.isPhone ? this.navigationBar : null,
            listeners: {
                listchange: this.onListChange,
                scope: this
            }
        });
        
        this.dockedItems = this.dockedItems || [];
        this.dockedItems.unshift(this.navigationBar);
        
        if (!Ext.platform.isPhone && Ext.orientation == 'landscape') {
            this.dockedItems.unshift(this.navigationPanel);
        }
        else if (Ext.platform.isPhone) {
            this.items = this.items || [];
            this.items.unshift(this.navigationPanel);
        }
        
        this.addEvents('navigate');
        
        Ext.ux.UniversalUI.superclass.initComponent.call(this);
    },
    
    onListChange : function(list, item) {
        if (Ext.orientation == 'portrait' && !Ext.platform.isPhone && !item.items && !item.preventHide) {
            this.navigationPanel.hide();
        }

        if (item.card) {
            this.setCard(item.card, item.animation || 'slide');
            this.currentCard = item.card;
            if (item.text) {
                this.navigationBar.setTitle(item.text);
            }
            if (Ext.platform.isPhone) {
                this.backButton.show();
                this.navigationBar.doLayout();
            }
        }

        this.fireEvent('navigate', this, item, list);
    },

    onNavButtonTap : function() {
        this.navigationPanel.showBy(this.navigationButton, 'fade');
    },

    onBackButtonTap : function() {
        this.setCard(this.navigationPanel, {type: 'slide', direction: 'right'});
        this.currentCard = this.navigationPanel;
        if (Ext.platform.isPhone) {
            this.backButton.hide();
            this.navigationBar.setTitle(this.title);
            this.navigationBar.doLayout();
        }
        this.fireEvent('navigate', this, this.navigationPanel.activeItem, this.navigationPanel);
    },

    onOrientationChange : function(orientation, w, h) {
        Ext.ux.UniversalUI.superclass.onOrientationChange.call(this, orientation, w, h);

        if (!Ext.platform.isPhone) {
            if (orientation == 'portrait') {
                this.removeDocked(this.navigationPanel, false);
                this.navigationPanel.hide();
                this.navigationPanel.setFloating(true);
                this.navigationButton.show();
            } else {
                this.navigationPanel.setFloating(false);
                this.navigationPanel.show();
                this.navigationButton.hide();
                this.insertDocked(0, this.navigationPanel);
            }

            this.doComponentLayout();
            this.navigationBar.doComponentLayout();
        }
    }
});

Ext.regModel('Contact', {
    fields: ['firstName', 'lastName']
});

Ext.ns('demos');
demos.ListStore = new Ext.data.Store({
    model: 'Contact',
    sorters: 'firstName',
    getGroupString : function(record) {
        return record.get('firstName')[0];
    },
    data: [
        {firstName: 'Julio', lastName: 'Benesh'},
        {firstName: 'Julio', lastName: 'Minich'},
        {firstName: 'Tania', lastName: 'Ricco'},
        {firstName: 'Odessa', lastName: 'Steuck'},
        {firstName: 'Nelson', lastName: 'Raber'},
        {firstName: 'Tyrone', lastName: 'Scannell'},
        {firstName: 'Allan', lastName: 'Disbrow'},
        {firstName: 'Cody', lastName: 'Herrell'},
        {firstName: 'Julio', lastName: 'Burgoyne'},
        {firstName: 'Jessie', lastName: 'Boedeker'},
        {firstName: 'Allan', lastName: 'Leyendecker'},
        {firstName: 'Javier', lastName: 'Lockley'},
        {firstName: 'Guy', lastName: 'Reasor'},
        {firstName: 'Jamie', lastName: 'Brummer'},
        {firstName: 'Jessie', lastName: 'Casa'},
        {firstName: 'Marcie', lastName: 'Ricca'},
        {firstName: 'Guy', lastName: 'Lamoureaux'},
        {firstName: 'Althea', lastName: 'Sturtz'},
        {firstName: 'Kenya', lastName: 'Morocco'},
        {firstName: 'Rae', lastName: 'Pasquariello'},
        {firstName: 'Ted', lastName: 'Abundis'},
        {firstName: 'Jessie', lastName: 'Schacherer'},
        {firstName: 'Jamie', lastName: 'Gleaves'},
        {firstName: 'Hillary', lastName: 'Spiva'},
        {firstName: 'Elinor', lastName: 'Rockefeller'},
        {firstName: 'Dona', lastName: 'Clauss'},
        {firstName: 'Ashlee', lastName: 'Kennerly'},
        {firstName: 'Alana', lastName: 'Wiersma'},
        {firstName: 'Kelly', lastName: 'Holdman'},
        {firstName: 'Mathew', lastName: 'Lofthouse'},
        {firstName: 'Dona', lastName: 'Tatman'},
        {firstName: 'Clayton', lastName: 'Clear'},
        {firstName: 'Rosalinda', lastName: 'Urman'},
        {firstName: 'Cody', lastName: 'Sayler'},
        {firstName: 'Odessa', lastName: 'Averitt'},
        {firstName: 'Ted', lastName: 'Poage'},
        {firstName: 'Penelope', lastName: 'Guyver'},
        {firstName: 'Katy', lastName: 'Bluford'},
        {firstName: 'Kelly', lastName: 'Mchargue'},
        {firstName: 'Kathrine', lastName: 'Gustavson'},
        {firstName: 'Kelly', lastName: 'Hartson'},
        {firstName: 'Carlene', lastName: 'Summitt'},
        {firstName: 'Kathrine', lastName: 'Vrabel'},
        {firstName: 'Roxie', lastName: 'Mcconn'},
        {firstName: 'Margery', lastName: 'Pullman'},
        {firstName: 'Avis', lastName: 'Bueche'},
        {firstName: 'Esmeralda', lastName: 'Katzer'},
        {firstName: 'Tania', lastName: 'Belmonte'},
        {firstName: 'Malinda', lastName: 'Kwak'},
        {firstName: 'Tanisha', lastName: 'Jobin'},
        {firstName: 'Kelly', lastName: 'Dziedzic'},
        {firstName: 'Darren', lastName: 'Devalle'},
        {firstName: 'Julio', lastName: 'Buchannon'},
        {firstName: 'Darren', lastName: 'Schreier'},
        {firstName: 'Jamie', lastName: 'Pollman'},
        {firstName: 'Karina', lastName: 'Pompey'},
        {firstName: 'Hugh', lastName: 'Snover'},
        {firstName: 'Zebra', lastName: 'Evilias'}
    ]
});


demos.List = new Ext.Panel({
    layout: Ext.platform.isPhone ? 'fit' : {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    cls: 'demo-list',
    items: [{
        width: 300,
        height: 500,
        xtype: 'list',
        store: demos.ListStore,
        tpl: '<tpl for="."><div class="contact"><strong>{firstName}</strong> {lastName}</div></tpl>',
        itemSelector: 'div.contact',
        singleSelect: true,
        grouped: true,
        indexBar: true
    }]
});

Ext.setup({
    icon: 'icon.png',
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    glossOnIcon: false,
    onReady: function() {
        var tabpanel = new Ext.TabPanel({
            tabBar: {
                dock: 'bottom',
                layout: {
                    pack: 'center'
                }
            },
            fullscreen: true,
            ui: 'light',
            animation: {
                type: 'cube',
                cover: true
            },
            defaults: {
                scroll: 'vertical'
            },
            items: [{
                title: 'About',
                html: '<h1>Touch Remote</h1><p>Welcome to Touch Remote.  To begin, select a tab at the bottom</p>',
                iconCls: 'info',
                cls: 'about-card dark-bg'
            }, {
                title: 'Browser',
                layout: 'fit',
                items: new Ext.ux.UniversalUI({
                    title: 'Browser',
                    navigationItems: [{
                        text: 'Shows',
                        cls: 'launchscreen',
                        items: [{
                            text: 'List',
                            card: demos.List
                        }]
                    }],
        //            buttons: [{xtype: 'spacer'}, this.sourceButton],
                    listeners: {
        //                navigate : this.onNavigate,
                        scope: this
                    }
                }),
                cls: 'light-bg',
                iconCls: 'bookmarks'
            }, {
                title: 'Favorites',
                html: '<h1>Favorites</h1>',
                iconCls: 'favorites',
                badgeText: '4',
                cls: 'dark-bg'
            }, {
                title: 'Downloads',
                id: 'tab3',
                html: '<h1>Downloads</h1>',
                badgeText: '1',
                iconCls: 'download',
                cls: 'dark-bg'
            }, {
                title: 'Settings',
                html: '<h1>Settings</h1>',
                iconCls: 'settings',
                cls: 'dark-bg'
            }, {
                title: 'User',
                html: '<h1>User Card</h1>',
                iconCls: 'user',
                cls: 'dark-bg'
            }]
        });
    }
});

