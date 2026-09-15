/*
 * words.en.js — DailyMurderSudoku English dictionary.
 *
 * Loaded as a plain script in the browser (the `gameWords` global) and required in
 * Node through the guarded CommonJS export at the bottom, so wording is measured
 * and audited against exactly the strings the player sees.
 *
 * Id ranges
 *   0-30      GameLib shell strings
 *   100-177   game shell strings
 *   200-299   DailyMurderSudoku interface
 *   300-399   ordinals, directions, edges, pronouns, numbers
 *   400-499   whole-sentence clue templates and descriptor phrases
 *   500-599   predicate fragments
 *   600-699   terrain names
 *   700-799   object names
 *   800-899   trait names
 *   1000+     scene, room and role names authored in sources/scenes.json
 *
 * Templates are raw: `#N` placeholders are substituted by the renderer in a single
 * pass with a function replacer. Never pre-substitute here.
 *
 * Singular trait names (800-819) and object names (700-799) are interpolated into
 * templates that supply a bare `a` — "a #1", "on a #1" — and the template cannot
 * know when English would need "an", so every one of them must begin with a
 * consonant sound (renderer.test.js enforces it). Pick different wording rather
 * than adding an article to the name: the same words appear in article-free
 * templates such as 430.
 */
var gameWords = {
    0: 'না',
    1: 'হ্যাঁ',
    2: 'বাতিল',
    3: 'বন্ধ করুন',
    4: 'খেলুন',
    5: 'বিরতি',
    6: 'চালিয়ে যান',
    7: 'সাহায্য',
    8: 'স্কোর',
    9: 'স্তর',
    10: 'মেনু',
    11: 'সঙ্গীত',
    12: 'শব্দ প্রভাব',
    13: 'Par',
    14: 'Please rotate your device',
    15: 'Best score',
    16: 'Highscores',
    17: 'Submit score',
    18: 'আরও গেম',
    19: 'নতুন গেম শুরু করুন',
    20: 'আগের গেম চালিয়ে যান',
    22: 'রিসেট',
    23: 'Click the reset button to completely reset your progress in the game.',
    30: 'Toggle fullscreen',

    100: 'কেস',
    101: 'সময়',
    102: 'ইঙ্গিত',
    103: 'কেস রিস্টার্ট করুন',
    104: 'ডেইলি মার্ডার সুডোকু কীভাবে খেলবেন',

    105: '<p>সবাই বিল্ডিংয়ে ছিল: সন্দেহভাজনরা এবং একজন শিকার। বোর্ডের প্রতিটি ব্যক্তিকে—শিকারকেও—এমনভাবে রাখুন যাতে সমস্ত ইঙ্গিত সত্য হয়।</p>' +
        '<ul>' +
        '<li>কোনো দুজন ব্যক্তি একই সারিতে থাকবে না এবং একই কলামেও থাকবে না।</li>' +
        '<li>শিকারের রুমে ঠিক দুজন ব্যক্তি থাকবে: শিকার এবং একজন সন্দেহভাজন। সেই সন্দেহভাজনই খুনি।</li>' +
        '<li>প্রতিটি সন্দেহভাজন কার্ডে সেই ব্যক্তির সম্পর্কে একটি ইঙ্গিত থাকে।</li>' +
        '</ul>' +
        '<p>একজন ব্যক্তিকে নির্বাচন করুন, তারপর নোট হিসেবে তাদের অক্ষর পেন্সিল দিয়ে লিখতে একটি সেলে আলতো চাপ দিন, অথবা তাদের স্থাপন করতে সেলটি চেপে ধরে রাখুন। সবাই স্থাপন করা হয়ে গেলে, রায়টি নিজে থেকেই চলে আসবে।</p>',

    107: 'অভিনন্দন',
    108: 'পরবর্তী',
    109: 'আজকের কেস প্রিন্ট করুন',
    110: 'আপনি কি নিশ্চিত যে আপনি এই কেসটি রিসেট করতে চান?',
    111: 'আবার চেষ্টা করুন',
    112: 'তারিখ',
    114: 'অন্য কেস নির্বাচন করতে তারিখে ক্লিক করুন।',
    115: 'আপনি ১টি ভুল করেছেন।',
    116: 'আপনি #1টি ভুল করেছেন।',

    117: 'খুব সহজ',
    118: 'সহজ',
    119: 'মাঝারি',
    120: 'কঠিন',
    121: 'বিশেষজ্ঞ',

    125: 'http://www.htmlgames.com-এ অনলাইনে আরও গেম খেলুন',
    126: '#1-এর জন্য ডেইলি মার্ডার সুডোকু',

    130: 'জানুয়ারি',
    131: 'ফেব্রুয়ারি',
    132: 'মার্চ',
    133: 'এপ্রিল',
    134: 'মে',
    135: 'জুন',
    136: 'জুলাই',
    137: 'আগস্ট',
    138: 'সেপ্টেম্বর',
    139: 'অক্টোবর',
    140: 'নভেম্বর',
    141: 'ডিসেম্বর',
    142: 'জানু',
    143: 'ফেব্রু',
    144: 'মার্চ',
    145: 'এপ্রি',
    146: 'মে',
    147: 'জুন',
    148: 'জুল',
    149: 'আগ',
    150: 'সেপ্টে',
    151: 'অক্টো',
    152: 'নভে',
    153: 'ডিসে',
    154: 'রবিবার',
    155: 'সোমবার',
    156: 'মঙ্গলবার',
    157: 'বুধবার',
    158: 'বৃহস্পতিবার',
    159: 'শুক্রবার',
    160: 'শনিবার',
    161: 'রবি',
    162: 'সোম',
    163: 'মঙ্গল',
    164: 'বুধ',
    165: 'বৃহঃ',
    166: 'শুক্র',
    167: 'শনি',
    168: 'আজ',
    169: 'ডেইলি মার্ডার সুডোকু বোর্ড, #1 বাই #1',
    170: 'সারি #1, কলাম #2',
    171: 'খালি',
    172: '#1-কে ধরে রাখে',
    173: 'ব্লক করা',
    174: 'বাদ দেওয়া হয়েছে',
    175: 'রুম #1',
    176: 'সন্দেহভাজনরা',
    177: 'পরিষ্কার',

    200: 'Daily Murder Sudoku',
    201: 'সন্দেহভাজন',
    202: 'শিকার',
    203: 'ইঙ্গিত',
    204: 'সাধারণ ইঙ্গিতসমূহ',
    205: 'টুলস',
    206: 'ব্যক্তি রাখুন',
    207: 'Rule out cell',
    208: 'ইরেজার',
    209: 'আনডু',
    210: 'সব চিহ্ন মুছুন',
    212: 'স্বয়ংক্রিয়ভাবে সারি এবং কলাম চিহ্নিত করুন',
    213: '#1 নির্বাচন করুন',
    214: 'স্থাপিত',
    215: 'ঐ সেলটি ব্লক করা আছে।',
    216: 'ঐ সারিতে আগেই একজন ব্যক্তি রয়েছেন।',
    217: 'ঐ কলামে আগেই একজন ব্যক্তি রয়েছেন।',
    218: 'ঐ সেলটি নেওয়া হয়ে গেছে।',
    219: '#2 জন ব্যক্তির মধ্যে #1 জন সঠিক স্থানে রয়েছেন।',
    220: '#1 জন ব্যক্তির মধ্যে একজন সঠিক স্থানে রয়েছেন।',
    221: 'খুনি হলো #1।',
    222: 'সব #1 জন ব্যক্তি স্থাপিত হয়েছেন।',
    // The banner at the moment of the accusation. Like the 247 stamp it stays
    // English in every language.
    224: 'কেস সমাধান হয়েছে',
    225: '#1 নির্বাচিত হয়েছে।',
    226: '#1-কে সারি #2, কলাম #3-এ রাখা হয়েছে।',
    227: '#1-কে সরানো হয়েছে।',
    228: 'সারি #1, কলাম #2 বাতিল করা হয়েছে।',
    229: 'সারি #1, কলাম #2-এর চিহ্ন মোছা হয়েছে।',
    230: 'বোর্ডটি পরিষ্কার করা হয়েছে।',
    231: 'আনডু করার কিছু নেই।',
    232: 'সর্বশেষ কাজটি আনডু করা হয়েছে।',
    233: 'কঠিনতা',
    234: 'রুম: #1',
    235: 'মেঝে: #1',
    236: 'বস্তু: #1',
    237: 'জানা তথ্য',
    238: 'দৃশ্য: #1',
    239: 'সারি #2, কলাম #3-এ #1 নোট করা হয়েছে।',
    240: '#1 এর নোট সরানো হয়েছে।',
    241: 'স্থাপনের জন্য চেপে ধরুন; একটি ছোট টোকা নোট লেখে।',
    242: '#1 নোট করে',
    243: 'পুরো বোর্ড পরিষ্কার করতে চেপে ধরুন (অথবা Shift-click করুন)।',
    244: 'রিডু',
    245: 'রিডু করার কিছু নেই।',
    246: 'সর্বশেষ কাজটি রিডু করা হয়েছে।',
    // 224 is the banner at the accusation, 247 what the file gets marked afterwards.
    // Both stay these English words in every language, as the cast names do.
    247: 'কেস ক্লোজড',
    // The two roles named on the board itself: 248 tags the murderer's token once the
    // case is closed, 249 titles the victim's from the moment they are placed, since
    // the dagger alone says nothing to a screen reader.
    248: 'খুনি',
    249: '#1 — শিকার',

    250: 'শব্দকোষ',
    251: 'পাশে · নিকটে',
    252: 'জিনিসটির একটি সেলের ঠিক পাশে — একটি বস্তু বা এক খণ্ড জমি — এবং একই রুমে। কোণাকুণি গণনা করা হয় না।',
    253: 'সাথে',
    254: 'একই রুমে, তার যেকোনো জায়গায়।',
    255: 'একা',
    256: 'তাদের রুমে একমাত্র ব্যক্তি।',
    257: 'সাথে একা',
    258: 'সেই রুমে ঠিক দুজন ব্যক্তি: বিষয় এবং যার নাম উল্লেখ করা হয়েছে।',
    259: 'উত্তরে · দক্ষিণে · পূর্বে · পশ্চিমে',
    260: 'সারি এবং কলাম কঠোরভাবে তুলনা করা হয়: উত্তর মানে ছোট সারি, পূর্ব মানে বড় কলাম। অন্য অক্ষটি কোন ব্যাপার না।',
    261: 'ঠিক N সারি বা কলাম দূরে',
    262: 'একটি অক্ষ বরাবর একটি নির্দিষ্ট দূরত্ব; অন্য অক্ষটি কোন ব্যাপার না।',
    263: 'একই কর্ণে',
    264: 'যেকোনো কোণাকুণি দিকে সারি এবং কলামের সমান দূরত্ব।',
    265: 'দেয়াল · কোণ',
    266: 'দেয়ালগুলি হল বাইরের সারি এবং কলাম। কোণ হল যেখানে দুটি দেয়াল মিলিত হয়; দেয়াল থেকে দূরে মানে তাদের কোনটিই স্পর্শ না করা।',

    270: 'স্বাগতম, গোয়েন্দা',
    271: 'একটি খুন হয়েছে। বিল্ডিংয়ে থাকা সবাই কার্ডে আছে — সন্দেহভাজন এবং শিকার। প্রতিটি ব্যক্তিকে ফ্লোর প্ল্যানে এমনভাবে রাখুন যাতে তাদের সমস্ত বিবৃতি সত্য হয়। যে শিকারের রুম শেয়ার করে সেই খুনি।',
    272: 'সারিতে একজন, কলামে একজন',
    273: 'কোনো দুজন ব্যক্তি একই সারিতে থাকে না এবং কলামেও থাকে না। কাউকে স্থাপন করলে অন্য সবার জন্য তাদের পুরো সারি এবং কলাম বাতিল হয়ে যায় এবং বোর্ড আপনার জন্য সেই সেলগুলিকে X দিয়ে চিহ্নিত করে।',
    274: 'বিবৃতিগুলো পড়ুন',
    275: 'প্রতিটি সন্দেহভাজন ব্যক্তির কার্ডে তারা কোথায় ছিল সে সম্পর্কে একটি বিবৃতি থাকে এবং প্রতিটি বিবৃতি সত্য। পাশে, সাথে, একা এর মতো শব্দগুলির নির্দিষ্ট অর্থ রয়েছে — হেল্পের শব্দকোষে প্রতিটি ছবি সহ দেখানো হয়েছে।',
    276: 'নোট এবং স্থাপন',
    277: 'একজন ব্যক্তিকে নির্বাচন করুন, তারপর নোট হিসাবে সেখানে তাদের অক্ষর লিখতে একটি সেলে ট্যাপ করুন। আপনি নিশ্চিত হলে সেলটি চেপে ধরে রাখুন: তাদের রঙে এর চারপাশে একটি বৃত্ত আঁকা হবে এবং তারা তাদের স্থান গ্রহণ করবে।',
    278: 'টুলস',
    279: 'X টুলটি আপনার বাতিল করা সেলগুলিকে চিহ্নিত করে। ইরেজার একটি সেল পরিষ্কার করে — অথবা পুরো বোর্ড পরিষ্কার করতে এটি চেপে ধরুন। দুটি তীর চিহ্ন এক ধাপ পিছিয়ে দেয় এবং আবার ফিরিয়ে আনে, এবং ইঙ্গিতটি আপনার ভুলগুলি গণনা করে।',
    280: 'আপনার অভিযোগ করুন',
    281: 'সবাই বোর্ডে দাঁড়ালে, রায়টি নিজে থেকেই শুরু হয়। প্রত্যেক ব্যক্তিকে বৃত্তাকার করা হয় — সবুজের অর্থ সঠিক, লালের অর্থ ভুল — এবং যদি তাদের সব কটি ঠিক থাকে, তবে খুনির মুখোশ উন্মোচিত হয়।',
    282: 'এড়িয়ে যান',
    283: 'পেছনে',
    284: 'সম্পন্ন',
    285: 'টিউটোরিয়াল দেখান',
    286: 'ধাপ #2 এর মধ্যে #1',

    287: 'তাদের মধ্যে, #1-কে অবশ্যই #2 পূরণ করতে হবে — তাই অন্য কেউ সেখানে দাঁড়াতে পারবে না।',
    288: '#1 এবং #2',
    289: '#1, #2',
    290: '#1 এর উপর ফোকাস করুন।',
    291: 'যে বিবৃতিগুলি #1 কে নির্দিষ্ট করে:',
    292: 'অন্যরা কোথায় দাঁড়াবে তা অনুসরণ করুন এবং #1 এর জন্য ঠিক একটি স্কোয়ার অবশিষ্ট থাকে।',
    293: 'শুধুমাত্র এটিই #1 এর জন্য ঠিক একটি স্কোয়ার অবশিষ্ট রাখে।',
    294: 'আমার জন্য #1 কে রাখুন',
    295: 'বোর্ডের কিছু জিনিস বিবৃতির সাথে সাংঘর্ষিক — অন্তত একটি স্থান নির্ধারণ ভুল।',
    296: 'বোর্ড চেক করুন',
    297: 'ভাবতে থাকুন',
    298: 'কীভাবে #1 নির্দিষ্ট করা হয়েছে:',
    299: '#1 সারিগুলি',

    300: 'প্রথম',
    301: 'দ্বিতীয়',
    302: 'তৃতীয়',
    303: 'চতুর্থ',
    304: 'পঞ্চম',
    305: 'ষষ্ঠ',
    306: 'সপ্তম',
    307: 'অষ্টম',
    308: 'নবম',
    309: 'দশম',
    // The column half of 299, parked here because 300-309 are the ordinals.
    310: '#1 কলামগুলি',
    // 311-313 are the one-person counting step, which 287/299/310 can only say in the
    // plural.
    311: '#1 শুধুমাত্র #2 তে থাকতে পারে — তাই অন্য কেউ সেখানে দাঁড়াতে পারবে না।',
    312: '#1 সারি',
    313: '#1 কলাম',
    314: 'হিসাব করা হচ্ছে…',
    // The wrong accusation's stamp. 315 is the mark and stays these three English
    // words in every language, exactly as 247 does: the two stamps share their ink,
    // paper and angle. 316 is the terse upper-case label, not the sentence, which
    // 219/220 still say in full to the live region.
    //
    // 317 and 318 are the two buttons and both must name THIS case: word 6,
    // 'Continue', reads on 318 as 'on to the next puzzle', and 317 must say that
    // clearBoard takes the placements, the crosses AND the notes.
    315: 'কেস এখনও খোলা',
    316: '#2 এর মধ্যে #1টি সঠিক',
    317: 'সবকিছু মুছে ফেলুন',
    318: 'খুঁজতে থাকুন',

    // The four letters the margin compass draws. Authored per language rather than
    // sliced off 330-333, which are whole clue phrases in most dictionaries. Keep them
    // in step with 330-333 when a direction word is reworded.
    320: 'উ',
    321: 'দ',
    322: 'পূ',
    323: 'প',

    330: 'উত্তর',
    331: 'দক্ষিণ',
    332: 'পূর্ব',
    333: 'পশ্চিম',
    334: 'উত্তর-পূর্ব',
    335: 'উত্তর-পশ্চিম',
    336: 'দক্ষিণ-পূর্ব',
    337: 'দক্ষিণ-পশ্চিম',

    340: 'top',
    341: 'bottom',
    342: 'left',
    343: 'right',
    344: 'last',

    350: 'her',
    351: 'his',
    352: 'their',

    370: 'শূন্য',
    371: 'এক',
    372: 'দুই',
    373: 'তিন',
    374: 'চার',
    375: 'পাঁচ',
    376: 'ছয়',
    377: 'সাত',
    378: 'আট',
    379: 'নয়',

    400: '#1 #2।',
    401: '#1 #2 এবং #3।',
    402: '#1 হয় #2 নতুবা #3।',
    403: '#1 #2, কিন্তু #3।',
    // The approved two-atom allowlist: room plus object and room plus named person,
    // each curated as one whole sentence, never the generic 401. The room slot is a
    // whole locative phrase from 546/547, never a bare room name.
    404: '#1 #3 #2-এর উপর ছিল।',
    405: '#1 #3 #2-এর পাশে ছিল।',
    406: '#1 #2 ছিল #3 এর সাথে।',
    408: '#1 নম্বর সারিতে কেউ ছিল না।',
    409: '#1 নম্বর কলামে কেউ ছিল না।',
    // An empty edge line names the wall, not a row number.
    410: 'কেউ #1 না।',

    // The last slot in each is a locative phrase from 546/547, not a room name.
    430: 'ঠিক একজন #1 #2 ছিল।',
    431: 'ঠিক #1 #2 #3 ছিল।',
    432: 'অন্তত একজন #1 #2 ছিল।',
    433: 'অন্তত #1 #2 #3 ছিল।',
    434: 'সর্বোচ্চ একজন #1 #2 ছিল।',
    435: 'সর্বোচ্চ #1 #2 #3 ছিল।',
    436: 'কেউ #1 ছিল না।',
    // #2 is a locative phrase from 546/547 and already carries its preposition, so
    // this template must not spell one.
    437: 'কোনো #1 #2 ছিল না।',
    440: '#1 #2।',
    442: 'ঠিক একজন ব্যক্তি হলেন #1।',
    444: 'জন ব্যক্তি',
    445: 'ব্যক্তি',

    450: 'জানা গেছে: #1 হলেন #2।',
    451: 'জানা গেছে: #1 #2 নন।',

    460: 'একটি #1',
    461: '#2-এ একটি #1',
    462: 'একটি #1 #2',
    463: '#1',
    464: '#1-এ কেউ',
    465: 'কেউ #1',
    466: '#1 এর উপর দাঁড়িয়ে কেউ',
    467: '#2 এর উপর দাঁড়িয়ে একটি #1',

    // Both take a locative phrase from 546/547, so the preposition is already in
    // the argument: "Ada was in the parlour.", "Ada was not on the terrace."
    500: '#1 ছিল',
    501: '#1 ছিল না',
    502: '#1 নম্বর সারিতে ছিল',
    503: '#1 নম্বর কলামে ছিল',
    504: '#1 এর উপর দাঁড়িয়ে ছিল',
    505: '#1 এর উপর দাঁড়িয়ে ছিল না',
    506: '#1-এ ছিল',
    507: '#1-এ ছিল না',
    508: '#1 এর পাশে ছিল',
    509: '#1 এর পাশে ছিল না',
    510: '#1 এর রুমে একা ছিল',
    511: 'রুমে একা ছিল না',
    512: '#1 এর সাথে ছিল',
    513: '#1 এর সাথে ছিল না',
    515: '#2 এর #1 ছিল',
    516: '#1 এর ঠিক এক সারি উত্তরে ছিল',
    517: '#2 এর ঠিক #1 সারি উত্তরে ছিল',
    518: '#1 এর ঠিক এক সারি দক্ষিণে ছিল',
    519: '#2 এর ঠিক #1 সারি দক্ষিণে ছিল',
    520: '#1 এর ঠিক এক কলাম পূর্বে ছিল',
    521: '#2 এর ঠিক #1 কলাম পূর্বে ছিল',
    522: '#1 এর ঠিক এক কলাম পশ্চিমে ছিল',
    523: '#2 এর ঠিক #1 কলাম পশ্চিমে ছিল',
    // ROOM_CORNER describes the room containing the subject; it does not imply
    // that the room belongs to them.
    524: 'রুমের এক কোণে ছিল',
    525: '#1টি',
    526: '#1 ছিল না',
    527: '#1 এর সাথে একা ছিল',
    528: 'খুনির সাথে একা ছিল',
    529: '#1 এর একই কর্ণে ছিল',
    // Posture fragments for standable objects; objects without one fall back to 506.
    // 530 has no caller — a chair drawn without arms is sat ON — and is kept for an
    // enveloping seat.
    530: '#1-এ বসে ছিল',
    531: '#1-এ বসে ছিল',
    532: '#1-এ শুয়ে ছিল',
    533: '#1-এ ছিল',
    // Object noun phrases: the renderer picks by how many of the type the scene holds,
    // so a one-piano scene says "the piano" and a three-bench scene "a bench".
    534: '#1টি',
    535: 'একটি #1',
    // The extreme rows and columns read as the walls of the floor plan, never as
    // numbered lines. Complete fragments; also interpolated into 410 for empty edge
    // lines.
    536: 'উত্তর দেয়াল বরাবর ছিল',
    537: 'দক্ষিণ দেয়াল বরাবর ছিল',
    538: 'পশ্চিম দেয়াল বরাবর ছিল',
    539: 'পূর্ব দেয়াল বরাবর ছিল',
    540: 'কোণে ছিল',
    541: 'কোণে ছিল না',
    542: 'দেয়াল বরাবর ছিল',
    543: 'দেয়াল থেকে দূরে ছিল',
    // Beside a terrain, mirroring beside-object: adjacent and in the same room.
    // With the article, so ground reads as a place: "next to the grass".
    544: '#1 এর পাশে ছিল',
    545: '#1 এর পাশে ছিল না',

    // The locative phrase for a room: every template that names a room takes the whole
    // phrase in that slot rather than spelling "in the #N".
    //
    // English does not use one preposition for every room, and the template cannot know
    // which room fills the slot, so the preposition lives with the room (`prep` in
    // scenes.json, defaulting to "in") and `roomIn()` assembles the phrase. A room slot
    // therefore looks contentless when a template is read alone, which is what lets a
    // language that fuses preposition with article change one slot and not fifteen.
    546: '#1-এ',
    547: '#1-এর উপর',
    // Paucal 'few' variants of the four many-offset templates, chosen by the renderer
    // for distances 2-4. Slavic languages pair those counts with a different noun form;
    // every other language repeats 517/519/521/523 here.
    548: '#2 এর ঠিক #1 সারি উত্তরে',
    549: '#2 এর ঠিক #1 সারি দক্ষিণে',
    550: '#2 এর ঠিক #1 কলাম পূর্বে',
    551: '#2 এর ঠিক #1 কলাম পশ্চিমে',

    600: 'খালি মেঝে',
    601: 'কাঠের মেঝে',
    602: 'টাইলস',
    603: 'কার্পেট',
    604: 'পাথর',
    605: 'কাঁকর',
    606: 'ঘাস',
    607: 'বালি',
    608: 'মাটি',
    609: 'জল',
    610: 'বরফ',

    700: 'চেয়ার',
    701: 'বেঞ্চ',
    702: 'টুল',
    703: 'বিছানা',
    704: 'হ্যামক',
    705: 'ঘোড়া',
    706: 'নৌকা',
    707: 'দোলনা',
    708: 'টেবিল',
    709: 'ডেস্ক',
    710: 'ক্যাবিনেট',
    711: 'ড্রেসার',
    712: 'গাছ',
    713: 'পাথর',
    714: 'ব্যারেল',
    715: 'ক্রেট',
    716: 'মূর্তি',
    717: 'ঝরনা',
    718: 'চুলা',
    719: 'পিয়ানো',
    720: 'কুয়ো',
    721: 'ঠেলাগাড়ি',
    722: 'কাঠের টুকরো',
    723: 'খড়ের গাদা',
    724: 'কামারের নেহাই',
    725: 'সিন্দুক',

    800: 'মহিলা',
    801: 'পুরুষ',
    802: 'শিশু',
    803: 'পাকা চুলের ব্যক্তি',
    804: 'টুপি পরা ব্যক্তি',
    805: 'চশমা পরা ব্যক্তি',
    806: 'কোট পরা ব্যক্তি',
    807: 'বুট পরা ব্যক্তি',
    808: 'দস্তানা পরা ব্যক্তি',
    809: 'মাফলার পরা ব্যক্তি',

    820: 'মহিলারা',
    821: 'পুরুষরা',
    822: 'শিশুরা',
    823: 'পাকা চুলের মানুষ',
    824: 'টুপি পরা মানুষ',
    825: 'চশমা পরা মানুষ',
    826: 'কোট পরা মানুষ',
    827: 'বুট পরা মানুষ',
    828: 'দস্তানা পরা মানুষ',
    829: 'মাফলার পরা মানুষ',

    // The same ten traits as a bare tag, for the line under a suspect's name. Bare
    // nouns, not the phrased versions: at nine suspects the column is 138px. They stay
    // the nouns the clues use, so a player matches the card by sight rather than by
    // translation — which is also why the other eight are not icons.
    //
    // 843 is the longest tag, so a longer one reopens the width question for the
    // combinations that carry no gender trait.
    //
    // 840 and 841 are the exception to the no-icons rule: the card draws the gender
    // glyphs and uses these words as their accessible names.
    840: 'মহিলা',
    841: 'পুরুষ',
    842: 'শিশু',
    843: 'পাকা চুল',
    844: 'টুপি',
    845: 'চশমা',
    846: 'কোট',
    847: 'বুট',
    848: 'দস্তানা',
    849: 'মাফলার'

};

if (typeof module === 'object' && module.exports) {
    module.exports = gameWords;
}
