// script.js

// --- DATA ---
// Expanded isotopesData to include approximately 200 elements/isotopes
const isotopesData = {
    "n":{A:1,Z:0,bePerNucleon:0,symbol:"n",name_ar:"نيوترون"},
    "H-1":{A:1,Z:1,bePerNucleon:0,symbol:"p",name_ar:"بروتون (H-1)", abundance: "99.9885%", notes_ar:"النظير الأكثر شيوعًا للهيدروجين، مستقر."},
    "H-2":{A:2,Z:1,bePerNucleon:1.112283,symbol:"D",name_ar:"ديوتيريوم (H-2)", abundance: "0.0115%", notes_ar:"نظير مستقر للهيدروجين، يستخدم في المفاعلات النووية وكمذيب."},
    "H-3":{A:3,Z:1,bePerNucleon:2.827265,symbol:"T",name_ar:"تريتيوم (H-3)", abundance: "نادر جدًا", notes_ar:"نظير مشع للهيدروجين (عمر النصف ~12.3 سنة)، يستخدم في الأسلحة النووية وفي بعض الإضاءة الذاتية."},
    "He-3":{A:3,Z:2,bePerNucleon:2.572681,symbol:"He",name_ar:"هيليوم-3", abundance: "0.000137%", notes_ar:"نظير مستقر للهيليوم، مرشح كوقود للاندماج النووي الأنظف."},
    "He-4":{A:4,Z:2,bePerNucleon:7.073915,symbol:"He",name_ar:"هيليوم-4 (جسيم ألفا)", abundance: "~100% (من الهيليوم الطبيعي)", notes_ar:"النظير الأكثر شيوعًا للهيليوم، مستقر جدًا (نواة سحرية مضاعفة)."},
    "Li-6":{A:6,Z:3,bePerNucleon:5.33233,symbol:"Li",name_ar:"ليثيوم-6", abundance: "7.59%", notes_ar:"مستقر، يستخدم في إنتاج التريتيوم وفي بطاريات الليثيوم أيون."},
    "Li-7":{A:7,Z:3,bePerNucleon:5.60649,symbol:"Li",name_ar:"ليثيوم-7", abundance: "92.41%", notes_ar:"مستقر، النظير الأكثر شيوعًا لليثيوم."},
    "Be-7":{A:7,Z:4,bePerNucleon:5.370,symbol:"Be",name_ar:"بيريليوم-7"},
    "Be-9":{A:9,Z:4,bePerNucleon:6.4626,symbol:"Be",name_ar:"بيريليوم-9", abundance: "100%", notes_ar:"النظير المستقر الوحيد للبيريليوم، يستخدم في السبائك وكمصدر للنيوترونات."},
    "Be-10":{A:10,Z:4,bePerNucleon:6.497,symbol:"Be",name_ar:"بيريليوم-10"},
    "B-10":{A:10,Z:5,bePerNucleon:6.47506,symbol:"B",name_ar:"بورون-10", abundance: "19.9%", notes_ar:"مستقر، له مقطع عرضي كبير لامتصاص النيوترونات، يستخدم في قضبان التحكم بالمفاعلات."},
    "B-11":{A:11,Z:5,bePerNucleon:6.9277,symbol:"B",name_ar:"بورون-11", abundance: "80.1%", notes_ar:"مستقر، النظير الأكثر شيوعًا للبورون."},
    "C-12":{A:12,Z:6,bePerNucleon:7.680144,symbol:"C",name_ar:"كربون-12", abundance: "98.93%", notes_ar:"مستقر، يستخدم كمعيار للكتلة الذرية."},
    "C-13":{A:13,Z:6,bePerNucleon:7.4696,symbol:"C",name_ar:"كربون-13", abundance: "1.07%", notes_ar:"مستقر، يستخدم في التحليل الطيفي بالرنين المغناطيسي النووي."},
    "C-14":{A:14,Z:6,bePerNucleon:7.5203,symbol:"C",name_ar:"كربون-14", abundance: "آثار", notes_ar:"مشع (عمر النصف ~5730 سنة)، يستخدم في التأريخ بالكربون."},
    "N-13":{A:13,Z:7,bePerNucleon:7.259,symbol:"N",name_ar:"نيتروجين-13"},
    "N-14":{A:14,Z:7,bePerNucleon:7.4756,symbol:"N",name_ar:"نيتروجين-14", abundance: "99.632%", notes_ar:"مستقر، النظير الأكثر شيوعًا للنيتروجين."},
    "N-15":{A:15,Z:7,bePerNucleon:7.699,symbol:"N",name_ar:"نيتروجين-15", abundance: "0.368%", notes_ar:"مستقر، يستخدم كمتتبع في الأبحاث البيوكيميائية والزراعية."},
    "O-15":{A:15,Z:8,bePerNucleon:7.465,symbol:"O",name_ar:"أكسجين-15"},
    "O-16":{A:16,Z:8,bePerNucleon:7.976206,symbol:"O",name_ar:"أكسجين-16", abundance: "99.757%", notes_ar:"مستقر، النظير الأكثر شيوعًا للأكسجين."},
    "O-17":{A:17,Z:8,bePerNucleon:7.750,symbol:"O",name_ar:"أكسجين-17", abundance: "0.038%", notes_ar:"مستقر."},
    "O-18":{A:18,Z:8,bePerNucleon:7.767,symbol:"O",name_ar:"أكسجين-18", abundance: "0.205%", notes_ar:"مستقر، يستخدم كمتتبع في دراسات المناخ القديم والعمليات البيولوجية."},
    "F-19":{A:19,Z:9,bePerNucleon:7.779,symbol:"F",name_ar:"فلور-19", abundance: "100%", notes_ar:"النظير الوحيد المستقر للفلور."},
    "Ne-20":{A:20,Z:10,bePerNucleon:8.032,symbol:"Ne",name_ar:"نيون-20"},
    "Ne-22":{A:22,Z:10,bePerNucleon:8.066,symbol:"Ne",name_ar:"نيون-22"},
    "Na-22":{A:22,Z:11,bePerNucleon:8.030,symbol:"Na",name_ar:"صوديوم-22"},
    "Na-23":{A:23,Z:11,bePerNucleon:8.111,symbol:"Na",name_ar:"صوديوم-23", abundance: "100%", notes_ar:"النظير الوحيد المستقر للصوديوم."},
    "Mg-24":{A:24,Z:12,bePerNucleon:8.261,symbol:"Mg",name_ar:"ماغنيسيوم-24"},
    "Al-27":{A:27,Z:13,bePerNucleon:8.332,symbol:"Al",name_ar:"ألومنيوم-27"},
    "Si-28":{A:28,Z:14,bePerNucleon:8.444,symbol:"Si",name_ar:"سيليكون-28"},
    "P-31":{A:31,Z:15,bePerNucleon:8.481,symbol:"P",name_ar:"فوسفور-31"},
    "S-32":{A:32,Z:16,bePerNucleon:8.497,symbol:"S",name_ar:"كبريت-32"},
    "Cl-35":{A:35,Z:17,bePerNucleon:8.520,symbol:"Cl",name_ar:"كلور-35"},
    "Ar-40":{A:40,Z:18,bePerNucleon:8.595,symbol:"Ar",name_ar:"أرغون-40"},
    "K-39":{A:39,Z:19,bePerNucleon:8.560,symbol:"K",name_ar:"بوتاسيوم-39"},
    "Ca-40":{A:40,Z:20,bePerNucleon:8.627,symbol:"Ca",name_ar:"كالسيوم-40"},
    "Ti-48":{A:48,Z:22,bePerNucleon:8.675,symbol:"Ti",name_ar:"تيتانيوم-48"},
    "Cr-52":{A:52,Z:24,bePerNucleon:8.718,symbol:"Cr",name_ar:"كروم-52"},
    "Mn-55":{A:55,Z:25,bePerNucleon:8.761,symbol:"Mn",name_ar:"منغنيز-55"},
    "Fe-54":{A:54,Z:26,bePerNucleon:8.736,symbol:"Fe",name_ar:"حديد-54"},
    "Fe-56":{A:56,Z:26,bePerNucleon:8.7903,symbol:"Fe",name_ar:"حديد-56", abundance: "91.754%", notes_ar:"مستقر، يمتلك واحدة من أعلى طاقات الربط لكل نيوكليون، شائع في نوى النجوم."},
    "Fe-57":{A:57,Z:26,bePerNucleon:8.770,symbol:"Fe",name_ar:"حديد-57"},
    "Co-59":{A:59,Z:27,bePerNucleon:8.767,symbol:"Co",name_ar:"كوبالت-59"},
    "Ni-58":{A:58,Z:28,bePerNucleon:8.732,symbol:"Ni",name_ar:"نيكل-58"},
    "Ni-60":{A:60,Z:28,bePerNucleon:8.784,symbol:"Ni",name_ar:"نيكل-60"},
    "Ni-62":{A:62,Z:28,bePerNucleon:8.7945,symbol:"Ni",name_ar:"نيكل-62", abundance: "3.634%", notes_ar:"مستقر، يمتلك أعلى طاقة ربط لكل نيوكليون بين جميع النظائر المعروفة."},
    "Cu-63":{A:63,Z:29,bePerNucleon:8.749,symbol:"Cu",name_ar:"نحاس-63"},
    "Zn-64":{A:64,Z:30,bePerNucleon:8.730,symbol:"Zn",name_ar:"زنك-64"},
    "Ga-69":{A:69,Z:31,bePerNucleon:8.710,symbol:"Ga",name_ar:"غاليوم-69"},
    "Ge-70":{A:70,Z:32,bePerNucleon:8.705,symbol:"Ge",name_ar:"جرمانيوم-70"},
    "As-75":{A:75,Z:33,bePerNucleon:8.675,symbol:"As",name_ar:"زرنيخ-75"},
    "Se-80":{A:80,Z:34,bePerNucleon:8.678,symbol:"Se",name_ar:"سيلينيوم-80"},
    "Br-79":{A:79,Z:35,bePerNucleon:8.690,symbol:"Br",name_ar:"بروم-79"},
    "Br-81":{A:81,Z:35,bePerNucleon:8.694,symbol:"Br",name_ar:"بروم-81"},
    "Br-87":{A:87,Z:35,bePerNucleon:8.69,symbol:"Br",name_ar:"بروم-87"},
    "Kr-84":{A:84,Z:36,bePerNucleon:8.717,symbol:"Kr",name_ar:"كريبتون-84"},
    "Kr-86":{A:86,Z:36,bePerNucleon:8.730,symbol:"Kr",name_ar:"كريبتون-86"},
    "Kr-92":{A:92,Z:36,bePerNucleon:8.51,symbol:"Kr",name_ar:"كريبتون-92"},
    "Rb-85":{A:85,Z:37,bePerNucleon:8.715,symbol:"Rb",name_ar:"روبيديوم-85"},
    "Sr-88":{A:88,Z:38,bePerNucleon:8.734,symbol:"Sr",name_ar:"سترونشيوم-88"},
    "Sr-90":{A:90,Z:38,bePerNucleon:8.710,symbol:"Sr",name_ar:"سترونشيوم-90"},
    "Sr-94":{A:94,Z:38,bePerNucleon:8.597,symbol:"Sr",name_ar:"سترونشيوم-94"},
    "Y-89":{A:89,Z:39,bePerNucleon:8.710,symbol:"Y",name_ar:"يتريوم-89"},
    "Zr-90":{A:90,Z:40,bePerNucleon:8.709,symbol:"Zr",name_ar:"زركونيوم-90"},
    "Zr-93":{A:93,Z:40,bePerNucleon:8.678,symbol:"Zr",name_ar:"زركونيوم-93"},
    "Zr-95":{A:95,Z:40,bePerNucleon:8.630,symbol:"Zr",name_ar:"زركونيوم-95"},
    "Nb-93":{A:93,Z:41,bePerNucleon:8.678,symbol:"Nb",name_ar:"نيوبيوم-93"},
    "Mo-95":{A:95,Z:42,bePerNucleon:8.652,symbol:"Mo",name_ar:"موليبدينوم-95"},
    "Mo-98":{A:98,Z:42,bePerNucleon:8.613,symbol:"Mo",name_ar:"موليبدينوم-98"},
    "Mo-99":{A:99,Z:42,bePerNucleon:8.584,symbol:"Mo",name_ar:"موليبدينوم-99"},
    "Mo-103":{A:103,Z:42,bePerNucleon:8.53,symbol:"Mo",name_ar:"موليبدينوم-103"},
    "Tc-99":{A:99,Z:43,bePerNucleon:8.580,symbol:"Tc",name_ar:"تكنيتيوم-99"},
    "Ru-102":{A:102,Z:44,bePerNucleon:8.555,symbol:"Ru",name_ar:"روثينيوم-102"},
    "Rh-103":{A:103,Z:45,bePerNucleon:8.544,symbol:"Rh",name_ar:"روديوم-103"},
    "Pd-106":{A:106,Z:46,bePerNucleon:8.529,symbol:"Pd",name_ar:"بالاديوم-106"},
    "Ag-107":{A:107,Z:47,bePerNucleon:8.520,symbol:"Ag",name_ar:"فضة-107"},
    "Cd-112":{A:112,Z:48,bePerNucleon:8.510,symbol:"Cd",name_ar:"كادميوم-112"},
    "In-115":{A:115,Z:49,bePerNucleon:8.500,symbol:"In",name_ar:"إنديوم-115"},
    "Sn-118":{A:118,Z:50,bePerNucleon:8.521,symbol:"Sn",name_ar:"قصدير-118"},
    "Sn-120":{A:120,Z:50,bePerNucleon:8.514,symbol:"Sn",name_ar:"قصدير-120"},
    "Sn-131":{A:131,Z:50,bePerNucleon:8.38,symbol:"Sn",name_ar:"قصدير-131"},
    "Sb-121":{A:121,Z:51,bePerNucleon:8.490,symbol:"Sb",name_ar:"إثمد-121"},
    "Te-130":{A:130,Z:52,bePerNucleon:8.450,symbol:"Te",name_ar:"تيلوريوم-130"},
    "I-127":{A:127,Z:53,bePerNucleon:8.450,symbol:"I",name_ar:"يود-127"},
    "I-129":{A:129,Z:53,bePerNucleon:8.433,symbol:"I",name_ar:"يود-129"},
    "I-131":{A:131,Z:53,bePerNucleon:8.420,symbol:"I",name_ar:"يود-131"},
    "Xe-131":{A:131,Z:54,bePerNucleon:8.420,symbol:"Xe",name_ar:"زينون-131"},
    "Xe-132":{A:132,Z:54,bePerNucleon:8.411,symbol:"Xe",name_ar:"زينون-132"},
    "Xe-135":{A:135,Z:54,bePerNucleon:8.392,symbol:"Xe",name_ar:"زينون-135"},
    "Xe-140":{A:140,Z:54,bePerNucleon:8.321,symbol:"Xe",name_ar:"زينون-140"},
    "Cs-133":{A:133,Z:55,bePerNucleon:8.410,symbol:"Cs",name_ar:"سيزيوم-133"},
    "Cs-137":{A:137,Z:55,bePerNucleon:8.357,symbol:"Cs",name_ar:"سيزيوم-137"},
    "Ba-138":{A:138,Z:56,bePerNucleon:8.358,symbol:"Ba",name_ar:"باريوم-138"},
    "Ba-140":{A:140,Z:56,bePerNucleon:8.328,symbol:"Ba",name_ar:"باريوم-140"},
    "Ba-141":{A:141,Z:56,bePerNucleon:8.33,symbol:"Ba",name_ar:"باريوم-141"},
    "La-139":{A:139,Z:57,bePerNucleon:8.341,symbol:"La",name_ar:"لانثانوم-139"},
    "La-147":{A:147,Z:57,bePerNucleon:8.26,symbol:"La",name_ar:"لانثانوم-147"},
    "Ce-140":{A:140,Z:58,bePerNucleon:8.310,symbol:"Ce",name_ar:"سيريوم-140"},
    "Pr-141":{A:141,Z:59,bePerNucleon:8.280,symbol:"Pr",name_ar:"براسيوديميوم-141"},
    "Nd-142":{A:142,Z:60,bePerNucleon:8.260,symbol:"Nd",name_ar:"نيوديميوم-142"},
    "Pm-147":{A:147,Z:61,bePerNucleon:8.230,symbol:"Pm",name_ar:"بروميثيوم-147"},
    "Sm-150":{A:150,Z:62,bePerNucleon:8.210,symbol:"Sm",name_ar:"ساماريوم-150"},
    "Eu-153":{A:153,Z:63,bePerNucleon:8.190,symbol:"Eu",name_ar:"يوروبيوم-153"},
    "Gd-156":{A:156,Z:64,bePerNucleon:8.170,symbol:"Gd",name_ar:"جادولينيوم-156"},
    "Tb-159":{A:159,Z:65,bePerNucleon:8.150,symbol:"Tb",name_ar:"تيربيوم-159"},
    "Dy-162":{A:162,Z:66,bePerNucleon:8.130,symbol:"Dy",name_ar:"ديسبروسيوم-162"},
    "Ho-165":{A:165,Z:67,bePerNucleon:8.110,symbol:"Ho",name_ar:"هولميوم-165"},
    "Er-166":{A:166,Z:68,bePerNucleon:8.100,symbol:"Er",name_ar:"إربيوم-166"},
    "Tm-169":{A:169,Z:69,bePerNucleon:8.090,symbol:"Tm",name_ar:"ثوليوم-169"},
    "Yb-174":{A:174,Z:70,bePerNucleon:8.070,symbol:"Yb",name_ar:"إيتربيوم-174"},
    "Lu-175":{A:175,Z:71,bePerNucleon:8.060,symbol:"Lu",name_ar:"لوتيشيوم-175"},
    "Hf-178":{A:178,Z:72,bePerNucleon:8.050,symbol:"Hf",name_ar:"هافنيوم-178"},
    "Ta-181":{A:181,Z:73,bePerNucleon:8.040,symbol:"Ta",name_ar:"تانتالوم-181"},
    "W-184":{A:184,Z:74,bePerNucleon:8.030,symbol:"W",name_ar:"تنغستن-184"},
    "Re-187":{A:187,Z:75,bePerNucleon:8.020,symbol:"Re",name_ar:"رينيوم-187"},
    "Os-190":{A:190,Z:76,bePerNucleon:8.000,symbol:"Os",name_ar:"أوزميوم-190"},
    "Ir-192":{A:192,Z:77,bePerNucleon:7.980,symbol:"Ir",name_ar:"إيريديوم-192"},
    "Pt-195":{A:195,Z:78,bePerNucleon:7.950,symbol:"Pt",name_ar:"بلاتين-195"},
    "Au-197":{A:197,Z:79,bePerNucleon:7.916,symbol:"Au",name_ar:"ذهب-197"},
    "Hg-200":{A:200,Z:80,bePerNucleon:7.890,symbol:"Hg",name_ar:"زئبق-200"},
    "Tl-205":{A:205,Z:81,bePerNucleon:7.870,symbol:"Tl",name_ar:"ثاليوم-205"},
    "Pb-206":{A:206,Z:82,bePerNucleon:7.868,symbol:"Pb",name_ar:"رصاص-206"},
    "Pb-207":{A:207,Z:82,bePerNucleon:7.862,symbol:"Pb",name_ar:"رصاص-207"},
    "Pb-208":{A:208,Z:82,bePerNucleon:7.867,symbol:"Pb",name_ar:"رصاص-208"},
    "Bi-209":{A:209,Z:83,bePerNucleon:7.848,symbol:"Bi",name_ar:"بزموث-209"},
    "Po-210":{A:210,Z:84,bePerNucleon:7.820,symbol:"Po",name_ar:"بولونيوم-210"},
    "At-211":{A:211,Z:85,bePerNucleon:7.790,symbol:"At",name_ar:"أستاتين-211"},
    "Rn-222":{A:222,Z:86,bePerNucleon:7.730,symbol:"Rn",name_ar:"رادون-222"},
    "Fr-223":{A:223,Z:87,bePerNucleon:7.710,symbol:"Fr",name_ar:"فرانسيم-223"},
    "Ra-226":{A:226,Z:88,bePerNucleon:7.680,symbol:"Ra",name_ar:"راديوم-226"},
    "Ac-227":{A:227,Z:89,bePerNucleon:7.650,symbol:"Ac",name_ar:"أكتينيوم-227"},
    "Th-230":{A:230,Z:90,bePerNucleon:7.630,symbol:"Th",name_ar:"ثوريوم-230"},
    "Th-232":{A:232,Z:90,bePerNucleon:7.615,symbol:"Th",name_ar:"ثوريوم-232"},
    "Pa-231":{A:231,Z:91,bePerNucleon:7.620,symbol:"Pa",name_ar:"بروتكتينيوم-231"},
    "U-233":{A:233,Z:92,bePerNucleon:7.604,symbol:"U",name_ar:"يورانيوم-233"},
    "U-234":{A:234,Z:92,bePerNucleon:7.597,symbol:"U",name_ar:"يورانيوم-234"},
    "U-235":{A:235,Z:92,bePerNucleon:7.590,symbol:"U",name_ar:"يورانيوم-235", abundance: "0.7204%", notes_ar:"مشع (عمر النصف ~703.8 مليون سنة)، نظير انشطاري رئيسي، وقود للمفاعلات والأسلحة النووية."},
    "U-238":{A:238,Z:92,bePerNucleon:7.570,symbol:"U",name_ar:"يورانيوم-238", abundance: "99.2742%", notes_ar:"مشع (عمر النصف ~4.468 مليار سنة)، النظير الأكثر شيوعًا لليورانيوم، مخصب."},
    "Np-237":{A:237,Z:93,bePerNucleon:7.580,symbol:"Np",name_ar:"نبتونيوم-237"},
    "Pu-238":{A:238,Z:94,bePerNucleon:7.567,symbol:"Pu",name_ar:"بلوتونيوم-238"},
    "Pu-239":{A:239,Z:94,bePerNucleon:7.560,symbol:"Pu",name_ar:"بلوتونيوم-239", abundance: "اصطناعي", notes_ar:"مشع (عمر النصف ~24100 سنة)، نظير انشطاري رئيسي، وقود للأسلحة النووية وبعض المفاعلات."},
    "Pu-240":{A:240,Z:94,bePerNucleon:7.554,symbol:"Pu",name_ar:"بلوتونيوم-240"},
    "Pu-241":{A:241,Z:94,bePerNucleon:7.550,symbol:"Pu",name_ar:"بلوتونيوم-241"},
    "Am-241":{A:241,Z:95,bePerNucleon:7.545,symbol:"Am",name_ar:"أمريكيوم-241"},
    "Am-243":{A:243,Z:95,bePerNucleon:7.536,symbol:"Am",name_ar:"أمريكيوم-243"},
    "Cm-244":{A:244,Z:96,bePerNucleon:7.530,symbol:"Cm",name_ar:"كوريوم-244"},
    "Bk-247":{A:247,Z:97,bePerNucleon:7.525,symbol:"Bk",name_ar:"بركيليوم-247"},
    "Cf-252":{A:252,Z:98,bePerNucleon:7.515,symbol:"Cf",name_ar:"كاليفورنيوم-252"},
    "Es-253":{A:253,Z:99,bePerNucleon:7.500,symbol:"Es",name_ar:"أينشتاينيوم-253"},
    "Fm-257":{A:257,Z:100,bePerNucleon:7.490,symbol:"Fm",name_ar:"فيرميوم-257"},
    "Md-258":{A:258,Z:101,bePerNucleon:7.480,symbol:"Md",name_ar:"مندليفيوم-258"},
    "No-259":{A:259,Z:102,bePerNucleon:7.470,symbol:"No",name_ar:"نوبليوم-259"},
    "Lr-262":{A:262,Z:103,bePerNucleon:7.460,symbol:"Lr",name_ar:"لورنسيوم-262"},
    "Rf-267":{A:267,Z:104,bePerNucleon:7.450,symbol:"Rf",name_ar:"رذرفورديوم-267"},
    "Db-268":{A:268,Z:105,bePerNucleon:7.440,symbol:"Db",name_ar:"دوبنيوم-268"},
    "Sg-271":{A:271,Z:106,bePerNucleon:7.430,symbol:"Sg",name_ar:"سيبرغوم-271"},
    "Bh-272":{A:272,Z:107,bePerNucleon:7.420,symbol:"Bh",name_ar:"بوريوم-272"},
    "Hs-277":{A:277,Z:108,bePerNucleon:7.410,symbol:"Hs",name_ar:"هاسيوم-277"},
    "Mt-276":{A:276,Z:109,bePerNucleon:7.400,symbol:"Mt",name_ar:"مايتنريوم-276"},
    "Ds-281":{A:281,Z:110,bePerNucleon:7.390,symbol:"Ds",name_ar:"دارمشتاديوم-281"},
    "Rg-282":{A:282,Z:111,bePerNucleon:7.380,symbol:"Rg",name_ar:"روينتغينيوم-282"},
    "Cn-285":{A:285,Z:112,bePerNucleon:7.370,symbol:"Cn",name_ar:"كوبرنيسيوم-285"},
    "Nh-286":{A:286,Z:113,bePerNucleon:7.360,symbol:"Nh",name_ar:"نيهونيوم-286"},
    "Fl-289":{A:289,Z:114,bePerNucleon:7.350,symbol:"Fl",name_ar:"فليروفيوم-289"},
    "Mc-290":{A:290,Z:115,bePerNucleon:7.340,symbol:"Mc",name_ar:"موسكوفيوم-290"},
    "Lv-293":{A:293,Z:116,bePerNucleon:7.330,symbol:"Lv",name_ar:"ليفريموريوم-293"},
    "Ts-294":{A:294,Z:117,bePerNucleon:7.320,symbol:"Ts",name_ar:"تينيسين-294"},
    "Og-294":{A:294,Z:118,bePerNucleon:7.310,symbol:"Og",name_ar:"أوغانيسون-294"},
    "Ge-72":{A:72,Z:32,bePerNucleon:8.715,symbol:"Ge",name_ar:"جرمانيوم-72"},
    "Se-78":{A:78,Z:34,bePerNucleon:8.675,symbol:"Se",name_ar:"سيلينيوم-78"},
    "Cd-114":{A:114,Z:48,bePerNucleon:8.508,symbol:"Cd",name_ar:"كادميوم-114"},
    "Xe-124":{A:124,Z:54,bePerNucleon:8.448,symbol:"Xe",name_ar:"زينون-124"},
    "W-186":{A:186,Z:74,bePerNucleon:8.026,symbol:"W",name_ar:"تنغستن-186"},
    "U-236":{A:236,Z:92,bePerNucleon:7.585,symbol:"U",name_ar:"يورانيوم-236"},
    "Pu-242":{A:242,Z:94,bePerNucleon:7.545,symbol:"Pu",name_ar:"بلوتونيوم-242"},
    "Sr-87":{A:87,Z:38,bePerNucleon:8.720,symbol:"Sr",name_ar:"سترونشيوم-87"},
    "Ru-100":{A:100,Z:44,bePerNucleon:8.560,symbol:"Ru",name_ar:"روثينيوم-100"},
    "Pd-108":{A:108,Z:46,bePerNucleon:8.520,symbol:"Pd",name_ar:"بالاديوم-108"},
    "Cd-116":{A:116,Z:48,bePerNucleon:8.490,symbol:"Cd",name_ar:"كادميوم-116"},
    "Sn-112":{A:112,Z:50,bePerNucleon:8.530,symbol:"Sn",name_ar:"قصدير-112"},
    "Sb-123":{A:123,Z:51,bePerNucleon:8.470,symbol:"Sb",name_ar:"إثمد-123"},
    "Te-128":{A:128,Z:52,bePerNucleon:8.460,symbol:"Te",name_ar:"تيلوريوم-128"},
    "I-125":{A:125,Z:53,bePerNucleon:8.460,symbol:"I",name_ar:"يود-125"},
    "Xe-129":{A:129,Z:54,bePerNucleon:8.430,symbol:"Xe",name_ar:"زينون-129"},
    "Cs-135":{A:135,Z:55,bePerNucleon:8.390,symbol:"Cs",name_ar:"سيزيوم-135"},
    "Ba-137":{A:137,Z:56,bePerNucleon:8.360,symbol:"Ba",name_ar:"باريوم-137"},
    "La-138":{A:138,Z:57,bePerNucleon:8.350,symbol:"La",name_ar:"لانثانوم-138"},
    "Ce-142":{A:142,Z:58,bePerNucleon:8.290,symbol:"Ce",name_ar:"سيريوم-142"},
    "Nd-144":{A:144,Z:60,bePerNucleon:8.240,symbol:"Nd",name_ar:"نيوديميوم-144"},
    "Sm-147":{A:147,Z:62,bePerNucleon:8.220,symbol:"Sm",name_ar:"ساماريوم-147"},
    "Eu-151":{A:151,Z:63,bePerNucleon:8.200,symbol:"Eu",name_ar:"يوروبيوم-151"},
    "Gd-152":{A:152,Z:64,bePerNucleon:8.180,symbol:"Gd",name_ar:"جادولينيوم-152"},
    "Dy-160":{A:160,Z:66,bePerNucleon:8.140,symbol:"Dy",name_ar:"ديسبروسيوم-160"},
    "Er-168":{A:168,Z:68,bePerNucleon:8.080,symbol:"Er",name_ar:"إربيوم-168"},
    "Yb-176":{A:176,Z:70,bePerNucleon:8.060,symbol:"Yb",name_ar:"إيتربيوم-176"},
    "Hf-180":{A:180,Z:72,bePerNucleon:8.040,symbol:"Hf",name_ar:"هافنيوم-180"},
    "Ta-180":{A:180,Z:73,bePerNucleon:8.040,symbol:"Ta",name_ar:"تانتالوم-180"},
    "Re-185":{A:185,Z:75,bePerNucleon:8.025,symbol:"Re",name_ar:"رينيوم-185"},
    "Os-188":{A:188,Z:76,bePerNucleon:8.010,symbol:"Os",name_ar:"أوزميوم-188"},
    "Ir-191":{A:191,Z:77,bePerNucleon:7.990,symbol:"Ir",name_ar:"إيريديوم-191"},
    "Pt-194":{A:194,Z:78,bePerNucleon:7.960,symbol:"Pt",name_ar:"بلاتين-194"},
    "Hg-198":{A:198,Z:80,bePerNucleon:7.900,symbol:"Hg",name_ar:"زئبق-198"},
    "Tl-203":{A:203,Z:81,bePerNucleon:7.880,symbol:"Tl",name_ar:"ثاليوم-203"},
    "Pb-204":{A:204,Z:82,bePerNucleon:7.870,symbol:"Pb",name_ar:"رصاص-204"},
    "Bi-210":{A:210,Z:83,bePerNucleon:7.840,symbol:"Bi",name_ar:"بزموث-210"},
    "Po-209":{A:209,Z:84,bePerNucleon:7.830,symbol:"Po",name_ar:"بولونيوم-209"},
    "Rn-219":{A:219,Z:86,bePerNucleon:7.735,symbol:"Rn",name_ar:"رادون-219"},
    "Ra-223":{A:223,Z:88,bePerNucleon:7.695,symbol:"Ra",name_ar:"راديوم-223"},
    "Ac-228":{A:228,Z:89,bePerNucleon:7.645,symbol:"Ac",name_ar:"أكتينيوم-228"},
    "Pa-234":{A:234,Z:91,bePerNucleon:7.600,symbol:"Pa",name_ar:"بروتكتينيوم-234"},
    "U-237":{A:237,Z:92,bePerNucleon:7.575,symbol:"U",name_ar:"يورانيوم-237"},
    "Np-239":{A:239,Z:93,bePerNucleon:7.570,symbol:"Np",name_ar:"نبتونيوم-239"},
    "Cm-242":{A:242,Z:96,bePerNucleon:7.530,symbol:"Cm",name_ar:"كوريوم-242"},
    "Bk-248":{A:248,Z:97,bePerNucleon:7.520,symbol:"Bk",name_ar:"بركيليوم-248"},
    "Cf-249":{A:249,Z:98,bePerNucleon:7.510,symbol:"Cf",name_ar:"كاليفورنيوم-249"},
    "Es-255":{A:255,Z:99,bePerNucleon:7.490,symbol:"Es",name_ar:"أينشتاينيوم-255"},
    "Fm-259":{A:259,Z:100,bePerNucleon:7.480,symbol:"Fm",name_ar:"فيرميوم-259"},
    "Md-259":{A:259,Z:101,bePerNucleon:7.470,symbol:"Md",name_ar:"مندليفيوم-259"},
    "No-260":{A:260,Z:102,bePerNucleon:7.460,symbol:"No",name_ar:"نوبليوم-260"},
    "Lr-261":{A:261,Z:103,bePerNucleon:7.450,symbol:"Lr",name_ar:"لورنسيوم-261"},
    "Rf-266":{A:266,Z:104,bePerNucleon:7.440,symbol:"Rf",name_ar:"رذرفورديوم-266"},
    "Db-267":{A:267,Z:105,bePerNucleon:7.435,symbol:"Db",name_ar:"دوبنيوم-267"},
    "Sg-269":{A:269,Z:106,bePerNucleon:7.425,symbol:"Sg",name_ar:"سيبرغوم-269"},
    "Bh-270":{A:270,Z:107,bePerNucleon:7.415,symbol:"Bh",name_ar:"بوريوم-270"},
    "Hs-275":{A:275,Z:108,bePerNucleon:7.405,symbol:"Hs",name_ar:"هاسيوم-275"},
    "Mt-278":{A:278,Z:109,bePerNucleon:7.395,symbol:"Mt",name_ar:"مايتنريوم-278"},
    "Ds-279":{A:279,Z:110,bePerNucleon:7.385,symbol:"Ds",name_ar:"دارمشتاديوم-279"},
    "Rg-280":{A:280,Z:111,bePerNucleon:7.375,symbol:"Rg",name_ar:"روينتغينيوم-280"},
    "Cn-283":{A:283,Z:112,bePerNucleon:7.365,symbol:"Cn",name_ar:"كوبرنيسيوم-283"},
    "Nh-284":{A:284,Z:113,bePerNucleon:7.355,symbol:"Nh",name_ar:"نيهونيوم-284"},
    "Fl-287":{A:287,Z:114,bePerNucleon:7.345,symbol:"Fl",name_ar:"فليروفيوم-287"},
    "Mc-288":{A:288,Z:115,bePerNucleon:7.335,symbol:"Mc",name_ar:"موسكوفيوم-288"},
    "Lv-291":{A:291,Z:116,bePerNucleon:7.325,symbol:"Lv",name_ar:"ليفريموريوم-291"},
    "Ts-292":{A:292,Z:117,bePerNucleon:7.315,symbol:"Ts",name_ar:"تينيسين-292"},
    "Og-295":{A:295,Z:118,bePerNucleon:7.300,symbol:"Og",name_ar:"أوغانيسون-295"}
};

