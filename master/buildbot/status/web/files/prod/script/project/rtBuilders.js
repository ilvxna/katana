define(["jquery","realtimePages","helpers","dataTables","mustache","libs/jquery.form","text!templates/builders.mustache","timeElements"],function(e,t,n,r,i,s,o,u){var a,f=undefined;return a={init:function(){f=a.dataTableInit(e(".builders-table"));var r=t.defaultRealtimeFunctions();r.builders=a.realtimeFunctionsProcessBuilders,t.initRealtime(r);var i=e(".dataTables_wrapper .top");window.location.search!=""&&n.codeBaseBranchOverview(i)},realtimeFunctionsProcessBuilders:function(e){u.clearTimeObjects(f),f.fnClearTable();try{f.fnAddData(e.builders),u.updateTimeObjects()}catch(t){}},dataTableInit:function(t){var s={};return s.aoColumns=[{mData:null},{mData:null},{mData:null},{mData:null},{mData:null,bSortable:!1}],s.aoColumnDefs=[{aTargets:[0],sClass:"txt-align-left",mRender:function(e,t,n){return i.render(o,{name:n.name,friendly_name:n.friendly_name,url:n.url})}},{aTargets:[1],sClass:"txt-align-left",mRender:function(e,t,n){var r=!1,s=n.currentBuilds!=""?!0:!1;return(n.pendingBuilds===undefined||n.pendingBuilds===0)&&(n.currentBuilds===undefined||n.currentBuilds===0)&&(r=!0),i.render(o,{showNoJobs:r,pendingBuilds:n.pendingBuilds,currentBuilds:n.currentBuilds,showRunningBuilds:s,builderName:n.name,builder_url:n.url})},fnCreatedCell:function(t,r,i){i.currentBuilds!=undefined&&n.delegateToProgressBar(e(t).find(".percent-outer-js"))}},{aTargets:[2],sClass:"txt-align-left last-build-js",mRender:function(e,t,n){return i.render(o,{showLatestBuild:!0,latestBuild:n.latestBuild})},fnCreatedCell:function(t,r,i){if(i.latestBuild!=undefined){u.addTimeAgoElem(e(t).find(".last-run"),i.latestBuild.times[1]);var s=n.getTime(i.latestBuild.times[0],i.latestBuild.times[1]).trim();e(t).find(".small-txt").html("("+s+")"),e(t).find(".hidden-date-js").html(i.latestBuild.times[1])}}},{aTargets:[3],mRender:function(e,t,n){return i.render(o,{showStatus:!0,latestBuild:n.latestBuild})},fnCreatedCell:function(t,n,r){var i=r.latestBuild===undefined?"":r.latestBuild;e(t).removeClass().addClass(i.results_text)}},{aTargets:[4],mRender:function(e,t,n){return i.render(o,{customBuild:!0,url:n.url,builderName:n.name})}}],r.initTable(t,s)}},a});