!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{a(r.next(e))}catch(e){i(e)}}function u(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,u)}a((r=r.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},o="movie",i="",c=function(e){return n(void 0,void 0,void 0,(function(){var t;return r(this,(function(n){switch(n.label){case 0:return t="",""===i?[3,3]:(t="http://www.omdbapi.com/?apikey=bad11b7b&s="+e+"&y="+i,[4,fetch(t)]);case 1:return[4,n.sent().json()];case 2:return[2,n.sent()];case 3:return t="http://www.omdbapi.com/?apikey=bad11b7b&s="+e,[4,fetch(t)];case 4:return[4,n.sent().json()];case 5:return[2,n.sent()]}}))}))},u=function(){c(o).then((function(e){var t=document.getElementById("search-header"),n=document.getElementById("movies"),r=document.getElementById("years");!function(e,t,n){t.innerHTML="",n.innerHTML="",e.innerHTML='Results for movies containing "'+o+'":'}(t,n,r),e.Search.forEach((function(e){!function(e,t){var n=document.createElement("li");"N/A"===e.Poster?n.innerHTML="<p>"+e.Title+" , "+e.Year+'</p><img src="../assets/popcorn.jpg" alt="">':n.innerHTML="<p>"+e.Title+" , "+e.Year+'</p><img src="'+e.Poster+'" alt="">',t.append(n)}(e,n),e.Year.length<5&&!document.getElementById(""+e.Year)&&function(e,t){var n=document.createElement("li");n.innerHTML='<button id="'+e.Year+'">'+e.Year+"</button>",t.append(n),$("#"+e.Year).click((function(){i=""+e.Year,c(o),u()}))}(e,r)}))}))};u();document.getElementById("search-button").addEventListener("click",(function(){var e=$("#movie").val().toString();o=e,console.log(o),u()})),$("#dropbtn").click((function(){$("#myDropdown").toggle()})),$("#favouritesbtn").click((function(){$("#favourites").toggle()}))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4udHMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJ0aXRsZSIsInllYXIiLCJnZXRNb3ZpZXMiLCJ1cmwiLCJmZXRjaCIsImpzb24iLCJ1cGRhdGVNb3ZpZXMiLCJ0aGVuIiwiZGF0YSIsImhlYWRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1bE1vdmllcyIsInVsWWVhcnMiLCJpbm5lckhUTUwiLCJyZXNldExpc3RzIiwiU2VhcmNoIiwiZm9yRWFjaCIsIm1vdmllIiwibGlUaXRsZSIsImNyZWF0ZUVsZW1lbnQiLCJQb3N0ZXIiLCJUaXRsZSIsIlllYXIiLCJhcHBlbmQiLCJidWlsZE1vdmllTGlzdCIsImxlbmd0aCIsImxpWWVhciIsIiQiLCJjbGljayIsImFkZFllYXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdmllU2VhcmNoIiwidmFsIiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxF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aUJMLEVBQU1HLE9BQU0sWUFFdEZULEVBQVNZLE9BQU9MLEdBaUNSTSxDQUFlUCxFQUFPTixHQUNsQk0sRUFBTUssS0FBS0csT0FBUyxJQUFNaEIsU0FBU0MsZUFBZSxHQUFHTyxFQUFNSyxPQTdCMUQsU0FBQ0wsRUFBT0wsR0FDckIsSUFBSWMsRUFBUWpCLFNBQVNVLGNBQWMsTUFDbkNPLEVBQU9iLFVBQVksZUFBZUksRUFBTUssS0FBSSxLQUFLTCxFQUFNSyxLQUFJLFlBQzNEVixFQUFRVyxPQUFPRyxHQUNmQyxFQUFFLElBQUlWLEVBQU1LLE1BQVFNLE9BQU8sV0FDdkI1QixFQUFPLEdBQUdpQixFQUFNSyxLQUNoQnJCLEVBQVVGLEdBQ1ZNLE9BdUJJd0IsQ0FBU1osRUFBT0wsVUFNNUJQLElBV3FCSSxTQUFTQyxlQUFlLGlCQUNoQ29CLGlCQUFpQixTQVJULFdBQ2pCLElBQU1DLEVBQXNCSixFQUFFLFVBQVVLLE1BQU1DLFdBQzlDbEMsRUFBUWdDLEVBQ1JHLFFBQVFDLElBQUlwQyxHQUNaTSxPQVFKc0IsRUFBRSxZQUFZQyxPQUFPLFdBQ2pCRCxFQUFFLGVBQWVTLFlBSXJCVCxFQUFFLGtCQUFrQkMsT0FBTyxXQUN2QkQsRUFBRSxlQUFlUyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgZ2V0IH0gZnJvbSBcImh0dHBcIjtcclxuLy8gaW1wb3J0IHsgIH0gZnJvbSAnLi9BUEkvYXBpJztcclxuXHJcbi8vaW5pdGlhbCBwYWdlIHNldHRpbmdzIGZvciB0aGUgbW92aWUgc2VhcmNoXHJcbmludGVyZmFjZSBJTW92aWUge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHllYXI6IHN0cmluZztcclxuICAgIHBvc3Rlcjogc3RyaW5nO1xyXG59XHJcblxyXG5sZXQgdGl0bGUgPSBcIm1vdmllXCI7XHJcbmxldCB5ZWFyID0gJyc7XHJcblxyXG4vL2dldCBkYXRhIGZyb20gdGhlIGFwaVxyXG5cclxuY29uc3QgZ2V0TW92aWVzID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgbGV0IHVybCA9ICcnO1xyXG4gICAgaWYgKHllYXIgIT09ICcnKSB7XHJcbiAgICAgICAgdXJsID0gYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1iYWQxMWI3YiZzPSR7dGl0bGV9Jnk9JHt5ZWFyfWA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgdXJsID0gYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1iYWQxMWI3YiZzPSR7dGl0bGV9YFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH1cclxufVxyXG5cclxuLy9idWlsZCBNb3ZpZSBsaXN0IGZ1bmN0aW9uXHJcbmNvbnN0IGJ1aWxkTW92aWVMaXN0ID0gKG1vdmllLCB1bE1vdmllcykgPT4ge1xyXG4gICAgbGV0IGxpVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgaWYgKG1vdmllLlBvc3RlciA9PT0gJ04vQScpIHtcclxuICAgICAgICBsaVRpdGxlLmlubmVySFRNTCA9IGA8cD4ke21vdmllLlRpdGxlfSAsICR7bW92aWUuWWVhcn08L3A+PGltZyBzcmM9XCIuLi9hc3NldHMvcG9wY29ybi5qcGdcIiBhbHQ9XCJcIj5gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsaVRpdGxlLmlubmVySFRNTCA9IGA8cD4ke21vdmllLlRpdGxlfSAsICR7bW92aWUuWWVhcn08L3A+PGltZyBzcmM9XCIke21vdmllLlBvc3Rlcn1cIiBhbHQ9XCJcIj5gO1xyXG4gICAgfVxyXG4gICAgdWxNb3ZpZXMuYXBwZW5kKGxpVGl0bGUpO1xyXG59XHJcblxyXG4vL2FkZCB5ZWFycyB0byB0aGUgZmlsdGVyIGRyb3Bkb3duXHJcblxyXG5jb25zdCBhZGRZZWFycyA9IChtb3ZpZSwgdWxZZWFycykgPT4ge1xyXG4gICAgbGV0IGxpWWVhcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpWWVhci5pbm5lckhUTUwgPSBgPGJ1dHRvbiBpZD1cIiR7bW92aWUuWWVhcn1cIj4ke21vdmllLlllYXJ9PC9idXR0b24+YDtcclxuICAgIHVsWWVhcnMuYXBwZW5kKGxpWWVhcik7XHJcbiAgICAkKGAjJHttb3ZpZS5ZZWFyfWApLmNsaWNrKCAoKSA9PiB7XHJcbiAgICAgICAgeWVhciA9IGAke21vdmllLlllYXJ9YDtcclxuICAgICAgICBnZXRNb3ZpZXModGl0bGUpO1xyXG4gICAgICAgIHVwZGF0ZU1vdmllcygpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vcmVzZXQgYWxsIGxpc3RzXHJcbmNvbnN0IHJlc2V0TGlzdHMgPSAoaGVhZGVyLCB1bE1vdmllcywgdWxZZWFycykgPT4ge1xyXG4gICAgdWxNb3ZpZXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHVsWWVhcnMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGhlYWRlci5pbm5lckhUTUwgPSBgUmVzdWx0cyBmb3IgbW92aWVzIGNvbnRhaW5pbmcgXCIke3RpdGxlfVwiOmA7XHJcbn1cclxuXHJcbi8vdXBkYXRlIG1vdmllcyBmdW5jdGlvblxyXG5cclxuY29uc3QgdXBkYXRlTW92aWVzID0gKCkgPT4ge1xyXG4gICAgZ2V0TW92aWVzKHRpdGxlKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgLy9tb3ZpZSByZXN1bHRzIG9uIHRoZSBwYWdlXHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtaGVhZGVyXCIpO1xyXG4gICAgICAgIGNvbnN0IHVsTW92aWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3ZpZXNcIik7XHJcbiAgICAgICAgY29uc3QgdWxZZWFycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieWVhcnNcIik7XHJcbiAgICAgICAgcmVzZXRMaXN0cyhoZWFkZXIsIHVsTW92aWVzLCB1bFllYXJzKTtcclxuICAgICAgICBkYXRhLlNlYXJjaC5mb3JFYWNoKChtb3ZpZSkgPT4ge1xyXG4gICAgICAgICAgICBidWlsZE1vdmllTGlzdChtb3ZpZSwgdWxNb3ZpZXMpO1xyXG4gICAgICAgICAgICBpZiAobW92aWUuWWVhci5sZW5ndGggPCA1ICYmICFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHttb3ZpZS5ZZWFyfWApKSB7XHJcbiAgICAgICAgICAgIGFkZFllYXJzKG1vdmllLCB1bFllYXJzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbnVwZGF0ZU1vdmllcygpO1xyXG5cclxuLy9sZXQgcGVyc29uIGNoYW5nZSB0aGUgdGl0bGUgdGhleSB3YW50IHVzaW5nIHRoZSBzZWFyY2ggYmFyXHJcblxyXG5jb25zdCBzZWFyY2hNb3ZpZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtb3ZpZVNlYXJjaDogc3RyaW5nID0gJChcIiNtb3ZpZVwiKS52YWwoKS50b1N0cmluZygpO1xyXG4gICAgdGl0bGUgPSBtb3ZpZVNlYXJjaDtcclxuICAgIGNvbnNvbGUubG9nKHRpdGxlKTtcclxuICAgIHVwZGF0ZU1vdmllcygpO1xyXG59XHJcblxyXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1idXR0b25cIik7XHJcbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlYXJjaE1vdmllcyk7XHJcblxyXG4vL2ZpbHRlciBmb3IgeWVhclxyXG4vL3RvZ2dsZSB0aGUgZGlzcGxheSBvZiB0aGUgZHJvcGRvd25cclxuJChcIiNkcm9wYnRuXCIpLmNsaWNrKCAoKSA9PiB7XHJcbiAgICAkKFwiI215RHJvcGRvd25cIikudG9nZ2xlKCk7XHJcbn0pO1xyXG5cclxuLy9idWlsZCBmYXZvdXJpdGVzIGxpc3RcclxuJChcIiNmYXZvdXJpdGVzYnRuXCIpLmNsaWNrKCAoKSA9PiB7XHJcbiAgICAkKFwiI2Zhdm91cml0ZXNcIikudG9nZ2xlKCk7XHJcbn0pO1xyXG5cclxuXHJcbi8vZGVmaW5lIG1vdmllIGludGVyZmFjZT9cclxuLy9tYWtlIGEgJ21ha2UgY2FyZCcgZnVuY3Rpb24/XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9