(()=>{var e={665:(e,t,a)=>{"use strict";a.d(t,{s:()=>i});var i=["Experienced in:","API management","Software testing","Cloud Computing","Data base Intergration","intergration Technics","server-side Scripting","API development-nodejs","State Management","Frontend Development","Bash Scripting","and many more..."]},547:(e,t,a)=>{"use strict";a(321);var i,n,s,r,o,c,l,d,v,u,p=document.querySelector(".copyrightYear"),m=(document.querySelector("#myBtn"),document.querySelector(".nav-logo"),document.getElementById("nav")),b=document.querySelector("#hireMe"),h=document.querySelector("#contact"),f=document.querySelector(".aboutMeBTN"),y=document.querySelector("#about"),g=document.querySelector("#mySkills"),_=document.querySelector("#skills"),w=document.querySelector("#inVideoBTN_Contact"),x=document.querySelector(".contact");function $(e,t){e&&t&&e.addEventListener("click",(function(){window.scroll({top:2500,left:0,behavior:"smooth"}),window.scrollBy({top:100,left:0,behavior:"smooth"}),t.scrollIntoView({behavior:"smooth"})}))}AOS.init(),i=p,n=(new Date).getFullYear(),i.textContent=n,r=document.documentElement,o=window,c=o.scrollY||r.scrollTop,l=0,d=0,v=m,u=function(e,t){2===e&&t>52?(v.style.cssText="top: -50%; transition: .5s;",d=e):1===e&&(v.style.cssText="top: 0%; transition: .5s;",d=e)},window.addEventListener("scroll",(function(){(s=o.scrollY||r.scrollTop)>c?l=2:s<c&&(l=1),l!==d&&u(l,s),c=s})),$(b,h),$(f,y),$(g,_),$(w,x)},6:(e,t,a)=>{"use strict";var i=a(665);document.addEventListener("DOMContentLoaded",(function(){var e;setTimeout((function(){return $("#myBtn").removeClass("hide")}),1e3),e=0,setInterval((function(){$(".skill-desc span").animate({width:"0%"}),e++,$(".skill-desc").fadeOut(300,(function(){$(this).text(i.s[e%i.s.length]).fadeIn(500)}))}),5e3),$(".skeleton-wrapper").addClass("hide").animate({opacity:0}),$("#nav").slideDown("1000",(function(){$(this).addClass("navbar-fixed").css({top:"0%"})})),$("#nav-btn").on("click",(function(){$("#sidebar").addClass("show-sidebar"),$(this).slideUp(),$("#close-btn").fadeIn(),$(".sidebar-links").animate({opacity:1}),$(".sidebar-links a").each((function(e,t){$(t).delay(30*e).animate({left:0})}))})),$("#close-btn").on("click",(function(){$("#sidebar").removeClass("show-sidebar"),$(".sidebar-links a").each((function(e,t){$(t).delay(30*e).animate({left:"-100%"})})),$("#nav-btn").slideDown().css({opacity:.5}),$(this).fadeOut()})),$(".hyperMeLink").on("click",(function(e){e.preventDefault(),$("#mySkills").addClass("flash-abtMe"),setTimeout((function(){$("#mySkills").removeClass("flash-abtMe")}),1e3)}));var t=function(){$(".sidebar-links a").each((function(){$(this).on("click",(function(){$("#nav-btn").slideDown(),$("#sidebar").removeClass("show-sidebar")}))}))};function a(e,t,a,i,n,s){null==t||null==a||null==i||null==n|null==s||$(window).on("scroll",(function(){var r=$(".skills").offset().top,o=$(".skills").offset().top+$(".skills").outerHeight(),c=$(window).scrollTop()+$(window).innerHeight(),l=$(window).scrollTop();if(c>r&&l<o){var d=$(i),v=s;$(".testimonial_individual_image").css({"animation-play-state":"running"}),$({percentage:0}).stop(!0).animate({percentage:v},{duration:2e3,easing:"easeOutExpo",step:function(){var e=Math.round(10*this.percentage)/10;d.text(e+"%").addClass("animate-percentage").css({color:"white",opacity:".5"})}}).promise().done((function(){d.text(Math.floor(v)+"%").css({"font-style":"italic"})})),$(i).css({left:n,opacity:"1",transition:"1s",color:"#FFFFFF"}),$(e).css({width:t,opacity:"1",transition:a})}else $(i).css({left:"1%",opacity:"0",transition:"1s",color:"red"}),$(e).css({width:"0",opacity:"0",transition:a})}))}function n(){var e=$(this).attr("href");return $("body, html").animate({scrollTop:$(e).offset().top},1900),!1}function s(){$(window).scrollTop()>400?$("#myBtn").css({right:"0%",transition:"1000ms"}):$("#myBtn").css({right:"-20%",transition:"1000ms"})}function r(){$(window).scrollTop()<=100?($("#down_arrow").removeClass("hide"),$("#down_arrow2").removeClass("hide")):($("#down_arrow").addClass("hide"),$("#down_arrow2").addClass("hide"))}a($(".value-70"),"70%","2.5s",$(".skill-text-50"),"50%",70),a($(".value-80"),"80%","3s",$(".skill-text-80"),"80%",80),a($(".value-85"),"85%","3.8s",$(".skill-text-85"),"85%",85),a($(".value-70"),"70%","2.5s",$(".skill-text-70"),"70%",70),a($(".value-75"),"75%","2.8s",$(".skill-text-75"),"75%",75),a($(".value-90"),"90%","4s",$(".skill-text-90"),"85%",90),$(".hero-box-animate").each((function(e,t){$(t).delay(30*e).css({"margin-right":"0rem"})})),$(".day").on("click",(function(){$(this).css({display:"none"}),$(".hero-social-icon .hero-box-animate").css({"box-shadow":"inset 0px 0px 10px 5px rgba(2, 86, 126, 0.5)"}),$(".inner-hero-name").css({color:"#5e5ef1"}),$(".achor-link").each((function(e,t){$(t).css({backgroundImage:"linear-gradient(to top, #5e5ef1 30%, #f7090980 100%)"})})),$(".nav-logo").css({filter:"grayscale(100%)"}),$(".effect_hero_box").css({"min-width":"100%",background:"#0d0b1f"}),$(".effect_hero_box").delay(500).animate({"min-width":"0%"}),$("#down_arrow, #down_arrow2").css({color:"#5e5ef1"}),$(".hero-image-catain").animate({width:"92%",height:"92%"}).css({background:"rgba(2, 4, 121, 0.3)"}),$(".night").css({display:"block"}),$("body").removeClass("classLighTheme"),$("body").addClass("classDarkTheme"),$(".navbar-fixed").addClass("classDarkTheme"),$(".navbar-fixed").removeClass("classLightTheme"),$(".hero-btn").removeClass("classDarkTheme"),$(".hero-btn").addClass("classLightTheme"),$(".card").each((function(e,t){$(t).css({background:"#0d0b1f"})})),$(".s_card").each((function(e,t){$(t).css({background:"#0d0b1f"})})),$(".full-card").css({background:"#243261"})})),$(".night").on("click",(function(){$(this).css({display:"none"}),$(".hero-social-icon .hero-box-animate").css({"box-shadow":"inset 0px 0px 10px 5px rgba(85, 1, 1, 0.5)"}),$(".inner-hero-name").css({color:"#f7090980"}),$("#down_arrow, #down_arrow2").css({color:"#ff0000"}),$(".effect_hero_box").css({"min-width":"100%",background:"#4b0202"}),$(".effect_hero_box").delay(500).animate({"min-width":"0%"}),$(".achor-link").each((function(e,t){$(t).css({backgroundImage:"linear-gradient(to top, #ff0000 30%, #f7090980 100%)"})})),$(".nav-logo ").css({filter:"grayscale(90%)"}),$(".hero-image-catain").animate({width:"92%",height:"92%"}).css({background:"rgba(121, 29, 29, 0.5)"}),$(".day").css({display:"none"}),$(".original").css({display:"block"}),$("body").addClass("classLighTheme"),$("body").removeClass("classDarkTheme"),$(".navbar-fixed").removeClass("classDarkTheme"),$(".navbar-fixed").addClass("classLightTheme"),$(".hero-btn").addClass("classDarkTheme"),$(".hero-btn").removeClass("classLightTheme"),$(".card").each((function(e,t){$(t).css({background:"#4b0202"})})),$(".s_card").each((function(e,t){$(t).css({background:"#4b0202"})})),$(".full-card").css({background:"#4b0202"})})),$(".original").on("click",(function(){$(this).css({display:"none"}),$(".hero-social-icon .hero-box-animate").css({"box-shadow":"inset 0px 0px 10px 5px rgba(83, 82, 82, 0.5)"}),$(".inner-hero-name").css({color:"#73dfdf"}),$(".achor-link").each((function(e,t){$(t).css({backgroundImage:"linear-gradient(to top, #73dfdf 30%, #f7090980 100%)"})})),$(".nav-logo ").css({filter:"grayscale(100%)"}),$("#down_arrow, #down_arrow2").css({color:"#73dfdf"}),$(".effect_hero_box").css({"min-width":"100%",background:"#110c0c"}),$(".effect_hero_box").delay(500).animate({"min-width":"0%"}),$(".hero-image-catain").animate({width:"90%",height:"90%"}).css({background:"rgba(121, 29, 29, 0.2)"}),$(".day").css({display:"block"}),$(".night").css({display:"none"}),$("body").removeClass("classLighTheme"),$("body").removeClass("classDarkTheme"),$(".navbar-fixed").removeClass("classDarkTheme"),$(".navbar-fixed").removeClass("classLightTheme"),$(".hero-btn").removeClass("classDarkTheme"),$(".hero-btn").removeClass("classLightTheme"),$(".card").each((function(e,t){$(t).css({background:"#110c0c"})})),$(".s_card").each((function(e,t){$(t).css({background:"#110c0c "})})),$(".full-card").css({backgroundColor:"rgba(19, 13, 13, 0.5)"})})),$(window).on("scroll",(function(){$(window).scrollTop()>=100?$("#nav").slideDown("1000",(function(){$(this).addClass("navbar-fixed")})):$("#nav").fadeIn("1000",(function(){$(this)}));var e=$(this).scrollTop();$(".achor-link").each((function(){$(this.hash).offset().top-70<=e&&($(this).parent().addClass("active"),$(this).parent().siblings().removeClass("active"))}))})),$(".nav-links a").on("click",n),$(".sidebar-links a").on("click",n),$("#myBtn").on("click",(function(){var e=$("body, html");$("body, html").animate({scrollTop:$(e).offset().top},1900)})),$("#hireMe").on("click",(function(){var e=$("#loginSection");$("body, html").animate({scrollTop:$(e).offset().top},1900)})),$(".nav-logo").on("click",(function(){var e=$("body, html");$("body, html").animate({scrollTop:$(e).offset().top},1900)})),$(".achi").css({all:"unset"}).on("click",(function(e){e.preventDefault(),$("#achieve").addClass("flash-abtMe"),setInterval((function(){return $("#achieve").removeClass("flash-abtMe")}),1e3)})),$("#achii").on("click",(function(){var e=$("#about");$("body, html").animate({scrollTop:$(e).offset().top},1900)})),$("#mee").on("click",(function(e){e.preventDefault();var t=$("#loginSection");$("body, html").animate({scrollTop:$(t).offset().top},1900)})),$(document).on("scroll",(function(){t(),s(),r(),$(window).scrollTop()>901?($("#nav_logo_img").css({opacity:"1",left:"0%"}),$(".nav-logo").css({opacity:"0",left:"-500%"})):($("#nav_logo_img").css({opacity:"0",left:"-500%"}),$(".nav-logo").css({opacity:"1",left:"0%"}))})),$(window).on("scroll",(function(){!function(e){if(e&&null!=e){var t=$(window).scrollTop();$(e).css({"background-position":"center ".concat(.07*t,"px")})}}($(".services_background"))})),$(window).on("orientationChange",(function(){t(),r()})),$(window).on("load",(function(){s()}))}))},407:(e,t,a)=>{},136:()=>{particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{hide_card:!1,background_color:"#b61924",background_image:"",background_position:"50% 50%",background_repeat:"no-repeat",background_size:"cover"}})},627:()=>{function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,a,i){return t+t+a+a+i+i}));var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function a(e,t){return t.indexOf(e)>-1}var i=function(i,n){var s=document.querySelector("#"+i+" > .particles-js-canvas-el");this.pJS={canvas:{el:s,w:s.offsetWidth,h:s.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var r=this.pJS;n&&Object.deepExtend(r,n),r.tmp.obj={size_value:r.particles.size.value,size_anim_speed:r.particles.size.anim.speed,move_speed:r.particles.move.speed,line_linked_distance:r.particles.line_linked.distance,line_linked_width:r.particles.line_linked.width,mode_grab_distance:r.interactivity.modes.grab.distance,mode_bubble_distance:r.interactivity.modes.bubble.distance,mode_bubble_size:r.interactivity.modes.bubble.size,mode_repulse_distance:r.interactivity.modes.repulse.distance},r.fn.retinaInit=function(){r.retina_detect&&window.devicePixelRatio>1?(r.canvas.pxratio=window.devicePixelRatio,r.tmp.retina=!0):(r.canvas.pxratio=1,r.tmp.retina=!1),r.canvas.w=r.canvas.el.offsetWidth*r.canvas.pxratio,r.canvas.h=r.canvas.el.offsetHeight*r.canvas.pxratio,r.particles.size.value=r.tmp.obj.size_value*r.canvas.pxratio,r.particles.size.anim.speed=r.tmp.obj.size_anim_speed*r.canvas.pxratio,r.particles.move.speed=r.tmp.obj.move_speed*r.canvas.pxratio,r.particles.line_linked.distance=r.tmp.obj.line_linked_distance*r.canvas.pxratio,r.interactivity.modes.grab.distance=r.tmp.obj.mode_grab_distance*r.canvas.pxratio,r.interactivity.modes.bubble.distance=r.tmp.obj.mode_bubble_distance*r.canvas.pxratio,r.particles.line_linked.width=r.tmp.obj.line_linked_width*r.canvas.pxratio,r.interactivity.modes.bubble.size=r.tmp.obj.mode_bubble_size*r.canvas.pxratio,r.interactivity.modes.repulse.distance=r.tmp.obj.mode_repulse_distance*r.canvas.pxratio},r.fn.canvasInit=function(){r.canvas.ctx=r.canvas.el.getContext("2d")},r.fn.canvasSize=function(){r.canvas.el.width=r.canvas.w,r.canvas.el.height=r.canvas.h,r&&r.interactivity.events.resize&&window.addEventListener("resize",(function(){r.canvas.w=r.canvas.el.offsetWidth,r.canvas.h=r.canvas.el.offsetHeight,r.tmp.retina&&(r.canvas.w*=r.canvas.pxratio,r.canvas.h*=r.canvas.pxratio),r.canvas.el.width=r.canvas.w,r.canvas.el.height=r.canvas.h,r.particles.move.enable||(r.fn.particlesEmpty(),r.fn.particlesCreate(),r.fn.particlesDraw(),r.fn.vendors.densityAutoParticles()),r.fn.vendors.densityAutoParticles()}))},r.fn.canvasPaint=function(){r.canvas.ctx.fillRect(0,0,r.canvas.w,r.canvas.h)},r.fn.canvasClear=function(){r.canvas.ctx.clearRect(0,0,r.canvas.w,r.canvas.h)},r.fn.particle=function(a,i,n){if(this.radius=(r.particles.size.random?Math.random():1)*r.particles.size.value,r.particles.size.anim.enable&&(this.size_status=!1,this.vs=r.particles.size.anim.speed/100,r.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=n?n.x:Math.random()*r.canvas.w,this.y=n?n.y:Math.random()*r.canvas.h,this.x>r.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>r.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),r.particles.move.bounce&&r.fn.vendors.checkOverlap(this,n),this.color={},"object"==e(a.value))if(a.value instanceof Array){var s=a.value[Math.floor(Math.random()*r.particles.color.value.length)];this.color.rgb=t(s)}else null!=a.value.r&&null!=a.value.g&&null!=a.value.b&&(this.color.rgb={r:a.value.r,g:a.value.g,b:a.value.b}),null!=a.value.h&&null!=a.value.s&&null!=a.value.l&&(this.color.hsl={h:a.value.h,s:a.value.s,l:a.value.l});else"random"==a.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof a.value&&(this.color=a,this.color.rgb=t(this.color.value));this.opacity=(r.particles.opacity.random?Math.random():1)*r.particles.opacity.value,r.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=r.particles.opacity.anim.speed/100,r.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var o={};switch(r.particles.move.direction){case"top":o={x:0,y:-1};break;case"top-right":o={x:.5,y:-.5};break;case"right":o={x:1,y:-0};break;case"bottom-right":o={x:.5,y:.5};break;case"bottom":o={x:0,y:1};break;case"bottom-left":o={x:-.5,y:1};break;case"left":o={x:-1,y:0};break;case"top-left":o={x:-.5,y:-.5};break;default:o={x:0,y:0}}r.particles.move.straight?(this.vx=o.x,this.vy=o.y,r.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=o.x+Math.random()-.5,this.vy=o.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var c=r.particles.shape.type;if("object"==e(c)){if(c instanceof Array){var l=c[Math.floor(Math.random()*c.length)];this.shape=l}}else this.shape=c;if("image"==this.shape){var d=r.particles.shape;this.img={src:d.image.src,ratio:d.image.width/d.image.height},this.img.ratio||(this.img.ratio=1),"svg"==r.tmp.img_type&&null!=r.tmp.source_svg&&(r.fn.vendors.createSvgImg(this),r.tmp.pushing&&(this.img.loaded=!1))}},r.fn.particle.prototype.draw=function(){var e=this;if(null!=e.radius_bubble)var t=e.radius_bubble;else t=e.radius;if(null!=e.opacity_bubble)var a=e.opacity_bubble;else a=e.opacity;if(e.color.rgb)var i="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+a+")";else i="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+a+")";switch(r.canvas.ctx.fillStyle=i,r.canvas.ctx.beginPath(),e.shape){case"circle":r.canvas.ctx.arc(e.x,e.y,t,0,2*Math.PI,!1);break;case"edge":r.canvas.ctx.rect(e.x-t,e.y-t,2*t,2*t);break;case"triangle":r.fn.vendors.drawShape(r.canvas.ctx,e.x-t,e.y+t/1.66,2*t,3,2);break;case"polygon":r.fn.vendors.drawShape(r.canvas.ctx,e.x-t/(r.particles.shape.polygon.nb_sides/3.5),e.y-t/.76,2.66*t/(r.particles.shape.polygon.nb_sides/3),r.particles.shape.polygon.nb_sides,1);break;case"star":r.fn.vendors.drawShape(r.canvas.ctx,e.x-2*t/(r.particles.shape.polygon.nb_sides/4),e.y-t/1.52,2*t*2.66/(r.particles.shape.polygon.nb_sides/3),r.particles.shape.polygon.nb_sides,2);break;case"image":if("svg"==r.tmp.img_type)var n=e.img.obj;else n=r.tmp.img_obj;n&&r.canvas.ctx.drawImage(n,e.x-t,e.y-t,2*t,2*t/e.img.ratio)}r.canvas.ctx.closePath(),r.particles.shape.stroke.width>0&&(r.canvas.ctx.strokeStyle=r.particles.shape.stroke.color,r.canvas.ctx.lineWidth=r.particles.shape.stroke.width,r.canvas.ctx.stroke()),r.canvas.ctx.fill()},r.fn.particlesCreate=function(){for(var e=0;e<r.particles.number.value;e++)r.particles.array.push(new r.fn.particle(r.particles.color,r.particles.opacity.value))},r.fn.particlesUpdate=function(){for(var e=0;e<r.particles.array.length;e++){var t=r.particles.array[e];if(r.particles.move.enable){var i=r.particles.move.speed/2;t.x+=t.vx*i,t.y+=t.vy*i}if(r.particles.opacity.anim.enable&&(1==t.opacity_status?(t.opacity>=r.particles.opacity.value&&(t.opacity_status=!1),t.opacity+=t.vo):(t.opacity<=r.particles.opacity.anim.opacity_min&&(t.opacity_status=!0),t.opacity-=t.vo),t.opacity<0&&(t.opacity=0)),r.particles.size.anim.enable&&(1==t.size_status?(t.radius>=r.particles.size.value&&(t.size_status=!1),t.radius+=t.vs):(t.radius<=r.particles.size.anim.size_min&&(t.size_status=!0),t.radius-=t.vs),t.radius<0&&(t.radius=0)),"bounce"==r.particles.move.out_mode)var n={x_left:t.radius,x_right:r.canvas.w,y_top:t.radius,y_bottom:r.canvas.h};else n={x_left:-t.radius,x_right:r.canvas.w+t.radius,y_top:-t.radius,y_bottom:r.canvas.h+t.radius};switch(t.x-t.radius>r.canvas.w?(t.x=n.x_left,t.y=Math.random()*r.canvas.h):t.x+t.radius<0&&(t.x=n.x_right,t.y=Math.random()*r.canvas.h),t.y-t.radius>r.canvas.h?(t.y=n.y_top,t.x=Math.random()*r.canvas.w):t.y+t.radius<0&&(t.y=n.y_bottom,t.x=Math.random()*r.canvas.w),r.particles.move.out_mode){case"bounce":(t.x+t.radius>r.canvas.w||t.x-t.radius<0)&&(t.vx=-t.vx),(t.y+t.radius>r.canvas.h||t.y-t.radius<0)&&(t.vy=-t.vy)}if(a("grab",r.interactivity.events.onhover.mode)&&r.fn.modes.grabParticle(t),(a("bubble",r.interactivity.events.onhover.mode)||a("bubble",r.interactivity.events.onclick.mode))&&r.fn.modes.bubbleParticle(t),(a("repulse",r.interactivity.events.onhover.mode)||a("repulse",r.interactivity.events.onclick.mode))&&r.fn.modes.repulseParticle(t),r.particles.line_linked.enable||r.particles.move.attract.enable)for(var s=e+1;s<r.particles.array.length;s++){var o=r.particles.array[s];r.particles.line_linked.enable&&r.fn.interact.linkParticles(t,o),r.particles.move.attract.enable&&r.fn.interact.attractParticles(t,o),r.particles.move.bounce&&r.fn.interact.bounceParticles(t,o)}}},r.fn.particlesDraw=function(){r.canvas.ctx.clearRect(0,0,r.canvas.w,r.canvas.h),r.fn.particlesUpdate();for(var e=0;e<r.particles.array.length;e++)r.particles.array[e].draw()},r.fn.particlesEmpty=function(){r.particles.array=[]},r.fn.particlesRefresh=function(){cancelRequestAnimFrame(r.fn.checkAnimFrame),cancelRequestAnimFrame(r.fn.drawAnimFrame),r.tmp.source_svg=void 0,r.tmp.img_obj=void 0,r.tmp.count_svg=0,r.fn.particlesEmpty(),r.fn.canvasClear(),r.fn.vendors.start()},r.fn.interact.linkParticles=function(e,t){var a=e.x-t.x,i=e.y-t.y,n=Math.sqrt(a*a+i*i);if(n<=r.particles.line_linked.distance){var s=r.particles.line_linked.opacity-n/(1/r.particles.line_linked.opacity)/r.particles.line_linked.distance;if(s>0){var o=r.particles.line_linked.color_rgb_line;r.canvas.ctx.strokeStyle="rgba("+o.r+","+o.g+","+o.b+","+s+")",r.canvas.ctx.lineWidth=r.particles.line_linked.width,r.canvas.ctx.beginPath(),r.canvas.ctx.moveTo(e.x,e.y),r.canvas.ctx.lineTo(t.x,t.y),r.canvas.ctx.stroke(),r.canvas.ctx.closePath()}}},r.fn.interact.attractParticles=function(e,t){var a=e.x-t.x,i=e.y-t.y;if(Math.sqrt(a*a+i*i)<=r.particles.line_linked.distance){var n=a/(1e3*r.particles.move.attract.rotateX),s=i/(1e3*r.particles.move.attract.rotateY);e.vx-=n,e.vy-=s,t.vx+=n,t.vy+=s}},r.fn.interact.bounceParticles=function(e,t){var a=e.x-t.x,i=e.y-t.y,n=Math.sqrt(a*a+i*i);e.radius+t.radius>=n&&(e.vx=-e.vx,e.vy=-e.vy,t.vx=-t.vx,t.vy=-t.vy)},r.fn.modes.pushParticles=function(e,t){r.tmp.pushing=!0;for(var a=0;e>a;a++)r.particles.array.push(new r.fn.particle(r.particles.color,r.particles.opacity.value,{x:t?t.pos_x:Math.random()*r.canvas.w,y:t?t.pos_y:Math.random()*r.canvas.h})),a==e-1&&(r.particles.move.enable||r.fn.particlesDraw(),r.tmp.pushing=!1)},r.fn.modes.removeParticles=function(e){r.particles.array.splice(0,e),r.particles.move.enable||r.fn.particlesDraw()},r.fn.modes.bubbleParticle=function(e){function t(){e.opacity_bubble=e.opacity,e.radius_bubble=e.radius}function i(t,a,i,n,s){if(t!=a)if(r.tmp.bubble_duration_end)null!=i&&(c=t+(t-(n-u*(n-t)/r.interactivity.modes.bubble.duration)),"size"==s&&(e.radius_bubble=c),"opacity"==s&&(e.opacity_bubble=c));else if(v<=r.interactivity.modes.bubble.distance){if(null!=i)var o=i;else o=n;if(o!=t){var c=n-u*(n-t)/r.interactivity.modes.bubble.duration;"size"==s&&(e.radius_bubble=c),"opacity"==s&&(e.opacity_bubble=c)}}else"size"==s&&(e.radius_bubble=void 0),"opacity"==s&&(e.opacity_bubble=void 0)}if(r.interactivity.events.onhover.enable&&a("bubble",r.interactivity.events.onhover.mode)){var n=e.x-r.interactivity.mouse.pos_x,s=e.y-r.interactivity.mouse.pos_y,o=1-(v=Math.sqrt(n*n+s*s))/r.interactivity.modes.bubble.distance;if(v<=r.interactivity.modes.bubble.distance){if(o>=0&&"mousemove"==r.interactivity.status){if(r.interactivity.modes.bubble.size!=r.particles.size.value)if(r.interactivity.modes.bubble.size>r.particles.size.value)(l=e.radius+r.interactivity.modes.bubble.size*o)>=0&&(e.radius_bubble=l);else{var c=e.radius-r.interactivity.modes.bubble.size,l=e.radius-c*o;e.radius_bubble=l>0?l:0}if(r.interactivity.modes.bubble.opacity!=r.particles.opacity.value)if(r.interactivity.modes.bubble.opacity>r.particles.opacity.value)(d=r.interactivity.modes.bubble.opacity*o)>e.opacity&&d<=r.interactivity.modes.bubble.opacity&&(e.opacity_bubble=d);else{var d;(d=e.opacity-(r.particles.opacity.value-r.interactivity.modes.bubble.opacity)*o)<e.opacity&&d>=r.interactivity.modes.bubble.opacity&&(e.opacity_bubble=d)}}}else t();"mouseleave"==r.interactivity.status&&t()}else if(r.interactivity.events.onclick.enable&&a("bubble",r.interactivity.events.onclick.mode)){if(r.tmp.bubble_clicking){n=e.x-r.interactivity.mouse.click_pos_x,s=e.y-r.interactivity.mouse.click_pos_y;var v=Math.sqrt(n*n+s*s),u=((new Date).getTime()-r.interactivity.mouse.click_time)/1e3;u>r.interactivity.modes.bubble.duration&&(r.tmp.bubble_duration_end=!0),u>2*r.interactivity.modes.bubble.duration&&(r.tmp.bubble_clicking=!1,r.tmp.bubble_duration_end=!1)}r.tmp.bubble_clicking&&(i(r.interactivity.modes.bubble.size,r.particles.size.value,e.radius_bubble,e.radius,"size"),i(r.interactivity.modes.bubble.opacity,r.particles.opacity.value,e.opacity_bubble,e.opacity,"opacity"))}},r.fn.modes.repulseParticle=function(e){if(r.interactivity.events.onhover.enable&&a("repulse",r.interactivity.events.onhover.mode)&&"mousemove"==r.interactivity.status){var t=e.x-r.interactivity.mouse.pos_x,i=e.y-r.interactivity.mouse.pos_y,n=Math.sqrt(t*t+i*i),s={x:t/n,y:i/n},o=function(e,t,a){return Math.min(Math.max(e,0),50)}(1/(l=r.interactivity.modes.repulse.distance)*(-1*Math.pow(n/l,2)+1)*l*100),c={x:e.x+s.x*o,y:e.y+s.y*o};"bounce"==r.particles.move.out_mode?(c.x-e.radius>0&&c.x+e.radius<r.canvas.w&&(e.x=c.x),c.y-e.radius>0&&c.y+e.radius<r.canvas.h&&(e.y=c.y)):(e.x=c.x,e.y=c.y)}else if(r.interactivity.events.onclick.enable&&a("repulse",r.interactivity.events.onclick.mode))if(r.tmp.repulse_finish||(r.tmp.repulse_count++,r.tmp.repulse_count==r.particles.array.length&&(r.tmp.repulse_finish=!0)),r.tmp.repulse_clicking){var l=Math.pow(r.interactivity.modes.repulse.distance/6,3),d=r.interactivity.mouse.click_pos_x-e.x,v=r.interactivity.mouse.click_pos_y-e.y,u=d*d+v*v,p=-l/u*1;l>=u&&function(){var t=Math.atan2(v,d);if(e.vx=p*Math.cos(t),e.vy=p*Math.sin(t),"bounce"==r.particles.move.out_mode){var a={x:e.x+e.vx,y:e.y+e.vy};(a.x+e.radius>r.canvas.w||a.x-e.radius<0)&&(e.vx=-e.vx),(a.y+e.radius>r.canvas.h||a.y-e.radius<0)&&(e.vy=-e.vy)}}()}else 0==r.tmp.repulse_clicking&&(e.vx=e.vx_i,e.vy=e.vy_i)},r.fn.modes.grabParticle=function(e){if(r.interactivity.events.onhover.enable&&"mousemove"==r.interactivity.status){var t=e.x-r.interactivity.mouse.pos_x,a=e.y-r.interactivity.mouse.pos_y,i=Math.sqrt(t*t+a*a);if(i<=r.interactivity.modes.grab.distance){var n=r.interactivity.modes.grab.line_linked.opacity-i/(1/r.interactivity.modes.grab.line_linked.opacity)/r.interactivity.modes.grab.distance;if(n>0){var s=r.particles.line_linked.color_rgb_line;r.canvas.ctx.strokeStyle="rgba("+s.r+","+s.g+","+s.b+","+n+")",r.canvas.ctx.lineWidth=r.particles.line_linked.width,r.canvas.ctx.beginPath(),r.canvas.ctx.moveTo(e.x,e.y),r.canvas.ctx.lineTo(r.interactivity.mouse.pos_x,r.interactivity.mouse.pos_y),r.canvas.ctx.stroke(),r.canvas.ctx.closePath()}}}},r.fn.vendors.eventsListeners=function(){"window"==r.interactivity.detect_on?r.interactivity.el=window:r.interactivity.el=r.canvas.el,(r.interactivity.events.onhover.enable||r.interactivity.events.onclick.enable)&&(r.interactivity.el.addEventListener("mousemove",(function(e){if(r.interactivity.el==window)var t=e.clientX,a=e.clientY;else t=e.offsetX||e.clientX,a=e.offsetY||e.clientY;r.interactivity.mouse.pos_x=t,r.interactivity.mouse.pos_y=a,r.tmp.retina&&(r.interactivity.mouse.pos_x*=r.canvas.pxratio,r.interactivity.mouse.pos_y*=r.canvas.pxratio),r.interactivity.status="mousemove"})),r.interactivity.el.addEventListener("mouseleave",(function(e){r.interactivity.mouse.pos_x=null,r.interactivity.mouse.pos_y=null,r.interactivity.status="mouseleave"}))),r.interactivity.events.onclick.enable&&r.interactivity.el.addEventListener("click",(function(){if(r.interactivity.mouse.click_pos_x=r.interactivity.mouse.pos_x,r.interactivity.mouse.click_pos_y=r.interactivity.mouse.pos_y,r.interactivity.mouse.click_time=(new Date).getTime(),r.interactivity.events.onclick.enable)switch(r.interactivity.events.onclick.mode){case"push":r.particles.move.enable||1==r.interactivity.modes.push.particles_nb?r.fn.modes.pushParticles(r.interactivity.modes.push.particles_nb,r.interactivity.mouse):r.interactivity.modes.push.particles_nb>1&&r.fn.modes.pushParticles(r.interactivity.modes.push.particles_nb);break;case"remove":r.fn.modes.removeParticles(r.interactivity.modes.remove.particles_nb);break;case"bubble":r.tmp.bubble_clicking=!0;break;case"repulse":r.tmp.repulse_clicking=!0,r.tmp.repulse_count=0,r.tmp.repulse_finish=!1,setTimeout((function(){r.tmp.repulse_clicking=!1}),1e3*r.interactivity.modes.repulse.duration)}}))},r.fn.vendors.densityAutoParticles=function(){if(r.particles.number.density.enable){var e=r.canvas.el.width*r.canvas.el.height/1e3;r.tmp.retina&&(e/=2*r.canvas.pxratio);var t=e*r.particles.number.value/r.particles.number.density.value_area,a=r.particles.array.length-t;0>a?r.fn.modes.pushParticles(Math.abs(a)):r.fn.modes.removeParticles(a)}},r.fn.vendors.checkOverlap=function(e,t){for(var a=0;a<r.particles.array.length;a++){var i=r.particles.array[a],n=e.x-i.x,s=e.y-i.y;Math.sqrt(n*n+s*s)<=e.radius+i.radius&&(e.x=t?t.x:Math.random()*r.canvas.w,e.y=t?t.y:Math.random()*r.canvas.h,r.fn.vendors.checkOverlap(e))}},r.fn.vendors.createSvgImg=function(e){var t=r.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi,(function(t,a,i,n){if(e.color.rgb)var s="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+e.opacity+")";else s="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+e.opacity+")";return s})),a=new Blob([t],{type:"image/svg+xml;charset=utf-8"}),i=window.URL||window.webkitURL||window,n=i.createObjectURL(a),s=new Image;s.addEventListener("load",(function(){e.img.obj=s,e.img.loaded=!0,i.revokeObjectURL(n),r.tmp.count_svg++})),s.src=n},r.fn.vendors.destroypJS=function(){cancelAnimationFrame(r.fn.drawAnimFrame),s.remove(),pJSDom=null},r.fn.vendors.drawShape=function(e,t,a,i,n,s){var r=n*s,o=n/s,c=180*(o-2)/o,l=Math.PI-Math.PI*c/180;e.save(),e.beginPath(),e.translate(t,a),e.moveTo(0,0);for(var d=0;r>d;d++)e.lineTo(i,0),e.translate(i,0),e.rotate(l);e.fill(),e.restore()},r.fn.vendors.exportImg=function(){window.open(r.canvas.el.toDataURL("image/png"),"_blank")},r.fn.vendors.loadImg=function(e){if(r.tmp.img_error=void 0,""!=r.particles.shape.image.src)if("svg"==e){var t=new XMLHttpRequest;t.open("GET",r.particles.shape.image.src),t.onreadystatechange=function(e){4==t.readyState&&(200==t.status?(r.tmp.source_svg=e.currentTarget.response,r.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),r.tmp.img_error=!0))},t.send()}else{var a=new Image;a.addEventListener("load",(function(){r.tmp.img_obj=a,r.fn.vendors.checkBeforeDraw()})),a.src=r.particles.shape.image.src}else console.log("Error pJS - No image.src"),r.tmp.img_error=!0},r.fn.vendors.draw=function(){"image"==r.particles.shape.type?"svg"==r.tmp.img_type?r.tmp.count_svg>=r.particles.number.value?(r.fn.particlesDraw(),r.particles.move.enable?r.fn.drawAnimFrame=requestAnimFrame(r.fn.vendors.draw):cancelRequestAnimFrame(r.fn.drawAnimFrame)):r.tmp.img_error||(r.fn.drawAnimFrame=requestAnimFrame(r.fn.vendors.draw)):null!=r.tmp.img_obj?(r.fn.particlesDraw(),r.particles.move.enable?r.fn.drawAnimFrame=requestAnimFrame(r.fn.vendors.draw):cancelRequestAnimFrame(r.fn.drawAnimFrame)):r.tmp.img_error||(r.fn.drawAnimFrame=requestAnimFrame(r.fn.vendors.draw)):(r.fn.particlesDraw(),r.particles.move.enable?r.fn.drawAnimFrame=requestAnimFrame(r.fn.vendors.draw):cancelRequestAnimFrame(r.fn.drawAnimFrame))},r.fn.vendors.checkBeforeDraw=function(){"image"==r.particles.shape.type?"svg"==r.tmp.img_type&&null==r.tmp.source_svg?r.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(r.tmp.checkAnimFrame),r.tmp.img_error||(r.fn.vendors.init(),r.fn.vendors.draw())):(r.fn.vendors.init(),r.fn.vendors.draw())},r.fn.vendors.init=function(){r.fn.retinaInit(),r.fn.canvasInit(),r.fn.canvasSize(),r.fn.canvasPaint(),r.fn.particlesCreate(),r.fn.vendors.densityAutoParticles(),r.particles.line_linked.color_rgb_line=t(r.particles.line_linked.color)},r.fn.vendors.start=function(){a("image",r.particles.shape.type)?(r.tmp.img_type=r.particles.shape.image.src.substr(r.particles.shape.image.src.length-3),r.fn.vendors.loadImg(r.tmp.img_type)):r.fn.vendors.checkBeforeDraw()},r.fn.vendors.eventsListeners(),r.fn.vendors.start()};Object.deepExtend=function(e,t){for(var a in t)t[a]&&t[a].constructor&&t[a].constructor===Object?(e[a]=e[a]||{},arguments.callee(e[a],t[a])):e[a]=t[a];return e},window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},window.cancelRequestAnimFrame=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout,window.pJSDom=[],window.particlesJS=function(e,t){"string"!=typeof e&&(t=e,e="particles-js"),e||(e="particles-js");var a=document.getElementById(e),n="particles-js-canvas-el",s=a.getElementsByClassName(n);if(s.length)for(;s.length>0;)a.removeChild(s[0]);var r=document.createElement("canvas");r.className=n,r.style.width="100%",r.style.height="100%",null!=document.getElementById(e).appendChild(r)&&pJSDom.push(new i(e,t))},window.particlesJS.load=function(e,t,a){var i=new XMLHttpRequest;i.open("GET",t),i.onreadystatechange=function(t){if(4==i.readyState)if(200==i.status){var n=JSON.parse(t.currentTarget.response);window.particlesJS(e,n),a&&a()}else console.log("Error pJS - XMLHttpRequest status: "+i.status),console.log("Error pJS - File config not found")},i.send()}},321:(e,t,a)=>{"use strict";a.r(t)}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,a),s.exports}a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a(547),a(6),a(407),a(665),a(627),a(136)})();