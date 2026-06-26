function joinParty(){

const replies=[

"🎉 تم قبولك بالحزب.",

"❌ تم رفض الطلب... واضح إنك محترم.",

"😂 ملفك تحت المراجعة منذ سنة 2018.",

"📄 مطلوب شهادة تثبت أنك لا ترد بسرعة.",

"🏛 تم تحويل الطلب للجنة العقوق العليا."

];

alert(replies[Math.floor(Math.random()*replies.length)]);

}

function showRank(){

const ranks=[

"👑 أكبر عاق",

"🥇 العاق الذهبي",

"⭐ العاق الممتاز",

"📄 عاق تحت التدريب",

"🙂 محتاج شوية تدريب"

];

alert(ranks[Math.floor(Math.random()*ranks.length)]);

}
function randomMedal(){

const medals=[

"🥇 وسام تجاهل المكالمات",

"🏆 نيشان الرد بعد يومين",

"😂 وسام أكبر عاق",

"📵 وسام الطيران وضع الصامت",

"☕ وسام القهوة قبل أي طلب"

];

document.getElementById("medal").innerHTML=

medals[Math.floor(Math.random()*medals.length)];

}

function randomQuote(){

const quotes=[

"العجلة من الشيطان... والرد بعدين أحسن.",

"من نام بعد العصر فقد أدى واجبه الوطني.",

"لا تؤجل عمل اليوم... تجاهله حتى يختفي.",

"إذا رن الهاتف فلعله أخطأ الرقم.",

"كل طلب قابل للتأجيل."

];

document.getElementById("quote").innerHTML=

quotes[Math.floor(Math.random()*quotes.length)];

}

randomMedal();
randomQuote();
function createCard(){

const name=document.getElementById("memberName").value.trim();

if(name==""){

alert("اكتب اسمك الأول 😂");

return;

}

document.getElementById("cardName").innerHTML=

"الاسم : "+name;

document.getElementById("memberCard").style.display="block";

}
function calcO2ooq(){

const percent=Math.floor(Math.random()*101);

let text="";

if(percent<20){

text="😇 ملاك... أنت داخل الحزب بالغلط.";

}

else if(percent<40){

text="🙂 لسه محترم.";

}

else if(percent<60){

text="😏 بدأت تتعلم.";

}

else if(percent<80){

text="😂 عضو نشيط بالحزب.";

}

else{

text="👑 أكبر عاق في المنطقة.";

}

document.getElementById("result").innerHTML=

percent+"%<br><br>"+text;

}
function spinWheel(){

const prizes=[

"👑 أكبر عاق",

"🏆 وزير التجاهل",

"📵 ملك وضع الصامت",

"☕ عاشق القهوة",

"😂 محترم بالغلط",

"📞 هارب من المكالمات",

"🛌 وزير القيلولة",

"🚗 صاحب اللوحة 11111",

"🥇 وسام اللامبالاة",

"💤 خبير التأجيل"

];

document.getElementById("wheelResult").innerHTML=

prizes[Math.floor(Math.random()*prizes.length)];

}
