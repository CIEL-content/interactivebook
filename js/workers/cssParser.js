var id,desktop,mobile,native,self=this;function parse(e){var r=self,t=(e=e||{},e.data),n=e.rootPath,i=e.cssOb;t=(t=(t=(t=(t=(t=r.applyRoot(n,t)).replace(/\/\*[\s\S]*?\*\//g,"")).replace(/<!--/g,"")).replace(/-->/g,"")).replace(/@charset.*?;/g,"")).replace(/@namespace.*?;/g,"");var a="spreadL";e.id&&(a=e.id);var l=(i.parentClass?i.parentClass:"#epubContainer.stylesEnabled")+" #"+a,s=cssToJson(t),o="";try{for(var p=0;p<s.length;p++){var c=g(s[p].keys);if(o+=c.joined,o+="{",s[p].children&&s[p].children.length)for(var h=0;h<s[p].children.length;h++){var d,f=g(s[p].children[h].keys);if(o+=f.joined,o+="{"+s[p].children[h].properties+"}",f.hasBody)(d=u(s[p].properties))&&(o+="#epubContainer{"+d+"}")}if(s[p].properties&&(o+=s[p].properties),o+="}",c.hasBody)(d=u(s[p].properties))&&(o+="#epubContainer{"+d+"}")}}catch(e){}function u(e){if(e){for(var r=e.split(";"),t="",n=0;n<r.length;n++)r[n]&&-1!=r[n].trim().indexOf("background")&&(t=r[n].trim().replace(/url\(.*?\)/g,"")+";");return t}}function g(e){for(var r={},t=0;t<e.length;t++)if(e[t]){var n=e[t].trim();0!=n.indexOf("body")?0!=n.indexOf("html")?0!=n.indexOf("@media")&&0!=n.indexOf("@")&&isNaN(n[0])&&"from"!=n&&"to"!=n&&(e[t]=l+" "+n):e[t]=n.replace("html",l):(e[t]=n.replace("body",l),0==e[t].indexOf("html")&&(e[t]=e[t].replace("html",l)),r.hasBody=!0)}return r.joined=e.join(","),r}t=minimizeData(t=o),self.postMessage({data:t,id:id})}function minimizeData(e){var r=e;return r=(r=(r=(r=(r=r.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"")).replace(/ {2,}/g," ")).replace(/ ([{:}]) /g,"$1")).replace(/([;,]) /g,"$1")).replace(/ !/g,"!")}function cssToJson(e){e=e.replace(/\r?\n|\r/g," ");var r,t=[],n="key",i=[0],a=t,l=[a];function s(e){return e=e||1,i[i.length-e]}for(var o=0;o<e.length;o++)r=r||{},"}"==e[o]?("properties"==n&&(r.properties=e.substring(s(),o).trim(),r.keys&&r.keys.length&&(r.keys[r.keys.length-1]=r.keys[r.keys.length-1].trim()),a.push(r)),"key"==n&&1<l.length&&(l.pop(),a=l[l.length-1]),r=null,n="key",i.push(o+1)):"{"==e[o]?("properties"==n&&(r.children||(r.children=[]),r.keys&&r.keys.length&&(r.keys[r.keys.length-1]=r.keys[r.keys.length-1].trim()),t.push(r),a=r.children,l.push(a),(r={keys:[]}).keys.push(e.substring(s(),o).trim())),i.push(o+1),n="properties"):"key"==n&&(r.keys||(r.keys=[""]),","==e[o]?r.keys.push(""):r.keys[r.keys.length-1]+=e[o]);return t}function applyRoot(a,e){return e.replace(/url\((.*?)\)/g,function(e,r){var t="";if(0==r.indexOf('"')?(r=r.substr(1,r.length-2),t='"'):0==r.indexOf("'")&&(r=r.substr(1,r.length-2),t="'"),-1!=r.indexOf("http://"))return e;if(-1!=r.indexOf("https://"))return e;if(0==r.indexOf("data:"))return e;if(0==r.indexOf("kotobee:"))return e;var n=1<r.split(" ").length,i=1<(r=ph.join(a,r)).split(" ").length;return!n&&i&&(t='"'),"url("+t+r+t+")"})}function cleanURL(e){if(native&&mobile)try{e=window.Ionic.WebView.convertFileSrc(e)}catch(e){}return e}function ionic_WebView_convertFileSrc(e){var r="kotobee://localhost";return e?0===e.indexOf("/")?r+"/_app_file_"+e:0===e.indexOf("file://")?r+e.replace("file://","/_app_file_"):0===e.indexOf("content://")?r+e.replace("content:/","/_app_content_"):e:e}function isAbsoluteURLPath(e){return 0==e.trim().indexOf("http://")||(0==e.trim().indexOf("https://")||(0==e.trim().indexOf("//")||(0==e.trim().indexOf("data:")||void 0)))}self.addEventListener("message",function(e){var r=e.data.func,t=e.data.params;id=e.data.id,desktop=e.data.desktop,native=e.data.native,mobile=e.data.mobile,self[r].apply(self,t)},!1);var ph={join:function(){for(var e=new Array,r=0;r<arguments.length;r++){var t=ph.normalizedArray(arguments[r]);r<arguments.length-1&&!isAbsoluteURLPath(t[t.length-1])&&0<=t[t.length-1].indexOf(".")&&t.splice(t.length-1,1),e=e.concat(t)}var n=ph.normalize(e.join("/"));return"/"==arguments[0].substr(0,1)&&(n=desktop?"file:////"+n:"/"+n),n},normalize:function(e){var r=ph.normalizedArray(e).join("/");return arguments.length&&"/"==e.substr(0,1)&&(r="file:///"+r),r},normalizedArray:function(e){for(var r=(e=e.replace(/\\/g,"/")).split("/"),t=r.length;t--;)r[t]?".."==r[t]&&0<t&&".."!=r[t-1]&&(r.splice(t,1),r.splice(t-1,1)):r.splice(t,1);return r[0].match(/http[s]?:$/g)&&(r[0]+="//"+r[1],r.splice(1,1)),r[0].match(/kotobee:$/g)&&(r[0]+="//"+r[1],r.splice(1,1)),"file:"==r[0]&&(r[0]+="///"+r[1],r.splice(1,1)),r}},log=console.log;