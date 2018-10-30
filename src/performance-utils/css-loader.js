function getLinks() {
    const cssLinks = []
    const linkElems = document.getElementsByTagName('link')
    for(var i=0;i<linkElems.length;i++) {
        const linkElem = linkElems[i]
        const rel = linkElem.getAttribute('rel')
        if(rel && rel == "stylesheet")  {
            cssLinks.push(linkElem)
        }
    }
    return cssLinks
}
export function loadCss(){
    const links = getLinks()
    for(var i=0;i<links.length;i++) {
        const link = links[i]
        const dataHref = link.getAttribute('data-href')
        link.href = dataHref
        link.media = 'all'
    }
}
