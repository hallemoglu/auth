exports.id=641,exports.ids=[641],exports.modules={5102:(e,i,l)=>{Promise.resolve().then(l.bind(l,3855))},4168:(e,i,l)=>{Promise.resolve().then(l.t.bind(l,3579,23)),Promise.resolve().then(l.t.bind(l,619,23)),Promise.resolve().then(l.t.bind(l,1459,23)),Promise.resolve().then(l.t.bind(l,3456,23)),Promise.resolve().then(l.t.bind(l,847,23)),Promise.resolve().then(l.t.bind(l,7303,23))},3855:(e,i,l)=>{"use strict";l.r(i),l.d(i,{default:()=>z});var a=l(3854),r=l(8375),n=l.n(r),t=l(4218),s=l(1018),m=l(5926);let d=({title:e,type:i,text:l,children:r})=>{let[n,s]=(0,t.useState)(!1),[m,d]=(0,t.useState)(!1);return(0,a.jsxs)("div",{className:"border border-gray-300 rounded-md mb-2",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between px-4 py-2 cursor-pointer",onClick:()=>{s(!n)},children:[a.jsx("div",{className:"font-medium",children:e}),(0,a.jsxs)("div",{className:"transform transition-transform duration-300",children:["dropdown"===i&&a.jsx(a.Fragment,{children:n?a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 rotate-180",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})}):a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),"toggle"===i&&a.jsx("div",{className:`toggle ${n?"toggle-checked":"toggle"}`,onClick:()=>{d(!m)}}),"text"===i&&a.jsx("span",{className:"text-green-500 font-semibold",children:l})]})]}),n&&a.jsx("div",{className:"border-t border-gray-300 px-4 py-2",children:r})]})};var o=l(8212);let k=()=>{let[e,i]=(0,t.useState)("true"),l=(0,t.useRef)(null),[r,n]=(0,t.useState)(!1),s=()=>n(!0),k=()=>n(!1);(0,t.useEffect)(()=>(document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}),[]);let u=e=>{l.current&&!l.current.contains(e.target)&&k()};return(0,t.useEffect)(()=>{let e=localStorage.getItem("cookie");null===e?i("null"):"true"===e&&i("true")},[]),a.jsx(a.Fragment,{children:"null"===e&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"fixed flex flex-col bottom-0 left-0 w-full bg-gray-700 sm:bg-gray-800 text-white sm:flex-row sm:w-full",children:[(0,a.jsxs)("div",{className:"px-5 py-5 sm:w-8/12 overflow-y-auto",children:[a.jsx("h3",{className:"mb-5 text-md font-semibold",children:(0,m.cw)()}),a.jsx("div",{className:"text-xs",dangerouslySetInnerHTML:{__html:(0,m.t7)()}})]}),(0,a.jsxs)("div",{className:"flex flex-row sm:flex-row px-4 py-14 sm:w-4/12 items-center justify-center bg-gray-800 border-t border-white sm:border-none",children:[a.jsx("button",{type:"button",className:"px-6 py-4 text-sm sm:px-8 sm:py-4 sm:text-sm rounded-lg mr-3 text-orange-500",onClick:()=>{s()},children:(0,m.vJ)()}),a.jsx("button",{type:"button",className:"bg-orange-500 px-6 py-4 text-xs rounded-lg sm:px-8 sm:py-4 sm:text-sm",onClick:()=>{i("true"),localStorage.setItem("cookie","true")},children:(0,m.A$)()})]})]}),r&&a.jsx(o.Z,{title:(0,m.wX)(),modalRef:l,children:(0,a.jsxs)("div",{className:"mt-2 text-sm text-justify",children:[a.jsx("div",{className:"text-md",dangerouslySetInnerHTML:{__html:(0,m.jx)()}}),a.jsx("button",{type:"button",className:"mt-5 p-4 border rounded-md font-semibold",children:(0,m.jy)()}),a.jsx("h3",{className:"mt-5 text-lg font-semibold leading-6 text-gray-900 text-left",children:(0,m.$R)()}),(0,a.jsxs)("div",{className:"mt-5",children:[a.jsx(d,{title:(0,m.hk)(),type:"toggle",children:a.jsx("div",{className:"text-md",dangerouslySetInnerHTML:{__html:(0,m.ow)()}})}),a.jsx(d,{title:(0,m.Eo)(),type:"text",text:"Her zaman zorunlu",children:a.jsx("div",{className:"text-md",dangerouslySetInnerHTML:{__html:(0,m.FZ)()}})}),a.jsx(d,{title:(0,m.WD)(),type:"toggle",children:a.jsx("div",{className:"text-md",dangerouslySetInnerHTML:{__html:(0,m.az)()}})}),a.jsx(d,{title:(0,m.lW)(),type:"toggle",children:a.jsx("div",{className:"text-md",dangerouslySetInnerHTML:{__html:(0,m.md)()}})})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-5",children:[a.jsx("button",{type:"button",className:"mt-5 p-4 border rounded-md font-semibold",onClick:()=>{i("false"),localStorage.setItem("cookie","false"),k()},children:(0,m.jm)()}),a.jsx("button",{type:"button",className:"mt-5 p-4 border rounded-md font-semibold",children:(0,m.h_)()})]})]})})]})})};var u=l(2849),b=l.n(u);function z({children:e}){let i=(0,s.usePathname)();return b().configure({showSpinner:!1}),(0,t.useEffect)(()=>(b().done(),()=>{b().start()}),[i]),a.jsx("html",{children:(0,a.jsxs)("body",{className:n().className,children:[a.jsx("div",{className:"flex h-screen overflow-hidden",children:a.jsx("div",{className:"relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden",children:a.jsx("main",{children:a.jsx("div",{className:"mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10",children:e})})})}),a.jsx(k,{})]})})}l(119),l(4047)},8212:(e,i,l)=>{"use strict";l.d(i,{Z:()=>r});var a=l(3854);l(4218);let r=({modalRef:e,title:i,children:l})=>a.jsx("div",{id:"modal",className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-10 ",children:a.jsx("div",{ref:e,className:"bg-white py-10 px-10 h-4/6 w-12/12 xl:w-4/12 lg:w-6/12 md:w-8/12 rounded-lg  overflow-auto",children:(0,a.jsxs)("div",{className:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left",children:[a.jsx("h3",{className:"text-lg font-semibold leading-6 text-gray-900 text-left",children:i}),a.jsx("div",{className:"mt-2",children:a.jsx("p",{className:"text-sm text-gray-500 text-left",children:l})})]})})})},5926:(e,i,l)=>{"use strict";l.d(i,{xD:()=>x,A$:()=>$,t7:()=>Z,jm:()=>C,jy:()=>q,h_:()=>O,vJ:()=>F,$R:()=>G,jx:()=>Y,wX:()=>X,cw:()=>M,Ls:()=>t,Uk:()=>r,IY:()=>b,bi:()=>V,AC:()=>c,az:()=>A,WD:()=>I,NZ:()=>v,lm:()=>N,bp:()=>B,vc:()=>p,De:()=>n,fT:()=>u,dI:()=>W,ky:()=>y,FZ:()=>T,Eo:()=>D,bZ:()=>_,A7:()=>o,lZ:()=>d,YW:()=>m,GR:()=>s,MW:()=>g,Qw:()=>S,jh:()=>w,md:()=>R,lW:()=>L,KI:()=>k,Oo:()=>E,H1:()=>z,DX:()=>h,h2:()=>j,a6:()=>f,ow:()=>H,hk:()=>K,Y8:()=>P});let a=JSON.parse('{"qH":[{"BV":"Ad","CV":"Soyad","Do":"E-Posta Adresi","Bj":"Şifre","DX":"Şifrem Onay","e9":"Yeni Şifre","Ss":"Yeni Şifre Onay"}],"LI":[{"z2":"Kayıt Ol","x4":"Giriş Yap","gF":"Şifre Sıfırlama Bağlantısı G\xf6nder","Oo":"Yeni Bir Hesab Oluştur","dI":"Zaten Bir Hesabım Var","bi":"Şifremi Unuttum"}],"vU":[{"T":"Hata!","y":"Bir hata oluştu. L\xfctfen daha sonra tekrar deneyin."}],"p4":[{"z2":"/auth/register","x4":"/auth/login","gF":"/auth/forgot-password"}],"l4":[{"DX":"\xdcyelik s\xf6zleşmesini","MW":"gizlilik politikasını","vc":"aydınlatma metnini","xD":"ve","NZ":"okudum ve kabul ediyorum.","a6":"\xdcyelik S\xf6zleşmesi","h2":"<h3 class=\'text-md font-semibold mt-5\'>1. Taraflar</h3><p>Bu s\xf6zleşme, bir tarafta WebBizBazaar.com (\'Site\') ve diğer tarafta bu s\xf6zleşmeyi kabul eden kullanıcı (\'\xdcye\') arasında aşağıdaki şartlar \xe7er\xe7evesinde d\xfczenlenmiştir. </p><h3 class=\'text-md font-semibold mt-5\'>2. S\xf6zleşme Konusu</h3><p>Bu s\xf6zleşmenin konusu, \xdcye\'nin Site \xfczerinden elektronik ticaret yapabilmesi i\xe7in gerekli olan şartları belirlemektir. \xdcye, Site\'ye \xfcye olmak ve bu s\xf6zleşmeyi kabul etmekle, Site\'nin belirlediği şartlara uyacağını kabul ve taahh\xfct eder. </p><h3 class=\'text-md font-semibold mt-5\'>3. \xdcyelik Koşulları</h3><p>3.1. \xdcye olabilmek i\xe7in, Site\'nin \xfcyelik formunu doldurmak ve gerekli bilgileri doğru ve eksiksiz olarak vermek gereklidir. </p><p>3.2. \xdcye, \xfcyelik işlemlerini tamamladıktan sonra oluşturulan kullanıcı adı ve şifresinin g\xfcvenliğinden kendisi sorumludur. \xdcye, kullanıcı adı ve şifresini başka kişilerle paylaşmamalıdır. </p><p>3.3. \xdcye, Site \xfczerinden ger\xe7ekleştirdiği işlemlerde ge\xe7erli olan yasal mevzuata ve iş bu s\xf6zleşmeye uymakla y\xfck\xfcml\xfcd\xfcr. </p><h3 class=\'text-md font-semibold mt-5\'>4. \xdcr\xfcn ve Hizmetler</h3><p>4.1. Site \xfczerinden sunulan \xfcr\xfcn ve hizmetlerin fiyatları, \xf6zellikleri ve satış koşulları Site \xfczerinde belirtilmiştir. \xdcye, bu koşulları kabul ederek alışveriş yapmayı taahh\xfct eder. </p><h3 class=\'text-md font-semibold mt-5\'>5. Gizlilik Politikası</h3><p>5.1. \xdcye, Site\'nin gizlilik politikasını kabul eder ve kişisel verilerinin bu politikaya uygun olarak kullanılmasına onay verir. </p><h3 class=\'text-md font-semibold mt-5\'>6. Sorumluluklar</h3><p>6.1. Site, teknik sorunlar veya hizmet aksaklıkları nedeniyle \xdcye\'nin uğrayabileceği zararlardan sorumlu değildir. </p><p>6.2. \xdcye, Site \xfczerinden yaptığı işlemlerde doğru ve g\xfcncel bilgileri kullanmakla y\xfck\xfcml\xfcd\xfcr. Yanlış veya eksik bilgi verilmesi durumunda doğacak zararlardan \xdcye sorumludur. </p><h3 class=\'text-md font-semibold mt-5\'>7. İletişim</h3><p>7.1. \xdcye, Site ile iletişim kurmak i\xe7in info@webbizbazaar.com adresini kullanabilir. </p><h3 class=\'text-md font-semibold mt-5\'>8. Değişiklikler</h3><p>8.1. Site, bu s\xf6zleşmede her zaman değişiklik yapma hakkını saklı tutar. Değişiklikler, Site \xfczerinden yayınlanarak ge\xe7erlilik kazanır. </p><h3 class=\'text-md font-semibold mt-5\'>9. Kabul Edilmesi</h3><p>\xdcye, bu s\xf6zleşmeyi kabul etmekle, Site\'nin belirlediği şartlara uyacağını kabul ve taahh\xfct eder.</p>","jh":"Gizlilik Politikası","Qw":"<p>Bu gizlilik politikası, WebBizBazaar.com (\'Site\') tarafından işletilen e-ticaret platformunun kullanıcıları (\'\xdcyeler\') tarafından sağlanan kişisel verilerin nasıl kullanılacağı ve korunacağı hakkında bilgi vermektedir.</p><h3 class=\'text-md font-semibold mt-5\'>1. Toplanan Kişisel Veriler</h3><p>1.1. Site, \xdcyeler tarafından sağlanan kişisel verileri (ad, soyad, e-posta adresi, telefon numarası, adres gibi) işlemektedir. </p><p>1.2. Site, \xdcyeler tarafından sağlanan kişisel verileri, \xdcyelik S\xf6zleşmesi\'nde belirtilen ama\xe7lar doğrultusunda kullanmaktadır. </p><h3 class=\'text-md font-semibold mt-5\'>2. Kişisel Verilerin Kullanımı</h3><p>2.1. Site, \xdcyelerin kişisel verilerini, \xdcyelik S\xf6zleşmesi\'nde belirtilen hizmetlerin sağlanması, \xfcr\xfcnlerin satışı, iletişim, pazarlama faaliyetleri ve yasal y\xfck\xfcml\xfcl\xfcklerini yerine getirmek i\xe7in kullanmaktadır. </p><h3 class=\'text-md font-semibold mt-5\'>3. Kişisel Verilerin Korunması</h3><p>3.1. Site, \xdcyelerin kişisel verilerini g\xfcvende tutmak i\xe7in gerekli teknik ve idari \xf6nlemleri almaktadır. </p><p>3.2. Site, \xdcyelerin kişisel verilerini \xfc\xe7\xfcnc\xfc şahıslarla paylaşmamaktadır, ancak yasal zorunluluklar veya yetkili makamların talepleri doğrultusunda paylaşma hakkını saklı tutar. </p><h3 class=\'text-md font-semibold mt-5\'>4. \xc7erezler</h3><p>4.1. Site, \xe7erezler kullanarak \xdcyelerin Site\'yi nasıl kullandığını analiz etmekte ve Site\'yi daha iyi hale getirmek i\xe7in \xe7erezleri kullanmaktadır. </p><p>4.2. \xdcyeler, tarayıcı ayarlarından \xe7erezleri reddedebilir veya \xe7erez kullanımı hakkında bilgilendirme alabilirler. </p><h3 class=\'text-md font-semibold mt-5\'>5. Değişiklikler</h3><p>5.1. Site, bu gizlilik politikasını her zaman değiştirme hakkını saklı tutar. Değişiklikler, Site \xfczerinden yayınlanarak ge\xe7erlilik kazanır. </p><h3 class=\'text-md font-semibold mt-5\'>6. Kabul Edilmesi</h3><p>Bu gizlilik politikasını kabul etmek, Site\'nin belirlediği şartlara uyacağınızı kabul ve taahh\xfct ettiğiniz anlamına gelir. </p>","bp":"Kişisel Verilerin Korunması Aydınlatma Metni","lm":"<h3 class=\'text-md font-semibold mt-5\'>1. Veri Sorumlusu<h3><p>Bu metinde, webbizbazaar.com olarak (\'biz\', \'bizim\' veya \'sayfa sahibi\' olarak da anılacaktır) kişisel verilerinizin işlenmesi ile ilgili sizinle paylaşmak istediğimiz bilgileri bulabilirsiniz. </p><h3 class=\'text-md font-semibold mt-5\'>2. Kişisel Verilerin İşlenme Amacı<h3><p>Kişisel verileriniz, hizmetlerimizi sunmak, iyileştirmek ve geliştirmek, kullanıcı deneyiminizi kişiselleştirmek, g\xfcvenliği sağlamak, yasal y\xfck\xfcml\xfcl\xfcklerimizi yerine getirmek ve pazarlama iletişimlerimizi g\xf6ndermek gibi ama\xe7larla işlenebilir. </p><h3 class=\'text-md font-semibold mt-5\'>3. Toplanan Kişisel Veriler<h3><p>Adınız, soyadınız, e-posta adresiniz, telefon numaranız, adresiniz gibi kimlik bilgileriniz, kullanıcı adı, şifre gibi giriş bilgileriniz, IP adresi gibi teknik bilgileriniz ve \xe7erezler aracılığıyla toplanan diğer veriler. </p><h3 class=\'text-md font-semibold mt-5\'>4. Kişisel Verilerin Paylaşılması<h3><p>Kişisel verileriniz, yasal y\xfck\xfcml\xfcl\xfcklerimizi yerine getirmek, hizmetlerimizi sunmak i\xe7in iş ortaklarımızla paylaşılabilir. Ayrıca, hizmetlerimizi iyileştirmek ve pazarlama iletişimlerimizi g\xf6ndermek amacıyla da kullanılabilir. </p><h3 class=\'text-md font-semibold mt-5\'>5. Kişisel Verilerin G\xfcvenliği<h3><p>Kişisel verilerinizin g\xfcvenliği i\xe7in gerekli \xf6nlemleri almak i\xe7in \xe7aba g\xf6steriyoruz. Ancak, internet \xfczerinden iletilen verilerin tam g\xfcvenliği garanti edilemez. </p><h3 class=\'text-md font-semibold mt-5\'>6. Kişisel Verilere Erişim ve G\xfcncelleme<h3><p>Kişisel verilerinize erişme, d\xfczeltme ve silme hakkına sahipsiniz. Bu haklarınızı kullanmak i\xe7in bizimle iletişime ge\xe7ebilirsiniz. </p><h3 class=\'text-md font-semibold mt-5\'>7. \xc7erezler<h3><p>\xc7erezler, web sitemizi daha etkin bir şekilde kullanmanıza yardımcı olmak i\xe7in kullanılır. \xc7erezler hakkında daha fazla bilgi i\xe7in \xc7erez Politikamızı ziyaret edebilirsiniz. </p><h3 class=\'text-md font-semibold mt-5\'>8. Değişiklikler<h3><p>Bu aydınlatma metni zaman zaman g\xfcncellenebilir. G\xfcncel versiyonu web sitemizde yayınlayarak size bildireceğiz. </p><h3 class=\'text-md font-semibold mt-5\'>9. İletişim<h3><p>Kişisel verilerinizle ilgili herhangi bir sorunuz varsa, l\xfctfen bizimle iletişime ge\xe7mekten \xe7ekinmeyin: info@webbizbazaar.com</p><h3 class=\'text-md font-semibold mt-5\'>10. Kabul Edilmesi<h3><p>Bu aydınlatma metnini kabul etmek, kişisel verilerinizin bu şekilde işlenmesine onay verdiğiniz anlamına gelir. </p>","hk":"Hedef Ama\xe7lı Tanımlama Bilgileri","ow":"Bu tanımlama bilgileri, sitemizde reklam ortaklarımız tarafından ayarlanır. Bunlar, ilgili şirketler tarafından ilgi alanları profilinizi oluşturmak ve diğer sitelerde alakalı reklamlar g\xf6stermek i\xe7in kullanılabilir. Benzersiz olarak tarayıcınızı ve cihazınızı belirleyerek \xe7alışırlar. Bu tanımlama bilgilerine izin vermezseniz farklı sitelerde size \xf6zel reklam deneyimi sunamayız.<br/><a href=\'#\' className=\'text-orange-500\'>Tanımlama Bilgileri Ayrıntıları</a>","Eo":"Zorunlu Tanımlama Bilgileri","FZ":"Bu tanımlama bilgileri, web sitesinin \xe7alışması i\xe7in gereklidir ve sistemlerimizde kapatılamaz. Bunlar genellikle yalnızca sizin işlemlerinizi ger\xe7ekleştirmek i\xe7in ayarlanmıştır. Bu işlemler, gizlilik tercihlerinizi belirlemek, oturum a\xe7mak veya form doldurmak gibi hizmet taleplerinizi i\xe7erir. Tarayıcınızı, bu tanımlama bilgilerini engelleyecek veya bunlar hakkında sizi uyaracak şekilde ayarlayabilirsiniz ancak bu durumda sitenin bazı b\xf6l\xfcmleri \xe7alışmayabilir.br/><a href=\'#\' className=\'text-orange-500\'>Tanımlama Bilgileri Ayrıntıları</a>","WD":"İşlevsel Tanımlama Bilgileri","az":"Bu tanımlama bilgileri, videolar ile canlı sohbet gibi gelişmiş işlevler ve kişiselleştirme olanağı sunabilmemizi sağlar. Bunlar, bizim tarafımızdan veya sayfalarımızda hizmetlerinden faydalandığımız \xfc\xe7\xfcnc\xfc taraf sağlayıcılarca ayarlanabilir. Bu tanımlama bilgilerine izin vermezseniz bu işlevlerden t\xfcm\xfc veya bazıları doğru şekilde \xe7alışmayabilir.br/><a href=\'#\' className=\'text-orange-500\'>Tanımlama Bilgileri Ayrıntıları</a>","lW":"Profesyonel Tanımlama Bilgileri","md":"Bu tanımlama bilgileri, sitemizin performansını \xf6l\xe7ebilmemiz ve iyileştirebilmemiz i\xe7in sitenin ziyaret edilme sayısını ve trafik kaynaklarını sayabilmemizi sağlar. Hangi sayfaların en fazla ve en az ziyaret edildiğini ve ziyaret\xe7ilerin sitede nasıl gezindiklerini \xf6ğrenmemize yardımcı olurlar. Bu tanımlama bilgilerinin topladığı t\xfcm bilgiler derlenir ve bu nedenle anonimdir. Bu tanımlama bilgilerine izin vermezseniz sitemizi ne zaman ziyaret ettiğinizi bilemeyiz.br/><a href=\'#\' className=\'text-orange-500\'>Tanımlama Bilgileri Ayrıntıları</a>"}],"pR":[{"cw":"Daha iyi bir deneyim i\xe7in izninizi istiyoruz.","t7":"İnternet sitemizde deneyimlerinizi kişiselleştirmek amacıyla \xe7erezler kullanılmakta olup, izin vermeniz halinde zorunlu \xe7erezler haricindeki \xe7erezlerle toplanan veriler işlenmekte ve t\xfcm \xe7erezler yurt dışında yerleşik altyapı tedarik\xe7ilerimize aktarılmaktadır. \xc7erez ayarlarından reddet se\xe7eneğine tıklamanız halinde tercih ve ilgi alanlarına y\xf6nelik maalesef size \xf6zel bir deneyim sunamayacağız. \xc7erezler bakımından kişisel tercihlerinizi, se\xe7eneklerde yer alan \xe7erez ayarları kısmından y\xf6netebilir, \xe7erezlerle ilgili detaylı bilgiye buradan ulaşabilirsiniz: <a href=\'https://yardim.webbizbazaar.com\' class=\'font-semibold underline-offset-1 text-orange-500\'>\xc7erez Politikası</a>","vJ":"\xc7erez Ayarları","A$":"Kabul Et","jm":"\xc7erez Ayarlarını Reddet","h_":"\xc7erez Ayarlarını Kaydet","wX":"\xc7erez Politikası","jx":"Herhangi bir web sitesini ziyaret ettiğinizde site, tarayıcınızdan genellikle tanımlama bilgileri bi\xe7iminde olmak \xfczere bilgiler alabilir veya depolayabilir. Bu bilgiler; siz, tercihleriniz ya da cihazınız hakkında olabilir veya siteyi beklediğiniz şekilde \xe7alıştırmak \xfczere kullanılabilir. Bilgiler \xe7oğunlukla sizi doğrudan tanımlamaz ancak size daha kişiselleştirilmiş bir web deneyimi sunabilir. Bazı tanımlama bilgisi t\xfcrlerine izin vermemeyi se\xe7ebilirsiniz. Daha fazla bilgi edinmek ve varsayılan ayarlarımızı değiştirmek i\xe7in farklı kategori başlıklarına tıklayın. Bununla birlikte, bazı tanımlama bilgisi t\xfcrlerini engellediğinizde site deneyiminiz ve sunabildiğimiz hizmetler bu durumdan etkilenebilir.<p class=\'mt-2\'><a href=\'https://yardim.webbizbazaar.com\' class=\'font-semibold text-orange-500\'>Daha Fazla Bilgi</a></p>","jy":"T\xfcm\xfcn\xfc Kabul Et","$R":"Onay Tercihlerini Y\xf6net"}]}'),r=()=>a.qH[0].BV,n=()=>a.qH[0].CV,t=()=>a.qH[0].Do,s=()=>a.qH[0].Bj,m=()=>a.qH[0].DX,d=()=>a.qH[0].e9,o=()=>a.qH[0].Ss,k=()=>a.LI[0].z2,u=()=>a.LI[0].x4,b=()=>a.LI[0].gF,z=()=>a.LI[0].Oo,y=()=>a.LI[0].dI,c=()=>a.LI[0].bi,h=()=>a.l4[0].DX,g=()=>a.l4[0].MW,p=()=>a.l4[0].vc,x=()=>a.l4[0].xD,v=()=>a.l4[0].NZ,f=()=>a.l4[0].a6,j=()=>a.l4[0].h2,w=()=>a.l4[0].jh,S=()=>a.l4[0].Qw,B=()=>a.l4[0].bp,N=()=>a.l4[0].lm,K=()=>a.l4[0].hk,H=()=>a.l4[0].ow,D=()=>a.l4[0].Eo,T=()=>a.l4[0].FZ,I=()=>a.l4[0].WD,A=()=>a.l4[0].az,L=()=>a.l4[0].lW,R=()=>a.l4[0].md,P=()=>a.vU[0].T,_=()=>a.vU[0].y,E=()=>a.p4[0].z2,W=()=>a.p4[0].x4,V=()=>a.p4[0].gF,M=()=>a.pR[0].cw,Z=()=>a.pR[0].t7,F=()=>a.pR[0].vJ,$=()=>a.pR[0].A$,C=()=>a.pR[0].jm,O=()=>a.pR[0].h_,X=()=>a.pR[0].wX,Y=()=>a.pR[0].jx,q=()=>a.pR[0].jy,G=()=>a.pR[0].$R},5345:(e,i,l)=>{"use strict";l.r(i),l.d(i,{$$typeof:()=>t,__esModule:()=>n,default:()=>m});var a=l(5153);let r=(0,a.createProxy)(String.raw`E:\gitHub\auth\app\layout.tsx`),{__esModule:n,$$typeof:t}=r,s=r.default,m=s},4047:()=>{}};