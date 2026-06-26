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
