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
