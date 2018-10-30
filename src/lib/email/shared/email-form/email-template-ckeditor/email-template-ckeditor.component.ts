import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CoreApiService } from '@rd/core';

import { FillPoint } from './shared';

@Component({
  selector: 'rd-email-template-ckeditor',
  templateUrl: './email-template-ckeditor.component.html',
  styleUrls: ['./email-template-ckeditor.component.less']
})
export class EmailTemplateCkeditorComponent implements OnInit {
    @Input() ngModel: string = '';
    @Input() allowDynamicFields: boolean = true;
    @Output() change: EventEmitter<string> = new EventEmitter<string>();

    textEditorConfig;
    canShowTextEditor: boolean = false;

  constructor(private coreApiSvc: CoreApiService) { }

  ngOnInit() {
    this.getDropdownInfo();
  }

  getDropdownInfo() {
    this.coreApiSvc.get('/fillPoints?include=category').subscribe( (result) => {
        let fillPoints = result.filter(function(x){ return new FillPoint(x); });
        let categories = this.getAllCategories(fillPoints);
        this.textEditorConfig = this.generateTextEditorConfig(categories, fillPoints);
        this.canShowTextEditor = true;
    });
  }

  getAllCategories(fillPoints) {
      let array = [];
      for (let i = 0; i < fillPoints.length; i++) {
          if (array.filter(function(x){ return x.dropDownLabel === fillPoints[i].category.dropDownLabel; }).length == 0 ) {
            array.push(fillPoints[i].category);
          }
      }
      return array.sort(function(a,b){ return a.sortOrder - b.sortOrder; });
  }

  onChange() {
      this.change.emit(this.ngModel);
  }

  generateTextEditorConfig(categories, fillPoints) {
    // http://docs.ckeditor.com/#!/guide/dev_styles
    // https://jsfiddle.net/oleq/5x8JC/

    let self = this;
    return {
        removePlugins: 'contextmenu,liststyle,tabletools',
        disableNativeSpellChecker: false,
        on: {
            pluginsLoaded: function() {
                var editor = this,
                    config = editor.config;

                // http://docs.ckeditor.com/#!/guide/dev_toolbarconcepts
                config.toolbar = [
                    { name: 'styles', items: ['Styles', 'Format'] },
                    { name: 'basicstyles', items: ['Bold', 'Italic', 'Strike', '-', 'RemoveFormat'] },
                    { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote'] },
                    { name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
                    { name: 'others', items: ['dynamicFields'] }
                ];

                // See: http://docs.ckeditor.com/#!/guide/dev_advanced_content_filter
                var acfRules = 'span{color}';
                if(self.allowDynamicFields){
                    // Create the Dropdown box            
                    editor.ui.addRichCombo( 'dynamicFields', {
                        label: 'Dynamic Fields',
                        title: 'Dynamic Fields',
                        className : 'cke_rd_dynamic_fields',
                        toolbar: 'others',
                        allowedContent: acfRules,
                        requiredContent: acfRules,
                        panel: {
                            css: [ 'https://cdn.ckeditor.com/4.4.0/standard/skins/moono/editor.css?t=E3OD' ].concat( config.contentsCss ),
                            multiSelect: false
                        },
                        
                        // Let's populate the list of available items.
                        init: function() {
                            for (let i = 0; i < categories.length; i++) {
                                this.startGroup(categories[i].dropDownLabel);

                                let items = fillPoints.filter(function(x){ 
                                        return x.category.fillPointLabel == categories[i].fillPointLabel;
                                    }).sort(function(a,b){ 
                                        return a.sortOrder - b.sortOrder; 
                                    });
                                
                                for (let j = 0; j < items.length; j++) {
                                    var item = new FillPoint(items[j]);
                                    this.add(item.fillPointValue, item.dropDownLabel);
                                }
                            }
                        },
            
                        onClick: function(value) {
                            editor.focus();
                            editor.fire('saveSnapshot');
                            editor.insertHtml(value);
                            editor.fire('saveSnapshot');
                        },
            
                        onRender: function() { },
                        
                        onOpen: function() { },
            
                        refresh: function() {
                            if ( !editor.activeFilter.check( acfRules ) )
                                this.setState( CKEDITOR.TRISTATE_DISABLED );
                        }
                    });       
                }     
            }
        }
    };
  }

}
