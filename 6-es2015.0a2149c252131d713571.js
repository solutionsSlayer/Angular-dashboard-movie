(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{jkDv:function(t,e,i){"use strict";i.r(e);var r=i("ofXK"),o=i("3Pt+"),b=i("fXoL"),n=i("Qdtg"),c=i("tyNb"),a=i("tk/3");const s=function(){return["/admin/category"]};let l=(()=>{class t{constructor(t,e,i,r){this.categoryService=t,this.router=e,this.route=i,this.http=r,this.route.params.subscribe(t=>this.id=t.id)}ngOnInit(){this.getCategoryDetail(this.id),this.categoryForm=new o.g({name:new o.d})}getCategoryDetail(t){this.categoryService.getCategoryDetail(t).subscribe(t=>{this.categoryForm.patchValue({name:t.name})})}onSubmit(){this.categoryService.editCategory(this.categoryForm.value,this.id).subscribe(t=>{this.router.navigate(["/admin/category"])})}}return t.\u0275fac=function(e){return new(e||t)(b.Jb(n.a),b.Jb(c.b),b.Jb(c.a),b.Jb(a.b))},t.\u0275cmp=b.Db({type:t,selectors:[["app-category-edit"]],decls:19,vars:3,consts:[[1,"container"],[1,"row"],[1,"col-6"],[1,"col-6","text-right"],["routerLinkActive","router-link-active",1,"btn-primary",3,"routerLink"],[1,"col-12","text-center","mb-4"],[3,"formGroup","ngSubmit"],[1,"row","justify-content-md-center","mb-3"],[1,"col-12","col-sm-3"],[1,"col-12","col-sm-6"],["type","text","name","name","formControlName","name",1,"w-100"],["type","submit",1,"btn-primary","mt-4"]],template:function(t,e){1&t&&(b.Mb(0,"div",0),b.Mb(1,"div",1),b.Mb(2,"div",2),b.Mb(3,"h1"),b.lc(4,"Add Category"),b.Lb(),b.Lb(),b.Mb(5,"div",3),b.Mb(6,"button",4),b.lc(7,"Back"),b.Lb(),b.Lb(),b.Mb(8,"div",5),b.Mb(9,"form",6),b.Ub("ngSubmit",(function(){return e.onSubmit()})),b.Mb(10,"div",7),b.Mb(11,"div",8),b.Mb(12,"label"),b.lc(13,"Name"),b.Lb(),b.Lb(),b.Mb(14,"div",9),b.Kb(15,"input",10),b.Kb(16,"br"),b.Lb(),b.Lb(),b.Mb(17,"button",11),b.lc(18,"Submit"),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&t&&(b.zb(6),b.ac("routerLink",b.ec(2,s)),b.zb(3),b.ac("formGroup",e.categoryForm))},directives:[c.d,c.c,o.s,o.k,o.h,o.b,o.j,o.f],styles:[""]}),t})();var d=i("1p6d");const u=function(t){return["/admin/actor/edit",t]};function m(t,e){if(1&t){const t=b.Nb();b.Mb(0,"tr"),b.Mb(1,"td"),b.lc(2),b.Lb(),b.Mb(3,"td"),b.lc(4),b.Lb(),b.Mb(5,"td"),b.lc(6),b.Lb(),b.Mb(7,"td"),b.lc(8),b.Xb(9,"date"),b.Lb(),b.Mb(10,"td"),b.Mb(11,"button",9),b.lc(12,"Edit"),b.Lb(),b.Mb(13,"button",10),b.Ub("click",(function(){b.hc(t);const i=e.$implicit;return b.Wb().deleteActor(i.id)})),b.lc(14,"Delete"),b.Lb(),b.Lb(),b.Lb()}if(2&t){const t=e.$implicit;b.zb(2),b.mc(t.id),b.zb(2),b.mc(t.firstname),b.zb(2),b.mc(t.name),b.zb(2),b.mc(b.Yb(9,5,t.birth,"dd - MM - yyyy")),b.zb(3),b.ac("routerLink",b.fc(8,u,t.id))}}const v=function(){return["/admin/actor/add"]};let p=(()=>{class t{constructor(t){this.actorService=t}ngOnInit(){this.getActors()}getActors(){this.actorService.getActors().subscribe(t=>this.actors=t)}deleteActor(t){this.actorService.deleteActor(t).subscribe(),this.actors=this.actors.filter(e=>e.id!==t)}}return t.\u0275fac=function(e){return new(e||t)(b.Jb(d.a))},t.\u0275cmp=b.Db({type:t,selectors:[["app-actor-list"]],decls:24,vars:3,consts:[[1,"container"],[1,"row"],[1,"col-6"],[1,"col-6","text-right"],["routerLinkActive","router-link-active",1,"btn-primary",3,"routerLink"],[1,"col-12"],[1,"table","table-dark"],["scope","col"],[4,"ngFor","ngForOf"],[1,"btn","btn-warning","mr-2",3,"routerLink"],[1,"btn","btn-danger",3,"click"]],template:function(t,e){1&t&&(b.Mb(0,"div",0),b.Mb(1,"div",1),b.Mb(2,"div",2),b.Mb(3,"h1"),b.lc(4," Actor "),b.Lb(),b.Lb(),b.Mb(5,"div",3),b.Mb(6,"button",4),b.lc(7,"+ Add Actor"),b.Lb(),b.Lb(),b.Mb(8,"div",5),b.Mb(9,"table",6),b.Mb(10,"thead"),b.Mb(11,"tr"),b.Mb(12,"th",7),b.lc(13,"id"),b.Lb(),b.Mb(14,"th",7),b.lc(15,"Name"),b.Lb(),b.Mb(16,"th",7),b.lc(17,"First Name"),b.Lb(),b.Mb(18,"th",7),b.lc(19,"Birthday"),b.Lb(),b.Mb(20,"th",7),b.lc(21,"Actions"),b.Lb(),b.Lb(),b.Lb(),b.Mb(22,"tbody"),b.kc(23,m,15,10,"tr",8),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&t&&(b.zb(6),b.ac("routerLink",b.ec(2,v)),b.zb(17),b.ac("ngForOf",e.actors))},directives:[c.d,c.c,r.k],pipes:[r.d],styles:[""]}),t})();const L=function(t){return["/admin/category/edit",t]};function h(t,e){if(1&t){const t=b.Nb();b.Mb(0,"tr"),b.Mb(1,"td"),b.lc(2),b.Lb(),b.Mb(3,"td"),b.lc(4),b.Lb(),b.Mb(5,"td"),b.Mb(6,"button",9),b.lc(7,"Edit"),b.Lb(),b.Mb(8,"button",10),b.Ub("click",(function(){b.hc(t);const i=e.$implicit;return b.Wb().deleteCategory(i.id)})),b.lc(9,"Delete"),b.Lb(),b.Lb(),b.Lb()}if(2&t){const t=e.$implicit;b.zb(2),b.mc(t.id),b.zb(2),b.mc(t.name),b.zb(2),b.ac("routerLink",b.fc(3,L,t.id))}}const M=function(){return["/admin/category/add"]};let g=(()=>{class t{constructor(t){this.categoryService=t}ngOnInit(){this.getCategories()}getCategories(){this.categoryService.getCategories().subscribe(t=>this.categories=t)}deleteCategory(t){this.categoryService.deleteCategory(t).subscribe(),this.categories=this.categories.filter(e=>e.id!==t)}}return t.\u0275fac=function(e){return new(e||t)(b.Jb(n.a))},t.\u0275cmp=b.Db({type:t,selectors:[["app-category-list"]],decls:20,vars:3,consts:[[1,"container"],[1,"row"],[1,"col-6"],[1,"col-6","text-right"],["routerLinkActive","router-link-active",1,"btn-primary",3,"routerLink"],[1,"col-12"],[1,"table","table-dark"],["scope","col"],[4,"ngFor","ngForOf"],[1,"btn","btn-warning","mr-2",3,"routerLink"],[1,"btn","btn-danger",3,"click"]],template:function(t,e){1&t&&(b.Mb(0,"div",0),b.Mb(1,"div",1),b.Mb(2,"div",2),b.Mb(3,"h1"),b.lc(4," Categories "),b.Lb(),b.Lb(),b.Mb(5,"div",3),b.Mb(6,"button",4),b.lc(7,"+ Add Category"),b.Lb(),b.Lb(),b.Mb(8,"div",5),b.Mb(9,"table",6),b.Mb(10,"thead"),b.Mb(11,"tr"),b.Mb(12,"th",7),b.lc(13,"id"),b.Lb(),b.Mb(14,"th",7),b.lc(15,"Category"),b.Lb(),b.Mb(16,"th",7),b.lc(17,"Actions"),b.Lb(),b.Lb(),b.Lb(),b.Mb(18,"tbody"),b.kc(19,h,10,5,"tr",8),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&t&&(b.zb(6),b.ac("routerLink",b.ec(2,M)),b.zb(13),b.ac("ngForOf",e.categories))},directives:[c.d,c.c,r.k],styles:[""]}),t})();var f=i("FU6A");function y(t,e){if(1&t&&(b.Mb(0,"p"),b.lc(1),b.Lb()),2&t){const t=e.$implicit;b.zb(1),b.oc(" ",t.firstname," ",t.name," ")}}const k=function(t){return["/admin/movie/add/actor",t]},F=function(t){return["/admin/movie/edit",t]};function C(t,e){if(1&t){const t=b.Nb();b.Mb(0,"tr"),b.Mb(1,"td"),b.lc(2),b.Lb(),b.Mb(3,"td"),b.lc(4),b.Lb(),b.Mb(5,"td"),b.lc(6),b.Lb(),b.Mb(7,"td"),b.kc(8,y,2,2,"p",8),b.Lb(),b.Mb(9,"td"),b.Mb(10,"button",9),b.lc(11,"Edit actor"),b.Lb(),b.Mb(12,"button",10),b.lc(13,"Edit"),b.Lb(),b.Mb(14,"button",11),b.Ub("click",(function(){b.hc(t);const i=e.$implicit;return b.Wb().deleteMovie(i.id)})),b.lc(15,"Delete"),b.Lb(),b.Lb(),b.Lb()}if(2&t){const t=e.$implicit;b.zb(2),b.mc(t.id),b.zb(2),b.mc(t.title),b.zb(2),b.mc(t.year),b.zb(2),b.ac("ngForOf",t.Actors),b.zb(2),b.ac("routerLink",b.fc(6,k,t.id)),b.zb(2),b.ac("routerLink",b.fc(8,F,t.id))}}const w=function(){return["/admin/movie/add"]};let S=(()=>{class t{constructor(t){this.movieService=t}ngOnInit(){this.getMovies()}getMovies(){this.movieService.getMovies().subscribe(t=>this.movies=t)}deleteMovie(t){this.movieService.deleteMovie(t).subscribe(),this.movies=this.movies.filter(e=>e.id!==t)}}return t.\u0275fac=function(e){return new(e||t)(b.Jb(f.a))},t.\u0275cmp=b.Db({type:t,selectors:[["app-movie-list"]],decls:24,vars:3,consts:[[1,"container"],[1,"row"],[1,"col-6"],[1,"col-6","text-right"],["routerLinkActive","router-link-active",1,"btn-primary",3,"routerLink"],[1,"col-12"],[1,"table","table-dark"],["scope","col"],[4,"ngFor","ngForOf"],[1,"btn","btn-primary","mr-2",3,"routerLink"],[1,"btn","btn-warning","mr-2",3,"routerLink"],[1,"btn","btn-danger",3,"click"]],template:function(t,e){1&t&&(b.Mb(0,"div",0),b.Mb(1,"div",1),b.Mb(2,"div",2),b.Mb(3,"h1"),b.lc(4," Movie "),b.Lb(),b.Lb(),b.Mb(5,"div",3),b.Mb(6,"button",4),b.lc(7,"+ Add Movie"),b.Lb(),b.Lb(),b.Mb(8,"div",5),b.Mb(9,"table",6),b.Mb(10,"thead"),b.Mb(11,"tr"),b.Mb(12,"th",7),b.lc(13,"id"),b.Lb(),b.Mb(14,"th",7),b.lc(15,"Title"),b.Lb(),b.Mb(16,"th",7),b.lc(17,"Year"),b.Lb(),b.Mb(18,"th",7),b.lc(19,"Actors"),b.Lb(),b.Mb(20,"th",7),b.lc(21,"Actions"),b.Lb(),b.Lb(),b.Lb(),b.Mb(22,"tbody"),b.kc(23,C,16,10,"tr",8),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&t&&(b.zb(6),b.ac("routerLink",b.ec(2,w)),b.zb(17),b.ac("ngForOf",e.movies))},directives:[c.d,c.c,r.k],styles:[""]}),t})();const z=function(){return["/admin/category"]};let G=(()=>{class t{constructor(t,e){this.categoryService=t,this.router=e,this.categoryForm=new o.g({name:new o.d})}ngOnInit(){}onSubmit(){this.categoryService.addCategory(this.categoryForm.value).subscribe(t=>{this.router.navigate(["/admin/category"])})}}return t.\u0275fac=function(e){return new(e||t)(b.Jb(n.a),b.Jb(c.b))},t.\u0275cmp=b.Db({type:t,selectors:[["app-category-add"]],decls:19,vars:3,consts:[[1,"container"],[1,"row"],[1,"col-6"],[1,"col-6","text-right"],["routerLinkActive","router-link-active",1,"btn-primary",3,"routerLink"],[1,"col-12","text-center","mb-4"],[3,"formGroup","ngSubmit"],[1,"row","justify-content-md-center","mb-3"],[1,"col-12","col-sm-3"],[1,"col-12","col-sm-6"],["type","text","name","name","formControlName","name",1,"w-100"],["type","submit",1,"btn-primary","mt-4"]],template:function(t,e){1&t&&(b.Mb(0,"div",0),b.Mb(1,"div",1),b.Mb(2,"div",2),b.Mb(3,"h1"),b.lc(4,"Add Category"),b.Lb(),b.Lb(),b.Mb(5,"div",3),b.Mb(6,"button",4),b.lc(7,"Back"),b.Lb(),b.Lb(),b.Mb(8,"div",5),b.Mb(9,"form",6),b.Ub("ngSubmit",(function(){return e.onSubmit()})),b.Mb(10,"div",7),b.Mb(11,"div",8),b.Mb(12,"label"),b.lc(13,"Name"),b.Lb(),b.Lb(),b.Mb(14,"div",9),b.Kb(15,"input",10),b.Kb(16,"br"),b.Lb(),b.Lb(),b.Mb(17,"button",11),b.lc(18,"Submit"),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&t&&(b.zb(6),b.ac("routerLink",b.ec(2,z)),b.zb(3),b.ac("formGroup",e.categoryForm))},directives:[c.d,c.c,o.s,o.k,o.h,o.b,o.j,o.f],styles:[""]}),t})();function A(t,e){if(1&t&&(b.Mb(0,"option",19),b.lc(1),b.Lb()),2&t){const t=e.$implicit;b.ac("ngValue",t.id),b.zb(1),b.nc(" ",t.name," ")}}const I=function(){return["/admin/movie"]};let N=(()=>{class t{constructor(t,e,i){this.movieService=t,this.categoryService=e,this.router=i,this.movieForm=new o.g({title:new o.d,description:new o.d,picture:new o.d,year:new o.d,note:new o.d,CategoryId:new o.d})}ngOnInit(){this.getCategories()}getCategories(){this.categoryService.getCategories().subscribe(t=>this.categories=t)}onFileChanged(t){this.file=t.target.files[0]}onSubmit(){const t=new FormData;t.append("title",this.movieForm.get("title").value),t.append("description",this.movieForm.get("description").value),t.append("year",this.movieForm.get("year").value),t.append("note",this.movieForm.get("note").value),t.append("CategoryId",this.movieForm.get("CategoryId").value),null!=this.file&&t.append("picture",this.file,this.file.name),this.movieService.addMovie(t).subscribe(t=>{this.router.navigate(["/admin/movie"])})}}return t.\u0275fac=function(e){return new(e||t)(b.Jb(f.a),b.Jb(n.a),b.Jb(c.b))},t.\u0275cmp=b.Db({type:t,selectors:[["app-movie-add"]],decls:56,vars:5,consts:[[1,"container"],[1,"row"],[1,"col-6"],[1,"col-6","text-right"],["routerLinkActive","router-link-active",1,"btn-primary",3,"routerLink"],[1,"col-12","text-center"],[3,"formGroup","ngSubmit"],[1,"row","justify-content-md-center","mb-3"],[1,"col-12","col-sm-3"],[1,"col-12","col-sm-6"],["type","text","name","title","formControlName","title",1,"w-100"],["type","number","name","year","formControlName","year",1,"w-100"],["type","number","name","note","formControlName","note",1,"w-100"],["formControlName","CategoryId",1,"w-100"],["disabled","",3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf"],["name","description","formControlName","description",1,"w-100"],["type","file","formControlName","picture","name","picture","id","picture",3,"change"],["type","submit",1,"btn-primary","mt-4"],[3,"ngValue"]],template:function(t,e){1&t&&(b.Mb(0,"div",0),b.Mb(1,"div",1),b.Mb(2,"div",2),b.Mb(3,"h1"),b.lc(4,"Add Movie"),b.Lb(),b.Lb(),b.Mb(5,"div",3),b.Mb(6,"button",4),b.lc(7,"Back"),b.Lb(),b.Lb(),b.Mb(8,"div",5),b.Mb(9,"form",6),b.Ub("ngSubmit",(function(){return e.onSubmit()})),b.Mb(10,"div",7),b.Mb(11,"div",8),b.Mb(12,"label"),b.lc(13,"Title"),b.Lb(),b.Lb(),b.Mb(14,"div",9),b.Kb(15,"input",10),b.Kb(16,"br"),b.Lb(),b.Lb(),b.Mb(17,"div",7),b.Mb(18,"div",8),b.Mb(19,"label"),b.lc(20,"Year"),b.Lb(),b.Lb(),b.Mb(21,"div",9),b.Kb(22,"input",11),b.Kb(23,"br"),b.Lb(),b.Lb(),b.Mb(24,"div",7),b.Mb(25,"div",8),b.Mb(26,"label"),b.lc(27,"Note"),b.Lb(),b.Lb(),b.Mb(28,"div",9),b.Kb(29,"input",12),b.Kb(30,"br"),b.Lb(),b.Lb(),b.Mb(31,"div",7),b.Mb(32,"div",8),b.Mb(33,"label"),b.lc(34,"Category"),b.Lb(),b.Lb(),b.Mb(35,"div",9),b.Mb(36,"select",13),b.Mb(37,"option",14),b.lc(38,"Choose your category"),b.Lb(),b.kc(39,A,2,2,"option",15),b.Lb(),b.Kb(40,"br"),b.Lb(),b.Lb(),b.Mb(41,"div",7),b.Mb(42,"div",8),b.Mb(43,"label"),b.lc(44,"Description"),b.Lb(),b.Lb(),b.Mb(45,"div",9),b.Mb(46,"textarea",16),b.lc(47," "),b.Lb(),b.Lb(),b.Lb(),b.Mb(48,"div",7),b.Mb(49,"div",8),b.Mb(50,"label"),b.lc(51,"Picture"),b.Lb(),b.Lb(),b.Mb(52,"div",9),b.Mb(53,"input",17),b.Ub("change",(function(t){return e.onFileChanged(t)})),b.Lb(),b.Lb(),b.Lb(),b.Mb(54,"button",18),b.lc(55,"Submit"),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&t&&(b.zb(6),b.ac("routerLink",b.ec(4,I)),b.zb(3),b.ac("formGroup",e.movieForm),b.zb(28),b.ac("ngValue",null),b.zb(2),b.ac("ngForOf",e.categories))},directives:[c.d,c.c,o.s,o.k,o.h,o.b,o.j,o.f,o.m,o.p,o.l,o.r,r.k],styles:[""]}),t})();var K=i("HnHP"),x=i("vkgz"),J=i("JIr8"),O=i("AytR"),D=i("TkUd");let V=(()=>{class t{constructor(t,e){this.http=t,this.errorService=e}getGenders(){return this.http.get(O.a.apiUrl+"genders").pipe(Object(x.a)(t=>t),Object(J.a)(this.errorService.handleError("getGenders",[])))}}return t.\u0275fac=function(e){return new(e||t)(b.Qb(a.b),b.Qb(D.a))},t.\u0275prov=b.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function j(t,e){if(1&t&&(b.Mb(0,"span"),b.Kb(1,"input",19),b.Mb(2,"label",20),b.lc(3),b.Lb(),b.Lb()),2&t){const t=e.$implicit;b.zb(1),b.bc("id",t.id),b.bc("value",t.id),b.zb(1),b.bc("for",t.name),b.zb(1),b.mc(t.name)}}function U(t,e){if(1&t&&(b.Mb(0,"option",21),b.lc(1),b.Lb()),2&t){const t=e.$implicit;b.ac("ngValue",t.id),b.zb(1),b.nc(" ",t.name," ")}}const $=function(){return["/admin/actor"]};let B=(()=>{class t{constructor(t,e,i,r){this.actorService=t,this.countryService=e,this.genderService=i,this.router=r,this.actorForm=new o.g({name:new o.d,firstname:new o.d,birth:new o.d,picture:new o.d,CountryId:new o.d,GenderId:new o.d})}ngOnInit(){this.getCountries(),this.getGenders()}getCountries(){this.countryService.getCountries().subscribe(t=>this.countries=t)}getGenders(){this.genderService.getGenders().subscribe(t=>this.genders=t)}onFileChanged(t){this.file=t.target.files[0]}onSubmit(){const t=new FormData;t.append("name",this.actorForm.get("name").value),t.append("firstname",this.actorForm.get("firstname").value),t.append("birth",this.actorForm.get("birth").value),t.append("CountryId",this.actorForm.get("CountryId").value),t.append("GenderId",this.actorForm.get("GenderId").value),null!=this.file&&t.append("picture",this.file,this.file.name),this.actorService.addActor(t).subscribe(t=>{this.router.navigate(["/admin/actor"])})}}return t.\u0275fac=function(e){return new(e||t)(b.Jb(d.a),b.Jb(K.a),b.Jb(V),b.Jb(c.b))},t.\u0275cmp=b.Db({type:t,selectors:[["app-actor-add"]],decls:55,vars:6,consts:[[1,"container"],[1,"row"],[1,"col-6"],[1,"col-6","text-right"],["routerLinkActive","router-link-active",1,"btn-primary",3,"routerLink"],[1,"col-12","text-center"],[3,"formGroup","ngSubmit"],[1,"row","justify-content-md-center","mb-3"],[1,"col-12","col-sm-3"],[1,"col-12","col-sm-6"],["type","text","name","firstname","formControlName","firstname",1,"w-100"],["type","text","name","name","formControlName","name",1,"w-100"],["type","date","name","birth","formControlName","birth",1,"w-100"],[4,"ngFor","ngForOf"],["formControlName","CountryId",1,"w-100"],["disabled","",3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf"],["type","file","formControlName","picture","name","picture","id","picture",3,"change"],["type","submit",1,"btn-primary","mt-4"],["type","radio","name","GenderId","formControlName","GenderId",1,"mr-5",3,"id","value"],[1,"mr-5",3,"for"],[3,"ngValue"]],template:function(t,e){1&t&&(b.Mb(0,"div",0),b.Mb(1,"div",1),b.Mb(2,"div",2),b.Mb(3,"h1"),b.lc(4,"Add Actor"),b.Lb(),b.Lb(),b.Mb(5,"div",3),b.Mb(6,"button",4),b.lc(7,"Back"),b.Lb(),b.Lb(),b.Mb(8,"div",5),b.Mb(9,"form",6),b.Ub("ngSubmit",(function(){return e.onSubmit()})),b.Mb(10,"div",7),b.Mb(11,"div",8),b.Mb(12,"label"),b.lc(13,"First Name"),b.Lb(),b.Lb(),b.Mb(14,"div",9),b.Kb(15,"input",10),b.Kb(16,"br"),b.Lb(),b.Lb(),b.Mb(17,"div",7),b.Mb(18,"div",8),b.Mb(19,"label"),b.lc(20,"Name"),b.Lb(),b.Lb(),b.Mb(21,"div",9),b.Kb(22,"input",11),b.Kb(23,"br"),b.Lb(),b.Lb(),b.Mb(24,"div",7),b.Mb(25,"div",8),b.Mb(26,"label"),b.lc(27,"Birth"),b.Lb(),b.Lb(),b.Mb(28,"div",9),b.Kb(29,"input",12),b.Kb(30,"br"),b.Lb(),b.Lb(),b.Mb(31,"div",7),b.Mb(32,"div",8),b.Mb(33,"label"),b.lc(34,"Gender"),b.Lb(),b.Lb(),b.Mb(35,"div",9),b.kc(36,j,4,4,"span",13),b.Lb(),b.Lb(),b.Mb(37,"div",7),b.Mb(38,"div",8),b.Mb(39,"label"),b.lc(40,"Country"),b.Lb(),b.Lb(),b.Mb(41,"div",9),b.Mb(42,"select",14),b.Mb(43,"option",15),b.lc(44,"Choose your country"),b.Lb(),b.kc(45,U,2,2,"option",16),b.Lb(),b.Kb(46,"br"),b.Lb(),b.Lb(),b.Mb(47,"div",7),b.Mb(48,"div",8),b.Mb(49,"label"),b.lc(50,"Picture"),b.Lb(),b.Lb(),b.Mb(51,"div",9),b.Mb(52,"input",17),b.Ub("change",(function(t){return e.onFileChanged(t)})),b.Lb(),b.Lb(),b.Lb(),b.Mb(53,"button",18),b.lc(54,"Submit"),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&t&&(b.zb(6),b.ac("routerLink",b.ec(5,$)),b.zb(3),b.ac("formGroup",e.actorForm),b.zb(27),b.ac("ngForOf",e.genders),b.zb(7),b.ac("ngValue",null),b.zb(2),b.ac("ngForOf",e.countries))},directives:[c.d,c.c,o.s,o.k,o.h,o.b,o.j,o.f,r.k,o.p,o.l,o.r,o.n],styles:[""]}),t})();function P(t,e){if(1&t&&(b.Mb(0,"span"),b.Kb(1,"input",21),b.Mb(2,"label",22),b.lc(3),b.Lb(),b.Lb()),2&t){const t=e.$implicit;b.zb(1),b.bc("id",t.id),b.bc("value",t.id),b.zb(1),b.bc("for",t.name),b.zb(1),b.mc(t.name)}}function E(t,e){if(1&t&&(b.Mb(0,"option",23),b.lc(1),b.Lb()),2&t){const t=e.$implicit;b.ac("ngValue",t.id),b.zb(1),b.nc(" ",t.name," ")}}const T=function(){return["/admin/actor"]};let H=(()=>{class t{constructor(t,e,i,r,b,n){this.actorService=t,this.countryService=e,this.genderService=i,this.router=r,this.route=b,this.datePipe=n,this.actorForm=new o.g({name:new o.d,firstname:new o.d,birth:new o.d,picture:new o.d,CountryId:new o.d,GenderId:new o.d}),this.route.params.subscribe(t=>this.id=t.id)}ngOnInit(){this.getActorDetail(this.id),this.getCountries(),this.getGenders()}getActorDetail(t){this.actorService.getActorDetail(t).subscribe(t=>{console.log(t),this.actorForm.patchValue({name:t.name,firstname:t.firstname,birth:this.datePipe.transform(t.birth,"yyyy-MM-dd"),CountryId:t.CountryId,GenderId:t.GenderId}),this.avatar=t.picture})}getCountries(){this.countryService.getCountries().subscribe(t=>this.countries=t)}getGenders(){this.genderService.getGenders().subscribe(t=>this.genders=t)}onFileChanged(t){this.file=t.target.files[0]}onSubmit(){const t=new FormData;t.append("name",this.actorForm.get("name").value),t.append("firstname",this.actorForm.get("firstname").value),t.append("birth",this.actorForm.get("birth").value),t.append("CountryId",this.actorForm.get("CountryId").value),t.append("GenderId",this.actorForm.get("GenderId").value),null!=this.file&&t.append("picture",this.file,this.file.name),this.actorService.editActor(t,this.id).subscribe(t=>{this.router.navigate(["/admin/actor"])})}}return t.\u0275fac=function(e){return new(e||t)(b.Jb(d.a),b.Jb(K.a),b.Jb(V),b.Jb(c.b),b.Jb(c.a),b.Jb(r.d))},t.\u0275cmp=b.Db({type:t,selectors:[["app-actor-edit"]],decls:56,vars:8,consts:[[1,"container"],[1,"row"],[1,"col-6"],[1,"col-6","text-right"],["routerLinkActive","router-link-active",1,"btn-primary",3,"routerLink"],[1,"col-12","text-center"],[3,"formGroup","ngSubmit"],[1,"row","justify-content-md-center","mb-3"],[1,"col-12","col-sm-3"],[1,"col-12","col-sm-6"],["type","text","name","firstname","formControlName","firstname",1,"w-100"],["type","text","name","name","formControlName","name",1,"w-100"],["type","date","name","birth","formControlName","birth",1,"w-100"],[4,"ngFor","ngForOf"],["formControlName","CountryId",1,"w-100"],["disabled","",3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf"],[1,"col-12","col-sm-6","text-center"],[1,"w-50",3,"src"],["type","file","formControlName","picture","name","picture","id","picture",3,"change"],["type","submit",1,"btn-primary","mt-4",3,"disabled"],["type","radio","name","GenderId","formControlName","GenderId",1,"mr-5",3,"id","value"],[1,"mr-5",3,"for"],[3,"ngValue"]],template:function(t,e){1&t&&(b.Mb(0,"div",0),b.Mb(1,"div",1),b.Mb(2,"div",2),b.Mb(3,"h1"),b.lc(4,"Add Actor"),b.Lb(),b.Lb(),b.Mb(5,"div",3),b.Mb(6,"button",4),b.lc(7,"Back"),b.Lb(),b.Lb(),b.Mb(8,"div",5),b.Mb(9,"form",6),b.Ub("ngSubmit",(function(){return e.onSubmit()})),b.Mb(10,"div",7),b.Mb(11,"div",8),b.Mb(12,"label"),b.lc(13,"First Name"),b.Lb(),b.Lb(),b.Mb(14,"div",9),b.Kb(15,"input",10),b.Kb(16,"br"),b.Lb(),b.Lb(),b.Mb(17,"div",7),b.Mb(18,"div",8),b.Mb(19,"label"),b.lc(20,"Name"),b.Lb(),b.Lb(),b.Mb(21,"div",9),b.Kb(22,"input",11),b.Kb(23,"br"),b.Lb(),b.Lb(),b.Mb(24,"div",7),b.Mb(25,"div",8),b.Mb(26,"label"),b.lc(27,"Birth"),b.Lb(),b.Lb(),b.Mb(28,"div",9),b.Kb(29,"input",12),b.Kb(30,"br"),b.Lb(),b.Lb(),b.Mb(31,"div",7),b.Mb(32,"div",8),b.Mb(33,"label"),b.lc(34,"Gender"),b.Lb(),b.Lb(),b.Mb(35,"div",9),b.kc(36,P,4,4,"span",13),b.Lb(),b.Lb(),b.Mb(37,"div",7),b.Mb(38,"div",8),b.Mb(39,"label"),b.lc(40,"Country"),b.Lb(),b.Lb(),b.Mb(41,"div",9),b.Mb(42,"select",14),b.Mb(43,"option",15),b.lc(44,"Choose your country"),b.Lb(),b.kc(45,E,2,2,"option",16),b.Lb(),b.Kb(46,"br"),b.Lb(),b.Lb(),b.Mb(47,"div",7),b.Mb(48,"div",8),b.Mb(49,"label"),b.lc(50,"Picture"),b.Lb(),b.Lb(),b.Mb(51,"div",17),b.Kb(52,"img",18),b.Mb(53,"input",19),b.Ub("change",(function(t){return e.onFileChanged(t)})),b.Lb(),b.Lb(),b.Lb(),b.Mb(54,"button",20),b.lc(55,"Submit"),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&t&&(b.zb(6),b.ac("routerLink",b.ec(7,T)),b.zb(3),b.ac("formGroup",e.actorForm),b.zb(27),b.ac("ngForOf",e.genders),b.zb(7),b.ac("ngValue",null),b.zb(2),b.ac("ngForOf",e.countries),b.zb(7),b.cc("src","http://localhost:3000/",e.avatar,"",b.ic),b.zb(2),b.ac("disabled",!e.actorForm.valid))},directives:[c.d,c.c,o.s,o.k,o.h,o.b,o.j,o.f,r.k,o.p,o.l,o.r,o.n],styles:[""]}),t})();function W(t,e){if(1&t&&(b.Mb(0,"option",21),b.lc(1),b.Lb()),2&t){const t=e.$implicit;b.ac("ngValue",t.id),b.zb(1),b.nc(" ",t.name," ")}}const Y=function(){return["/admin/movie"]};let q=(()=>{class t{constructor(t,e,i,r){this.movieService=t,this.categoryService=e,this.route=i,this.router=r,this.movieForm=new o.g({title:new o.d,description:new o.d,picture:new o.d,year:new o.d,note:new o.d,CategoryId:new o.d}),this.route.params.subscribe(t=>this.id=t.id)}ngOnInit(){this.getCategories(),this.getMovieDetail(this.id)}getMovieDetail(t){this.movieService.getMovieDetail(t).subscribe(t=>{console.log(t),this.movieForm.patchValue({title:t.title,description:t.description,year:t.year,note:t.note,CategoryId:t.CategoryId}),this.avatar=t.picture})}getCategories(){this.categoryService.getCategories().subscribe(t=>this.categories=t)}onFileChanged(t){this.file=t.target.files[0]}onSubmit(){const t=new FormData;t.append("title",this.movieForm.get("title").value),t.append("description",this.movieForm.get("description").value),t.append("year",this.movieForm.get("year").value),t.append("note",this.movieForm.get("note").value),t.append("CategoryId",this.movieForm.get("CategoryId").value),null!=this.file&&t.append("picture",this.file,this.file.name),this.movieService.editMovie(t,this.id).subscribe(t=>{this.router.navigate(["/admin/movie"])})}}return t.\u0275fac=function(e){return new(e||t)(b.Jb(f.a),b.Jb(n.a),b.Jb(c.a),b.Jb(c.b))},t.\u0275cmp=b.Db({type:t,selectors:[["app-movie-edit"]],decls:57,vars:6,consts:[[1,"container"],[1,"row"],[1,"col-6"],[1,"col-6","text-right"],["routerLinkActive","router-link-active",1,"btn-primary",3,"routerLink"],[1,"col-12","text-center"],[3,"formGroup","ngSubmit"],[1,"row","justify-content-md-center","mb-3"],[1,"col-12","col-sm-3"],[1,"col-12","col-sm-6"],["type","text","name","title","formControlName","title",1,"w-100"],["type","number","name","year","formControlName","year",1,"w-100"],["type","number","name","note","formControlName","note",1,"w-100"],["formControlName","CategoryId",1,"w-100"],["disabled","",3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf"],["name","description","formControlName","description",1,"w-100"],[1,"col-12","col-sm-6","text-center"],[1,"w-50",3,"src"],["type","file","formControlName","picture","name","picture","id","picture",3,"change"],["type","submit",1,"btn-primary","mt-4"],[3,"ngValue"]],template:function(t,e){1&t&&(b.Mb(0,"div",0),b.Mb(1,"div",1),b.Mb(2,"div",2),b.Mb(3,"h1"),b.lc(4,"Add Movie"),b.Lb(),b.Lb(),b.Mb(5,"div",3),b.Mb(6,"button",4),b.lc(7,"Back"),b.Lb(),b.Lb(),b.Mb(8,"div",5),b.Mb(9,"form",6),b.Ub("ngSubmit",(function(){return e.onSubmit()})),b.Mb(10,"div",7),b.Mb(11,"div",8),b.Mb(12,"label"),b.lc(13,"Title"),b.Lb(),b.Lb(),b.Mb(14,"div",9),b.Kb(15,"input",10),b.Kb(16,"br"),b.Lb(),b.Lb(),b.Mb(17,"div",7),b.Mb(18,"div",8),b.Mb(19,"label"),b.lc(20,"Year"),b.Lb(),b.Lb(),b.Mb(21,"div",9),b.Kb(22,"input",11),b.Kb(23,"br"),b.Lb(),b.Lb(),b.Mb(24,"div",7),b.Mb(25,"div",8),b.Mb(26,"label"),b.lc(27,"Note"),b.Lb(),b.Lb(),b.Mb(28,"div",9),b.Kb(29,"input",12),b.Kb(30,"br"),b.Lb(),b.Lb(),b.Mb(31,"div",7),b.Mb(32,"div",8),b.Mb(33,"label"),b.lc(34,"Category"),b.Lb(),b.Lb(),b.Mb(35,"div",9),b.Mb(36,"select",13),b.Mb(37,"option",14),b.lc(38,"Choose your category"),b.Lb(),b.kc(39,W,2,2,"option",15),b.Lb(),b.Kb(40,"br"),b.Lb(),b.Lb(),b.Mb(41,"div",7),b.Mb(42,"div",8),b.Mb(43,"label"),b.lc(44,"Description"),b.Lb(),b.Lb(),b.Mb(45,"div",9),b.Mb(46,"textarea",16),b.lc(47," "),b.Lb(),b.Lb(),b.Lb(),b.Mb(48,"div",7),b.Mb(49,"div",8),b.Mb(50,"label"),b.lc(51,"Picture"),b.Lb(),b.Lb(),b.Mb(52,"div",17),b.Kb(53,"img",18),b.Mb(54,"input",19),b.Ub("change",(function(t){return e.onFileChanged(t)})),b.Lb(),b.Lb(),b.Lb(),b.Mb(55,"button",20),b.lc(56,"Submit"),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&t&&(b.zb(6),b.ac("routerLink",b.ec(5,Y)),b.zb(3),b.ac("formGroup",e.movieForm),b.zb(28),b.ac("ngValue",null),b.zb(2),b.ac("ngForOf",e.categories),b.zb(14),b.cc("src","http://localhost:3000/",e.avatar,"",b.ic))},directives:[c.d,c.c,o.s,o.k,o.h,o.b,o.j,o.f,o.m,o.p,o.l,o.r,r.k],styles:[""]}),t})();function Q(t=1){return function(e){let i=0;return Object.keys(e.controls).forEach(t=>{!0===e.controls[t].value&&i++}),i<t?{requireCheckboxToBeChecked:!0}:null}}function X(t,e){if(1&t&&(b.Mb(0,"div",10),b.Kb(1,"img",11),b.Mb(2,"label"),b.Kb(3,"input",12),b.lc(4),b.Lb(),b.Lb()),2&t){const t=e.$implicit,i=e.index,r=b.Wb();b.zb(1),b.cc("src","http://localhost:3000/",null==r.actors[i]?null:r.actors[i].picture," ",b.ic),b.zb(2),b.ac("formControl",null==r.actorsFormGroup?null:r.actorsFormGroup.controls[t.id]),b.zb(1),b.oc(" ",null==r.actors[i]?null:r.actors[i].firstname," ",null==r.actors[i]?null:r.actors[i].name," ")}}const R=function(){return["/admin/movie"]},Z=[{path:"actor",component:p},{path:"actor/add",component:B},{path:"actor/edit/:id",component:H},{path:"category",component:g},{path:"category/add",component:G},{path:"category/edit/:id",component:l},{path:"movie",component:S},{path:"movie/add/actor/:id",component:(()=>{class t{constructor(t,e,i,r,o){this.movieService=t,this.route=e,this.router=i,this.actorService=r,this.fb=o,this.actorsSelected=[],this.route.params.subscribe(t=>this.id=t.id)}get f(){return this.form&&this.form.controls}get actorsFormGroup(){return this.f&&this.f.actorsFormGroup}get actorsFormGroupSelectedIds(){let t=[];for(let e in this.actorsFormGroup.controls)this.actorsFormGroup.controls[e].value&&t.push(e);return t}ngOnInit(){this.form=this.fb.group({name:["",o.q.required]}),this.movieService.getMovieDetail(this.id).subscribe(t=>{this.movie=t,t.Actors.forEach(t=>{this.actorsSelected.push(t.id)}),console.log(this.actorsSelected),this.actorService.getActors().subscribe(t=>{this.actors=t,this.form.addControl("actorsFormGroup",this.buildActorFormGroup(t,this.actorsSelected))})})}buildActorFormGroup(t,e=[]){const i=this.fb.group({},{validators:Q()});return t.forEach(t=>{const e=this.actorsSelected.some(e=>e===t.id);i.addControl(t.id,this.fb.control(e))}),i}submit(){console.log(this.actorsFormGroupSelectedIds),this.movieService.addActor(this.actorsFormGroupSelectedIds,this.id).subscribe(t=>{this.router.navigate(["/admin/movie"])})}}return t.\u0275fac=function(e){return new(e||t)(b.Jb(f.a),b.Jb(c.a),b.Jb(c.b),b.Jb(d.a),b.Jb(o.c))},t.\u0275cmp=b.Db({type:t,selectors:[["app-add-actor"]],decls:19,vars:5,consts:[[1,"container"],[1,"row"],[1,"col-10"],[1,"col-2","text-right"],["routerLinkActive","router-link-active",1,"btn-primary",3,"routerLink"],[1,"col-12","text-center"],[3,"formGroup","ngSubmit"],[1,"form-group"],["class","checkbox col-3",4,"ngFor","ngForOf"],["type","submit",1,"btn","btn-primary"],[1,"checkbox","col-3"],[1,"w-100",3,"src"],["type","checkbox",3,"formControl"]],template:function(t,e){1&t&&(b.Mb(0,"div",0),b.Mb(1,"div",1),b.Mb(2,"div",2),b.Mb(3,"h1"),b.lc(4),b.Lb(),b.Lb(),b.Mb(5,"div",3),b.Mb(6,"button",4),b.lc(7,"Back"),b.Lb(),b.Lb(),b.Mb(8,"div",5),b.Mb(9,"form",6),b.Ub("ngSubmit",(function(){return e.submit()})),b.Mb(10,"div",7),b.Mb(11,"label"),b.lc(12,"Actor"),b.Mb(13,"strong"),b.lc(14,"(Form Group)"),b.Lb(),b.Lb(),b.Mb(15,"div",1),b.kc(16,X,5,4,"div",8),b.Lb(),b.Lb(),b.Mb(17,"button",9),b.lc(18,"Submit"),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&t&&(b.zb(4),b.nc("Add Actor to ",null==e.movie?null:e.movie.title,""),b.zb(2),b.ac("routerLink",b.ec(4,R)),b.zb(3),b.ac("formGroup",e.form),b.zb(7),b.ac("ngForOf",e.actors))},directives:[c.d,c.c,o.s,o.k,o.h,r.k,o.a,o.j,o.e],styles:[""]}),t})()},{path:"movie/add",component:N},{path:"movie/edit/:id",component:q}];let _=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(e){return new(e||t)},imports:[[c.f.forChild(Z)],c.f]}),t})();var tt=i("PCNd");i.d(e,"AdminModule",(function(){return et}));let et=(()=>{class t{}return t.\u0275mod=b.Hb({type:t}),t.\u0275inj=b.Gb({factory:function(e){return new(e||t)},providers:[r.d],imports:[[r.b,tt.a,_]]}),t})()}}]);