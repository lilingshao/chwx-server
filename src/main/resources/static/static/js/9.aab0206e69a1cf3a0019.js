webpackJsonp([9],{"1Gow":function(e,t){},hzgs:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("bOdI"),i=n.n(a),o=n("mvHQ"),l=n.n(o),r={data:function(){return{keywords:"",menuName:"",treeLoading:!1,dialogVisible:!1,allMenus:[],pDep:"",treeData:[],defaultProps:{label:"name",isLeaf:"leaf",children:"children"},menuForm:{name:"",enabled:!1,type:[],path:"",url:"",component:"",iconCls:""},rules:{name:[{required:!0,message:"请输入菜单名称",trigger:"blur"},{min:3,max:100,trigger:"blur"}]}}},mounted:function(){this.treeLoading=!0,this.loadTreeData(),this.loadAllDeps()},watch:{keywords:function(e){this.$refs.tree.filter(e)}},methods:{filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},handleNodeClick:function(e){console.log("click data:"+l()(e)),this.menuForm.id=e.id,this.menuForm.name=e.name,this.menuForm.path=e.path,this.menuForm.url=e.url,this.menuForm.component=e.component,this.menuForm.iconCls=e.iconCls,this.menuForm.parentId=e.parentId,this.menuForm.enabled=e.enabled,this.menuForm.upDep=e.parentId},onSubmit:function(){console.log("submit!")},loadTreeData:function(){var e=this;this.getRequest("/api/menu/menuTree/-1").then(function(t){console.log("resp loadTreeData："+l()(t.data)),e.treeLoading=!1,t&&200==t.status&&(e.treeData=t.data)})},setDataToTree:function(e,t,n){console.log("respData："+l()(n));for(var a=0;a<e.length;a++){var i=e[a];if(i.id==t)return void(e[a].children=e[a].children.concat(n));this.setDataToTree(i.children,t,n)}},addDep:function(){var e=this;this.dialogVisible=!1,this.treeLoading=!0,this.postRequestJson("/api/system/basic/dep",{name:this.menuName,parentId:this.pDep}).then(function(t){if(e.treeLoading=!1,t&&200==t.status){var n=t.data;e.menuName="",e.$message({type:n.status,message:"添加成功!"}),e.setDataToTree(e.treeData,e.pDep,n.msg)}})},loadAllDeps:function(){var e=this;this.getRequest("/api/menu/all").then(function(t){t&&200==t.status&&(console.log("resp all："+t.data),e.allMenus=t.data)})},showAddDepView:function(e,t){this.loadAllDeps(),this.dialogVisible=!0,this.pDep=e.id,t.stopPropagation()},deleteDep:function(e,t){var n=this;e.children.length>0?this.$message({message:"该菜单下尚有其他子菜单，不能被删除!",type:"warning"}):this.$confirm("删除["+e.name+"]菜单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.treeLoading=!0,n.deleteRequest("/system/basic/dep/"+e.id).then(function(t){if(n.treeLoading=!1,t&&200==t.status){var a=t.data;n.$message({message:a.msg,type:a.status}),n.deleteLocalDep(n.treeData,e)}})}).catch(function(){n.$message({type:"info",message:"已取消删除"})}),t.stopPropagation()},deleteLocalDep:function(e,t){for(var n=0;n<e.length;n++){var a=e[n];if(a.id==t.id)return void e.splice(n,1);this.deleteLocalDep(a.children,t)}},renderContent:function(e,t){var n,a,o=this,l=t.node,r=t.data;t.store;return e("span",{style:"flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;"},[e("span",[e("span",[l.label])]),e("span",[e("el-button",(n={style:"font-size: 12px;",attrs:{type:"primary",size:"mini"}},i()(n,"style","padding:3px"),i()(n,"on",{click:function(){return o.showAddDepView(r,event)}}),n),["添加菜单"]),e("el-button",(a={style:"font-size: 12px;",attrs:{type:"danger",size:"mini"}},i()(a,"style","padding:3px"),i()(a,"on",{click:function(){return o.deleteDep(r,event)}}),a),["删除菜单"])])])}}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticStyle:{"margin-top":"15px"}},[n("el-col",{attrs:{span:12}},[n("div",[n("div",{staticStyle:{"text-align":"left"}},[n("el-input",{staticStyle:{width:"500px",margin:"0px",padding:"0px"},attrs:{placeholder:"输入部门名称搜索菜单...",size:"mini","prefix-icon":"el-icon-search"},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}})],1),e._v(" "),n("div",[n("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:e.treeLoading,expression:"treeLoading"}],ref:"tree",staticStyle:{width:"500px","margin-top":"10px"},attrs:{props:e.defaultProps,data:e.treeData,"filter-node-method":e.filterNode,"default-expand-all":"","highlight-current":"","expand-on-click-node":!1,"render-content":e.renderContent},on:{"node-click":e.handleNodeClick}}),e._v(" "),n("div",{staticStyle:{"text-align":"left"}},[n("el-dialog",{attrs:{title:"添加菜单",visible:e.dialogVisible,width:"25%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("div",[n("span",[e._v("上级菜单")]),e._v(" "),n("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择",size:"mini"},model:{value:e.pDep,callback:function(t){e.pDep=t},expression:"pDep"}},e._l(e.allMenus,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),n("div",{staticStyle:{"margin-top":"10px"}},[n("span",[e._v("菜单名称")]),e._v(" "),n("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:"请输入菜单名称..."},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.addDep(t):null}},model:{value:e.menuName,callback:function(t){e.menuName=t},expression:"menuName"}})],1),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.addDep}},[e._v("添加")])],1)])],1)],1)])]),e._v(" "),n("el-col",{attrs:{span:12}},[n("h3",[e._v("修改菜单")]),e._v(" "),n("el-form",{ref:"menuForm",attrs:{model:e.menuForm,rules:e.rules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"菜单名称：",prop:"name"}},[n("el-input",{model:{value:e.menuForm.name,callback:function(t){e.$set(e.menuForm,"name",t)},expression:"menuForm.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"父菜单：",prop:"parentId"}},[n("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择"},model:{value:e.menuForm.upDep,callback:function(t){e.$set(e.menuForm,"upDep",t)},expression:"menuForm.upDep"}},e._l(e.allMenus,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"路径：",prop:"path"}},[n("el-input",{model:{value:e.menuForm.path,callback:function(t){e.$set(e.menuForm,"path",t)},expression:"menuForm.path"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"url：",prop:"url"}},[n("el-input",{model:{value:e.menuForm.url,callback:function(t){e.$set(e.menuForm,"url",t)},expression:"menuForm.url"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"组件名称：",prop:"component"}},[n("el-input",{model:{value:e.menuForm.component,callback:function(t){e.$set(e.menuForm,"component",t)},expression:"menuForm.component"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"图标：",prop:"iconCls"}},[n("el-input",{model:{value:e.menuForm.iconCls,callback:function(t){e.$set(e.menuForm,"iconCls",t)},expression:"menuForm.iconCls"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"是否启用：",prop:"enabled"}},[n("el-switch",{model:{value:e.menuForm.enabled,callback:function(t){e.$set(e.menuForm,"enabled",t)},expression:"menuForm.enabled"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("更新")]),e._v(" "),n("el-button",[e._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]};var u=n("VU/8")(r,s,!1,function(e){n("1Gow")},null,null);t.default=u.exports},tcfB:function(e,t,n){var a={"./MenuBasic.vue":"hzgs"};function i(e){return n(o(e))}function o(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id="tcfB"}});
//# sourceMappingURL=9.aab0206e69a1cf3a0019.js.map