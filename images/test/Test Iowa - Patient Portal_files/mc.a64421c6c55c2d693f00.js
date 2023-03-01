webpackJsonp([5],{197:function(e,n,i){var t,o;t=[i(0),i(183),i(528),i(529),i(530),i(268),i(531),i(532),i(533),i(534),i(535),i(536),i(537),i(538),i(539),i(540),i(541)],void 0!==(o=function(e,n,i,t,o,r,c,s,d,l,a,u,h,C,m,p,I){"use strict";return e.Class.declare({$name:"MCRendererBundle",$extends:n,getDefinedRenderers:function(){return{MCDL:i,MCMACB:t,MCMSB:o,MCSA:r,MCSB:c}},getDefinedTemplates:function(){return{MCDL:s,MCMACOLTX:d,MCMAHRTX:l,MCMAVRTX:a,MCMSB:u,MCNPS:h,MCSACOLTX:C,MCSAHRTX:m,MCSAVRTX:p,MCSB:I}}})}.apply(n,t))&&(e.exports=o)},268:function(e,n,i){var t,o;t=[i(3),i(17),i(2),i(0),i(337)],void 0!==(o=function(e,n,i,t,o){"use strict";return t.Class.declare({$name:"MCSARendererHTML",$extends:o,blankOptionScreenreader:{},detectedClick:!1,initialize:function(e){this.$super(e),this.on("prerender",function(){this.blankOptionScreenreader=this.getMessageFromTemplate("Blank")}.$bind(this)),this.on("postrender",function(){i.each(this.runtime.Choices,function(e,n){e.TextEntry||this._$el.find("#"+this.runtime.ID+"-"+n+"-label").parents("li.Selection, td.LabelContainer").on("click",function(e){0==e.screenX&&0==e.screenY||"INPUT"===e.target.nodeName||(this.detectedClick=!0)}.$bind(this))}.$bind(this))}.$bind(this))},handleEnterKeydown:function(){this.prescroll(),this.scrollToNextQuestion()},prescroll:function(){if(!this.runtime.Selected){if(~["SAVR","SAHR","SACOL","NPS"].indexOf(this.runtime.Selector)){var e=this._$el.find("label.SingleAnswer.q-focused");if(e.length){var n=/-\d+-/.exec(e[0].id)[0].replace(/-/g,"");this.runtime.Selected=n}}}},selectChoice:function(e,n,t){i.each(this.runtime.Choices,function(e,n){e.Selected=!1!==t&&n==t},this),(this.detectedClick||"DL"===this.runtime.Selector)&&(this.detectedClick=!1,this.scrollToNextQuestion()),this.responseChanged()}.$bound(),_watchSelected:function(){i.each(this.runtime.Choices,function(e,i){e.TextEntry&&(n.watch(e,"Text",function(e,n,t){t&&""!==t?this.runtime.Selected=i:this.runtime.Selected===i&&(this.runtime.Selected=!1)}.$bind(this)),this._toggleTextEntryTabIndexOnSelected(i))}.$bind(this)),n.watch(this.runtime,"Selected",this.selectChoice)}.$bound(),_shouldMakeLablesUniformHeight:function(){return"SACOL"==this.runtime.Selector||"SAHR"==this.runtime.Selector},setChoiceAnswerValue:function(e,n,i){return!!this.runtime.Choices[e]&&(this.runtime.Selected=!!i&&e,!0)}})}.apply(n,t))&&(e.exports=o)},337:function(e,n,i){var t,o;t=[i(184),i(2),i(17),i(1),i(0)],void 0!==(o=function(e,n,i,t,o){"use strict";return o.AbstractClass.declare({$name:"MCRendererHTML",$extends:e,_watchSelected:function(){n.each(this.runtime.Choices,function(e,n){e.TextEntry&&(i.watch(e,"Text",function(e,i,t){t&&""!==t&&(this.runtime.Choices[n].Selected=!0)}.$bind(this)),this._toggleTextEntryTabIndexOnSelected(n))}.$bind(this))},_toggleTextEntryTabIndexOnSelected:function(e){i.watch(this.runtime.Choices[e],"Selected",function(n,i,t){var o=document.getElementById("QR~"+this.runtime.ID+"~"+e+"~TEXT");o&&(t?o.removeAttribute("tabindex"):o.setAttribute("tabindex","-1"))}.$bind(this))},__getOffenderLabel:function(e){switch(this.runtime.Selector){case"SAVR":case"MAVR":return e.siblings("span.LabelWrapper").find("label");case"SAHR":case"MAHR":return e.parent().siblings("span.LabelWrapper").find("label");case"SACOL":case"MACOL":return e.parent().next(".LabelContainer").find("label");default:return e}},highlightOffenders:function(e){for(var n=t(),i=0;i<e.length;i++){var o=e[i].pathParts();switch(o[1]){case"ValidChoiceRange":var r=this.runtime;"MSB"===r.Selector?(n=t(this._$el.find("option")),n=n.filter(function(){var e=r.Selected.indexOf(this.getAttribute("value"))>=0;return"min"==o[2]?!e:e}),this._highlightOffender(n.parent(),!0,!1),this._highlightOffender(n,!1,!0)):(n=t(this._$el.find("input[choiceid]")),n=n.filter(function(){var e=r.Choices[this.getAttribute("choiceid")].Selected;return"min"==o[2]?!e:e}),this._highlightOffender(n,!0,!1),this._highlightOffender(this.__getOffenderLabel(n),!1,!0));break;case"SelectableChoice":case"ChoiceDisplayed":var c=o[2];switch(this.runtime.Selector){case"SAVR":case"MAVR":case"SAHR":case"SACOL":case"MAHR":case"MACOL":n=t(this._$el.find('input[choiceid="'+c+'"]')),this._highlightOffender(this.__getOffenderLabel(n),!1,!0),this._highlightOffender(n,!0,!1);break;case"DL":n=t(this._$el.find("select.ChoiceStructure")),this._highlightOffender(n,!0,!0);break;case"SB":case"MSB":n=t("SB"===this.runtime.Selector?this._$el.find("select.ChoiceStructure").find('option.Selection[value="'+c+'"]'):this._$el.find("select.ChoiceStructure").find('option.Selection[value="QR~'+this.id()+"~"+c+'"]')),this._highlightOffender(n.parent(),!0,!1),this._highlightOffender(n,!1,!0)}}}}})}.apply(n,t))&&(e.exports=o)},528:function(e,n,i){var t,o;t=[i(17),i(268),i(0)],void 0!==(o=function(e,n,i){"use strict";return i.Class.declare({$name:"MCDLRendererHTML",$extends:n,selectChoice:function(e,n,i){if(i&&-1!==i.indexOf("~")){i=i.split("~")[2],i&&this.$super(e,n,i)}else this.$super(e,n,i)}.$bound()})}.apply(n,t))&&(e.exports=o)},529:function(e,n,i){var t,o;t=[i(337),i(0),i(17),i(2)],void 0!==(o=function(e,n,i,t){"use strict";return n.Class.declare({$name:"MCMACBRendererHTML",$extends:e,_hasExclusiveChoice:!1,canChangeResponse:!0,initialize:function(e){this.$super(e)},selectChoice:function(e,n,i){i&&t.each(this.runtime.ChoiceGroups,function(e){"SAWithinQuestion"===t.get(e,"Options.Selection")&&t.each(e.ChoiceGroupOrder,function(e){this.runtime.Choices[e].Selected=e==i}.$bind(this))}.$bind(this))}.$bound(),selectChoiceFromGroup:function(e,n){n&&e&&t.each(this.runtime.ChoiceGroups[e].ChoiceGroupOrder,function(i){i!=n&&"MAWithinQuestion"===t.get(this.runtime.ChoiceGroups[e],"Options.Selection")||(this.runtime.Choices[i].Selected=i==n)},this)}.$bound(),_watchSelected:function(){this.$super(),i.watch(this.runtime,"Selected",this.selectChoice),t.each(this.runtime.Choices,function(e,n){e.TextEntry&&i.watch(e,"Text",function(e,i,o){this.runtime.Choices[n].Selected=!!o,o&&t.each(this.runtime.ChoiceGroups,function(e){~e.ChoiceGroupOrder.indexOf(n)&&(e.Selected=n)}.$bind(this))}.$bind(this)),i.watch(e,"Selected",function(e,i,t){this.canChangeResponse?(this.canChangeResponse=!1,this._updateChoiceSelection(n,t),this.canChangeResponse=!0,this.responseChanged()):this._updateChoiceSelection(n,t)}.$bind(this))}.$bind(this)),t.each(this.runtime.ChoiceGroups,function(e,n){i.watch(e,"Selected",function(e,i,t){this.selectChoiceFromGroup(n,t)}.$bind(this))}.$bind(this))},_updateChoiceSelection:function(e,n){if(n){this.runtime.Choices[e].Exclusive?t.each(this.runtime.Choices,function(i,t){var o=t==e&&n;i.Selected=o,!o&&i.Text&&(i.TextBackup=i.Text,i.Text="")},this):t.each(this.runtime.Choices,function(i,t){t==e&&n&&i.TextBackup&&!i.Text&&(i.Text=i.TextBackup,delete i.TextBackup),i.Exclusive&&(i.Selected=!1)},this)}}.$bound(),_shouldMakeLablesUniformHeight:function(){return"MACOL"==this.runtime.Selector||"MAHR"==this.runtime.Selector},setChoiceAnswerValue:function(e,n,i){return!!this.runtime.Choices[e]&&(this.runtime.Choices[e].Selected=!!i,!0)}})}.apply(n,t))&&(e.exports=o)},530:function(e,n,i){var t,o;t=[i(268),i(0),i(2),i(17),i(9)],void 0!==(o=function(e,n,i,t,o){"use strict";return n.Class.declare({$name:"MCMSBRendererHTML",$extends:e,screenReaderInstructions:{},initialize:function(e){this.$super(e),e.isIOS=!!o.navigator.platform&&/ipad|iphone|ipod/.test(o.navigator.platform.toLowerCase()),this.__stripHTMLFromChoices(),this.on("prerender",function(){this.screenReaderInstructions=this.getMessageFromTemplate("MCMSB_Instructions")}.$bind(this)),this.on("postrender",function(){i.each(this.runtime.ExistingChoices,function(e,n){this.updateAriaSelected(n[0],e.Selected)},this)})},__stripHTMLFromChoices:function(){i.each(this.runtime.Choices,function(e){e.Display=this.stripHTMLTags(e.Display)}.$bind(this))},_watchSelected:function(){t.watch(this.runtime,"Selected",this.selectChoice)}.$bound(),selectChoice:function(e,n,t){if(t||(t=[]),i.isArray(t)){var o=!1;i.each(this.runtime.Choices,function(e,n){var i=-1!==t.indexOf("QR~"+this._id+"~"+n);e.Selected!==i&&(o=!0,e.Selected=i,this.updateAriaSelected(n,i))},this),this.getPage().forceFocus(this.runtime.ID),o&&this.responseChanged()}}.$bound(),updateAriaSelected:function(e,n){this._$el&&this._$el.find("#QR\\~"+this._id+"\\~"+e).attr("aria-selected",n)}.$bound()})}.apply(n,t))&&(e.exports=o)},531:function(e,n,i){var t,o;t=[i(17),i(268),i(0),i(2),i(3)],void 0!==(o=function(e,n,i,t,o){"use strict";return i.FinalClass.declare({$name:"MCSBRendererHTML",$extends:n,initialize:function(e){this.$super(e),this.__stripHTMLFromChoices(),this.on("postrender",function(){this._$el.find(".QR-"+this.runtime.ID).find("option").on("click",this.scrollToNextQuestion.$bind(this))}.$bind(this))},__stripHTMLFromChoices:function(){t.each(this.runtime.Choices,function(e){e.Display=this.stripHTMLTags(e.Display)}.$bind(this))},selectChoice:function(e,n,i){if(i&&-1!==i.indexOf("~")){var t=i.split("~");3!==t.length&&o.error("EJFE061","MCSB selection has incorrect option value: "+i,"error"),i=t[2]}this.$super(e,n,i)}.$bound()})}.apply(n,t))&&(e.exports=o)},532:function(e,n){e.exports='<legend>\n  <label class="QuestionText BorderColor" for="QR~{{=Q.runtime.ID}}">{{=Q.runtime.QuestionText}}</label>\n</legend>\n<div class="QuestionBody">\n  <select class="ChoiceStructure Selection QR-{{=Q.runtime.ID}}" name="QR~{{=Q.runtime.ID}}" id="QR~{{=Q.runtime.ID}}" data-runtime-value="runtime.Selected">\n    <option aria-label="{{=Q.blankOptionScreenreader}}" value="QR~{{=Q.runtime.ID}}~null"></option>\n    {{? Q.runtime.ChoiceGroupOrderSetup}}\n      {{~ Q.runtime.ChoiceGroupOrder :groupId:index}}\n        {{? Q.runtime.ChoiceGroups[groupId]}}\n          {{? !Q.runtime.ChoiceGroups[groupId].Options.HideTitle}}\n          <optgroup class="group" label="{{!Q.runtime.ChoiceGroups[groupId].GroupLabel}}">\n          {{?}}\n            {{~ Q.runtime.ChoiceGroups[groupId].ChoiceGroupOrder :choiceId:idx}}\n              <option class="Selection" value="{{=choiceId}}" id="QR~{{=Q.runtime.ID}}~{{=choiceId}}">{{=Q.runtime.Choices[choiceId].Display}}</option>\n            {{~}}\n          {{? !Q.runtime.ChoiceGroups[groupId].Options.HideTitle}}\n          </optgroup>\n          {{?}}\n        {{??}}\n          <option class="Selection" value="{{=groupId}}" id="QR~{{=Q.runtime.ID}}~{{=groupId}}">{{=Q.runtime.Choices[groupId].Display}}</option>\n        {{?}}\n      {{~}}\n    {{??}}\n      {{~ Q.runtime.ChoiceOrder :choiceId:index }}\n        <option class="Selection" value="{{=choiceId}}" id="QR~{{=Q.runtime.ID}}~{{=choiceId}}">{{=Q.runtime.Choices[choiceId].Display}}</option>\n      {{~}}\n    {{?}}\n  </select>\n</div>\n'},533:function(e,n){e.exports='\x3c!-- BEGIN PARTIALS --\x3e\n\x3c!-- Partial for defining the ControlContainerContent --\x3e\n{{##def.ControlContainerContent:\n<input choiceid="{{=choiceId}}" class="checkbox QR-{{=Q.runtime.ID}}-{{=choiceId}}" type="checkbox" name="QR~{{=Q.runtime.ID}}~{{=choiceId}}" id="QR~{{=Q.runtime.ID}}~{{=choiceId}}" value="Selected" data-runtime-checked="runtime.Choices.{{=choiceId}}.Selected" {{? Q.isDisabled()}}disabled="disabled"{{?}} aria-labelledby="{{=Q.runtime.ID }}-{{= choiceId }}-label">\n<label for="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID}}{{?}}~{{=choiceId}}" class="q-checkbox" aria-hidden="true" data-runtime-class-q-checked="runtime.Choices.{{=choiceId}}.Selected"></label>\n#}}\n\n{{##def.TableRows:\n  \x3c!-- d is the magic delta number we use to calculate the index --\x3e\n  {{ var entriesPerCol = [];\n      var perColCount = Math.floor(ChoiceOrder.length/Q.runtime.ColumnCount);\n      var modIndex = ChoiceOrder.length % Q.runtime.ColumnCount;\n      for (var i = 0; i < Q.runtime.ColumnCount; i++) {\n        entriesPerCol.push(perColCount);\n        if (i < modIndex) {\n          entriesPerCol[i]++;\n        }\n      }\n  }}\n\n  {{ var d = Math.ceil(ChoiceOrder.length/Q.runtime.ColumnCount); }}\n  \x3c!-- This is a tricky algorithm to build the columns --\x3e\n  {{ for(var r = 0; r < d; r++) { }}\n    {{ var entriesCumulative = 0; }}\n    {{ var rowClass = (r%2) === 0 ? \'reg\' : \'alt\'; }}\n    <tr class="{{=rowClass}}">\n      {{ for(var c = 0; c < Q.runtime.ColumnCount; c++) { }}\n\n        \x3c!-- calculate the index --\x3e\n        \x3c!-- choices go top down, left to right, so a question with 4 columns and 6 choices will be:\n              1  3  5  6\n              2  4\n        --\x3e\n        {{\n          if (c > 0) {\n            entriesCumulative += entriesPerCol[c - 1];\n          }\n          var newIndex = (r < entriesPerCol[c]) ? entriesCumulative + r : undefined;\n        }}\n\n        \x3c!-- If the index i exists in the.ChoiceOrder we use the choice, otherwise we fill an empty placeholder --\x3e\n        {{ var choiceId = ChoiceOrder[newIndex]; }}\n        {{ if(choiceId !== undefined) { }}\n          <td class="ControlContainer">\n            {{#def.ControlContainerContent}}\n          </td>\n          \x3c!-- LabelContainer needs to have both for now because there\'s a misspelling in the CSS --\x3e\n          <td width="{{=100/Q.runtime.ColumnCount}}%" class="LabelContainer LabelContatiner ">\n            {{var choiceArgs = {"Q":Q, "choiceId":choiceId, "MA":true}; }}\n            {{#def.Choice:choiceArgs}}\n          </td>\n        {{ } else { }}\n          <td class="">&nbsp;</td>\n          <td class="">&nbsp;</td>\n        {{ } }}\n      {{ } }}\n    </tr>\n  {{ } }}\n#}}\n\n\x3c!-- END PARTIALS --\x3e\n\n<legend>\n  <div class="QuestionText BorderColor">{{=Q.runtime.QuestionText}}</div>\n</legend>\n<div class="QuestionBody">\n  <table role="presentation" class="ChoiceStructure" cellpadding="0" cellspacing="0">\n    <tbody>\n    {{var ChoiceOrder = Q.runtime.ChoiceOrder;}}\n    {{? Q.runtime.ChoiceGroupOrderSetup}}\n      {{ChoiceOrder = [];}}\n      {{~ Q.runtime.ChoiceGroupOrder :groupId}}\n        {{? Q.runtime.ChoiceGroups[groupId]}}\n          {{~ Q.runtime.ChoiceGroups[groupId].ChoiceGroupOrder :choiceId}}\n            {{ChoiceOrder.push(choiceId);}}\n          {{~}}\n        {{??}}\n          {{ChoiceOrder.push(groupId);}}\n        {{?}}\n      {{~}}\n    {{?}}\n\n    {{#def.TableRows}}\n    </tbody>\n  </table>\n</div>\n'},534:function(e,n){e.exports='\x3c!-- BEGIN PARTIALS --\x3e\n\x3c!-- Partial for defining the ControlContainerContent --\x3e\n{{##def.ControlContainerContent:\n<input choiceid="{{=choiceId}}" class="checkbox QR-{{=Q.runtime.ID}}-{{=choiceId}}" type="checkbox" name="QR~{{=Q.runtime.ID}}~{{=choiceId}}" id="QR~{{=Q.runtime.ID}}~{{=choiceId}}" value="Selected" data-runtime-checked="runtime.Choices.{{=choiceId}}.Selected" {{? Q.isDisabled()}}disabled="disabled"{{?}} aria-labelledby="{{=Q.runtime.ID }}-{{= choiceId }}-label">\n#}}\n\n\x3c!-- END PARTIALS --\x3e\n\n<legend>\n  <div class="QuestionText BorderColor">{{=Q.runtime.QuestionText}}</div>\n</legend>\n\n<div class="QuestionBody">\n  {{var ChoiceOrder = Q.runtime.ChoiceOrder;}}\n  {{? Q.runtime.ChoiceGroupOrderSetup}}\n    {{ChoiceOrder = [];}}\n    {{~ Q.runtime.ChoiceGroupOrder :groupId}}\n      {{? Q.runtime.ChoiceGroups[groupId]}}\n        {{~ Q.runtime.ChoiceGroups[groupId].ChoiceGroupOrder :choiceId}}\n          {{ChoiceOrder.push(choiceId);}}\n        {{~}}\n      {{??}}\n        {{ChoiceOrder.push(groupId);}}\n      {{?}}\n    {{~}}\n  {{?}}\n  {{if (Q.runtime.LabelPosition === "SIDE"){ }}\n          <ul class="ChoiceStructure">\n            {{~ ChoiceOrder :choiceId:index }}\n              {{ var rowClass = (index%2) === 0 ? \'reg\' : \'alt\'; }}\n              <li class="Selection {{=rowClass}}">\n                  {{#def.ControlContainerContent}}\n                  <label for="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID}}{{?}}~{{=choiceId}}" class="q-checkbox" data-runtime-class-q-checked="runtime.Choices.{{=choiceId}}.Selected"></label>\n                  {{var choiceArgs = {"Q":Q, "choiceId":choiceId, "MA":true}; }}\n                  {{#def.Choice:choiceArgs}}\n              </li>\n              {{~}}\n              <div class="clear"></div>\n        </ul>\n  {{ } else { }}\n<table role="presentation" class="ChoiceStructure" cellpadding="0" cellspacing="0" border="0">\n  <tbody>\n    <tr>\n    {{~ ChoiceOrder :choiceId:index }}\n      {{ var rowClass = (index%2) === 0 ? \'reg\' : \'alt\'; }}\n      \x3c!-- LabelContainer needs to have both for now because there\'s a misspelling in the CSS --\x3e\n      <td width="{{=100/ChoiceOrder.length}}%" class="LabelContainer LabelContatiner {{=rowClass}}">\n          {{var choiceArgs = {"Q":Q, "choiceId":choiceId, "MA":true}; }}\n          {{#def.Choice:choiceArgs}}\n          <label for="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID}}{{?}}~{{=choiceId}}" class="q-checkbox" aria-hidden="true" data-runtime-class-q-checked="runtime.Choices.{{=choiceId}}.Selected"></label>\n        <div class="ControlContainer {{=rowClass}}" style="margin: 0 auto">\n          {{#def.ControlContainerContent}}\n        </div>\n      </td>\n    {{~}}\n    </tr>\n  </tbody>\n</table>\n  {{ } }}\n</div>\n'},535:function(e,n){e.exports='\x3c!-- BEGIN PARTIALS --\x3e\n\x3c!-- Partial for defining the ControlContainerContent --\x3e\n{{##def.ControlContainerContent:\n<input choiceid="{{=choiceId}}" class="checkbox QR-{{=Q.runtime.ID}}-{{=choiceId}}" type="checkbox" name="QR~{{=Q.runtime.ID}}~{{=choiceId}}" id="QR~{{=Q.runtime.ID}}~{{=choiceId}}" value="Selected" data-runtime-checked="runtime.Choices.{{=choiceId}}.Selected" {{? Q.isDisabled()}}disabled="disabled"{{?}} aria-labelledby="{{=Q.runtime.ID }}-{{= choiceId }}-label">\n<label for="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID}}{{?}}~{{=choiceId}}" class="q-checkbox" aria-hidden="true" data-runtime-class-q-checked="runtime.Choices.{{=choiceId}}.Selected"></label>\n#}}\n\n{{##def.ControlContainerContentSAGroup:\n<input choiceid="{{=choiceId}}" class="radio QR-{{=Q.runtime.ID}}-{{=choiceId}}" type="radio" name="QR~{{=Q.runtime.ID}}~{{=choiceId}}" id="QR~{{=Q.runtime.ID}}~{{=choiceId}}" value="{{=choiceId}}" data-runtime-checked="runtime.ChoiceGroups.{{=choiceGroupID}}.Selected" {{? Q.isDisabled()}}disabled="disabled"{{?}} aria-labelledby="{{=Q.runtime.ID }}-{{= choiceId }}-label">\n<label for="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID}}{{?}}~{{=choiceId}}" class="q-radio" aria-hidden="true" data-runtime-class-q-checked="runtime.Choices.{{=choiceId}}.Selected"></label>\n#}}\n\n\n{{##def.ControlContainerContentSAQuestion:\n<input choiceid="{{=choiceId}}" class="radio QR-{{=Q.runtime.ID}}-{{=choiceId}}" type="radio" name="QR~{{=Q.runtime.ID}}~{{=choiceId}}" id="QR~{{=Q.runtime.ID}}~{{=choiceId}}" value="{{=choiceId}}" data-runtime-checked="runtime.Selected" {{? Q.isDisabled()}}disabled="disabled"{{?}} aria-labelledby="{{=Q.runtime.ID }}-{{= choiceId }}-label">\n<label for="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID}}{{?}}~{{=choiceId}}" class="q-radio" aria-hidden="true" data-runtime-class-q-checked="runtime.Choices.{{=choiceId}}.Selected"></label>\n#}}\n\n\x3c!-- END PARTIALS --\x3e\n\n<legend>\n  <div class="QuestionText BorderColor">{{=Q.runtime.QuestionText}}</div>\n</legend>\n\n<div class="QuestionBody">\n  <ul class="ChoiceStructure">\n  {{? Q.runtime.ChoiceGroups }}\n      {{ var choiceIndex = 0, choiceId;}}\n      {{~ Q.runtime.ChoiceGroupOrder :choiceGroupID:index }}\n          {{var group = Q.runtime.ChoiceGroups[choiceGroupID];}}\n          {{? group}}\n\n              {{? !group.Options.HideTitle }}\n              <li class="ChoiceGroup">\n                  <span data-runtime-html="runtime.ChoiceGroups.{{=choiceGroupID}}.GroupLabel"></span>\n              </li>\n              <ul class="ChoiceGroupStructure">\n              {{?}}\n                  {{~ group.ChoiceGroupOrder :choiceId:idx }}\n                      {{ var rowClass = (choiceIndex%2) === 0 ? \'reg\' : \'alt\'; }}\n                      {{ choiceIndex++;}}\n                      <li class="Selection {{=rowClass}}">\n                          {{var choiceArgs;}}\n                          {{? group.Options.Selection && group.Options.Selection == "SAWithinGroup"}}\n                            {{#def.ControlContainerContentSAGroup}}\n                            {{choiceArgs = {"Q":Q, "choiceId":choiceId, "SA":true}; }}\n                          {{?? group.Options.Selection && group.Options.Selection == "SAWithinQuestion"}}\n                            {{#def.ControlContainerContentSAQuestion}}\n                            {{choiceArgs = {"Q":Q, "choiceId":choiceId, "SA":true}; }}\n                          {{??}}\n                            {{#def.ControlContainerContent}}\n                            {{choiceArgs = {"Q":Q, "choiceId":choiceId, "MA":true}; }}\n                          {{?}}\n                          {{#def.Choice:choiceArgs}}\n                          <div class="clear"></div>\n                      </li>\n                  {{~}}\n\n              {{? !group.Options.HideTitle }}\n              </ul>\n              {{?}}\n          {{??}}\n              {{ var rowClass = (choiceIndex%2) === 0 ? \'reg\' : \'alt\'; }}\n              {{ choiceIndex++;}}\n              <li class="Selection {{=rowClass}}">\n                  {{choiceId = choiceGroupID;}}\n                  {{#def.ControlContainerContent}}\n                  {{var choiceArgs = {"Q":Q, "choiceId":choiceGroupID, "MA":true}; }}\n                  {{#def.Choice:choiceArgs}}\n                  <div class="clear"></div>\n              </li>\n          {{?}}\n      {{~}}\n  {{??}}\n      {{~ Q.runtime.ChoiceOrder :choiceId:index }}\n      {{ var rowClass = (index%2) === 0 ? \'reg\' : \'alt\'; }}\n      <li class="Selection {{=rowClass}}">\n          {{#def.ControlContainerContent}}\n          {{var choiceArgs = {"Q":Q, "choiceId":choiceId, "MA":true}; }}\n          {{#def.Choice:choiceArgs}}\n          <div class="clear"></div>\n      </li>\n      {{~}}\n  {{?}}\n  </ul>\n  <div class="clear zero"></div>\n</div>\n\n\n\n'},536:function(e,n){e.exports='<legend>\n  <label class="QuestionText BorderColor" for="QR~{{=Q.runtime.ID}}">{{=Q.runtime.QuestionText}}</label>\n</legend>\n\n<div class="QuestionBody">\n  <div class="offScreen">{{=Q.screenReaderInstructions}}</div>\n  <select role="listbox" aria-multiselectable="true" multiple="" size="10" class="ChoiceStructure QR-{{=Q.runtime.ID}}" name="QR~{{=Q.runtime.ID}}[]" id="QR~{{=Q.runtime.ID}}" data-runtime-value="runtime.Selected">\n    {{? Q.runtime.isIOS}}<optgroup disabled></optgroup>{{?}}\n    {{? Q.runtime.ChoiceGroupOrderSetup}}\n      {{~ Q.runtime.ChoiceGroupOrder :groupId:index}}\n        {{? Q.runtime.ChoiceGroups[groupId]}}\n          {{? !Q.runtime.ChoiceGroups[groupId].Options.HideTitle}}\n          <optgroup class="group" label="{{!Q.runtime.ChoiceGroups[groupId].GroupLabel}}">\n          {{?}}\n          {{~ Q.runtime.ChoiceGroups[groupId].ChoiceGroupOrder :choiceId:idx}}\n            <option role="option" aria-selected="false" class="Selection" value="QR~{{=Q.runtime.ID}}~{{=choiceId}}" id="QR~{{=Q.runtime.ID}}~{{=choiceId}}" data-runtime-text="runtime.Choices.{{=choiceId}}.Display" ></option>\n          {{~}}\n          {{? !Q.runtime.ChoiceGroups[groupId].Options.HideTitle}}\n          </optgroup>\n          {{?}}\n        {{??}}\n          <option role="option" aria-selected="false" class="Selection" value="QR~{{=Q.runtime.ID}}~{{=groupId}}" id="QR~{{=Q.runtime.ID}}~{{=choiceId}}" data-runtime-text="runtime.Choices.{{=groupId}}.Display" ></option>\n        {{?}}\n      {{~}}\n    {{??}}\n      {{~ Q.runtime.ChoiceOrder :choiceId:index }}\n        <option role="option" class="Selection" aria-selected="false" value="QR~{{=Q.runtime.ID}}~{{=choiceId}}" id="QR~{{=Q.runtime.ID}}~{{=choiceId}}" data-runtime-text="runtime.Choices.{{=choiceId}}.Display" ></option>\n      {{~}}\n    {{?}}\n  </select>\n  <div class="clear zero"></div>\n</div>\n'},537:function(e,n){e.exports='\x3c!-- BEGIN PARTIALS --\x3e\n\x3c!-- Partial for defining the ControlContainerContent --\x3e\n{{##def.ControlContainerContent:\n<input choiceid="{{=choiceId }}" class="radio QR-{{? Q.runtime.ID }}{{=Q.runtime.ID }}{{?}}-{{=choiceId }}" type="radio" name="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID }}{{?}}" id="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID }}{{?}}~{{=choiceId }}" value="{{=choiceId }}" data-runtime-checked="runtime.Selected" {{? Q.isDisabled()}}disabled="disabled"{{?}} aria-labelledby="{{=Q.runtime.ID }}-{{= choiceId }}-label">\n#}}\n\n\n\x3c!-- Partial for defining the LabelContainerContent --\x3e\n{{##def.LabelContainerContent:\n<span class="LabelWrapper">\n<label id="{{=Q.runtime.ID }}-{{= choiceId }}-label" for="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID}}{{?}}~{{=choiceId}}" class="SingleAnswer" data-runtime-class-q-checked="runtime.Choices.{{=choiceId}}.Selected">\n{{? Q.runtime.Choices[choiceId].Image }}\n{{ if(Q.runtime.ChoiceTextPosition === \'Bottom\' || Q.runtime.ChoiceTextPosition === \'Right\') { }}\n<img src="{{=Q.runtime.Choices[choiceId].Image.ImageLocation}}" alt="{{=Q.runtime.Choices[choiceId].Image.Display}}">\n{{ } }}\n{{ if(Q.runtime.ChoiceTextPosition === \'Bottom\') { }}<br>{{ } }}\n{{?}}\n<span data-runtime-html="runtime.Choices.{{=choiceId}}.Display"></span>\n{{? Q.runtime.Choices[choiceId].Image }}\n{{ if(Q.runtime.ChoiceTextPosition === \'Top\') { }}<br>{{ } }}\n{{ if(Q.runtime.ChoiceTextPosition === \'Top\' || Q.runtime.ChoiceTextPosition === \'Left\') { }}\n<img src="{{=Q.runtime.Choices[choiceId].Image.ImageLocation}}" alt="{{=Q.runtime.Choices[choiceId].Image.Display}}">\n{{ } }}\n{{?}}\n</label>\n</span>\n<label for="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID}}{{?}}~{{=choiceId}}" class="q-radio" aria-hidden="true" data-runtime-class-q-checked="runtime.Choices.{{=choiceId}}.Selected"></label>\n#}}\n\x3c!-- END PARTIALS --\x3e\n\n\n<legend>\n  <div class="QuestionText BorderColor">{{=Q.runtime.QuestionText}}</div>\n</legend>\n\n<div class="QuestionBody">\n  {{if (Q.runtime.LabelPosition === "SIDE"){ }}\n          <ul class="ChoiceStructure">\n            {{~ Q.runtime.ChoiceOrder :choiceId:index }}\n              {{ var rowClass = (index%2) === 0 ? \'reg\' : \'alt\'; }}\n              <li class="Selection {{=rowClass}}">\n                  {{#def.ControlContainerContent}}\n                  {{#def.LabelContainerContent}}\n              </li>\n              {{~}}\n              <div class="clear"></div>\n        </ul>\n  {{ } else { }}\n\n\n<table role="presentation" class="ChoiceStructure" cellpadding="0" cellspacing="0" border="0">\n  <tbody>\n    {{ var numLabels = Q.runtime.ColumnLabelsOrder.length, numChoices = Q.runtime.ChoiceOrder.length; }}\n    {{ if (numLabels) { }}\n      {{ var cellWidth = 100 / numLabels; }}\n      <tr>\n        <td class="ColumnLabels" colspan="{{=numChoices}}">\n          <table role="presentation" style="width:100%">\n            <tbody>\n              <tr>\n                {{~Q.runtime.ColumnLabelsOrder :index:orderIndex}}\n                  {{ var align = \'Center\'; }}\n                  {{ if (numLabels > 1 && index == 1) align = \'First\'; }}\n                  {{ if (numLabels > 1 && index == numLabels) align = \'Last\'; }}\n                  <th class=\'ColumnLabel {{=align}}\'\n                      width="{{=cellWidth}}%;"\n                      data-runtime-html="runtime.ColumnLabels.{{=index}}.Display">\n                  </th>\n                {{~}}\n              </tr>\n            </tbody>\n          </table>\n        </td>\n      </tr>\n    {{ } }}\n    <tr>\n    {{~ Q.runtime.ChoiceOrder :choiceId:index }}\n      {{ var rowClass = (index%2) === 0 ? \'reg\' : \'alt\'; }}\n      \x3c!-- LabelContainer needs to have both for now because there\'s a misspelling in the CSS --\x3e\n      <td width="{{=100/Q.runtime.ChoiceOrder.length}}%" class="LabelContainer LabelContatiner {{=rowClass}}">\n      {{#def.LabelContainerContent}}\n      </td>\n    {{~}}\n\n    </tr>\n    <tr>\n\n    {{~ Q.runtime.ChoiceOrder :choiceId:index }}\n      {{ var rowClass = (index%2) === 0 ? \'reg\' : \'alt\'; }}\n      <td style="width: {{=100/Q.runtime.ChoiceOrder.length}}%;" class="ControlContainer {{=rowClass}}">\n        {{#def.ControlContainerContent}}\n      </td>\n    {{~}}\n\n    </tr>\n  </tbody>\n</table>\n  {{ } }}\n</div>\n'},538:function(e,n){e.exports='\x3c!-- BEGIN PARTIALS --\x3e\n\x3c!-- Partial for defining the ControlContainerContent --\x3e\n{{##def.ControlContainerContent:\n<input selected="selected" choiceid="{{=choiceId }}" class="radio QR-{{? Q.runtime.ID }}{{=Q.runtime.ID }}{{?}}-{{=choiceId }}" type="radio" name="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID }}{{?}}" id="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID }}{{?}}~{{=choiceId }}" value="{{=choiceId }}" data-runtime-checked="runtime.Selected" {{? Q.isDisabled()}}disabled="disabled"{{?}} aria-labelledby="{{=Q.runtime.ID }}-{{= choiceId }}-label">\n<label for="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID}}{{?}}~{{=choiceId}}" class="q-radio" aria-hidden="true" data-runtime-class-q-checked="runtime.Choices.{{=choiceId}}.Selected"></label>\n#}}\n\n{{##def.TableRows:\n  \x3c!-- d is the magic delta number we use to calculate the index --\x3e\n  {{ var entriesPerCol = [];\n      var perColCount = Math.floor(ChoiceOrder.length/Q.runtime.ColumnCount);\n      var modIndex = ChoiceOrder.length % Q.runtime.ColumnCount;\n      for (var i = 0; i < Q.runtime.ColumnCount; i++) {\n        entriesPerCol.push(perColCount);\n        if (i < modIndex) {\n          entriesPerCol[i]++;\n        }\n      }\n  }}\n\n  {{ var d = Math.ceil(ChoiceOrder.length/Q.runtime.ColumnCount); }}\n  \x3c!-- This is a tricky algorithm to build the columns --\x3e\n  {{ for(var r = 0; r < d; r++) { }}\n    {{ var entriesCumulative = 0; }}\n    {{ var rowClass = (r%2) === 0 ? \'reg\' : \'alt\'; }}\n    <tr class="{{=rowClass}}">\n      {{ for(var c = 0; c < Q.runtime.ColumnCount; c++) { }}\n\n        \x3c!-- calculate the index --\x3e\n        \x3c!-- choices go top down, left to right, so a question with 4 columns and 6 choices will be:\n              1  3  5  6\n              2  4\n        --\x3e\n        {{\n          if (c > 0) {\n            entriesCumulative += entriesPerCol[c - 1];\n          }\n          var newIndex = (r < entriesPerCol[c]) ? entriesCumulative + r : undefined;\n        }}\n\n        \x3c!-- If the index i exists in the.ChoiceOrder we use the choice, otherwise we fill an empty placeholder --\x3e\n        {{ var choiceId = ChoiceOrder[newIndex]; }}\n        {{ if(choiceId !== undefined) { }}\n          <td class="ControlContainer">\n            {{#def.ControlContainerContent}}\n          </td>\n          \x3c!-- LabelContainer needs to have both for now because there\'s a misspelling in the CSS --\x3e\n          <td width="{{=100/Q.runtime.ColumnCount}}%" class="LabelContainer LabelContatiner ">\n            {{var choiceArgs = {"Q":Q, "choiceId":choiceId, "SA":true}; }}\n            {{#def.Choice:choiceArgs}}\n          </td>\n        {{ } else { }}\n          <td class="">&nbsp;</td>\n          <td class="">&nbsp;</td>\n        {{ } }}\n      {{ } }}\n    </tr>\n  {{ } }}\n#}}\n\n\x3c!-- END PARTIALS --\x3e\n\n<legend>\n  <div class="QuestionText BorderColor">{{=Q.runtime.QuestionText}}</div>\n</legend>\n<div class="QuestionBody">\n  <table role="presentation" class="ChoiceStructure" cellpadding="0" cellspacing="0">\n    <tbody>\n    {{var ChoiceOrder = Q.runtime.ChoiceOrder;}}\n    {{? Q.runtime.ChoiceGroupOrderSetup}}\n      {{ChoiceOrder = [];}}\n      {{~ Q.runtime.ChoiceGroupOrder :groupId}}\n        {{? Q.runtime.ChoiceGroups[groupId]}}\n          {{~ Q.runtime.ChoiceGroups[groupId].ChoiceGroupOrder :choiceId}}\n            {{ChoiceOrder.push(choiceId);}}\n          {{~}}\n        {{??}}\n          {{ChoiceOrder.push(groupId);}}\n        {{?}}\n      {{~}}\n    {{?}}\n\n    {{#def.TableRows}}\n    </tbody>\n  </table>\n</div>\n'},539:function(e,n){e.exports='\x3c!-- BEGIN PARTIALS --\x3e\n\x3c!-- Partial for defining the ControlContainerContent --\x3e\n{{##def.ControlContainerContent:\n<input choiceid="{{=choiceId }}" class="radio QR-{{? Q.runtime.ID }}{{=Q.runtime.ID }}{{?}}-{{=choiceId }}" type="radio" name="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID }}{{?}}" id="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID }}{{?}}~{{=choiceId }}" value="{{=choiceId }}" data-runtime-checked="runtime.Selected" {{? Q.isDisabled()}}disabled="disabled"{{?}} aria-labelledby="{{=Q.runtime.ID }}-{{= choiceId }}-label">\n#}}\n\n\x3c!-- END PARTIALS --\x3e\n\n<legend>\n  <div class="QuestionText BorderColor">{{=Q.runtime.QuestionText}}</div>\n</legend>\n\n<div class="QuestionBody">\n  {{var ChoiceOrder = Q.runtime.ChoiceOrder;}}\n  {{? Q.runtime.ChoiceGroupOrderSetup}}\n    {{ChoiceOrder = [];}}\n    {{~ Q.runtime.ChoiceGroupOrder :groupId}}\n      {{? Q.runtime.ChoiceGroups[groupId]}}\n        {{~ Q.runtime.ChoiceGroups[groupId].ChoiceGroupOrder :choiceId}}\n          {{ChoiceOrder.push(choiceId);}}\n        {{~}}\n      {{??}}\n        {{ChoiceOrder.push(groupId);}}\n      {{?}}\n    {{~}}\n  {{?}}\n  {{if (Q.runtime.LabelPosition === "SIDE"){ }}\n          <ul class="ChoiceStructure">\n            {{~ ChoiceOrder :choiceId:index }}\n              {{ var rowClass = (index%2) === 0 ? \'\' : \'alt\'; }}\n              <li class="Selection {{=rowClass}}">\n                {{#def.ControlContainerContent}}\n                <label for="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID}}{{?}}~{{=choiceId}}" class="q-radio" data-runtime-class-q-checked="runtime.Choices.{{=choiceId}}.Selected"></label>\n                {{var choiceArgs = {"Q":Q, "choiceId":choiceId, "SA":true}; }}\n                {{#def.Choice:choiceArgs}}\n              </li>\n              {{~}}\n              <div class="clear"></div>\n        </ul>\n  {{ } else { }}\n\n\n<table role="presentation" class="ChoiceStructure" cellpadding="0" cellspacing="0" border="0">\n  <tbody>\n    <tr>\n    {{~ ChoiceOrder :choiceId:index }}\n      {{ var rowClass = (index%2) === 0 ? \'\' : \'alt\'; }}\n      \x3c!-- LabelContainer needs to have both for now because there\'s a misspelling in the CSS --\x3e\n      <td width="{{=100/ChoiceOrder.length}}%" class="LabelContainer LabelContatiner {{=rowClass}}">\n          {{var choiceArgs = {"Q":Q, "choiceId":choiceId, "SA":true}; }}\n          {{#def.Choice:choiceArgs}}\n          <label for="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID}}{{?}}~{{=choiceId}}" class="q-radio" aria-hidden="true" data-runtime-class-q-checked="runtime.Choices.{{=choiceId}}.Selected"></label>\n\n        <div class="ControlContainer {{=rowClass}}" style="margin: 0 auto">\n          {{#def.ControlContainerContent}}\n        </div>\n      </td>\n    {{~}}\n    </tr>\n  </tbody>\n</table>\n  {{ } }}\n</div>\n'},540:function(e,n){e.exports='\x3c!-- BEGIN PARTIALS --\x3e\n\x3c!-- Partial for defining the ControlContainerContent --\x3e\n{{##def.ControlContainerContent:\n<input choiceid="{{=choiceId }}" aria-labelledby="{{=Q.runtime.ID }}-{{= choiceId }}-label" class="radio QR-{{? Q.runtime.ID }}{{=Q.runtime.ID }}{{?}}-{{=choiceId }}" type="radio" name="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID }}{{?}}" id="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID }}{{?}}~{{=choiceId }}" value="{{=choiceId }}" data-runtime-checked="runtime.Selected" {{? Q.isDisabled()}}disabled="disabled"{{?}}>\n<label for="QR~{{? Q.runtime.ID }}{{=Q.runtime.ID}}{{?}}~{{=choiceId}}" class="q-radio" aria-hidden="true" data-runtime-class-q-checked="runtime.Choices.{{=choiceId}}.Selected"></label>\n#}}\n\n\x3c!-- END PARTIALS --\x3e\n\n<legend>\n<div class="QuestionText BorderColor">{{=Q.runtime.QuestionText}}</div>\n</legend>\n<div class="QuestionBody">\n  \x3c!-- Begin Choices w/o choice groups --\x3e\n  <ul class="ChoiceStructure">\n    {{? Q.runtime.ChoiceGroups }}\n      {{ var choiceIndex = 0, choiceId;}}\n      {{~ Q.runtime.ChoiceGroupOrder :choiceGroupID:index }}\n        {{? Q.runtime.ChoiceGroups[choiceGroupID]}}\n          {{? !Q.runtime.ChoiceGroups[choiceGroupID].Options.HideTitle }}\n          <li class="ChoiceGroup">\n              <span data-runtime-html="runtime.ChoiceGroups.{{=choiceGroupID}}.GroupLabel"></span>\n          </li>\n          <ul class="ChoiceGroupStructure">\n          {{?}}\n              {{~ Q.runtime.ChoiceGroups[choiceGroupID].ChoiceGroupOrder :choiceId:idx }}\n                {{ var rowClass = (choiceIndex%2) === 0 ? \'reg\' : \'alt\'; }}\n                {{ choiceIndex++; }}\n                <li class="Selection {{=rowClass}}">\n                    {{#def.ControlContainerContent}}\n                    {{var choiceArgs = {"Q":Q, "choiceId":choiceId, "SA":true}; }}\n                    {{#def.Choice:choiceArgs}}\n                    <div class="clear"></div>\n                </li>\n              {{~}}\n\n          {{? !Q.runtime.ChoiceGroups[choiceGroupID].Options.HideTitle }}\n          </ul>\n          {{?}}\n        {{??}}\n          {{ var rowClass = (choiceIndex%2) === 0 ? \'reg\' : \'alt\'; }}\n          {{ choiceIndex++; }}\n          <li class="Selection {{=rowClass}}">\n              {{choiceId = choiceGroupID;}}\n              {{#def.ControlContainerContent}}\n              {{var choiceArgs = {"Q":Q, "choiceId":choiceGroupID, "SA":true}; }}\n              {{#def.Choice:choiceArgs}}\n              <div class="clear"></div>\n          </li>\n        {{?}}\n      {{~}}\n    {{??}}\n      {{~ Q.runtime.ChoiceOrder :choiceId:index }}\n      {{ var rowClass = (index%2) === 0 ? \'reg\' : \'alt\'; }}\n      <li class="Selection {{=rowClass}}">\n          {{#def.ControlContainerContent}}\n          {{var choiceArgs = {"Q":Q, "choiceId":choiceId, "SA":true}; }}\n          {{#def.Choice:choiceArgs}}\n          <div class="clear"></div>\n      </li>\n      {{~}}\n    {{?}}\n  </ul>\n  \x3c!-- End Choices w/o choice groups --\x3e\n  <div class="clear zero">\n</div>\n</div>\n\n'},541:function(e,n){e.exports='<legend>\n  <label class="QuestionText BorderColor" for="QR~{{=Q.runtime.ID}}">{{=Q.runtime.QuestionText}}</label>\n</legend>\n<div class="QuestionBody">\n  <select size="10" class="ChoiceStructure Selection LargeSelection QR-{{=Q.runtime.ID}}" name="QR~{{=Q.runtime.ID}}" id="QR~{{=Q.runtime.ID}}" data-runtime-value="runtime.Selected">\n    {{? Q.runtime.ChoiceGroupOrderSetup}}\n      {{~ Q.runtime.ChoiceGroupOrder :groupId:index}}\n        {{? Q.runtime.ChoiceGroups[groupId]}}\n          {{? !Q.runtime.ChoiceGroups[groupId].Options.HideTitle}}\n          <optgroup label="{{=Q.runtime.ChoiceGroups[groupId].GroupLabel}}" class="group">\n          {{?}}\n            {{~ Q.runtime.ChoiceGroups[groupId].ChoiceGroupOrder :choiceId:idx}}\n              <option class="Selection" value="{{=choiceId}}">{{= Q.runtime.Choices[choiceId].Display }}</option>\n            {{~}}\n          {{? !Q.runtime.ChoiceGroups[groupId].Options.HideTitle}}\n          </optgroup>\n          {{?}}\n        {{??}}\n          <option class="Selection" value="{{=groupId}}">{{= Q.runtime.Choices[groupId].Display }}</option>\n        {{?}}\n      {{~}}\n    {{??}}\n      {{~ Q.runtime.ChoiceOrder :choiceId:index }}\n        <option class="Selection" value="{{=choiceId}}">{{= Q.runtime.Choices[choiceId].Display }}</option>\n      {{~}}\n    {{?}}\n  </select>\n</div>\n'}});