(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{769:function(t,e,n){"use strict";n(35),n(34);var r=n(127),o=n(70),l={mixins:[r.a,o.Kb],layout:function(t){var e=t.store,n=t.route;return n.params.layout?n.params.layout:e.getters.settings.layout.layout},data:function(){return{title:null}},computed:{breadcrumb:function(){return[{text:this.$t("Home"),to:this.routeTo(this.routes.home)},{text:this.$t(this.title),active:!0}]},headerClass:function(){return null},headerEffects:function(){return"waterfall"},headerImage:function(){return null},headerContentClass:function(){return null},headerCondenses:function(){return!1},headerContentComponent:function(){return null},headerContentComponentProps:function(){return null},guest:function(){return!1},subLayout:function(){return!1},subLayoutHasScrollingRegion:function(){return!0},subLayoutDrawer:function(){return!1},subLayoutDrawerId:function(){return"sub-layout-drawer"},subLayoutDrawerAlign:function(){return"end"}},created:function(){this.emitOptions()},methods:{emitOptions:function(){var t=this;["guest","subLayout","subLayoutHasScrollingRegion","subLayoutDrawerId","subLayoutDrawerAlign","subLayoutDrawer","headerClass","headerEffects","headerImage","headerContentClass","headerCondenses","headerContentComponent","headerContentComponentProps"].map((function(option){void 0!==t[option]&&t.$root.$emit("luma::".concat(option),t[option])}))}},head:function(){return{title:"".concat(this.$t(this.title)," - ").concat(this.$store.state.brand)}}},c=n(69),component=Object(c.a)(l,undefined,undefined,!1,null,null,null);e.a=component.exports},830:function(t,e,n){"use strict";n.r(e);var r=n(769),o={components:{LumaUiFixedLayoutPage:n(70).pb},extends:r.a,data:function(){return{title:"Fixed Layout"}}},l=n(69),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("luma-ui-fixed-layout-page",{attrs:{title:t.title,breadcrumb:t.breadcrumb,"container-class":t.containerClass,"layout-has-sticky-navbar":"fixed"===t.$root.layoutName||"sticky"===t.$root.layoutName}})}),[],!1,null,null,null);e.default=component.exports}}]);