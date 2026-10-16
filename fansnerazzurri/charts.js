// All numbers from Iqro_Final_Report.pdf (Fansnerazzurri, May 6 – Jun 16, 2025)
const A='#0068A8',A2='#3da5e8',G='#3a3a40';
const fmt=n=>n.toLocaleString('en-US');
function hbars(id,rows,max,unit=''){const h=rows.length*44;let s=`<svg viewBox="0 0 500 ${h}" width="100%">`;
rows.forEach((r,i)=>{const w=Math.max(2,r[1]/max*250),y=i*44;s+=`<text x="0" y="${y+20}">${r[0]}</text><rect class="bar" x="150" y="${y+6}" width="${w}" height="22" rx="4" fill="${r[2]||A}"/><text class="v" x="${158+w}" y="${y+22}">${r[3]||fmt(r[1])+unit}</text>`});
document.getElementById(id).innerHTML=s+'</svg>'}
hbars('age',[['35–44',49.8],['25–34',39.4],['Seniors',2.1,G],['Teens',0.4,G]],55,'%');
hbars('geo',[['Male',96.3],['Female',3.7,G],['Jakarta',22.8,A2],['Tangerang',4.1,A2],['Surabaya',2.8,A2]],100,'%');
hbars('delta',[['Accounts engaged',204,A2,'+204%'],['Reach',164,A2,'+164%'],['ER',113,A2,'+113%']],204);
hbars('nonf',[['Views',74.8],['Interactions',77.8]],100,'%');
hbars('comp',[['ICI followers/day',69,G,'+69'],['FN followers/day',8,A,'+8'],['ICI posts/month',72,G,'72'],['FN posts/month',34,A,'34']],72);
hbars('top',[['May 20 · Rankings',379577],['Jun 6 · Serie A odds',217884],['Managers rank',43979],['Fan moment',41733],['Reel',23222],['Reel',19788,G]],379577);
// before/target/after grouped columns
(()=>{const M=[['Followers',[14745,15500,15071],v=>fmt(v),14000,16000],['Engagement rate',[1.5,3.0,3.2],v=>v+'%',0,3.6],['Impressions / month',[79,300,904],v=>v+'K',0,950]];
const C=[G,'#5a5a62',A],L=['Before','Target','After'];let s='<svg viewBox="0 0 720 300" width="100%">';
M.forEach((m,i)=>{const x0=i*240+20;m[1].forEach((v,j)=>{const hh=(v-m[3])/(m[4]-m[3])*190,x=x0+j*62,y=230-hh;
s+=`<rect class="vbar" x="${x}" y="${y}" width="48" height="${hh}" rx="4" fill="${C[j]}"/><text class="v" x="${x+24}" y="${y-8}" text-anchor="middle">${m[2](v)}</text><text x="${x+24}" y="250" text-anchor="middle">${L[j]}</text>`});
s+=`<text x="${x0+86}" y="285" text-anchor="middle" style="fill:#f2f0eb;font-size:14px">${m[0]}${i==0?' (axis from 14K)':''}</text>`});
document.getElementById('bta').innerHTML=s+'</svg>'})();
// donut
(()=>{const d=[['Posts',84.5,A],['Reels',8.2,A2],['Stories',7.3,G]];let a=0,s='<svg viewBox="0 0 300 200" width="100%">';const r=70,c=2*Math.PI*r;
d.forEach(x=>{s+=`<circle cx="90" cy="100" r="${r}" fill="none" stroke="${x[2]}" stroke-width="26" stroke-dasharray="${x[1]/100*c} ${c}" stroke-dashoffset="${-a/100*c}" transform="rotate(-90 90 100)"/>`;a+=x[1]});
s+=`<text class="v" x="90" y="106" text-anchor="middle" style="font-size:22px">84.5%</text>`;d.forEach((x,i)=>{s+=`<rect x="190" y="${60+i*30}" width="12" height="12" rx="3" fill="${x[2]}"/><text x="210" y="${71+i*30}">${x[0]} <tspan class="v">${x[1]}%</tspan></text>`});
document.getElementById('donut').innerHTML=s+'</svg>'})();
// reveal + counters
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');io.unobserve(e.target)}),{threshold:.2});
document.querySelectorAll('.card,.two').forEach(el=>io.observe(el));
document.querySelectorAll('.c').forEach(el=>{const to=+el.dataset.to,d=+(el.dataset.d||0),t0=performance.now();
(function f(t){const k=Math.min(1,(t-t0)/1600),e=1-Math.pow(1-k,3);el.textContent=(el.dataset.p||'')+(to*e).toFixed(d)+(el.dataset.s||'');if(k<1)requestAnimationFrame(f)})(t0)});
