function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{V3FQ:function(e,t,o){"use strict";o.d(t,"a",(function(){return u}));var i=o("PSD3"),r=o.n(i),l=o("tk/3"),a=o("fXoL"),s=o("HAwj"),c=o("XN1f"),n=o("ofXK"),d=function(e){return{width:e}};function b(e,t){if(1&e&&(a.Lb(0,"div",16),a.Lb(1,"div",17),a.hc(2),a.Kb(),a.Kb()),2&e){var o=a.Ub();a.xb(1),a.Yb("ngStyle",a.ac(3,d,o.progress.percentage+"%")),a.yb("aria-valuenow",o.progress.percentage),a.xb(1),a.jc(" ",o.progress.percentage,"%")}}var u=function(){var e=function(){function e(t,o){_classCallCheck(this,e),this._modalService=t,this._uploadService=o,this.oculto="",this.name="",this.text="",this.select=!1,this.progress={percentage:0},this.type=""}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"cerrarModal",value:function(){this._modalService.cerrarModalUpload(),this.select=!1}},{key:"onFileSelected",value:function(e){console.log("EVENT ",e.target.files[0]),this.progress.percentage=0,this.select=!0,this.selectedFile=e.target.files[0];try{this.name=this.selectedFile.name,this.text="Nombre del Archivo para ser enviado :",this.type=this.selectedFile.name.split(".")[1],console.log(this.selectedFile.name.split(".")[1]),"xml"!==this.type&&"csv"!=this.type?(console.log("ERROR!"),this.cancelFile(),r.a.fire({icon:"error",title:"Seleccin de Archivo",text:"Seleccione un Archivo CSV o XML!"}),this.select=!1):console.log("go ahead")}catch(t){console.log("ERROR EN ARCHIVO",t.error),this.cancelFile(),r.a.fire("Error!","Cancelar y seleccionar un archivo nuevo!","warning")}}},{key:"cancelFile",value:function(){this.name="",this.text="",console.log("Cancel File",this.selectedFile)}},{key:"subirArchivo",value:function(){var e=this;switch(this.progress.percentage=0,this.currentFileUpload=this.selectedFile,console.log("SWITCH",this._modalService.tipo),console.log("SWITCH",this._modalService.url),this._modalService.tipo){case"customer":case"proveedor":this._uploadService.sendXmlInvoice(this.selectedFile,this._modalService.url).subscribe((function(t){t.type===l.d.UploadProgress?e.progress.percentage=Math.round(100*t.loaded/t.total):t instanceof l.g&&(console.log("File is completely uploaded!"),e.name="",e._modalService.cerrarModalProveedor(),e.progress.percentage=0,e.select=!1)}));break;case"csv":this._uploadService.pushFileToStorage(this.selectedFile,this._modalService.url).subscribe((function(t){t.type===l.d.UploadProgress?e.progress.percentage=Math.round(100*t.loaded/t.total):t instanceof l.g&&(console.log("File is completely uploaded!"),e.name="",e._modalService.cerrarModalProveedor(),e.progress.percentage=0,e.select=!1)}))}}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Ib(s.a),a.Ib(c.a))},e.\u0275cmp=a.Cb({type:e,selectors:[["app-modal-upload"]],decls:24,vars:5,consts:[[1,"fondo-negro","animated","fadein",3,"ngClass"],["tabindex","-1","role","dialog",1,"modal",2,"display","block"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body","pointer","modal-upload",3,"change"],[1,"custom-file"],["type","file","id","inputGroupFile02",1,"custom-file-input"],["for","inputGroupFile02",1,"custom-file-label"],["class","progress",4,"ngIf"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-primary",3,"disabled","click"],[1,"progress"],["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-info","progress-bar-striped",3,"ngStyle"]],template:function(e,t){1&e&&(a.Lb(0,"div",0),a.Lb(1,"div",1),a.Lb(2,"div",2),a.Lb(3,"div",3),a.Lb(4,"div",4),a.Lb(5,"h5",5),a.hc(6,"Oprima el boton izquierdo del mouse para seleccionar"),a.Kb(),a.Lb(7,"button",6),a.Sb("click",(function(){return t.cerrarModal()})),a.Lb(8,"span",7),a.hc(9,"\xd7"),a.Kb(),a.Kb(),a.Kb(),a.Lb(10,"div",8),a.Sb("change",(function(e){return t.onFileSelected(e)})),a.Lb(11,"div",9),a.Jb(12,"input",10),a.Lb(13,"label",11),a.Lb(14,"h3"),a.hc(15),a.Lb(16,"dt"),a.hc(17),a.Kb(),a.Kb(),a.Kb(),a.Kb(),a.Kb(),a.gc(18,b,3,5,"div",12),a.Lb(19,"div",13),a.Lb(20,"button",14),a.Sb("click",(function(){return t.cerrarModal()})),a.hc(21,"Close"),a.Kb(),a.Lb(22,"button",15),a.Sb("click",(function(){return t.subirArchivo()})),a.hc(23,"Enviar Archivo"),a.Kb(),a.Kb(),a.Kb(),a.Kb(),a.Kb(),a.Kb()),2&e&&(a.Yb("ngClass",t._modalService.modalUpload),a.xb(15),a.jc(" ",t.text," "),a.xb(2),a.ic(t.name),a.xb(1),a.Yb("ngIf",t.currentFileUpload),a.xb(4),a.Yb("disabled",!t.select))},directives:[n.j,n.l,n.m],styles:[""]}),e}()}}]);