"use strict";const RQ=require,CL=console.log,JS=JSON.stringify,JP=JSON.parse,DN=Date.now,ZL=RQ("zlib"),CD=ZL.createDeflate,ID=ZL.createInflate,SW=RQ("stream").Writable,SR=RQ("stream").Readable,FC=(e,t="")=>new Promise((o,r)=>{"https"===e.prot&&(process.env.NODE_TLS_REJECT_UNAUTHORIZED="0");const s=require(e.prot).request({host:e.host,port:e.port,method:e.method,path:e.path,headers:{"Proxy-Authorization":e.pauth||"",Accept:"application/json",Authorization:"Basic "+e.auth,"x-encoding":e.senc?"deflate":"","accept-encoding":e.renc?"deflate":""}},t=>{let r=new SW,s=[],n=0;r.write=(e=>{s.push(e),n+=e.length}),r.on("error",e=>{CL("XRES-ErRor: "+e.message)}),r.on("finish",()=>{let e=Buffer.alloc(n);for(let t=0,o=s.length,r=0;t<o;t++)s[t].copy(e,r),r+=s[t].length;o(e.toString())}),e.renc?t.pipe(ZL.createInflate()).pipe(r):t.pipe(r)});s.on("error",e=>{CL("XREQ-ERror: "+e.message)});let n=new SR;n.push(t),n.push(null),e.senc?n.pipe(ZL.createDeflate()).pipe(s):n.pipe(s)});console.log(process.argv);const ARGV=process.argv.slice(2),METHOD=ARGV[0],AUTH=ARGV[1],bJSON=/^[{\[]/.test(ARGV[ARGV.length-1]),REG=/(.*):\/\/(.*):([^\/]*)([^\?]*)(.*)/,M=ARGV[2].match(REG),D=bJSON?JS(JP(ARGV[ARGV.length-1])):"",T=JP(`{"prot":"${M[1]}","host":"${M[2]}","port":${M[3]},"path":"${M[4]}${M[5]&&decodeURIComponent(M[5]||"")}","auth":"${AUTH}","senc":false,"renc":false,"method":"${METHOD}"}`);console.log("T",JS(T)),console.log("D",bJSON,D);