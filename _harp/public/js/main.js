(function(window){

  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      initialize();
    }
  }

  function initialize(){
    setUpExternalLinks();
  }


  function setUpExternalLinks(){
    var links = document.querySelectorAll('a[href^="http"]');

    Array.prototype.forEach.call(links, function(link){
      if(isLinkExternal(link.href)){
        link.target = '_blank';
      }
    });
  }

  function isLinkExternal(url){
    var domainRe = /https?:\/\/((?:[\w\d\-]+\.)+[\w\d\-]{2,})/i;

    function domain(url) {
      var domainSplit = domainRe.exec(url);
      if(domainSplit){
        domainSplit = domainSplit[1];
      }
      return domainSplit;
    }
    return domain(location.href) !== domain(url);
  }

}(window))