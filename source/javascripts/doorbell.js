// window.doorbellOptions = {
//   appKey: 'f0rsfH4ny8KpwT2h2Dq4upebSP4cjPa0yUhbRuObUwWnQULtH1CsSZeREpCmv47N'
// };
// (function(d, t) {
//   var g = d.createElement(t);g.id = 'doorbellScript';g.type = 'text/javascript';g.async = true;g.src = 'https://embed.doorbell.io/button/1652?t='+(new Date().getTime());(d.getElementsByTagName('head')[0]||d.getElementsByTagName('body')[0]).appendChild(g);
// }(document, 'script'));


window.intercomSettings = {
    app_id: 'sflt2hlu'
};
(function(){
  var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;
    var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){
      var s = d.createElement('script');s.type='text/javascript';s.async=true;s.src = 'https://widget.intercom.io/widget/sflt2hlu';
      var x = d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}
      if(w.attachEvent){w.attachEvent('onload',l);}
      else{w.addEventListener('load',l,false);}}})()