const predefinedReactionsData = {
    fission_U235_1:{name:"U-235 + n → Ba-141 + Kr-92 + 3n",type:"انشطار",reactants:[{key:"U-235",count:1},{key:"n",count:1}],products:[{key:"Ba-141",count:1},{key:"Kr-92",count:1},{key:"n",count:3}]},
    fission_U235_2:{name:"U-235 + n → Sr-94 + Xe-140 + 2n",type:"انشطار",reactants:[{key:"U-235",count:1},{key:"n",count:1}],products:[{key:"Sr-94",count:1},{key:"Xe-140",count:1},{key:"n",count:2}]},
    fission_U235_3:{name:"U-235 + n → La-147 + Br-87 + 2n",type:"انشطار",reactants:[{key:"U-235",count:1},{key:"n",count:1}],products:[{key:"La-147",count:1},{key:"Br-87",count:1},{key:"n",count:2}]},
    fission_Pu239_1:{name:"Pu-239 + n → Mo-99 + Sn-131 + 3n",type:"انشطار",reactants:[{key:"Pu-239",count:1},{key:"n",count:1}],products:[{key:"Mo-99",count:1},{key:"Sn-131",count:1},{key:"n",count:3}]},
    fission_Pu239_2:{name:"Pu-239 + n → Zr-95 + Xe-140 + 4n",type:"انشطار",reactants:[{key:"Pu-239",count:1},{key:"n",count:1}],products:[{key:"Zr-95",count:1},{key:"Xe-140",count:1},{key:"n",count:4}]},
    fission_U233_1:{name:"U-233 + n → Sr-90 + Xe-140 + 3n",type:"انشطار",reactants:[{key:"U-233",count:1},{key:"n",count:1}],products:[{key:"Sr-90",count:1},{key:"Xe-140",count:1},{key:"n",count:3}]},
    fission_U238_fast_1:{name:"U-238 + n (سريع) → Sr-94 + Xe-140 + 4n",type:"انشطار",reactants:[{key:"U-238",count:1},{key:"n",count:1}],products:[{key:"Sr-94",count:1},{key:"Xe-140",count:1},{key:"n",count:4}]},
    fission_Th232_1:{name:"Th-232 + n → Sr-90 + Xe-135 + 7n",type:"انشطار",reactants:[{key:"Th-232",count:1},{key:"n",count:1}],products:[{key:"Sr-90",count:1},{key:"Xe-135",count:1},{key:"n",count:7}]},
    fission_Pu241_1:{name:"Pu-241 + n → Mo-103 + Sn-131 + 7n",type:"انشطار",reactants:[{key:"Pu-241",count:1},{key:"n",count:1}],products:[{key:"Mo-103",count:1},{key:"Sn-131",count:1},{key:"n",count:7}]},
    fission_U235_4_common:{name:"U-235 + n → Cs-137 + Y-89 + 10n",type:"انشطار",reactants:[{key:"U-235",count:1},{key:"n",count:1}],products:[{key:"Cs-137",count:1},{key:"Y-89",count:1},{key:"n",count:10}]},
    fusion_DT:{name:"D + T → He-4 + n",type:"اندماج",reactants:[{key:"H-2",count:1},{key:"H-3",count:1}],products:[{key:"He-4",count:1},{key:"n",count:1}]},
    fusion_DD_He3:{name:"D + D → He-3 + n",type:"اندماج",reactants:[{key:"H-2",count:1},{key:"H-2",count:1}],products:[{key:"He-3",count:1},{key:"n",count:1}]},
    fusion_DD_T:{name:"D + D → T + p",type:"اندماج",reactants:[{key:"H-2",count:1},{key:"H-2",count:1}],products:[{key:"H-3",count:1},{key:"H-1",count:1}]},
    fusion_DHe3:{name:"D + He-3 → He-4 + p",type:"اندماج",reactants:[{key:"H-2",count:1},{key:"He-3",count:1}],products:[{key:"He-4",count:1},{key:"H-1",count:1}]},
    fusion_Li6D:{name:"Li-6 + D → 2 He-4",type:"اندماج",reactants:[{key:"Li-6",count:1},{key:"H-2",count:1}],products:[{key:"He-4",count:2}]},
    // Additional predefined reactions for variety
    fusion_He3He3:{name:"He-3 + He-3 → He-4 + 2 H-1",type:"اندماج",reactants:[{key:"He-3",count:1},{key:"He-3",count:1}],products:[{key:"He-4",count:1},{key:"H-1",count:2}]},
    fission_U235_5:{name:"U-235 + n → Ce-144 + Zr-95 + 2n",type:"انشطار",reactants:[{key:"U-235",count:1},{key:"n",count:1}],products:[{key:"Ce-144",count:1},{key:"Zr-95",count:1},{key:"n",count:2}]},
    fission_Pu239_3:{name:"Pu-239 + n → Xe-134 + Sr-94 + 3n",type:"انشطار",reactants:[{key:"Pu-239",count:1},{key:"n",count:1}],products:[{key:"Xe-134",count:1},{key:"Sr-94",count:1},{key:"n",count:3}]},
    alpha_decay_U238:{name:"U-238 → Th-234 + He-4",type:"اضمحلال ألفا",reactants:[{key:"U-238",count:1}],products:[{key:"Th-234",count:1},{key:"He-4",count:1}]},
    beta_decay_C14:{name:"C-14 → N-14 + e⁻ + ν̅_e",type:"اضمحلال بيتا",reactants:[{key:"C-14",count:1}],products:[{key:"N-14",count:1}]}, // Simplified, electron and antineutrino not in isotopesData
    neutron_capture_Au197:{name:"Au-197 + n → Au-198",type:"التقاط نيوترون",reactants:[{key:"Au-197",count:1},{key:"n",count:1}],products:[{key:"Au-198",count:1}]} // Au-198 might not be in the list, just an example
};

