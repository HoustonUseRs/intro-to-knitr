function iframeLoaded(iframe) {
  iframe.height = "";
  iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
}

(function(window){

  document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
      initialize();
    }
  }

  function initialize(){
    setUpExternalLinks();
    setUpToc('.article-docs', 'ul.nav.nav-pills.nav-stacked');
  }

  function setUpToc(articleSelector, tocSelector){
    var tocLinkTemplate = (function(){
      var listItem = document.createElement('li');
      var link = document.createElement('a');
      listItem.appendChild(link);
      return listItem;
    }());

    var headings = document.querySelectorAll(articleSelector + ' h1');
    var tocHolder = document.querySelector('.active > ' + tocSelector);

    var toc = _.map(headings, function(heading){
      var linkInfo = makeHeadingNavigable(heading);
      var listItem = makeTocLink(linkInfo);
      tocHolder.appendChild(listItem);
    });

    function makeHeadingNavigable(heading){
      var aName = _.kebabCase(heading.innerText);
      heading.id = aName;

      return {name: aName, label: heading.innerText};
    }

    function makeTocLink(linkInfo){
      var base = tocLinkTemplate.cloneNode(true);

      base.childNodes[0].innerText = linkInfo.label;
      base.childNodes[0].href = '#' + linkInfo.name;
      base.addEventListener('click', setActiveItem);

      return base;
    }

    function setActiveItem(clickEvent){
      var currentActive = document.querySelector('.active > ' + tocSelector + ' li.active');
      if(currentActive){
        currentActive.classList.remove('active');        
      }
      this.classList.add('active');
    }

  }

  function setUpExternalLinks(){
    var links = document.querySelectorAll('a[href^="http"]');

    _.each(links, function(link){
      if(isLinkExternal(link.href)){
        openLinkInNewTab(link);
      }
    });

    function openLinkInNewTab(link){
      link.target = '_blank';
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
  }


}(window))