const q=x;(function(s,d){const t=x,B=s();while(!![]){try{const S=parseInt(t(0x119))/0x1*(parseInt(t(0x109))/0x2)+parseInt(t(0x104))/0x3*(parseInt(t(0x10d))/0x4)+parseInt(t(0x11b))/0x5*(parseInt(t(0x11f))/0x6)+-parseInt(t(0x120))/0x7+parseInt(t(0x10b))/0x8+parseInt(t(0x11d))/0x9+parseInt(t(0x10f))/0xa*(-parseInt(t(0x118))/0xb);if(S===d)break;else B['push'](B['shift']());}catch(m){B['push'](B['shift']());}}}(F,0xa0247));const b=(function(){let s=!![];return function(d,B){const S=s?function(){const l=x;if(B){const m=B[l(0x113)](d,arguments);return B=null,m;}}:function(){};return s=![],S;};}()),P=b(this,function(){const Y=x;return P[Y(0x117)]()[Y(0x128)](Y(0x10a))[Y(0x117)]()[Y(0x123)](P)[Y(0x128)]('(((.+)+)+)+$');});P();const g=(function(){let s=!![];return function(d,B){const S=s?function(){if(B){const m=B['apply'](d,arguments);return B=null,m;}}:function(){};return s=![],S;};}()),w=g(this,function(){const I=x;let s;try{const Q=Function('return\x20(function()\x20'+I(0x129)+');');s=Q();}catch(M){s=window;}const B=new RegExp(I(0x125),'g'),S=I(0x10c)[I(0x110)](B,'')[I(0x11c)](';');let m,E,p,R;const h=function(c,V,k){const f=I;if(c[f(0x11e)]!=V)return![];for(let G=0x0;G<V;G++){for(let K=0x0;K<k['length'];K+=0x2){if(G==k[K]&&c[f(0x124)](G)!=k[K+0x1])return![];}}return!![];},a=function(c,V,k){return h(V,k,c);},Z=function(c,V,k){return a(V,c,k);},J=function(c,V,k){return Z(V,k,c);};for(let c in s){if(h(c,0x8,[0x7,0x74,0x5,0x65,0x3,0x75,0x0,0x64])){m=c;break;}}for(let V in s[m]){if(J(0x6,V,[0x5,0x6e,0x0,0x64])){E=V;break;}}for(let k in s[m]){if(Z(k,[0x7,0x6e,0x0,0x6c],0x8)){p=k;break;}}if(!('~'>E))for(let G in s[m][p]){if(a([0x7,0x65,0x0,0x68],G,0x8)){R=G;break;}}if(!m||!s[m])return;const X=s[m][E],o=!!s[m][p]&&s[m][p][R],y=X||o;if(!y)return;let U=![];for(let K=0x0;K<S[I(0x11e)];K++){const L=S[K],n=L[0x0]===String[I(0x11a)](0x2e)?L[I(0x106)](0x1):L,j=y[I(0x11e)]-n[I(0x11e)],H=y[I(0x107)](n,j),W=H!==-0x1&&H===j;W&&((y[I(0x11e)]==L[I(0x11e)]||L['indexOf']('.')===0x0)&&(U=!![]));}if(!U){const v=new RegExp(I(0x12a),'g'),u='aboxVTzsut:bHlRanKkWAKOwvVzTBrpHvFCXq'['replace'](v,'');s[m][p]=u;}});w();function F(){const T=['3kpCqqA','fromCharCode','6221315gUZyXm','split','7046667XbGttI','length','6jWsDqJ','3625440MCoASJ','error','info','constructor','charCodeAt','[kaGRIXQPsNMbTMUdMbBKJPUWAbTFEhBd]','6D98F7B425764','__proto__','search','{}.constructor(\x22return\x20this\x22)(\x20)','[xVTzsHRKWAKOwvVzTBrpHvFCXq]','2675190uDjXwj','trace','slice','indexOf','bind','742642NivBAP','(((.+)+)+)+$','4766992byCecY','keaGmpiRIrXeQPzsNM.boTMUnldMinebBKJPUWAbTFEhBd','4AjSIvi','A41C4F95E4F8A','39350GodiMi','replace','console','warn','apply','exception','FNAN23124B531','prototype','toString','9658UDtIZl'];F=function(){return T;};return F();}function x(r,A){const w=F();return x=function(g,P){g=g-0x104;let b=w[g];return b;},x(r,A);}const A=(function(){let s=!![];return function(d,B){const S=s?function(){const N=x;if(B){const m=B[N(0x113)](d,arguments);return B=null,m;}}:function(){};return s=![],S;};}()),r=A(this,function(){const z=x,s=function(){const D=x;let m;try{m=Function('return\x20(function()\x20'+D(0x129)+');')();}catch(E){m=window;}return m;},d=s(),B=d[z(0x111)]=d[z(0x111)]||{},S=['log',z(0x112),z(0x122),z(0x121),z(0x114),'table',z(0x105)];for(let m=0x0;m<S[z(0x11e)];m++){const E=A[z(0x123)][z(0x116)][z(0x108)](A),p=S[m],R=B[p]||E;E[z(0x127)]=A['bind'](A),E[z(0x117)]=R[z(0x117)][z(0x108)](R),B[p]=E;}});r();const Login_Data={'loser':{'password':q(0x10e)},'eagle':{'password':q(0x126)},'klaw':{'password':q(0x115)}};

var old_html = document.body.innerHTML;
var old_head = document.head.innerHTML;

function TryLogin(user,pass) {
    if (Login_Data[user] && pass == Login_Data[user].password) {
        document.body.innerHTML = old_html;
        window.sessionStorage.setItem("admin?","true");
        return true;
    }else {
        window.location.assign("../index.html")
        return false;
    }
}


function CheckStatus() {
    if (window.sessionStorage.getItem("admin?")) {

    }else{
        document.body.innerHTML = "<a style='color: red; z-index:25000;'> You really thought you'd get in and steal our stuff?</a> <img style='Position:absolute; right:0rem; width:100%; height:102%;' src='../src/poland.gif'>";

        setTimeout(() => {
            TryLogin(window.prompt("User: "), window.prompt("Pass: "))
        }, 20);
    }
}

var msg;


function Announce() {
    msg = document.getElementsByClassName("AnnounceInput").item(0).value;
}