// --- UTILITY FUNCTIONS ---
// Function to get the display name for an isotope
function getIsotopeDisplayName(isotopeKey, count = 1) {
    const isotope = isotopesData[isotopeKey];
    if (!isotope) return `(${isotopeKey}?)`;
    let display = "";
    if (count > 1) display += count;
    if (isotope.A > 0) display += `<sup>${isotope.A}</sup>`;
    display += isotope.symbol;
    return display;
}

// Function to format the reaction equation for display
function formatReactionEquation(reactants, products) {
    const rStr = reactants.filter(r => r.key && isotopesData[r.key]).map(r => getIsotopeDisplayName(r.key, r.count)).join(" + ");
    const pStr = products.filter(p => p.key && isotopesData[p.key]).map(p => getIsotopeDisplayName(p.key, p.count)).join(" + ");
    if (!rStr || !pStr) return "تفاعل غير مكتمل أو يحتوي على عناصر غير معروفة.";
    return `${rStr} → ${pStr} + Q`;
}

// --- DOM ELEMENTS ---
let predefinedReactionSelect, predefinedReactionDisplay, calculatePredefinedReactionButton;
let reactant1Select, reactant1Count, reactant2Select, reactant2Count;
let product1Select, product1Count, product2Select, product2Count, product3Select, product3Count;
let manualReactionDisplay, calculateManualReactionButton;
let isotopeSelectBE, beResults;
let resultsModal, modalBodyContent;
let aboutMeModal, openAboutMeModalButton;


// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    predefinedReactionSelect = document.getElementById('predefinedReactionSelect');
    predefinedReactionDisplay = document.getElementById('predefinedReactionDisplay');
    calculatePredefinedReactionButton = document.getElementById('calculatePredefinedReactionButton');
    
    reactant1Select = document.getElementById('reactant1Select');
    reactant1Count = document.getElementById('reactant1Count');
    reactant2Select = document.getElementById('reactant2Select');
    reactant2Count = document.getElementById('reactant2Count');
    
    product1Select = document.getElementById('product1Select');
    product1Count = document.getElementById('product1Count');
    product2Select = document.getElementById('product2Select');
    product2Count = document.getElementById('product2Count');
    product3Select = document.getElementById('product3Select');
    product3Count = document.getElementById('product3Count');

    manualReactionDisplay = document.getElementById('manualReactionDisplay');
    calculateManualReactionButton = document.getElementById('calculateManualReactionButton');

    isotopeSelectBE = document.getElementById('isotopeSelectBE');
    beResults = document.getElementById('beResults');

    resultsModal = document.getElementById('resultsModal');
    modalBodyContent = document.getElementById('modalBodyContent');
    
    aboutMeModal = document.getElementById('aboutMeModal');
    openAboutMeModalButton = document.getElementById('openAboutMeModalButton');

    // Populate select dropdowns with isotope and reaction data
    populateIsotopeSelects();
    populatePredefinedReactions();

    // Add event listeners
    predefinedReactionSelect.addEventListener('change', handlePredefinedReactionChange);
    calculatePredefinedReactionButton.addEventListener('click', handleCalculatePredefinedReaction);
    calculateManualReactionButton.addEventListener('click', handleCalculateManualReaction);
    isotopeSelectBE.addEventListener('change', handleIsotopeBEChange);
    if(openAboutMeModalButton) openAboutMeModalButton.addEventListener('click', openAboutMeModal);


    // Event listeners for manual reaction inputs to update display
    const manualReactionInputs = [
        reactant1Select, reactant1Count, reactant2Select, reactant2Count,
        product1Select, product1Count, product2Select, product2Count,
        product3Select, product3Count
    ];
    manualReactionInputs.forEach(input => {
        if(input) input.addEventListener('change', () => {
            updateManualReactionDisplay();
            predefinedReactionSelect.value = ""; // Clear predefined selection when manual changes
            handlePredefinedReactionChange(); // Update predefined display state
        });
    });
    // Initial update for manual reaction display and predefined reaction state
    updateManualReactionDisplay();
    handlePredefinedReactionChange();
});

