require.config({baseUrl:"js/scripts",paths:{"ui.route":"../lib/angular-ui-router.min",angular:"../lib/angular.min","angular-route":"../lib/angular-route.mim",angularAMD:"../lib/angularAMD",jquery:"../lib/jquery-3.1.1.min",ngload:"../lib/angular-plugins/ngload","ui-bootstrap":"../lib/ui-bootstrap-tpls-0.12.1.min",focusimg:"../lib/focusimg",goTop:"../lib/goTop",wow:"../lib/wow"},shim:{angularAMD:["angular"],"angular-route":["angular"],"ui.route":["angular"],"ui-bootstrap":["angular"],focusimg:{deps:["jquery"],exports:"focusimg"},goTop:{deps:["jquery"],exports:"goTop"},wow:{deps:["jquery"],exports:"wow"}},urlArgs:"v="+(new Date).getTime(),deps:["app"]}),define("main",function(){});