define(["jquery","screensize","helpers"],function(n,o){var i,e='<div id="bowlG"><div id="bowl_ringG"><div class="ball_holderG"><div class="ballG"></div></div></div></div>';return function(n){n.fn.dropdown=function(o){var i,e,t=n(this),d=n.extend({},n.fn.dropdown.defaults,o),r=!1;t.settings=d;var a={init:function(){a.setupClick()},setupClick:function(){t.click(function(){void 0===i?a.createHTML()&&(d.onCreate(t,i),a.showDropdown()):r||a.showDropdown()})},createHTML:function(){return void 0===i?(d.beforeCreate(t),i=n("<div/>").addClass("more-info-box").append("<span class='close-btn'></span>").append(d.title).hide(),d.url?(n.ajax(d.url).done(function(n){d.onResponse(t,i,n)||t.append(n),t.append(i),d.onCreate(t,i),a.showDropdown()}),!1):(t.append(i),i.append(n("<div/>").html(d.html)),!0)):!0},showDropdown:function(){d.beforeShow(t,i),n.isFunction(d.animate)&&d.animate()||!n.isFunction(d.animate)&&d.animate?i.slideDown(d.showAnimation,function(){a.initCloseButton(),d.onShow(t,i),r=!0}):(r=!0,i.show(),d.onShow(t,i),setTimeout(function(){a.initCloseButton()},50))},hideDropdown:function(){n.isFunction(d.animate)&&d.animate()||!n.isFunction(d.animate)&&d.animate?i.slideUp(d.hideAnimation,function(){i.hide(),r=!1,d.onHide(t,i)}):(r=!1,i.hide(),d.onHide(t,i)),void 0!==e&&(n(this).unbind(e),e=void 0)},initCloseButton:function(){void 0!==e&&(n(this).unbind(e),e=void 0),n(document).bind("click touchstart",function(o){(!i.is(o.target)&&0===i.has(o.target).length||i.find(".close-btn").is(o.target))&&(r&&a.hideDropdown(),n(this).unbind(o),e=o)})}};return t.showDropdown=function(){a.showDropdown()},t.hideDropdown=function(){a.hideDropdown()},t.options=function(o){d=n.extend({},n.fn.dropdown.defaults,d,o)},t.each(function(){a.init(),d.initalized=!0})},n.fn.dropdown.defaults={title:"<h3>Builders shortcut</h3>",html:void 0,url:void 0,animate:!0,showAnimation:"fast",hideAnimation:"fast",beforeCreate:function(){return void 0},onCreate:function(){return void 0},onResponse:function(){return!1},beforeShow:function(){return void 0},onShow:function(){return void 0},onHide:function(){return void 0}}}(jQuery),i={init:function(){var i,t;n("#projectDropdown").dropdown({url:"/projects",beforeCreate:function(){n("body").append(e).show()},onCreate:function(o){n("#bowlG").remove(),n(window).resize(function(){o.hideDropdown()})},onResponse:function(o,e,d){if(void 0===t||void 0===i){t=n(d).find(".tablesorter-js");var r=n(d).find(".scLink");i=n("<ul/>").addClass("submenu list-unstyled"),n(r).each(function(){var o=n(this).attr("data-sc");n(this).attr("href",o);var e=n("<li/>").append(n(this));i.append(e)}),n(t,i).find("a").each(function(){var o=n(this).attr("data-sc");n(this).attr("href",o)})}return!0},beforeShow:function(n,e){o.isMediumScreen()?e.append(t):n.append(i)},onShow:function(n,i){o.isMediumScreen()||i.hide()},onHide:function(n){n.find("ul").remove()},animate:function(){return o.isMediumScreen()}}),n(".smartphone-nav").click(function(){var o=n(".top-menu");o.is(":hidden")?o.addClass("show-topmenu"):o.removeClass("show-topmenu")}),n(window).resize(function(){n(".top-menu").removeClass("show-topmenu")})}}});
//# sourceMappingURL=project-drop-down.js.map