// Function to populate all isotope select dropdowns
function populateIsotopeSelects() {
    const isotopeOptions = ['<option value="">-- اختر --</option>'];
    // Sort isotopes by Z (atomic number) then A (mass number) for better organization
    const sortedIsotopeKeys = Object.keys(isotopesData).sort((a, b) => {
        const isoA = isotopesData[a];
        const isoB = isotopesData[b];
        if (isoA.Z !== isoB.Z) return isoA.Z - isoB.Z;
        return isoA.A - isoB.A;
    });
    sortedIsotopeKeys.forEach(key => {
        const isotope = isotopesData[key];
        isotopeOptions.push(`<option value="${key}">${isotope.name_ar} (${getIsotopeDisplayName(key)}, Z=${isotope.Z})</option>`);
    });
    const optionsHTML = isotopeOptions.join('');
    // Apply options to all relevant select elements
    [reactant1Select, reactant2Select, product1Select, product2Select, product3Select, isotopeSelectBE].forEach(sel => {
        if (sel) sel.innerHTML = optionsHTML;
    });
}

// Function to populate the predefined reactions dropdown
function populatePredefinedReactions() {
    if (!predefinedReactionSelect) return;
    for (const key in predefinedReactionsData) {
        const reaction = predefinedReactionsData[key];
        const option = document.createElement('option');
        option.value = key;
        option.textContent = `${reaction.type}: ${reaction.name}`;
        predefinedReactionSelect.appendChild(option);
    }
}

