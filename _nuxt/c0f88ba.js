(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{769:function(t,e,n){"use strict";n(35),n(34);var r=n(127),o=n(70),c={mixins:[r.a,o.Kb],layout:function(t){var e=t.store,n=t.route;return n.params.layout?n.params.layout:e.getters.settings.layout.layout},data:function(){return{title:null}},computed:{breadcrumb:function(){return[{text:this.$t("Home"),to:this.routeTo(this.routes.home)},{text:this.$t(this.title),active:!0}]},headerClass:function(){return null},headerEffects:function(){return"waterfall"},headerImage:function(){return null},headerContentClass:function(){return null},headerCondenses:function(){return!1},headerContentComponent:function(){return null},headerContentComponentProps:function(){return null},guest:function(){return!1},subLayout:function(){return!1},subLayoutHasScrollingRegion:function(){return!0},subLayoutDrawer:function(){return!1},subLayoutDrawerId:function(){return"sub-layout-drawer"},subLayoutDrawerAlign:function(){return"end"}},created:function(){this.emitOptions()},methods:{emitOptions:function(){var t=this;["guest","subLayout","subLayoutHasScrollingRegion","subLayoutDrawerId","subLayoutDrawerAlign","subLayoutDrawer","headerClass","headerEffects","headerImage","headerContentClass","headerCondenses","headerContentComponent","headerContentComponentProps"].map((function(option){void 0!==t[option]&&t.$root.$emit("luma::".concat(option),t[option])}))}},head:function(){return{title:"".concat(this.$t(this.title)," - ").concat(this.$store.state.brand)}}},l=n(69),component=Object(l.a)(c,undefined,undefined,!1,null,null,null);e.a=component.exports},806:function(t,e,n){"use strict";n.r(e);var r=n(48),o=n.n(r),c=n(29),l=n.n(c),d=n(769),f={components:{LumaStudentMyCoursesPage:n(70).R},extends:d.a,data:function(){return{title:this.$t("My Courses")}},asyncData:function(t){return o()(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,e.abrupt("return",{title:n.i18n.t("My Courses")});case 2:case"end":return e.stop()}}),e)})))()}},h=n(69),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("luma-student-my-courses-page",{attrs:{title:t.title,breadcrumb:t.breadcrumb,"container-class":t.containerClass}})}),[],!1,null,null,null);e.default=component.exports}}]);