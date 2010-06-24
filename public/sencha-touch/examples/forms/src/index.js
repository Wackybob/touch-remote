Ext.setup({
    icon: 'icon.png',
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    glossOnIcon: false,
    onReady: function() {
        Ext.regModel('User', {
            fields: [
                {name: 'name',     type: 'string'},
                {name: 'password', type: 'password'},
                {name: 'email',    type: 'string'},
                {name: 'url',      type: 'string'},
                {name: 'rank',     type: 'string'},
                {name: 'value',    type: 'int'},
                {name: 'enable',   type: 'boolean'},
                {name: 'cool',     type: 'boolean'},
                {name: 'secret',   type: 'boolean'}
            ]
        });
        
        var formBase = {
            scroll: 'vertical',
            
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Personal Info',
                    instructions: 'Please enter the information above.',
                    defaults: {
                        required: true,
                        labelAlign: 'left'
                    },
                    items: [{
                        xtype: 'textfield',
                        name : 'name',
                        label: 'Name'
                    }, {
                        xtype: 'passwordfield',
                        name : 'password',
                        label: 'Password'
                    }, {
                        xtype: 'textfield',
                        name : 'disabled',
                        label: 'Disabled',
                        disabled: true
                    }, {
                        xtype: 'emailfield',
                        name : 'email',
                        label: 'Email',
                        placeholder: 'you@domain.com'
                    }, {
                        xtype: 'urlfield',
                        name : 'url',
                        label: 'Url',
                        placeholder: 'http://google.com'
                    }, {
                        xtype: 'checkbox',
                        name : 'cool',
                        label: 'Cool'
                    }, {
                        xtype: 'spinnerfield',
                        name : 'spinner',
                        label: 'Spinner'
                    }, {
                        xtype: 'select',
                        name : 'rank',
                        label: 'Rank',
                        options: [
                            {text: 'Master',  value: 'master'},
                            {text: 'Student', value: 'padawan'}
                        ]
                    }, {
                        xtype: 'hidden',
                        name : 'secret',
                        value: false
                    }, {
                        xtype : 'textarea',
                        name  : 'bio',
                        label : 'Bio'
                    }, {
                        xtype: 'slider',
                        name : 'height',
                        label: 'Height'
                    }, {
                        xtype: 'toggle',
                        name : 'enable',
                        label: 'Security Mode'
                    }, {
                        xtype: 'radio',
                        name: 'color',
                        label: 'Red'
                    }, {
                        xtype: 'radio',
                        name: 'color',
                        label: 'Blue'
                    }]
                }, {
                    xtype: 'fieldset',
                    title: 'Favorite color',
                    defaults: { xtype: 'radio' },
                    items: [
                        { name : 'color', label: 'Red' },
                        { name : 'color', label: 'Blue' },
                        { name : 'color', label: 'Green' },
                        { name : 'color', label: 'Purple' }
                    ]
                }, {
                    xtype: 'fieldset',
                    title: 'HTML5',
                    items: [{
                        xtype: 'numberfield',
                        name: 'number',
                        label: 'Number'
                    }, {
                        xtype: 'emailfield',
                        name: 'email',
                        label: 'Email'
                    }, {
                        xtype: 'urlfield',
                        name: 'url',
                        label: 'URL'
                    }]
                }, {
                    xtype: 'fieldset',
                    title: 'Single Select (in fieldset)',
                    items: [{
                        xtype: 'select',
                        name: 'options',
                        options: [
                            {text: 'This is just a big select',  value: '1'},
                            {text: '2', value: '2'}
                        ]
                    }]
                }, {
                    xtype: 'fieldset',
                    title: 'Single Text (in fieldset)',
                    items: [{
                        xtype: 'textfield',
                        name: 'single_text'
                    }]
                }, {
                    xtype: 'fieldset',
                    title: 'Single Toggle (in fieldset)',
                    items: [{
                        xtype: 'toggle',
                        name: 'single_toggle'
                    }]
                }, {
                    xtype: 'fieldset',
                    title: 'Single Slider (in fieldset)',
                    items: [{
                        xtype: 'slider',
                        name: 'single_slider'
                    }]
                }
            ],
            
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            text: 'Load Record',
                            ui: 'round',
                            handler: function() {
                                var user = Ext.ModelMgr.create({
                                    name    : 'Akura',
                                    password: 'secret',
                                    email   : 'saru@extjs.com',
                                    url     : 'http://extjs.com',
                                    value   : 50,
                                    enable  : 1,
                                    cool    : true,
                                    rank    : 'padawan',
                                    secret  : true
                                }, 'User');
                                
                                form.load(user);
                            }
                        },
                        {xtype: 'spacer'},
                        {
                            text: 'Reset',
                            handler: function() {
                                form.reset();
                            }
                        },
                        {
                            text: 'Save',
                            ui: 'action',
                            handler: function() {
                                console.log(form.getValues());
                            }
                        }
                    ]
                }
            ]
        };
        
        if (Ext.platform.isAndroidOS) {
            formBase.items.unshift({
                xtype: 'component',
                styleHtmlContent: true,
                html: '<span style="color: red">Forms on Android are currently under development. We are working hard to improve this in upcoming releases.</span>'
            });
        }
        
        if (Ext.platform.isPhone) {
            formBase.fullscreen = true;
        } else {
            Ext.apply(formBase, {
                autoRender: true,
                floating: true,
                modal: true,
                centered: true,
                hideOnMaskTap: false,
                height: 385,
                width: 480
            });
        }
        
        var form = new Ext.form.FormPanel(formBase);
        form.show();
    }
});