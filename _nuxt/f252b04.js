(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{770:function(t,n,e){"use strict";e(35),e(34);var r=e(127),o=e(71),l={mixins:[r.a,o.Kb],layout:function(t){var n=t.store,e=t.route;return e.params.layout?e.params.layout:n.getters.settings.layout.layout},data:function(){return{title:null}},computed:{breadcrumb:function(){return[{text:this.$t("Home"),to:this.routeTo(this.routes.home)},{text:this.$t(this.title),active:!0}]},headerClass:function(){return null},headerEffects:function(){return"waterfall"},headerImage:function(){return null},headerContentClass:function(){return null},headerCondenses:function(){return!1},headerContentComponent:function(){return null},headerContentComponentProps:function(){return null},guest:function(){return!1},subLayout:function(){return!1},subLayoutHasScrollingRegion:function(){return!0},subLayoutDrawer:function(){return!1},subLayoutDrawerId:function(){return"sub-layout-drawer"},subLayoutDrawerAlign:function(){return"end"}},created:function(){this.emitOptions()},methods:{emitOptions:function(){var t=this;["guest","subLayout","subLayoutHasScrollingRegion","subLayoutDrawerId","subLayoutDrawerAlign","subLayoutDrawer","headerClass","headerEffects","headerImage","headerContentClass","headerCondenses","headerContentComponent","headerContentComponentProps"].map((function(option){void 0!==t[option]&&t.$root.$emit("luma::".concat(option),t[option])}))}},head:function(){return{title:"".concat(this.$t(this.title)," - ").concat(this.$store.state.brand)}}},c=e(70),component=Object(c.a)(l,undefined,undefined,!1,null,null,null);n.a=component.exports},802:function(t,n,e){"use strict";e.r(n);var r=e(770),o={components:{LumaSignupPage:e(71).M},extends:r.a,layout:"blank",data:function(){return{title:"Sign Up"}}},l=e(70),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("luma-signup-page",{attrs:{title:t.title}})}),[],!1,null,null,null);n.default=component.exports}}]);