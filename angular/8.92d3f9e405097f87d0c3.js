(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{yziC:function(n,t,a){"use strict";a.r(t),a.d(t,"ECLRModule",(function(){return kn}));var e=a("Ip0R"),i=a("ZYCi"),c=a("CcnG"),o=a("UVSV");function l(n,t){1&n&&c.Rb(0,"mat-progress-bar",2)}function s(n,t){1&n&&c.Rb(0,"router-outlet")}var r=function(){function n(n){var t=this;this.router=n,this.loading=!1,this.router.events.subscribe((function(n){switch(!0){case n instanceof i.e:t.loading=!0;break;case n instanceof i.c:case n instanceof i.b:case n instanceof i.d:t.loading=!1}}))}return n.\u0275fac=function(t){return new(t||n)(c.Qb(i.f))},n.\u0275cmp=c.Kb({type:n,selectors:[["rtl-eclr-root"]],decls:2,vars:2,consts:[["color","primary","mode","indeterminate",4,"ngIf"],[4,"ngIf"],["color","primary","mode","indeterminate"]],template:function(n,t){1&n&&(c.Fc(0,l,1,0,"mat-progress-bar",0),c.Fc(1,s,1,0,"router-outlet",1)),2&n&&(c.pc("ngIf",t.loading),c.Db(1),c.pc("ngIf",!t.loading))},directives:[e.n,o.a,i.k],styles:[""]}),n}(),b=a("K9Ia"),f=a("ny24"),h=a("VnD/"),u=a("twK/"),d=a("wHSu"),m=a("cpEJ"),g=a("7o2P"),p=a("7nzP"),y=a("HRYN"),v=a("yGQT"),C=a("jYNz"),x=a("21Lb"),w=a("Hf/j"),W=a("aPcS"),V=a("qLAh"),L=a("zPjY"),F=a("M4kG"),S=a("fPVg"),D=a("hUWP"),B=function(n){return{backgroundColor:n}};function k(n,t){if(1&n&&c.Rb(0,"span",6),2&n){var a=c.ic();c.pc("ngStyle",c.tc(1,B,a.information.color))}}function H(n,t){if(1&n&&(c.Wb(0,"div"),c.Wb(1,"h4",1),c.Hc(2,"Color"),c.Vb(),c.Wb(3,"div",2),c.Rb(4,"span",7),c.Hc(5),c.jc(6,"uppercase"),c.Vb(),c.Vb()),2&n){var a=c.ic();c.Db(4),c.pc("ngStyle",c.tc(4,B,a.information.color)),c.Db(1),c.Jc(" ",c.kc(6,2,a.information.color)," ")}}function I(n,t){if(1&n&&(c.Wb(0,"span",2),c.Hc(1),c.Vb()),2&n){var a=t.$implicit;c.Db(1),c.Ic(a)}}var T=function(){function n(){this.chains=[""]}return n.prototype.ngOnChanges=function(){this.chains=[],this.chains.push("Bitcoin "+(this.information.network?this.information.network:"Testnet"))},n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.Kb({type:n,selectors:[["rtl-eclr-node-info"]],inputs:{information:"information",showColorFieldSeparately:"showColorFieldSeparately"},features:[c.Bb],decls:17,vars:5,consts:[["fxLayout","column","fxFlex","100","fxLayoutAlign","space-between stretch"],[1,"dashboard-info-title"],[1,"overflow-wrap","dashboard-info-value"],["class","dashboard-node-dot dot",3,"ngStyle",4,"ngIf"],[4,"ngIf"],["class","overflow-wrap dashboard-info-value",4,"ngFor","ngForOf"],[1,"dashboard-node-dot","dot",3,"ngStyle"],[1,"dashboard-node-square",3,"ngStyle"]],template:function(n,t){1&n&&(c.Wb(0,"div",0),c.Wb(1,"div"),c.Wb(2,"h4",1),c.Hc(3,"Alias"),c.Vb(),c.Wb(4,"div",2),c.Hc(5),c.Fc(6,k,1,3,"span",3),c.Vb(),c.Vb(),c.Fc(7,H,7,6,"div",4),c.Wb(8,"div"),c.Wb(9,"h4",1),c.Hc(10,"Implementation"),c.Vb(),c.Wb(11,"div",2),c.Hc(12),c.Vb(),c.Vb(),c.Wb(13,"div"),c.Wb(14,"h4",1),c.Hc(15,"Chain"),c.Vb(),c.Fc(16,I,2,1,"span",5),c.Vb(),c.Vb()),2&n&&(c.Db(5),c.Jc(" ",t.information.alias," "),c.Db(1),c.pc("ngIf",!t.showColorFieldSeparately),c.Db(1),c.pc("ngIf",t.showColorFieldSeparately),c.Db(5),c.Ic(t.information.lnImplementation||t.information.version?t.information.lnImplementation+" "+t.information.version:""),c.Db(4),c.pc("ngForOf",t.chains))},directives:[x.c,x.a,x.b,e.n,e.m,e.o,D.b],pipes:[e.x],styles:[""]}),n}(),O=function(){function n(){this.balances={onchain:0,lightning:0,total:0}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.Kb({type:n,selectors:[["rtl-eclr-balances-info"]],inputs:{balances:"balances"},decls:21,vars:11,consts:[["fxLayout","column","fxFlex","100","fxLayoutAlign","space-between stretch"],["fxLayoutAlign","start",1,"dashboard-info-title"],[1,"overflow-wrap","dashboard-info-value"],["mode","determinate",1,"dashboard-progress-bar",3,"value"]],template:function(n,t){1&n&&(c.Wb(0,"div",0),c.Wb(1,"div"),c.Wb(2,"h4",1),c.Hc(3,"Lightning"),c.Vb(),c.Wb(4,"div",2),c.Hc(5),c.jc(6,"number"),c.Vb(),c.Rb(7,"mat-progress-bar",3),c.Vb(),c.Wb(8,"div"),c.Wb(9,"h4",1),c.Hc(10,"On-chain"),c.Vb(),c.Wb(11,"div",2),c.Hc(12),c.jc(13,"number"),c.Vb(),c.Rb(14,"mat-progress-bar",3),c.Vb(),c.Wb(15,"div"),c.Wb(16,"h4",1),c.Hc(17,"Total"),c.Vb(),c.Wb(18,"div",2),c.Hc(19),c.jc(20,"number"),c.Vb(),c.Vb(),c.Vb()),2&n&&(c.Db(5),c.Jc("",c.kc(6,5,t.balances.lightning)," Sats"),c.Db(2),c.qc("value",t.balances.lightning/t.balances.total*100),c.Db(5),c.Jc("",c.kc(13,7,t.balances.onchain)," Sats"),c.Db(2),c.qc("value",t.balances.onchain/t.balances.total*100),c.Db(5),c.Jc("",c.kc(20,9,t.balances.total)," Sats"))},directives:[x.c,x.a,x.b,o.a],pipes:[e.e],styles:[""]}),n}(),R=a("dlst"),q=a("v/zR"),A=a("FZ+F"),j=a("bse0");function J(n,t){if(1&n&&(c.Wb(0,"div",17),c.Wb(1,"span",18),c.Hc(2),c.jc(3,"slice"),c.Vb(),c.Wb(4,"div",3),c.Wb(5,"mat-hint",19),c.Wb(6,"strong",5),c.Hc(7,"Local:"),c.Vb(),c.Hc(8),c.jc(9,"number"),c.Vb(),c.Wb(10,"mat-hint",20),c.Rb(11,"fa-icon",21),c.Hc(12),c.jc(13,"number"),c.Vb(),c.Wb(14,"mat-hint",22),c.Wb(15,"strong",5),c.Hc(16,"Remote:"),c.Vb(),c.Hc(17),c.jc(18,"number"),c.Vb(),c.Vb(),c.Rb(19,"mat-progress-bar",23),c.Vb()),2&n){var a=t.$implicit,e=c.ic(2);c.Db(1),c.qc("matTooltip",a.alias||a.shortChannelId),c.qc("matTooltipDisabled",(a.alias||a.shortChannelId).length<26),c.Db(1),c.Kc("",c.mc(3,9,a.alias||a.shortChannelId,0,24),"",(a.alias||a.shortChannelId).length>25?"...":"",""),c.Db(6),c.Jc("",c.lc(9,13,a.data.commitments.localCommit.spec.toLocal/1e3||0,"1.0-0")," Sats"),c.Db(3),c.pc("icon",e.faBalanceScale),c.Db(1),c.Jc(" (",c.kc(13,16,a.balancedness||0),") "),c.Db(5),c.Jc("",c.lc(18,18,a.data.commitments.localCommit.spec.toRemote/1e3||0,"1.0-0")," Sats"),c.Db(2),c.qc("value",a.data.commitments.localCommit.spec.toLocal&&a.data.commitments.localCommit.spec.toLocal>0?(a.data.commitments.localCommit.spec.toLocal-0)/(a.data.commitments.localCommit.spec.toLocal-0+(a.data.commitments.localCommit.spec.toRemote-0))*100:0)}}function N(n,t){if(1&n&&(c.Wb(0,"div",15),c.Fc(1,J,20,21,"div",16),c.Vb()),2&n){var a=c.ic();c.Db(1),c.pc("ngForOf",a.allChannels)}}function M(n,t){if(1&n){var a=c.Xb();c.Wb(0,"div",24),c.Hc(1," No channels available. "),c.Wb(2,"button",25),c.ec("click",(function(){return c.yc(a),c.ic().goToChannels()})),c.Hc(3,"Open Channel"),c.Vb(),c.Vb()}}var P=function(){function n(n){this.router=n,this.faBalanceScale=d.d,this.faDumbbell=d.k,this.sortBy="Balance Score"}return n.prototype.goToChannels=function(){this.router.navigateByUrl("/eclr/peerschannels")},n.\u0275fac=function(t){return new(t||n)(c.Qb(i.f))},n.\u0275cmp=c.Kb({type:n,selectors:[["rtl-eclr-channel-capacity-info"]],inputs:{channelBalances:"channelBalances",allChannels:"allChannels",sortBy:"sortBy"},decls:26,vars:15,consts:[["fxLayout","column","fxLayoutAlign","space-between stretch","fxFlex","100"],["fxLayout","column","fxFlex","9","fxLayoutAlign","end start"],[1,"dashboard-capacity-header","this-channel-capacity"],["fxLayout","row","fxLayoutAlign","space-between start",1,"w-100"],["fxFlex","40","fxLayoutAlign","start center",1,"font-size-90"],[1,"font-weight-900","mr-5px"],["fxFlex","20","fxLayoutAlign","center center",1,"font-size-90"],["matTooltip","Balance Score",1,"mr-3px",3,"icon"],["fxFlex","40","fxLayoutAlign","end center",1,"font-size-90"],["mode","determinate","color","accent",1,"dashboard-progress-bar","this-channel-bar",3,"value"],["fxLayout","column","fxFlex","3","fxLayoutAlign","end stretch"],[1,"dashboard-divider"],["fxLayout","column","fxFlex.gt-sm","88","fxFlex","84","fxLayoutAlign","start start","perfectScrollbar","",1,"channels-capacity-scroll"],["fxLayout","column","fxFlex","100","class","w-100",4,"ngIf","ngIfElse"],["noChannelBlock",""],["fxLayout","column","fxFlex","100",1,"w-100"],["class","mt-2",4,"ngFor","ngForOf"],[1,"mt-2"],[1,"dashboard-capacity-header",3,"matTooltip","matTooltipDisabled"],["fxFlex","40","fxLayoutAlign","start center",1,"font-size-90","color-primary"],["fxFlex","20","fxLayoutAlign","center center",1,"font-size-90","color-primary"],["matTooltip","Balance Score",1,"color-primary","mr-3px",3,"icon"],["fxFlex","40","fxLayoutAlign","end center",1,"font-size-90","color-primary"],["mode","determinate",1,"dashboard-progress-bar",3,"value"],["fxLayout","row","fxFlex","10","fxLayoutAlign","space-between center",1,"w-100","mt-1"],["mat-stroked-button","","color","primary","tabindex","1",3,"click"]],template:function(n,t){if(1&n&&(c.Wb(0,"div",0),c.Wb(1,"div",1),c.Wb(2,"span",2),c.Hc(3,"Total Capacity"),c.Vb(),c.Wb(4,"div",3),c.Wb(5,"mat-hint",4),c.Wb(6,"strong",5),c.Hc(7,"Local:"),c.Vb(),c.Hc(8),c.jc(9,"number"),c.Vb(),c.Wb(10,"mat-hint",6),c.Rb(11,"fa-icon",7),c.Hc(12),c.jc(13,"number"),c.Vb(),c.Wb(14,"mat-hint",8),c.Wb(15,"strong",5),c.Hc(16,"Remote:"),c.Vb(),c.Hc(17),c.jc(18,"number"),c.Vb(),c.Vb(),c.Rb(19,"mat-progress-bar",9),c.Vb(),c.Wb(20,"div",10),c.Rb(21,"mat-divider",11),c.Vb(),c.Wb(22,"div",12),c.Fc(23,N,2,1,"div",13),c.Vb(),c.Vb(),c.Fc(24,M,4,0,"ng-template",null,14,c.Gc)),2&n){var a=c.wc(25);c.Db(8),c.Jc("",c.lc(9,7,t.channelBalances.localBalance||0,"1.0-0")," Sats"),c.Db(3),c.pc("icon",t.faBalanceScale),c.Db(1),c.Jc(" (",c.kc(13,10,t.channelBalances.balancedness||0),") "),c.Db(5),c.Jc("",c.lc(18,12,t.channelBalances.remoteBalance||0,"1.0-0")," Sats"),c.Db(2),c.qc("value",t.channelBalances.localBalance&&t.channelBalances.localBalance>0?(t.channelBalances.localBalance-0)/(t.channelBalances.localBalance-0+(t.channelBalances.remoteBalance-0))*100:0),c.Db(4),c.pc("ngIf",t.allChannels&&t.allChannels.length>0)("ngIfElse",a)}},directives:[x.c,x.b,x.a,R.f,w.a,q.a,o.a,A.a,j.b,e.n,e.m,F.a],pipes:[e.e,e.v],styles:[".channels-capacity-scroll[_ngcontent-%COMP%]{width:100%;height:100%;overflow-y:hidden}"]}),n}(),_=function(){function n(){this.totalFees=[{name:"Monthly",value:0},{name:"Weekly",value:0},{name:"Daily",value:0}],this.maxFeeValue=100}return n.prototype.ngOnChanges=function(){if(this.fees.monthly_fee){this.totalFees=[{name:"Monthly",value:this.fees.monthly_fee},{name:"Weekly",value:this.fees.weekly_fee},{name:"Daily ",value:this.fees.daily_fee}];var n=Math.ceil(Math.log(this.fees.monthly_fee+1)/Math.LN10),t=Math.pow(10,n-1);this.maxFeeValue=Math.ceil(this.fees.monthly_fee/t)*t/5||100,Object.assign(this,this.totalFees)}else this.totalFees=[{name:"Monthly",value:0},{name:"Weekly",value:0},{name:"Daily",value:0}],this.maxFeeValue=100,Object.assign(this,this.totalFees)},n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.Kb({type:n,selectors:[["rtl-eclr-fee-info"]],inputs:{fees:"fees"},features:[c.Bb],decls:38,vars:18,consts:[["fxLayout","column","fxFlex","50","fxLayoutAlign","space-between stretch"],["fxLayoutAlign","start",1,"dashboard-info-title"],[1,"overflow-wrap","dashboard-info-value"]],template:function(n,t){1&n&&(c.Wb(0,"div",0),c.Wb(1,"div"),c.Wb(2,"h4",1),c.Hc(3,"Daily"),c.Vb(),c.Wb(4,"div",2),c.Hc(5),c.jc(6,"number"),c.Vb(),c.Vb(),c.Wb(7,"div"),c.Wb(8,"h4",1),c.Hc(9,"Weekly"),c.Vb(),c.Wb(10,"div",2),c.Hc(11),c.jc(12,"number"),c.Vb(),c.Vb(),c.Wb(13,"div"),c.Wb(14,"h4",1),c.Hc(15,"Monthly"),c.Vb(),c.Wb(16,"div",2),c.Hc(17),c.jc(18,"number"),c.Vb(),c.Vb(),c.Vb(),c.Wb(19,"div",0),c.Wb(20,"div"),c.Wb(21,"h4",1),c.Hc(22,"Transactions"),c.Vb(),c.Wb(23,"div",2),c.Hc(24),c.jc(25,"number"),c.Vb(),c.Vb(),c.Wb(26,"div"),c.Wb(27,"h4",1),c.Hc(28,"Transactions"),c.Vb(),c.Wb(29,"div",2),c.Hc(30),c.jc(31,"number"),c.Vb(),c.Vb(),c.Wb(32,"div"),c.Wb(33,"h4",1),c.Hc(34,"Transactions"),c.Vb(),c.Wb(35,"div",2),c.Hc(36),c.jc(37,"number"),c.Vb(),c.Vb(),c.Vb()),2&n&&(c.Db(5),c.Jc("",c.kc(6,6,null==t.fees?null:t.fees.daily_fee)," Sats"),c.Db(6),c.Jc("",c.kc(12,8,null==t.fees?null:t.fees.weekly_fee)," Sats"),c.Db(6),c.Jc("",c.kc(18,10,null==t.fees?null:t.fees.monthly_fee)," Sats"),c.Db(7),c.Ic(c.kc(25,12,null==t.fees?null:t.fees.daily_txs)),c.Db(6),c.Ic(c.kc(31,14,null==t.fees?null:t.fees.weekly_txs)),c.Db(6),c.Ic(c.kc(37,16,null==t.fees?null:t.fees.monthly_txs)))},directives:[x.c,x.a,x.b],pipes:[e.e],styles:[""]}),n}(),z=function(){function n(){this.channelsStatus={}}return n.prototype.ngOnChanges=function(){},n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=c.Kb({type:n,selectors:[["rtl-eclr-channel-status-info"]],inputs:{channelsStatus:"channelsStatus"},features:[c.Bb],decls:41,vars:18,consts:[["fxLayout","column","fxFlex","50","fxLayoutAlign","space-between stretch"],["fxLayoutAlign","start",1,"dashboard-info-title"],[1,"overflow-wrap","dashboard-info-value"],[1,"dot","tiny-dot","green"],[1,"dot","tiny-dot","yellow"],[1,"dot","tiny-dot","grey"]],template:function(n,t){1&n&&(c.Wb(0,"div",0),c.Wb(1,"div"),c.Wb(2,"h4",1),c.Hc(3,"Active"),c.Vb(),c.Wb(4,"div",2),c.Rb(5,"span",3),c.Hc(6),c.jc(7,"number"),c.Vb(),c.Vb(),c.Wb(8,"div"),c.Wb(9,"h4",1),c.Hc(10,"Pending"),c.Vb(),c.Wb(11,"div",2),c.Rb(12,"span",4),c.Hc(13),c.jc(14,"number"),c.Vb(),c.Vb(),c.Wb(15,"div"),c.Wb(16,"h4",1),c.Hc(17,"Inactive"),c.Vb(),c.Wb(18,"div",2),c.Rb(19,"span",5),c.Hc(20),c.jc(21,"number"),c.Vb(),c.Vb(),c.Vb(),c.Wb(22,"div",0),c.Wb(23,"div"),c.Wb(24,"h4",1),c.Hc(25,"Capacity"),c.Vb(),c.Wb(26,"div",2),c.Hc(27),c.jc(28,"number"),c.Vb(),c.Vb(),c.Wb(29,"div"),c.Wb(30,"h4",1),c.Hc(31,"Capacity"),c.Vb(),c.Wb(32,"div",2),c.Hc(33),c.jc(34,"number"),c.Vb(),c.Vb(),c.Wb(35,"div"),c.Wb(36,"h4",1),c.Hc(37,"Capacity"),c.Vb(),c.Wb(38,"div",2),c.Hc(39),c.jc(40,"number"),c.Vb(),c.Vb(),c.Vb()),2&n&&(c.Db(6),c.Ic(c.kc(7,6,(null==t.channelsStatus.active?null:t.channelsStatus.active.channels)||0)),c.Db(7),c.Ic(c.kc(14,8,(null==t.channelsStatus.pending?null:t.channelsStatus.pending.channels)||0)),c.Db(7),c.Ic(c.kc(21,10,(null==t.channelsStatus.inactive?null:t.channelsStatus.inactive.channels)||0)),c.Db(7),c.Jc("",c.kc(28,12,(null==t.channelsStatus.active?null:t.channelsStatus.active.capacity)||0)," Sats"),c.Db(6),c.Jc("",c.kc(34,14,(null==t.channelsStatus.pending?null:t.channelsStatus.pending.capacity)||0)," Sats"),c.Db(6),c.Jc("",c.kc(40,16,(null==t.channelsStatus.inactive?null:t.channelsStatus.inactive.capacity)||0)," Sats"))},directives:[x.c,x.a,x.b],pipes:[e.e],styles:[""]}),n}();function E(n,t){if(1&n&&(c.Wb(0,"mat-hint",17),c.Wb(1,"strong",18),c.Hc(2,"Capacity: "),c.Vb(),c.Hc(3),c.jc(4,"number"),c.Vb()),2&n){var a=c.ic().$implicit;c.Db(3),c.Jc("",c.lc(4,1,a.data.commitments.localCommit.spec.toRemote/1e3||0,"1.0-0")," Sats")}}function K(n,t){if(1&n&&(c.Wb(0,"mat-hint",17),c.Wb(1,"strong",18),c.Hc(2,"Capacity: "),c.Vb(),c.Hc(3),c.jc(4,"number"),c.Vb()),2&n){var a=c.ic().$implicit;c.Db(3),c.Jc("",c.lc(4,1,a.data.commitments.localCommit.spec.toLocal/1e3||0,"1.0-0")," Sats")}}function $(n,t){if(1&n&&c.Rb(0,"mat-progress-bar",19),2&n){var a=c.ic().$implicit,e=c.ic(2);c.qc("value",e.totalLiquidity>0?((a.data.commitments.localCommit.spec.toRemote-0)/1e3||0)/e.totalLiquidity*100:0)}}function U(n,t){if(1&n&&c.Rb(0,"mat-progress-bar",19),2&n){var a=c.ic().$implicit,e=c.ic(2);c.qc("value",e.totalLiquidity>0?((a.data.commitments.localCommit.spec.toLocal-0)/1e3||0)/e.totalLiquidity*100:0)}}function G(n,t){if(1&n&&(c.Wb(0,"div",12),c.Wb(1,"span",13),c.Hc(2),c.jc(3,"slice"),c.Vb(),c.Wb(4,"div",14),c.Fc(5,E,5,4,"mat-hint",15),c.Fc(6,K,5,4,"mat-hint",15),c.Vb(),c.Fc(7,$,1,1,"mat-progress-bar",16),c.Fc(8,U,1,1,"mat-progress-bar",16),c.Vb()),2&n){var a=t.$implicit,e=c.ic(2);c.Db(1),c.qc("matTooltip",a.alias||a.shortChannelId),c.qc("matTooltipDisabled",(a.alias||a.shortChannelId).length<26),c.Db(1),c.Kc("",c.mc(3,8,a.alias||a.shortChannelId,0,24),"",(a.alias||a.shortChannelId).length>25?"...":"",""),c.Db(3),c.pc("ngIf","In"===e.direction),c.Db(1),c.pc("ngIf","Out"===e.direction),c.Db(1),c.pc("ngIf","In"===e.direction),c.Db(1),c.pc("ngIf","Out"===e.direction)}}function Q(n,t){if(1&n&&(c.Wb(0,"div",10),c.Fc(1,G,9,12,"div",11),c.Vb()),2&n){var a=c.ic();c.Db(1),c.pc("ngForOf",a.allChannels)}}function X(n,t){if(1&n){var a=c.Xb();c.Wb(0,"button",22),c.ec("click",(function(){return c.yc(a),c.ic(2).goToChannels()})),c.Hc(1,"Open Channel"),c.Vb()}}function Y(n,t){if(1&n&&(c.Wb(0,"div",20),c.Hc(1," No channels available. "),c.Fc(2,X,2,0,"button",21),c.Vb()),2&n){var a=c.ic();c.Db(2),c.pc("ngIf","Out"===a.direction)}}var Z=function(){function n(n){this.router=n}return n.prototype.goToChannels=function(){this.router.navigateByUrl("/eclr/peerschannels")},n.\u0275fac=function(t){return new(t||n)(c.Qb(i.f))},n.\u0275cmp=c.Kb({type:n,selectors:[["rtl-eclr-channel-liquidity-info"]],inputs:{direction:"direction",totalLiquidity:"totalLiquidity",allChannels:"allChannels"},decls:14,vars:6,consts:[["fxLayout","column","fxLayoutAlign","space-between stretch","fxFlex","100"],["fxLayout","column","fxFlex","9","fxLayoutAlign","end start"],[1,"dashboard-capacity-header","this-channel-capacity"],[1,"font-size-90"],["mode","determinate","color","accent","value","100",1,"dashboard-progress-bar","this-channel-bar"],["fxLayout","column","fxFlex","3","fxLayoutAlign","end stretch"],[1,"dashboard-divider"],["fxLayout","column","fxFlex.gt-sm","88","fxFlex","84","fxLayoutAlign","start start","perfectScrollbar","",1,"channels-capacity-scroll"],["fxLayout","column","fxFlex","100","class","w-100",4,"ngIf","ngIfElse"],["noChannelBlock",""],["fxLayout","column","fxFlex","100",1,"w-100"],["class","mt-2",4,"ngFor","ngForOf"],[1,"mt-2"],[1,"dashboard-capacity-header",3,"matTooltip","matTooltipDisabled"],["fxLayout","row","fxLayoutAlign","space-between start",1,"w-100"],["fxFlex","100","fxLayoutAlign","start center","class","font-size-90 color-primary",4,"ngIf"],["class","dashboard-progress-bar","mode","determinate",3,"value",4,"ngIf"],["fxFlex","100","fxLayoutAlign","start center",1,"font-size-90","color-primary"],[1,"font-weight-900","mr-5px"],["mode","determinate",1,"dashboard-progress-bar",3,"value"],["fxLayout","row","fxFlex","10","fxLayoutAlign","space-between center",1,"w-100","mt-1"],["mat-stroked-button","","color","primary","tabindex","1",3,"click",4,"ngIf"],["mat-stroked-button","","color","primary","tabindex","1",3,"click"]],template:function(n,t){if(1&n&&(c.Wb(0,"div",0),c.Wb(1,"div",1),c.Wb(2,"span",2),c.Hc(3,"Total Capacity"),c.Vb(),c.Wb(4,"mat-hint",3),c.Hc(5),c.jc(6,"number"),c.Vb(),c.Rb(7,"mat-progress-bar",4),c.Vb(),c.Wb(8,"div",5),c.Rb(9,"mat-divider",6),c.Vb(),c.Wb(10,"div",7),c.Fc(11,Q,2,1,"div",8),c.Vb(),c.Vb(),c.Fc(12,Y,3,1,"ng-template",null,9,c.Gc)),2&n){var a=c.wc(13);c.Db(5),c.Jc("",c.lc(6,3,t.totalLiquidity,"1.0-0")," Sats"),c.Db(6),c.pc("ngIf",t.allChannels&&t.allChannels.length>0)("ngIfElse",a)}},directives:[x.c,x.b,x.a,R.f,o.a,A.a,j.b,e.n,e.m,q.a,F.a],pipes:[e.e,e.v],styles:[""]}),n}(),nn=a("VkXI");function tn(n,t){if(1&n&&(c.Wb(0,"button",24),c.Wb(1,"mat-icon"),c.Hc(2,"more_vert"),c.Vb(),c.Vb()),2&n){c.ic();var a=c.wc(9);c.pc("matMenuTriggerFor",a)}}function an(n,t){if(1&n){var a=c.Xb();c.Wb(0,"button",14),c.ec("click",(function(){return c.yc(a),c.ic(3).onsortChannelsBy()})),c.Hc(1),c.Vb()}if(2&n){var e=c.ic(3);c.Db(1),c.Jc("Sort By ","Balance Score"===e.sortField?"Capacity":"Balance Score","")}}var en=function(n){return{"error-border":n}};function cn(n,t){if(1&n&&c.Rb(0,"rtl-eclr-node-info",25),2&n){var a=c.ic(3);c.pc("information",a.information)("showColorFieldSeparately",!1)("ngClass",c.tc(3,en,"error"===a.flgLoading[0]))}}function on(n,t){if(1&n&&c.Rb(0,"rtl-eclr-balances-info",26),2&n){var a=c.ic(3);c.pc("balances",a.balances)("ngClass",c.tc(2,en,"error"===a.flgLoading[2]))}}function ln(n,t){if(1&n&&c.Rb(0,"rtl-eclr-channel-capacity-info",27),2&n){var a=c.ic(3);c.pc("sortBy",a.sortField)("channelBalances",a.channelBalances)("allChannels",a.allChannelsCapacity)("ngClass",c.tc(4,en,"error"===a.flgLoading[5]))}}function sn(n,t){if(1&n&&c.Rb(0,"rtl-eclr-fee-info",28),2&n){var a=c.ic(3);c.pc("fees",a.fees)("ngClass",c.tc(2,en,"error"===a.flgLoading[1]))}}function rn(n,t){if(1&n&&c.Rb(0,"rtl-eclr-channel-status-info",29),2&n){var a=c.ic(3);c.pc("channelsStatus",a.channelsStatus)("ngClass",c.tc(2,en,"error"===a.flgLoading[0]))}}function bn(n,t){1&n&&(c.Wb(0,"h3"),c.Hc(1,"Error! Unable to find information!"),c.Vb())}function fn(n,t){if(1&n){var a=c.Xb();c.Wb(0,"mat-grid-tile",8),c.Wb(1,"mat-card",9),c.Wb(2,"mat-card-header"),c.Wb(3,"mat-card-title"),c.Rb(4,"fa-icon",10),c.Wb(5,"span"),c.Hc(6),c.Vb(),c.Fc(7,tn,3,1,"button",11),c.Wb(8,"mat-menu",12,13),c.Wb(10,"button",14),c.ec("click",(function(){c.yc(a);var n=t.$implicit;return c.ic(2).onNavigateTo(n.link)})),c.Hc(11),c.Vb(),c.Fc(12,an,2,1,"button",15),c.Vb(),c.Vb(),c.Vb(),c.Wb(13,"mat-card-content",16),c.Wb(14,"div",17),c.Fc(15,cn,1,5,"rtl-eclr-node-info",18),c.Fc(16,on,1,4,"rtl-eclr-balances-info",19),c.Fc(17,ln,1,6,"rtl-eclr-channel-capacity-info",20),c.Fc(18,sn,1,4,"rtl-eclr-fee-info",21),c.Fc(19,rn,1,4,"rtl-eclr-channel-status-info",22),c.Fc(20,bn,2,0,"h3",23),c.Vb(),c.Vb(),c.Vb(),c.Vb()}if(2&n){var e=t.$implicit;c.pc("colspan",e.cols)("rowspan",e.rows),c.Db(4),c.pc("icon",e.icon),c.Db(2),c.Ic(e.title),c.Db(1),c.pc("ngIf",e.link),c.Db(4),c.Jc("Go To ",e.goTo,""),c.Db(1),c.pc("ngIf","capacity"===e.id),c.Db(2),c.pc("ngSwitch",e.id),c.Db(1),c.pc("ngSwitchCase","node"),c.Db(1),c.pc("ngSwitchCase","balance"),c.Db(1),c.pc("ngSwitchCase","capacity"),c.Db(1),c.pc("ngSwitchCase","fee"),c.Db(1),c.pc("ngSwitchCase","status")}}function hn(n,t){if(1&n&&(c.Wb(0,"div",2),c.Wb(1,"div",3),c.Rb(2,"fa-icon",4),c.Wb(3,"span",5),c.Hc(4),c.Vb(),c.Vb(),c.Wb(5,"mat-grid-list",6),c.Fc(6,fn,21,13,"mat-grid-tile",7),c.Vb(),c.Vb()),2&n){var a=c.ic();c.Db(2),c.pc("icon",a.flgLoading[0]?a.faFrown:a.faSmile),c.Db(2),c.Ic(a.flgLoading[0]?"Error! Please check the server connection.":"Welcome! Your node is up and running."),c.Db(1),c.pc("rowHeight",a.operatorCardHeight),c.Db(1),c.pc("ngForOf",a.operatorCards)}}function un(n,t){if(1&n&&(c.Wb(0,"button",24),c.Wb(1,"mat-icon"),c.Hc(2,"more_vert"),c.Vb(),c.Vb()),2&n){c.ic();var a=c.wc(7);c.pc("matMenuTriggerFor",a)}}function dn(n,t){if(1&n){var a=c.Xb();c.Wb(0,"mat-card-header"),c.Wb(1,"mat-card-title"),c.Rb(2,"fa-icon",10),c.Wb(3,"span"),c.Hc(4),c.Vb(),c.Fc(5,un,3,1,"button",11),c.Wb(6,"mat-menu",12,37),c.Wb(8,"button",14),c.ec("click",(function(){c.yc(a);var n=c.ic().$implicit;return c.ic(2).onNavigateTo(n.link)})),c.Hc(9),c.Vb(),c.Vb(),c.Vb(),c.Vb()}if(2&n){var e=c.ic().$implicit;c.Db(2),c.pc("icon",e.icon),c.Db(2),c.Ic(e.title),c.Db(1),c.pc("ngIf",e.link),c.Db(4),c.Jc("Go To ",e.goTo,"")}}function mn(n,t){if(1&n&&c.Rb(0,"rtl-eclr-node-info",38),2&n){var a=c.ic(3);c.pc("information",a.information)("ngClass",c.tc(2,en,"error"===a.flgLoading[0]))}}function gn(n,t){if(1&n&&c.Rb(0,"rtl-eclr-balances-info",26),2&n){var a=c.ic(3);c.pc("balances",a.balances)("ngClass",c.tc(2,en,"error"===a.flgLoading[2]))}}function pn(n,t){if(1&n&&c.Rb(0,"rtl-eclr-channel-liquidity-info",39),2&n){var a=c.ic(3);c.pc("direction","In")("totalLiquidity",a.totalInboundLiquidity)("allChannels",a.allInboundChannels)("ngClass",c.tc(4,en,"error"===a.flgLoading[5]))}}function yn(n,t){if(1&n&&c.Rb(0,"rtl-eclr-channel-liquidity-info",39),2&n){var a=c.ic(3);c.pc("direction","Out")("totalLiquidity",a.totalOutboundLiquidity)("allChannels",a.allOutboundChannels)("ngClass",c.tc(4,en,"error"===a.flgLoading[5]))}}function vn(n,t){if(1&n){var a=c.Xb();c.Wb(0,"button",46),c.Wb(1,"mat-icon"),c.Hc(2,"more_vert"),c.Vb(),c.Vb(),c.Wb(3,"mat-menu",12,47),c.Wb(5,"button",14),c.ec("click",(function(){c.yc(a);var n=c.ic(2).$implicit;return c.ic(2).onNavigateTo(n.link)})),c.Hc(6),c.Vb(),c.Vb()}if(2&n){var e=c.wc(4),i=c.ic(2).$implicit;c.pc("matMenuTriggerFor",e),c.Db(6),c.Jc("Go To ",i.goTo,"")}}function Cn(n,t){1&n&&(c.Wb(0,"span",40),c.Wb(1,"mat-tab-group",41),c.Rb(2,"mat-tab",42),c.Rb(3,"mat-tab",43),c.Wb(4,"mat-tab",44),c.Fc(5,vn,7,2,"ng-template",45),c.Vb(),c.Vb(),c.Vb()),2&n&&(c.Db(4),c.pc("disabled",!0))}function xn(n,t){1&n&&(c.Wb(0,"h3"),c.Hc(1,"Error! Unable to find information!"),c.Vb())}var wn=function(n){return{"p-24":n}};function Wn(n,t){if(1&n&&(c.Wb(0,"mat-grid-tile",8),c.Wb(1,"mat-card",31),c.Fc(2,dn,10,4,"mat-card-header",32),c.Wb(3,"mat-card-content",33),c.Wb(4,"div",17),c.Fc(5,mn,1,4,"rtl-eclr-node-info",34),c.Fc(6,gn,1,4,"rtl-eclr-balances-info",19),c.Fc(7,pn,1,6,"rtl-eclr-channel-liquidity-info",35),c.Fc(8,yn,1,6,"rtl-eclr-channel-liquidity-info",35),c.Fc(9,Cn,6,1,"span",36),c.Fc(10,xn,2,0,"h3",23),c.Vb(),c.Vb(),c.Vb(),c.Vb()),2&n){var a=t.$implicit;c.pc("colspan",a.cols)("rowspan",a.rows),c.Db(1),c.pc("ngClass",c.tc(11,wn,"transactions"!==a.id)),c.Db(1),c.pc("ngIf","transactions"!==a.id),c.Db(1),c.qc("fxFlex","transactions"!==a.id?95:100),c.Db(1),c.pc("ngSwitch",a.id),c.Db(1),c.pc("ngSwitchCase","node"),c.Db(1),c.pc("ngSwitchCase","balance"),c.Db(1),c.pc("ngSwitchCase","inboundLiq"),c.Db(1),c.pc("ngSwitchCase","outboundLiq"),c.Db(1),c.pc("ngSwitchCase","transactions")}}function Vn(n,t){if(1&n&&(c.Wb(0,"div",3),c.Rb(1,"fa-icon",4),c.Wb(2,"span",5),c.Hc(3,"Welcome! Your node is up and running."),c.Vb(),c.Vb(),c.Wb(4,"mat-grid-list",30),c.Fc(5,Wn,11,13,"mat-grid-tile",7),c.Vb()),2&n){var a=c.ic();c.Db(1),c.pc("icon",a.faSmile),c.Db(3),c.pc("rowHeight",a.merchantCardHeight),c.Db(1),c.pc("ngForOf",a.merchantCards)}}var Ln=function(){function n(n,t,a,e,i){this.logger=n,this.store=t,this.actions$=a,this.commonService=e,this.router=i,this.faSmile=u.b,this.faFrown=u.a,this.faAngleDoubleDown=d.a,this.faAngleDoubleUp=d.b,this.faChartPie=d.f,this.faBolt=d.e,this.faServer=d.D,this.faNetworkWired=d.v,this.flgChildInfoUpdated=!1,this.userPersonaEnum=p.u,this.channelBalances={localBalance:0,remoteBalance:0,balancedness:"0"},this.selNode={},this.information={},this.channels=[],this.channelStats=[],this.onchainBalance={},this.balances={onchain:-1,lightning:-1,total:0},this.channelsStatus={},this.allChannelsCapacity=[],this.allInboundChannels=[],this.allOutboundChannels=[],this.totalInboundLiquidity=0,this.totalOutboundLiquidity=0,this.operatorCards=[],this.merchantCards=[],this.screenSize="",this.operatorCardHeight="330px",this.merchantCardHeight="65px",this.sortField="Balance Score",this.flgLoading=[!0,!0,!0,!0,!0,!0,!0,!0],this.unSubs=[new b.a,new b.a,new b.a],this.screenSize=this.commonService.getScreenSize(),this.screenSize===p.o.XS?(this.operatorCards=[{id:"node",icon:this.faServer,title:"Node Information",cols:10,rows:1},{id:"balance",goTo:"On-Chain",link:"/eclr/onchain",icon:this.faChartPie,title:"Balances",cols:10,rows:1},{id:"fee",goTo:"Routing",link:"/eclr/routing",icon:this.faBolt,title:"Routing Fee",cols:10,rows:1},{id:"status",goTo:"Channels",link:"/eclr/peerschannels",icon:this.faNetworkWired,title:"Channels",cols:10,rows:1},{id:"capacity",goTo:"Channels",link:"/eclr/peerschannels",icon:this.faNetworkWired,title:"Channels Capacity",cols:10,rows:2}],this.merchantCards=[{id:"balance",goTo:"On-Chain",link:"/eclr/onchain",icon:this.faChartPie,title:"Balances",cols:6,rows:4},{id:"transactions",goTo:"Transactions",link:"/eclr/transactions",title:"",cols:6,rows:4},{id:"inboundLiq",goTo:"Channels",link:"/eclr/peerschannels",icon:this.faAngleDoubleDown,title:"In-Bound Liquidity",cols:6,rows:8},{id:"outboundLiq",goTo:"Channels",link:"/eclr/peerschannels",icon:this.faAngleDoubleUp,title:"Out-Bound Liquidity",cols:6,rows:8}]):this.screenSize===p.o.SM||this.screenSize===p.o.MD?(this.operatorCards=[{id:"node",icon:this.faServer,title:"Node Information",cols:5,rows:1},{id:"balance",goTo:"On-Chain",link:"/eclr/onchain",icon:this.faChartPie,title:"Balances",cols:5,rows:1},{id:"fee",goTo:"Routing",link:"/eclr/routing",icon:this.faBolt,title:"Routing Fee",cols:5,rows:1},{id:"status",goTo:"Channels",link:"/eclr/peerschannels",icon:this.faNetworkWired,title:"Channels",cols:5,rows:1},{id:"capacity",goTo:"Channels",link:"/eclr/peerschannels",icon:this.faNetworkWired,title:"Channels Capacity",cols:10,rows:2}],this.merchantCards=[{id:"balance",goTo:"On-Chain",link:"/eclr/onchain",icon:this.faChartPie,title:"Balances",cols:3,rows:4},{id:"transactions",goTo:"Transactions",link:"/eclr/transactions",title:"",cols:3,rows:4},{id:"inboundLiq",goTo:"Channels",link:"/eclr/peerschannels",icon:this.faAngleDoubleDown,title:"In-Bound Liquidity",cols:3,rows:8},{id:"outboundLiq",goTo:"Channels",link:"/eclr/peerschannels",icon:this.faAngleDoubleUp,title:"Out-Bound Liquidity",cols:3,rows:8}]):(this.operatorCardHeight=(window.screen.height-200)/2+"px",this.merchantCardHeight=(window.screen.height-210)/10+"px",this.operatorCards=[{id:"node",icon:this.faServer,title:"Node Information",cols:3,rows:1},{id:"balance",goTo:"On-Chain",link:"/eclr/onchain",icon:this.faChartPie,title:"Balances",cols:3,rows:1},{id:"capacity",goTo:"Channels",link:"/eclr/peerschannels",icon:this.faNetworkWired,title:"Channels Capacity",cols:4,rows:2},{id:"fee",goTo:"Routing",link:"/eclr/routing",icon:this.faBolt,title:"Routing Fee",cols:3,rows:1},{id:"status",goTo:"Channels",link:"/eclr/peerschannels",icon:this.faNetworkWired,title:"Channels",cols:3,rows:1}],this.merchantCards=[{id:"balance",goTo:"On-Chain",link:"/eclr/onchain",icon:this.faChartPie,title:"Balances",cols:2,rows:5},{id:"inboundLiq",goTo:"Channels",link:"/eclr/peerschannels",icon:this.faAngleDoubleDown,title:"In-Bound Liquidity",cols:2,rows:10},{id:"outboundLiq",goTo:"Channels",link:"/eclr/peerschannels",icon:this.faAngleDoubleUp,title:"Out-Bound Liquidity",cols:2,rows:10},{id:"transactions",goTo:"Transactions",link:"/eclr/transactions",title:"",cols:2,rows:5}])}return n.prototype.ngOnInit=function(){var n=this;this.store.select("eclr").pipe(Object(f.a)(this.unSubs[1])).subscribe((function(t){n.flgLoading=[!0,!0,!0,!0,!0,!0,!0,!0],t.effectErrors.forEach((function(t){"FetchInfo"===t.action&&(n.flgLoading[0]="error"),"FetchFees"===t.action&&(n.flgLoading[1]="error"),"FetchChannels"===t.action&&(n.flgLoading[2]="error"),"FetchChannelStats"===t.action&&(n.flgLoading[3]="error")})),n.selNode=t.nodeSettings,n.information=t.information,"error"!==n.flgLoading[0]&&(n.flgLoading[0]=!n.information.nodeId),n.fees=t.fees,"error"!==n.flgLoading[1]&&(n.flgLoading[1]=!n.fees.daily_fee),n.channels=t.activeChannels,n.onchainBalance=t.onchainBalance,n.balances.onchain=n.onchainBalance.totalBalance,n.balances.lightning=t.lightningBalance.localBalance,n.balances.total=n.balances.lightning+n.balances.onchain,n.balances=Object.assign({},n.balances);var a=t.lightningBalance.localBalance?+t.lightningBalance.localBalance:0,e=t.lightningBalance.remoteBalance?+t.lightningBalance.remoteBalance:0;n.channelBalances={localBalance:a,remoteBalance:e,balancedness:(1-Math.abs((a-e)/(a+e))).toFixed(3)},n.channelsStatus=t.channelsStatus,n.totalInboundLiquidity=0,n.totalOutboundLiquidity=0,n.allChannelsCapacity=JSON.parse(JSON.stringify(n.commonService.sortDescByKey(n.channels,"balancedness"))),n.allInboundChannels=JSON.parse(JSON.stringify(n.commonService.sortDescByKey(n.channels.filter((function(n){return n.data.commitments.localCommit.spec.toRemote>0})),"data.commitments.localCommit.spec.toRemote"))),n.allOutboundChannels=JSON.parse(JSON.stringify(n.commonService.sortDescByKey(n.channels.filter((function(n){return n.data.commitments.localCommit.spec.toLocal>0})),"data.commitments.localCommit.spec.toLocal"))),n.channels.forEach((function(t){n.totalInboundLiquidity=n.totalInboundLiquidity+Math.ceil(t.data.commitments.localCommit.spec.toRemote/1e3),n.totalOutboundLiquidity=n.totalOutboundLiquidity+Math.floor(t.data.commitments.localCommit.spec.toLocal/1e3)})),"error"!==n.flgLoading[2]&&(n.flgLoading[2]=!n.channels),n.channelStats=t.channelStats,"error"!==n.flgLoading[3]&&(n.flgLoading[3]=!n.channelStats),n.flgChildInfoUpdated=n.balances.lightning>=0&&n.balances.onchain>=0&&n.fees.monthly_fee>=0,n.logger.info(t)})),this.actions$.pipe(Object(f.a)(this.unSubs[2]),Object(h.a)((function(n){return n.type===y.g||n.type===y.w}))).subscribe((function(t){t.type===y.g&&(n.flgChildInfoUpdated=!1),t.type===y.w&&(n.flgChildInfoUpdated=!0)}))},n.prototype.onNavigateTo=function(n){this.router.navigateByUrl(n)},n.prototype.onsortChannelsBy=function(){"Balance Score"===this.sortField?(this.sortField="Capacity",this.allChannelsCapacity=this.channels.sort((function(n,t){var a=+n.data.commitments.localCommit.spec.toLocal+ +n.data.commitments.localCommit.spec.toRemote,e=+t.data.commitments.localCommit.spec.toLocal+ +t.data.commitments.localCommit.spec.toRemote;return a>e?-1:a<e?1:0}))):(this.sortField="Balance Score",this.allChannelsCapacity=JSON.parse(JSON.stringify(this.commonService.sortDescByKey(this.channels,"balancedness"))))},n.prototype.ngOnDestroy=function(){this.unSubs.forEach((function(n){n.next(),n.complete()}))},n.\u0275fac=function(t){return new(t||n)(c.Qb(m.b),c.Qb(v.h),c.Qb(C.a),c.Qb(g.a),c.Qb(i.f))},n.\u0275cmp=c.Kb({type:n,selectors:[["rtl-eclr-home"]],decls:3,vars:2,consts:[["fxLayout","column",4,"ngIf","ngIfElse"],["merchantDashboard",""],["fxLayout","column"],["fxLayout","row","fxLayoutAlign","start end",1,"padding-gap-x","page-title-container","mb-0"],[1,"page-title-img","mr-1",3,"icon"],[1,"page-title"],["cols","10",3,"rowHeight"],[3,"colspan","rowspan",4,"ngFor","ngForOf"],[3,"colspan","rowspan"],["fxLayout","column","fxLayoutAlign","start start",1,"dashboard-card","p-24"],[1,"mr-1",3,"icon"],["mat-icon-button","","class","more-button mt-1","aria-label","Toggle menu",3,"matMenuTriggerFor",4,"ngIf"],["xPosition","before",1,"dashboard-vert-menu"],["menuOperator","matMenu"],["mat-menu-item","",3,"click"],["mat-menu-item","",3,"click",4,"ngIf"],["fxFlex","95",1,"dashboard-card-content","w-100"],["fxLayout","column","fxFlex","100",3,"ngSwitch"],["fxFlex","100",3,"information","showColorFieldSeparately","ngClass",4,"ngSwitchCase"],["fxFlex","100",3,"balances","ngClass",4,"ngSwitchCase"],["fxFlex","100",3,"sortBy","channelBalances","allChannels","ngClass",4,"ngSwitchCase"],["fxFlex","100",3,"fees","ngClass",4,"ngSwitchCase"],["fxFlex","100",3,"channelsStatus","ngClass",4,"ngSwitchCase"],[4,"ngSwitchDefault"],["mat-icon-button","","aria-label","Toggle menu",1,"more-button","mt-1",3,"matMenuTriggerFor"],["fxFlex","100",3,"information","showColorFieldSeparately","ngClass"],["fxFlex","100",3,"balances","ngClass"],["fxFlex","100",3,"sortBy","channelBalances","allChannels","ngClass"],["fxFlex","100",3,"fees","ngClass"],["fxFlex","100",3,"channelsStatus","ngClass"],["cols","6",3,"rowHeight"],["fxLayout","column","fxLayoutAlign","start start",1,"dashboard-card",3,"ngClass"],[4,"ngIf"],[1,"dashboard-card-content","w-100",3,"fxFlex"],["fxFlex","100",3,"information","ngClass",4,"ngSwitchCase"],["fxFlex","100",3,"direction","totalLiquidity","allChannels","ngClass",4,"ngSwitchCase"],["fxLayout","column","fxFlex","100","fxLayoutAlign","space-between start",4,"ngSwitchCase"],["menuMerchant","matMenu"],["fxFlex","100",3,"information","ngClass"],["fxFlex","100",3,"direction","totalLiquidity","allChannels","ngClass"],["fxLayout","column","fxFlex","100","fxLayoutAlign","space-between start"],["fxLayout","column",1,"w-100","dashboard-tabs-group"],["label","Receive"],["label","Pay"],[3,"disabled"],["mat-tab-label",""],["mat-icon-button","","aria-label","Toggle menu",1,"more-button",2,"max-width","20px",3,"matMenuTriggerFor"],["menuTransactions","matMenu"]],template:function(n,t){if(1&n&&(c.Fc(0,hn,7,4,"div",0),c.Fc(1,Vn,6,3,"ng-template",null,1,c.Gc)),2&n){var a=c.wc(2);c.pc("ngIf",t.selNode.userPersona===t.userPersonaEnum.OPERATOR)("ngIfElse",a)}},directives:[e.n,x.c,x.b,w.a,W.a,e.m,W.c,V.a,V.c,V.f,L.d,L.a,V.b,x.a,e.p,e.q,e.r,F.a,L.c,S.a,T,e.l,D.a,O,P,_,z,Z,nn.c,nn.a,nn.d],styles:[".dashboard-card[_ngcontent-%COMP%]{position:absolute;top:1rem;left:1rem;right:1rem;bottom:1rem}.more-button[_ngcontent-%COMP%]{position:absolute;top:7px;right:7px}.dashboard-card-content[_ngcontent-%COMP%]{text-align:left}"]}),n}(),Fn=a("2h+y"),Sn=a("0dfH"),Dn=i.j.forChild([{path:"",component:r,children:[{path:"home",component:Ln,canActivate:[Fn.c]},{path:"**",component:Sn.a}]}]),Bn=a("PCNd"),kn=function(){function n(){}return n.\u0275mod=c.Ob({type:n,bootstrap:[r]}),n.\u0275inj=c.Nb({factory:function(t){return new(t||n)},providers:[Fn.c],imports:[[e.c,Bn.a,Dn]]}),n}()}}]);