(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{769:function(t,e,n){"use strict";n(35),n(34);var o=n(127),r=n(70),l={mixins:[o.a,r.Kb],layout:function(t){var e=t.store,n=t.route;return n.params.layout?n.params.layout:e.getters.settings.layout.layout},data:function(){return{title:null}},computed:{breadcrumb:function(){return[{text:this.$t("Home"),to:this.routeTo(this.routes.home)},{text:this.$t(this.title),active:!0}]},headerClass:function(){return null},headerEffects:function(){return"waterfall"},headerImage:function(){return null},headerContentClass:function(){return null},headerCondenses:function(){return!1},headerContentComponent:function(){return null},headerContentComponentProps:function(){return null},guest:function(){return!1},subLayout:function(){return!1},subLayoutHasScrollingRegion:function(){return!0},subLayoutDrawer:function(){return!1},subLayoutDrawerId:function(){return"sub-layout-drawer"},subLayoutDrawerAlign:function(){return"end"}},created:function(){this.emitOptions()},methods:{emitOptions:function(){var t=this;["guest","subLayout","subLayoutHasScrollingRegion","subLayoutDrawerId","subLayoutDrawerAlign","subLayoutDrawer","headerClass","headerEffects","headerImage","headerContentClass","headerCondenses","headerContentComponent","headerContentComponentProps"].map((function(option){void 0!==t[option]&&t.$root.$emit("luma::".concat(option),t[option])}))}},head:function(){return{title:"".concat(this.$t(this.title)," - ").concat(this.$store.state.brand)}}},c=n(69),component=Object(c.a)(l,undefined,undefined,!1,null,null,null);e.a=component.exports},770:function(t,e,n){"use strict";n.r(e);var o=n(48),r=n.n(o),l=n(29),c=n.n(l),h=n(769),d=n(70),f={components:{LumaHomePage:d.A},extends:h.a,data:function(){return{title:this.$t("Home")}},computed:{blogPosts1:function(){return[{image:"sketch",category:"Sketch",title:"Merge Duplicates Inconsistent Symbols",author_avatar:"/images/256_luke-porter-261779-unsplash.jpg",to:this.routes.blogPost},{image:"invision",category:"inVision",title:"Design Systems Essentials",author_avatar:"/images/256_michael-dam-258165-unsplash.jpg",to:this.routes.blogPost},{image:"photoshop",category:"Photoshop",title:"Semantic Logo Design",author_avatar:"/images/256_rsz_1andy-lee-642320-unsplash.jpg",to:this.routes.blogPost}]},blogPosts2:function(){return[{avatar:"/images/paths/invision_200x168.png",title:"Design Systems Essentials",views:35,tag:"inVision",date:"11 Nov, 2018 07:46 AM",avatarGroup:!0,avatarCount:3,avatars:["/images/256_rsz_1andy-lee-642320-unsplash.jpg","/images/256_michael-dam-258165-unsplash.jpg","/images/256_luke-porter-261779-unsplash.jpg"],to:this.routes.blogPost}]},guest:function(){return!0},localPageHeader:function(){return"fixed"!==this.$root.layoutName},headerClass:function(){if("fixed"===this.$root.layoutName)return"mdk-header--bg-dark bg-dark mb-0"},headerEffects:function(){if("fixed"===this.$root.layoutName)return"parallax-background waterfall"},headerImage:function(){if("fixed"===this.$root.layoutName)return"/images/photodune-4161018-group-of-students-m.jpg"},headerContentClass:function(){if("fixed"===this.$root.layoutName)return"justify-content-center"},headerCondenses:function(){return"fixed"===this.$root.layoutName},headerContentComponent:function(){return d.g}},asyncData:function(t){return r()(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,e.abrupt("return",{title:n.i18n.t("Home")});case 2:case"end":return e.stop()}}),e)})))()}},m=n(69),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("luma-home-page",{attrs:{title:t.title,"container-class":t.containerClass,"local-page-header":t.localPageHeader,"header-image":t.headerImage,"blog-posts1":t.blogPosts1,"blog-posts2":t.blogPosts2}})}),[],!1,null,null,null);e.default=component.exports}}]);