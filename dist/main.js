!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},o="movie",i="",a=function(e){return n(void 0,void 0,void 0,(function(){var t;return r(this,(function(n){switch(n.label){case 0:return t="",""===i?[3,3]:(t="http://www.omdbapi.com/?apikey=bad11b7b&s="+e+"&y="+i,[4,fetch(t)]);case 1:return[4,n.sent().json()];case 2:return[2,n.sent()];case 3:return t="http://www.omdbapi.com/?apikey=bad11b7b&s="+e,[4,fetch(t)];case 4:return[4,n.sent().json()];case 5:return[2,n.sent()]}}))}))},c=function(){a(o).then((function(e){document.getElementById("search-header").innerHTML='Results for movies containing "'+o+'":';var t=document.getElementById("movies");t.innerHTML="";var n=document.getElementById("years");n.innerHTML="",e.Search.forEach((function(e){!function(e,t){var n=document.createElement("li");"N/A"===e.Poster?n.innerHTML="<p>"+e.Title+" , "+e.Year+'</p><img src="../assets/popcorn.jpg" alt="">':n.innerHTML="<p>"+e.Title+" , "+e.Year+'</p><img src="'+e.Poster+'" alt="">',t.append(n)}(e,t),e.Year.length<5&&function(e,t){var n=document.createElement("li");document.getElementById(""+e.Year)||(n.innerHTML='<button id="'+e.Year+'">'+e.Year+"</button>",t.append(n),$("#"+e.Year).click((function(){i=""+e.Year,a(o),c()})))}(e,n)}))}))};c();document.getElementById("search-button").addEventListener("click",(function(){var e=$("#movie").val().toString();o=e,console.log(o),c()})),$("#dropbtn").click((function(){$("#myDropdown").toggle()}))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4udHMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJ0aXRsZSIsInllYXIiLCJnZXRNb3ZpZXMiLCJ1cmwiLCJmZXRjaCIsImpzb24iLCJ1cGRhdGVNb3ZpZXMiLCJ0aGVuIiwiZGF0YSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJ1bE1vdmllcyIsInVsWWVhcnMiLCJTZWFyY2giLCJmb3JFYWNoIiwibW92aWUiLCJsaVRpdGxlIiwiY3JlYXRlRWxlbWVudCIsIlBvc3RlciIsIlRpdGxlIiwiWWVhciIsImFwcGVuZCIsImJ1aWxkTW92aWVMaXN0IiwibGVuZ3RoIiwibGlZZWFyIiwiJCIsImNsaWNrIiwiYWRkWWVhcnMiLCJhZGRFdmVudExpc3RlbmVyIiwibW92aWVTZWFyY2giLCJ2YWwiLCJ0b1N0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0YsRUFBaUJFLEdBQVVDLFFBR25DLElBQUlDLEVBQVNKLEVBQWlCRSxHQUFZLENBQ3pD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MUJuQixTQUFDUixFQUFPSCxHQUNyQixJQUFJWSxFQUFRaEIsU0FBU1MsY0FBYyxNQUM5QlQsU0FBU0MsZUFBZSxHQUFHTSxFQUFNSyxRQUNsQ0ksRUFBT2QsVUFBWSxlQUFlSyxFQUFNSyxLQUFJLEtBQUtMLEVBQU1LLEtBQUksWUFDM0RSLEVBQVFTLE9BQU9HLEdBQ2ZDLEVBQUUsSUFBSVYsRUFBTUssTUFBUU0sT0FBTyxXQUN2QjFCLEVBQU8sR0FBR2UsRUFBTUssS0FDaEJuQixFQUFVRixHQUNWTSxRQW1CQXNCLENBQVNaLEVBQU9ILFVBTTVCUCxJQVdxQkcsU0FBU0MsZUFBZSxpQkFDaENtQixpQkFBaUIsU0FSVCxXQUNqQixJQUFNQyxFQUFzQkosRUFBRSxVQUFVSyxNQUFNQyxXQUM5Q2hDLEVBQVE4QixFQUNSRyxRQUFRQyxJQUFJbEMsR0FDWk0sT0FRSm9CLEVBQUUsWUFBWUMsT0FBTyxXQUNqQkQsRUFBRSxlQUFlUyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgZ2V0IH0gZnJvbSBcImh0dHBcIjtcclxuLy8gaW1wb3J0IHsgIH0gZnJvbSAnLi9BUEkvYXBpJztcclxuXHJcbi8vaW5pdGlhbCBwYWdlIHNldHRpbmdzIGZvciB0aGUgbW92aWUgc2VhcmNoXHJcbmludGVyZmFjZSBJTW92aWUge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHllYXI6IHN0cmluZztcclxuICAgIHBvc3Rlcjogc3RyaW5nO1xyXG59XHJcblxyXG5sZXQgdGl0bGUgPSBcIm1vdmllXCI7XHJcbmxldCB5ZWFyID0gJyc7XHJcblxyXG4vL2dldCBkYXRhIGZyb20gdGhlIGFwaVxyXG5cclxuY29uc3QgZ2V0TW92aWVzID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgbGV0IHVybCA9ICcnO1xyXG4gICAgaWYgKHllYXIgIT09ICcnKSB7XHJcbiAgICAgICAgdXJsID0gYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1iYWQxMWI3YiZzPSR7dGl0bGV9Jnk9JHt5ZWFyfWA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgdXJsID0gYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1iYWQxMWI3YiZzPSR7dGl0bGV9YFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH1cclxufVxyXG5cclxuLy9kZWZpbmUgbW92aWUgaW50ZXJmYWNlP1xyXG4vL21ha2UgYSAnbWFrZSBjYXJkJyBmdW5jdGlvbj9cclxuXHJcbi8vYnVpbGQgTW92aWUgbGlzdCBmdW5jdGlvblxyXG5jb25zdCBidWlsZE1vdmllTGlzdCA9IChtb3ZpZSwgdWxNb3ZpZXMpID0+IHtcclxuICAgIGxldCBsaVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGlmIChtb3ZpZS5Qb3N0ZXIgPT09ICdOL0EnKSB7XHJcbiAgICAgICAgbGlUaXRsZS5pbm5lckhUTUwgPSBgPHA+JHttb3ZpZS5UaXRsZX0gLCAke21vdmllLlllYXJ9PC9wPjxpbWcgc3JjPVwiLi4vYXNzZXRzL3BvcGNvcm4uanBnXCIgYWx0PVwiXCI+YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlUaXRsZS5pbm5lckhUTUwgPSBgPHA+JHttb3ZpZS5UaXRsZX0gLCAke21vdmllLlllYXJ9PC9wPjxpbWcgc3JjPVwiJHttb3ZpZS5Qb3N0ZXJ9XCIgYWx0PVwiXCI+YDtcclxuICAgIH1cclxuICAgIHVsTW92aWVzLmFwcGVuZChsaVRpdGxlKTtcclxufVxyXG5cclxuLy9hZGQgeWVhcnMgdG8gdGhlIGZpbHRlciBkcm9wZG93blxyXG5cclxuY29uc3QgYWRkWWVhcnMgPSAobW92aWUsIHVsWWVhcnMpID0+IHtcclxuICAgIGxldCBsaVllYXI9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke21vdmllLlllYXJ9YCkpIHtcclxuICAgICAgICBsaVllYXIuaW5uZXJIVE1MID0gYDxidXR0b24gaWQ9XCIke21vdmllLlllYXJ9XCI+JHttb3ZpZS5ZZWFyfTwvYnV0dG9uPmA7XHJcbiAgICAgICAgdWxZZWFycy5hcHBlbmQobGlZZWFyKTtcclxuICAgICAgICAkKGAjJHttb3ZpZS5ZZWFyfWApLmNsaWNrKCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHllYXIgPSBgJHttb3ZpZS5ZZWFyfWA7XHJcbiAgICAgICAgICAgIGdldE1vdmllcyh0aXRsZSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZU1vdmllcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL3VwZGF0ZSBtb3ZpZXMgZnVuY3Rpb25cclxuXHJcbmNvbnN0IHVwZGF0ZU1vdmllcyA9ICgpID0+IHtcclxuICAgIGdldE1vdmllcyh0aXRsZSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIC8vbW92aWUgcmVzdWx0cyBvbiB0aGUgcGFnZVxyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWhlYWRlclwiKTtcclxuICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID0gYFJlc3VsdHMgZm9yIG1vdmllcyBjb250YWluaW5nIFwiJHt0aXRsZX1cIjpgO1xyXG4gICAgICAgIGNvbnN0IHVsTW92aWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb3ZpZXNcIik7XHJcbiAgICAgICAgdWxNb3ZpZXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBjb25zdCB1bFllYXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZWFyc1wiKTtcclxuICAgICAgICB1bFllYXJzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgZGF0YS5TZWFyY2guZm9yRWFjaCgobW92aWUpID0+IHtcclxuICAgICAgICAgICAgYnVpbGRNb3ZpZUxpc3QobW92aWUsIHVsTW92aWVzKTtcclxuICAgICAgICAgICAgaWYgKG1vdmllLlllYXIubGVuZ3RoIDwgNSkge1xyXG4gICAgICAgICAgICBhZGRZZWFycyhtb3ZpZSwgdWxZZWFycyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG51cGRhdGVNb3ZpZXMoKTtcclxuXHJcbi8vbGV0IHBlcnNvbiBjaGFuZ2UgdGhlIHRpdGxlIHRoZXkgd2FudCB1c2luZyB0aGUgc2VhcmNoIGJhclxyXG5cclxuY29uc3Qgc2VhcmNoTW92aWVzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbW92aWVTZWFyY2g6IHN0cmluZyA9ICQoXCIjbW92aWVcIikudmFsKCkudG9TdHJpbmcoKTtcclxuICAgIHRpdGxlID0gbW92aWVTZWFyY2g7XHJcbiAgICBjb25zb2xlLmxvZyh0aXRsZSk7XHJcbiAgICB1cGRhdGVNb3ZpZXMoKTtcclxufVxyXG5cclxuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYnV0dG9uXCIpO1xyXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWFyY2hNb3ZpZXMpO1xyXG5cclxuLy9maWx0ZXIgZm9yIHllYXJcclxuLy90b2dnbGUgdGhlIGRpc3BsYXkgb2YgdGhlIGRyb3Bkb3duXHJcbiQoXCIjZHJvcGJ0blwiKS5jbGljayggKCkgPT4ge1xyXG4gICAgJChcIiNteURyb3Bkb3duXCIpLnRvZ2dsZSgpO1xyXG59KTtcclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9