// Function to update the displayed manual reaction equation
function updateManualReactionDisplay() {
    // Get reactants and products from selected values and counts
    const reactants = [
        { key: reactant1Select.value, count: parseInt(reactant1Count.value) || 0 },
        { key: reactant2Select.value, count: parseInt(reactant2Count.value) || 0 }
    ].filter(r => r.key && r.count > 0); // Filter out empty or zero-count entries
    const products = [
        { key: product1Select.value, count: parseInt(product1Count.value) || 0 },
        { key: product2Select.value, count: parseInt(product2Count.value) || 0 },
        { key: product3Select.value, count: parseInt(product3Count.value) || 0 }
    ].filter(p => p.key && p.count > 0);

    // Update display and enable/disable calculate button
    if (reactants.length === 0 && products.length === 0) {
        manualReactionDisplay.innerHTML = '<p class="text-gray-400">قم ببناء تفاعلك هنا.</p>';
        calculateManualReactionButton.disabled = true;
        return;
    }
    manualReactionDisplay.innerHTML = `<p class="text-sm md:text-md">${formatReactionEquation(reactants, products)}</p>`;
    calculateManualReactionButton.disabled = false;
}

// Handler for when a predefined reaction is selected
function handlePredefinedReactionChange() {
    const selectedKey = predefinedReactionSelect.value;
    if (selectedKey && predefinedReactionsData[selectedKey]) {
        const reaction = predefinedReactionsData[selectedKey];
        predefinedReactionDisplay.innerHTML = `<p class="text-sm md:text-md">${formatReactionEquation(reaction.reactants, reaction.products)}</p>`;
        calculatePredefinedReactionButton.classList.remove('hidden');
        clearManualInputsOnly(); // Clear manual inputs when a predefined reaction is chosen
        calculateManualReactionButton.disabled = true; // Disable manual calc button
    } else {
        // If no predefined reaction is selected, revert display and hide button
        predefinedReactionDisplay.innerHTML = '<p class="text-gray-400">لم يتم اختيار تفاعل جاهز.</p>';
        calculatePredefinedReactionButton.classList.add('hidden');
        // Re-evaluate manual calculation button state
        const manualReactants = [reactant1Select.value, reactant2Select.value].filter(Boolean);
        const manualProducts = [product1Select.value, product2Select.value, product3Select.value].filter(Boolean);
        calculateManualReactionButton.disabled = !(manualReactants.length > 0 || manualProducts.length > 0) ;
    }
}

