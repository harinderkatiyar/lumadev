(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{769:function(t,n,e){"use strict";e(35),e(34);var r=e(127),o=e(70),c={mixins:[r.a,o.Kb],layout:function(t){var n=t.store,e=t.route;return e.params.layout?e.params.layout:n.getters.settings.layout.layout},data:function(){return{title:null}},computed:{breadcrumb:function(){return[{text:this.$t("Home"),to:this.routeTo(this.routes.home)},{text:this.$t(this.title),active:!0}]},headerClass:function(){return null},headerEffects:function(){return"waterfall"},headerImage:function(){return null},headerContentClass:function(){return null},headerCondenses:function(){return!1},headerContentComponent:function(){return null},headerContentComponentProps:function(){return null},guest:function(){return!1},subLayout:function(){return!1},subLayoutHasScrollingRegion:function(){return!0},subLayoutDrawer:function(){return!1},subLayoutDrawerId:function(){return"sub-layout-drawer"},subLayoutDrawerAlign:function(){return"end"}},created:function(){this.emitOptions()},methods:{emitOptions:function(){var t=this;["guest","subLayout","subLayoutHasScrollingRegion","subLayoutDrawerId","subLayoutDrawerAlign","subLayoutDrawer","headerClass","headerEffects","headerImage","headerContentClass","headerCondenses","headerContentComponent","headerContentComponentProps"].map((function(option){void 0!==t[option]&&t.$root.$emit("luma::".concat(option),t[option])}))}},head:function(){return{title:"".concat(this.$t(this.title)," - ").concat(this.$store.state.brand)}}},l=e(69),component=Object(l.a)(c,undefined,undefined,!1,null,null,null);n.a=component.exports},797:function(t,n,e){"use strict";e.r(n);var r=e(48),o=e.n(r),c=e(29),l=e.n(c),d=e(769),f={components:{LumaInstructorStatementPage:e(70).I},extends:d.a,data:function(){return{title:this.$t("Statement")}},asyncData:function(t){return o()(l.a.mark((function n(){var e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.app,n.abrupt("return",{title:e.i18n.t("Statement")});case 2:case"end":return n.stop()}}),n)})))()}},h=e(69),component=Object(h.a)(f,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("luma-instructor-statement-page",{attrs:{title:t.title,breadcrumb:t.breadcrumb,"container-class":t.containerClass}})}),[],!1,null,null,null);n.default=component.exports}}]);