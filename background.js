(function(){

  // var actualCode = '(' + function () {
  //   var _log = console.log;
  //   var style = 'color:transparent;text-shadow:0 0 2px rgba(0,0,0,.5);';
  //   //var style = "-webkit-animation: hide 1s ease 0s 1 normal forwards; animation: hide 1s ease 0s 1 normal forwards;";
  //   console.log = function() {
  //     _log.call(console, '%c' + [].slice.call(arguments).join(' '), style);
  //   };
  // } + ')();';
  // // var animation = "@-webkit-keyframes hide { 100% { opacity: 0; } }";

  // // var style = document.createElement('style');
  // // style.textContent = animation;
  // // (document.head||document.documentElement).appendChild(style);

  // var script = document.createElement('script');
  var body = document.getElementsByTagName('body')[0];
  var shadow = '0 0 1px rgba(0, 0, 0, 0.7)';
  body.style.webkitTextShadow = shadow;
  body.style.mozTextShadow = shadow;
  body.style.textShadow = shadow;
  body.style.setProperty("color", "transparent", "important");

  // script.textContent = actualCode;
  // (document.head||document.documentElement).appendChild(script);
  // script.parentNode.removeChild(script);

}());