// Function to clear only the manual reaction input fields
function clearManualInputsOnly() {
     [reactant1Select, reactant2Select, product1Select, product2Select, product3Select].forEach(sel => { if(sel) sel.value = ""; });
     [reactant1Count, reactant2Count, product1Count, product2Count, product3Count].forEach(inp => { if(inp) inp.value = "1"; });
     updateManualReactionDisplay(); // Update display after clearing
}

// Function to calculate the reaction energy (Q-value)
function calculateReactionEnergy(reactionData) {
    let totalBEReactantsSum = 0;
    const reactantNucleiDetails = []; // To store details for display

    reactionData.reactants.forEach(r => {
        const isotope = isotopesData[r.key];
        if (isotope) {
            const totalBEForIsotope = isotope.bePerNucleon * isotope.A;
            totalBEReactantsSum += totalBEForIsotope * r.count;
            // Only add valid nuclei (A>0, Z!=0, and bePerNucleon defined)
            if (isotope.A > 0 && isotope.Z !== 0 && isotope.bePerNucleon > 0) {
                 reactantNucleiDetails.push({
                     key: r.key,
                     bePerNucleon: isotope.bePerNucleon,
                     totalBE: totalBEForIsotope,
                     count: r.count
                 });
            }
        }
    });

    let totalBEProductsSum = 0;
    const productNucleiDetails = []; // To store details for display

    reactionData.products.forEach(p => {
        const isotope = isotopesData[p.key];
        if (isotope) {
            const totalBEForIsotope = isotope.bePerNucleon * isotope.A;
            totalBEProductsSum += totalBEForIsotope * p.count;
            // Only add valid nuclei (A>0, Z!=0, and bePerNucleon defined)
             if (isotope.A > 0 && isotope.Z !== 0 && isotope.bePerNucleon > 0) {
                productNucleiDetails.push({
                     key: p.key,
                     bePerNucleon: isotope.bePerNucleon,
                     totalBE: totalBEForIsotope,
                     count: p.count
                 });
            }
        }
    });
    // Calculate Q-value (energy released)
    const qValue = totalBEProductsSum - totalBEReactantsSum;
    return { qValue, reactantNucleiDetails, productNucleiDetails };
}

// Function to generate the HTML content for the results modal
function generateResultsHTML(reactionEquationStr, qValue, reactantNucleiDetails, productNucleiDetails) {
    let html = `<h3 class="text-md md:text-lg lg:text-xl mb-2 font-bold text-teal-300">نتائج حساب التفاعل:</h3>`;
    html += `<p class="modal-equation-label">المعادلة:</p>`;
    html += `<div class="modal-equation-display text-sm md:text-md">${reactionEquationStr}</div>`;
    html += `<p class="text-sm md:text-md mb-2.5"><strong>الطاقة المحررة من التفاعل (Q):</strong> <span class="font-bold ${qValue >= 0 ? 'text-green-400' : 'text-red-400'}">${qValue.toFixed(3)} MeV</span></p>`;
    html += '<div class="modal-result-section space-y-3">';
    
    // Display reactant details
    if (reactantNucleiDetails.length > 0) {
        html += '<h4 class="text-sm md:text-md font-semibold text-gray-200">المتفاعلات:</h4><ul class="list-none space-y-1.5">';
        reactantNucleiDetails.forEach(detail => {
            const countPrefix = detail.count > 1 ? `${detail.count} × ` : "";
            html += `<li class="text-xs md:text-sm nucleus-details"><strong>${countPrefix}${isotopesData[detail.key].name_ar} (${getIsotopeDisplayName(detail.key)}):</strong>`;
            html += `<p class="ml-3">طاقة الربط لكل نيوكليون: ${detail.bePerNucleon.toFixed(4)} MeV</p>`;
            html += `<p class="ml-3">طاقة الربط الكلية للنواة: ${detail.totalBE.toFixed(3)} MeV</p></li>`;
        });
        html += '</ul>';
    }
    // Display product details
    if (productNucleiDetails.length > 0) {
        html += '<h4 class="text-sm md:text-md font-semibold mt-2.5 text-gray-200">النواتج:</h4><ul class="list-none space-y-1.5">';
        productNucleiDetails.forEach(detail => {
            const countPrefix = detail.count > 1 ? `${detail.count} × ` : "";
            html += `<li class="text-xs md:text-sm nucleus-details"><strong>${countPrefix}${isotopesData[detail.key].name_ar} (${getIsotopeDisplayName(detail.key)}):</strong>`;
            html += `<p class="ml-3">طاقة الربط لكل نيوكليون: ${detail.bePerNucleon.toFixed(4)} MeV</p>`;
            html += `<p class="ml-3">طاقة الربط الكلية للنواة: ${detail.totalBE.toFixed(3)} MeV</p></li>`;
        });
        html += '</ul>';
    }
    html += '</div>';
    return html;
}

// Handler for calculating predefined reactions
function handleCalculatePredefinedReaction() {
    const selectedKey = predefinedReactionSelect.value;
    if (!selectedKey || !predefinedReactionsData[selectedKey]) {
        console.error("No predefined reaction selected for calculation.");
        return;
    }
    const reactionData = predefinedReactionsData[selectedKey];
    const reactionEquationStr = formatReactionEquation(reactionData.reactants, reactionData.products);
    const { qValue, reactantNucleiDetails, productNucleiDetails } = calculateReactionEnergy(reactionData);
    
    // Populate modal and open it
    if(modalBodyContent) modalBodyContent.innerHTML = generateResultsHTML(reactionEquationStr, qValue, reactantNucleiDetails, productNucleiDetails);
    openResultsModal();
}

// Handler for calculating manually built reactions
function handleCalculateManualReaction() {
    // Get reactants and products, filtering out invalid or zero-count entries
    const reactants = [
        { key: reactant1Select.value, count: parseInt(reactant1Count.value) || 0 },
        { key: reactant2Select.value, count: parseInt(reactant2Count.value) || 0 }
    ].filter(r => r.key && r.count > 0 && isotopesData[r.key]);
    const products = [
        { key: product1Select.value, count: parseInt(product1Count.value) || 0 },
        { key: product2Select.value, count: parseInt(product2Count.value) || 0 },
        { key: product3Select.value, count: parseInt(product3Count.value) || 0 }
    ].filter(p => p.key && p.count > 0 && isotopesData[p.key]);

    // Check if a valid reaction is built
    if (reactants.length === 0 || products.length === 0) {
        if(modalBodyContent) modalBodyContent.innerHTML = '<p class="text-red-400 text-sm md:text-md text-center p-1.5">الرجاء بناء تفاعل يدوي مكتمل (متفاعل واحد وناتج واحد على الأقل).</p>';
        openResultsModal();
        return;
    }
    const reactionData = { reactants, products };
    const reactionEquationStr = formatReactionEquation(reactants, products);
    const { qValue, reactantNucleiDetails, productNucleiDetails } = calculateReactionEnergy(reactionData);
    
    // Populate modal and open it
    if(modalBodyContent) modalBodyContent.innerHTML = generateResultsHTML(reactionEquationStr, qValue, reactantNucleiDetails, productNucleiDetails);
    openResultsModal();
}


// Handler for when an isotope is selected in the Binding Energy Calculator tab
function handleIsotopeBEChange() {
    const selectedKey = isotopeSelectBE.value;
    if (selectedKey && isotopesData[selectedKey]) {
        const isotope = isotopesData[selectedKey];
        let html = `<h3 class="text-md md:text-lg lg:text-xl mb-1 font-bold text-teal-300">معلومات النظير: ${isotope.name_ar}</h3>`;
        html += `<p class="text-sm md:text-md"><strong>الرمز:</strong> ${getIsotopeDisplayName(selectedKey)}</p>`;
        html += `<p class="text-sm md:text-md"><strong>العدد الذري (Z):</strong> ${isotope.Z}</p>`;
        html += `<p class="text-sm md:text-md"><strong>العدد الكتلي (A):</strong> ${isotope.A}</p>`;
        const totalBE = isotope.bePerNucleon * isotope.A;
        if (isotope.bePerNucleon > 0) {
            html += `<p class="text-sm md:text-md"><strong>طاقة الربط لكل نيوكليون:</strong> <span class="font-bold text-green-400">${isotope.bePerNucleon.toFixed(4)} MeV</span></p>`;
            html += `<p class="text-sm md:text-md"><strong>طاقة الربط الكلية للنواة:</strong> <span class="font-bold text-green-400">${totalBE.toFixed(3)} MeV</span></p>`;
        } else if (isotope.A === 1 && (isotope.Z === 1 || isotope.Z === 0) ) {
             // Special case for proton and neutron
             html += `<p class="text-sm md:text-md"><strong>طاقة الربط لكل نيوكليون:</strong> <span class="font-bold text-gray-400">0 MeV (${isotope.Z === 1 ? 'بروتون مفرد' : 'نيوترون حر'})</span></p>`;
             html += `<p class="text-sm md:text-md"><strong>طاقة الربط الكلية للنواة:</strong> <span class="font-bold text-gray-400">0 MeV</span></p>`;
        } else {
            html += `<p class="text-sm md:text-md"><strong>طاقة الربط لكل نيوكليون:</strong> <span class="font-bold text-yellow-400">غير محددة أو صفر</span></p>`;
            html += `<p class="text-sm md:text-md"><strong>طاقة الربط الكلية للنواة:</strong> <span class="font-bold text-yellow-400">غير محددة أو صفر</span></p>`;
        }
        
        let additionalInfoHTML = "";
        if (isotope.abundance) {
            additionalInfoHTML += `<p class="text-sm md:text-md"><strong>نسبة التواجد الطبيعي:</strong> ${isotope.abundance}</p>`;
        }
        if (isotope.notes_ar) {
             additionalInfoHTML += `<p class="text-sm md:text-md"><strong>ملاحظات:</strong> ${isotope.notes_ar}</p>`;
        }
        if(additionalInfoHTML) {
            html += `<div class="isotope-info-block">${additionalInfoHTML}</div>`;
        }

        beResults.innerHTML = html;
    } else {
        beResults.innerHTML = '<p class="text-gray-400 text-sm md:text-md text-center p-1.5">اختر نظيرًا لعرض طاقة الربط الخاصة به.</p>';
    }
}

// Function to clear all reaction-related inputs and displays
function clearAllReactionInputs() {
    if (predefinedReactionSelect) predefinedReactionSelect.value = "";
    clearManualInputsOnly(); // This also updates the manual display
    
    if (predefinedReactionDisplay) predefinedReactionDisplay.innerHTML = '<p class="text-gray-400">لم يتم اختيار تفاعل جاهز.</p>';
    if (calculatePredefinedReactionButton) calculatePredefinedReactionButton.classList.add('hidden');
    
    updateManualReactionDisplay(); // Ensure manual display is correct after clearing
}

// Modal functions
function openResultsModal() {
    if(resultsModal) resultsModal.style.display = "block";
}
function closeResultsModal() {
    if(resultsModal) {
        resultsModal.style.display = "none";
        clearAllReactionInputs(); // Clear inputs when results modal is closed
    }
}
function openAboutMeModal() {
    if(aboutMeModal) aboutMeModal.style.display = "block";
}
function closeAboutMeModal() {
    if(aboutMeModal) aboutMeModal.style.display = "none";
}

// Close modals if user clicks outside of them
window.onclick = function(event) {
    if (event.target == resultsModal) {
        closeResultsModal();
    }
    if (event.target == aboutMeModal) {
        closeAboutMeModal();
    }
}

// Function to handle tab switching
function openTab(event, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    const currentTab = document.getElementById(tabName);
    if(currentTab) {
        currentTab.style.display = "block";
        currentTab.classList.add("active");
    }
    if (event && event.currentTarget) {
         event.currentTarget.classList.add("active");
    }
}
// Automatically open the Reaction Calculator tab on load
document.addEventListener('DOMContentLoaded', () => {
    const defaultTabButton = document.getElementById("tabBtnReactionCalc");
    if (defaultTabButton) {
         const clickEvent = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        defaultTabButton.dispatchEvent(clickEvent);
    }
});

