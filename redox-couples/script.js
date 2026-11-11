// ترجمة النصوص للغات المختلفة
const translations = {
    ar: {
        appTitle: "التطبيق الكيميائي المتقدم",
        appDescription: "ابحث في قاعدة بيانات تحتوي على أكثر من 60 ثنائية أكسدة-إرجاع و30 حمض وقاعدة مع تفاصيلها الكيميائية الكاملة",
        allTab: "الكل",
        redoxTab: "الأكسدة والإرجاع",
        acidBaseTab: "الأحماض والقواعد",
        searchPlaceholder: "ابحث باسم الثنائية أو الحمض أو القاعدة أو أحد العناصر...",
        showAllBtn: "عرض الكل",
        helpLabel: "المساعدة",
        noResultsTitle: "لا توجد نتائج",
        noResultsText: "لم نعثر على أي تطابق لبحثك. حاول استخدام مصطلحات بحث مختلفة.",
        initialInstructionsTitle: "مرحبًا بك في التطبيق الكيميائي المتقدم",
        initialInstructionsText1: "استخدم حقل البحث أعلاه للعثور على ثنائيات الأكسدة-الإرجاع أو الأحماض والقواعد.",
        initialInstructionsText2: "يمكنك أيضاً النقر على 'عرض الكل' لاستعراض جميع المواد، أو استخدام التبويبات لتصفية النتائج.",
        developerLabel: "معلومات المطور",
        modalDevInfoTitle: "معلومات المطور",
        footerText: "تم تطوير هذا التطبيق لتقديم معلومات كيميائية دقيقة - جميع البيانات قابلة للتحديث والتوسيع",
        devName: "المطور",
        devJob: "الوظيفة",
        devSubject: "التخصص",
        devContact: "الاتصال",
        devEmail: "البريد الإلكتروني",
        devPhone: "الهاتف",
        copyright: "التطبيق الكيميائي المتقدم",
        reduction: "تفاعل الإرجاع:",
        oxidation: "تفاعل الأكسدة:",
        potential: "كمون الأكسدة:",
        equation: "المعادلة:",
        pKa: "ثابت الحموضة (pKa):",
        type: "النوع:",
        description: "الوصف:",
        acid: "حمض",
        base: "قاعدة",
        strongAcid: "لا يوجد (حمض قوي)",
        strongBase: "لا يوجد (قاعدة قوية)",
        modalHelpInfoTitle: "خدمات التطبيق",
        helpIntroText: "يقدم هذا التطبيق معلومات مفصلة عن ثنائيات الأكسدة-الإرجاع والأحماض والقواعد. إليك كيفية استخدامه:",
        helpSearchText: "البحث: استخدم حقل البحث العلوي للعثور على المواد الكيميائية بالاسم أو الرمز.",
        helpTabsText: "التصفية بالتبويبات: استخدم الأزرار 'الكل'، 'الأكسدة والإرجاع'، 'الأحماض والقواعد' لتصفية النتائج حسب النوع.",
        helpShowAllText: "عرض الكل: انقر على زر 'عرض الكل' لعرض جميع المواد في قاعدة البيانات.",
        helpDirectSearchText: "البحث المباشر: يمكنك النقر على أي بطاقة نتيجة لملء حقل البحث باسم المادة وعرض تفاصيلها مباشرة.",
        helpLangText: "تغيير اللغة: استخدم أزرار اللغة في الزاوية العلوية لتغيير لغة واجهة التطبيق."
    },
    fr: {
        appTitle: "Application Chimique Avancée",
        appDescription: "Recherchez dans une base de données contenant plus de 60 couples redox et 30 acides/bases avec leurs détails chimiques complets",
        allTab: "Tous",
        redoxTab: "Oxydoréduction",
        acidBaseTab: "Acides et Bases",
        searchPlaceholder: "Rechercher par nom de couple, acide, base ou élément...",
        showAllBtn: "Afficher Tout",
        helpLabel: "Aide",
        noResultsTitle: "Aucun résultat",
        noResultsText: "Aucune correspondance trouvée pour votre recherche. Essayez d'autres termes.",
        initialInstructionsTitle: "Bienvenue dans l'Application Chimique Avancée",
        initialInstructionsText1: "Utilisez le champ de recherche ci-dessus pour trouver des couples redox ou des acides/bases.",
        initialInstructionsText2: "Vous pouvez également cliquer sur 'Afficher Tout' pour parcourir toutes les substances, ou utiliser les onglets pour filtrer les résultats.",
        developerLabel: "Informations du Développeur",
        modalDevInfoTitle: "Informations du Développeur",
        footerText: "Cette application a été développée pour fournir des informations chimiques précises - toutes les données peuvent être mises à jour et étendues",
        devName: "Développeur",
        devJob: "Poste",
        devSubject: "Spécialité",
        devContact: "Contact",
        devEmail: "Email",
        devPhone: "Téléphone",
        copyright: "Application Chimique Avancée",
        reduction: "Réaction de réduction:",
        oxidation: "Réaction d'oxydation:",
        potential: "Potentiel d'oxydation:",
        equation: "Équation:",
        pKa: "Constante d'acidité (pKa):",
        type: "Type:",
        description: "Description:",
        acid: "Acide",
        base: "Base",
        strongAcid: "Non applicable (acide fort)",
        strongBase: "Non applicable (base forte)",
        modalHelpInfoTitle: "Services de l'Application",
        helpIntroText: "Cette application fournit des informations détaillées sur les couples redox et les acides/bases. Voici comment l'utiliser :",
        helpSearchText: "Recherche : Utilisez le champ de recherche ci-dessus pour trouver des substances chimiques par nom ou symbole.",
        helpTabsText: "Filtrer par onglets : Utilisez les boutons 'Tous', 'Oxydoréduction', 'Acides et Bases' pour filtrer les résultats par type.",
        helpShowAllText: "Afficher Tout : Cliquez sur le bouton 'Afficher Tout' pour afficher toutes les substances de la base de données.",
        helpDirectSearchText: "Recherche directe : Vous pouvez cliquer sur n'importe quelle carte de résultat pour remplir le champ de recherche avec le nom de la substance et afficher ses détails directement.",
        helpLangText: "Changer la langue : Utilisez les boutons de langue dans le coin supérieur pour changer la langue de l'interface de l'application."
    },
    en: {
        appTitle: "Advanced Chemistry App",
        appDescription: "Search in a database containing over 60 redox couples and 30 acids/bases with full chemical details",
        allTab: "All",
        redoxTab: "Redox",
        acidBaseTab: "Acids & Bases",
        searchPlaceholder: "Search by couple name, acid, base or element...",
        showAllBtn: "Show All",
        helpLabel: "Help",
        noResultsTitle: "No results",
        noResultsText: "No matches found for your search. Try different search terms.",
        initialInstructionsTitle: "Welcome to the Advanced Chemistry App",
        initialInstructionsText1: "Use the search field above to find redox couples or acids/bases.",
        initialInstructionsText2: "You can also click 'Show All' to browse all substances, or use the tabs to filter results.",
        developerLabel: "Developer Information",
        modalDevInfoTitle: "Developer Information",
        footerText: "This app was developed to provide accurate chemical information - all data can be updated and expanded",
        devName: "Developer",
        devJob: "Position",
        devSubject: "Specialty",
        devContact: "Contact",
        devEmail: "Email",
        devPhone: "Phone",
        copyright: "Advanced Chemistry App",
        reduction: "Reduction reaction:",
        oxidation: "Oxidation reaction:",
        potential: "Oxidation potential:",
        equation: "Equation:",
        pKa: "Acidity constant (pKa):",
        type: "Type:",
        description: "Description:",
        acid: "Acid",
        base: "Base",
        strongAcid: "N/A (strong acid)",
        strongBase: "N/A (strong base)",
        modalHelpInfoTitle: "App Services",
        helpIntroText: "This app provides detailed information on redox couples and acids/bases. Here's how to use it:",
        helpSearchText: "Search: Use the top search field to find chemical substances by name or symbol.",
        helpTabsText: "Filter by tabs: Use the 'All', 'Redox', 'Acids & Bases' buttons to filter results by type.",
        helpShowAllText: "Show All: Click the 'Show All' button to display all substances in the database.",
        helpDirectSearchText: "Direct Search: You can click on any result card to populate the search field with the substance name and view its details directly.",
        helpLangText: "Change Language: Use the language buttons in the top corner to change the app interface language."
    }
};

// قاعدة بيانات موسعة لثنائيات الأكسدة والإرجاع
const redoxCouples = [
    {
        name: {ar: "الزنك", fr: "Zinc", en: "Zinc"},
        couple: "Zn<sup>2+</sup>/Zn",
        reduction: "Zn<sup>2+</sup> + 2e<sup>-</sup> &rarr; Zn",
        oxidation: "Zn &rarr; Zn<sup>2+</sup> + 2e<sup>-</sup>",
        potential: "-0.76 V",
        type: "redox",
        description: {ar: "الزنك هو معدن انتقالي يستخدم في البطاريات والسبائك. ثنائيته الكيميائية مهمة في تفاعلات الأكسدة والإرجاع.", fr: "Le zinc est un métal de transition utilisé dans les batteries et les alliages. Son couple chimique est important dans les réactions d'oxydoréduction.", en: "Zinc is a transition metal used in batteries and alloys. Its chemical couple is important in redox reactions."}
    },
    {
        name: {ar: "النحاس", fr: "Cuivre", en: "Copper"},
        couple: "Cu<sup>2+</sup>/Cu",
        reduction: "Cu<sup>2+</sup> + 2e<sup>-</sup> &rarr; Cu",
        oxidation: "Cu &rarr; Cu<sup>2+</sup> + 2e<sup>-</sup>",
        potential: "+0.34 V",
        type: "redox",
        description: {ar: "النحاس معدن مرن وموصل جيد للكهرباء والحرارة. يستخدم على نطاق واسع في الأسلاك والأنابيب.", fr: "Le cuivre est un métal ductile et un bon conducteur d'électricité et de chaleur. Il est largement utilisé dans les fils et les tuyaux.", en: "Copper is a ductile metal and a good conductor of electricity and heat. It is widely used in wires and pipes."}
    },
    {
        name: {ar: "الحديد", fr: "Fer", en: "Iron"},
        couple: "Fe<sup>3+</sup>/Fe<sup>2+</sup>",
        reduction: "Fe<sup>3+</sup> + e<sup>-</sup> &rarr; Fe<sup>2+</sup>",
        oxidation: "Fe<sup>2+</sup> &rarr; Fe<sup>3+</sup> + e<sup>-</sup>",
        potential: "+0.77 V",
        type: "redox",
        description: {ar: "الحديد عنصر أساسي في صناعة الفولاذ وله دور حيوي في البيولوجيا، خاصة في الهيموغلوبين.", fr: "Le fer est un élément essentiel dans la production d'acier et joue un rôle vital en biologie, notamment dans l'hémoglobine.", en: "Iron is a fundamental element in steel production and plays a vital role in biology, especially in hemoglobin."}
    },
    {
        name: {ar: "الفضة", fr: "Argent", en: "Silver"},
        couple: "Ag<sup>+</sup>/Ag",
        reduction: "Ag<sup>+</sup> + e<sup>-</sup> &rarr; Ag",
        oxidation: "Ag &rarr; Ag<sup>+</sup> + e<sup>-</sup>",
        potential: "+0.80 V",
        type: "redox",
        description: {ar: "الفضة معدن ثمين يستخدم في المجوهرات والعملات والتصوير الفوتوغرافي بسبب موصليته العالية.", fr: "L'argent est un métal précieux utilisé dans les bijoux, les pièces de monnaie et la photographie en raison de sa conductivité élevée.", en: "Silver is a precious metal used in jewelry, coinage, and photography due to its high conductivity."}
    },
    {
        name: {ar: "الهيدروجين", fr: "Hydrogène", en: "Hydrogen"},
        couple: "2H<sup>+</sup>/H<sub>2</sub>",
        reduction: "2H<sup>+</sup> + 2e<sup>-</sup> &rarr; H<sub>2</sub>",
        oxidation: "H<sub>2</sub> &rarr; 2H<sup>+</sup> + 2e<sup>-</sup>",
        potential: "0.00 V",
        type: "redox",
        description: {ar: "الهيدروجين هو أخف وأكثر العناصر وفرة في الكون، وهو وقود نظيف محتمل.", fr: "L'hydrogène est l'élément le plus léger et le plus abondant de l'univers, et constitue un carburant propre potentiel.", en: "Hydrogen is the lightest and most abundant element in the universe, and is a potential clean fuel."}
    },
    {
        name: {ar: "الألومنيوم", fr: "Aluminium", en: "Aluminum"},
        couple: "Al<sup>3+</sup>/Al",
        reduction: "Al<sup>3+</sup> + 3e<sup>-</sup> &rarr; Al",
        oxidation: "Al &rarr; Al<sup>3+</sup> + 3e<sup>-</sup>",
        potential: "-1.66 V",
        type: "redox",
        description: {ar: "الألومنيوم معدن خفيف الوزن ومقاوم للتآكل، يستخدم على نطاق واسع في الطائرات والتعبئة والبناء.", fr: "L'aluminium est un métal léger et résistant à la corrosion, largement utilisé dans les avions, l'emballage et la construction.", en: "Aluminum is a lightweight, corrosion-resistant metal, widely used in aircraft, packaging, and construction."}
    },
    {
        name: {ar: "القصدير", fr: "Étain", en: "Tin"},
        couple: "Sn<sup>4+</sup>/Sn<sup>2+</sup>",
        reduction: "Sn<sup>4+</sup> + 2e<sup>-</sup> &rarr; Sn<sup>2+</sup>",
        oxidation: "Sn<sup>2+</sup> &rarr; Sn<sup>4+</sup> + 2e<sup>-</sup>",
        potential: "+0.15 V",
        type: "redox",
        description: {ar: "القصدير معدن فضي يستخدم كطلاء واقٍ للمعادن الأخرى لمنع التآكل.", fr: "L'étain est un métal argenté utilisé comme revêtement protecteur pour d'autres métaux afin de prévenir la corrosion.", en: "Tin is a silvery metal used as a protective coating for other metals to prevent corrosion."}
    },
    {
        name: {ar: "المنغنيز", fr: "Manganèse", en: "Manganese"},
        couple: "MnO<sub>4</sub><sup>-</sup>/Mn<sup>2+</sup>",
        reduction: "MnO<sub>4</sub><sup>-</sup> + 8H<sup>+</sup> + 5e<sup>-</sup> &rarr; Mn<sup>2+</sup> + 4H<sub>2</sub>O",
        oxidation: "Mn<sup>2+</sup> + 4H<sub>2</sub>O &rarr; MnO<sub>4</sub><sup>-</sup> + 8H<sup>+</sup> + 5e<sup>-</sup>",
        potential: "+1.51 V",
        type: "redox",
        description: {ar: "المنغنيز عنصر أساسي في صناعة الفولاذ وله استخدامات في البطاريات والأسمدة.", fr: "Le manganèse est un élément essentiel dans la production d'acier et est utilisé dans les batteries et les engrais.", en: "Manganese is an essential element in steel production and has uses in batteries and fertilizers."}
    },
    {
        name: {ar: "الكروم", fr: "Chrome", en: "Chromium"},
        couple: "Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup>/Cr<sup>3+</sup>",
        reduction: "Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> + 14H<sup>+</sup> + 6e<sup>-</sup> &rarr; 2Cr<sup>3+</sup> + 7H<sub>2</sub>O",
        oxidation: "2Cr<sup>3+</sup> + 7H<sub>2</sub>O &rarr; Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup> + 14H<sup>+</sup> + 6e<sup>-</sup>",
        potential: "+1.33 V",
        type: "redox",
        description: {ar: "الكروم معدن صلب ومقاوم للتآكل، يستخدم في الطلاء الكهربائي وإنتاج السبائك.", fr: "Le chrome هو معدن صلب ومقاوم للتآكل، يستخدم في الطلاء الكهربائي وإنتاج السبائك.", en: "Chromium is a hard, corrosion-resistant metal, used in electroplating and alloy production."}
    },
    {
        name: {ar: "الكلور", fr: "Chlore", en: "Chlorine"},
        couple: "Cl<sub>2</sub>/Cl<sup>-</sup>",
        reduction: "Cl<sub>2</sub> + 2e<sup>-</sup> &rarr; 2Cl<sup>-</sup>",
        oxidation: "2Cl<sup>-</sup> &rarr; Cl<sub>2</sub> + 2e<sup>-</sup>",
        potential: "+1.36 V",
        type: "redox",
        description: {ar: "الكلور غاز سام يستخدم كمطهر وفي صناعة البلاستيك والمذيبات.", fr: "Le chlore est un gaz toxique utilisé comme désinfectant et dans la fabrication de plastiques et de solvants.", en: "Chlorine is a toxic gas used as a disinfectant and in the production of plastics and solvents."}
    },
    {
        name: {ar: "النيكل", fr: "Nickel", en: "Nickel"},
        couple: "Ni<sup>2+</sup>/Ni",
        reduction: "Ni<sup>2+</sup> + 2e<sup>-</sup> &rarr; Ni",
        oxidation: "Ni &rarr; Ni<sup>2+</sup> + 2e<sup>-</sup>",
        potential: "-0.25 V",
        type: "redox",
        description: {ar: "النيكل معدن فضي أبيض يستخدم في السبائك والبطاريات والطلاء الكهربائي.", fr: "Le nickel est un métal blanc argenté utilisé dans les alliages, les batteries et la galvanoplastie.", en: "Nickel is a silvery-white metal used in alloys, batteries, and electroplating."}
    },
    {
        name: {ar: "الكوبالت", fr: "Cobalt", en: "Cobalt"},
        couple: "Co<sup>3+</sup>/Co<sup>2+</sup>",
        reduction: "Co<sup>3+</sup> + e<sup>-</sup> &rarr; Co<sup>2+</sup>",
        oxidation: "Co<sup>2+</sup> &rarr; Co<sup>3+</sup> + e<sup>-</sup>",
        potential: "+1.82 V",
        type: "redox",
        description: {ar: "الكوبالت معدن صلب يستخدم في السبائك عالية القوة والبطاريات والأصباغ.", fr: "Le cobalt est un métal dur utilisé dans les alliages à haute résistance, les batteries et les pigments.", en: "Cobalt is a hard metal used in high-strength alloys, batteries, and pigments."}
    },
    {
        name: {ar: "الرصاص", fr: "Plomb", en: "Lead"},
        couple: "Pb<sup>2+</sup>/Pb",
        reduction: "Pb<sup>2+</sup> + 2e<sup>-</sup> &rarr; Pb",
        oxidation: "Pb &rarr; Pb<sup>2+</sup> + 2e<sup>-</sup>",
        potential: "-0.13 V",
        type: "redox",
        description: {ar: "الرصاص معدن ثقيل ومرن، كان يستخدم تاريخياً في الأنابيب والبطاريات، لكن استخدامه تراجع بسبب سميته.", fr: "Le plomb est un métal lourd et malléable, historiquement utilisé dans les tuyaux et les batteries, mais son utilisation a diminué en raison de sa toxicité.", en: "Lead is a heavy, malleable metal, historically used in pipes and batteries, but its use has declined due to its toxicity."}
    },
    {
        name: {ar: "الذهب", fr: "Or", en: "Gold"},
        couple: "Au<sup>3+</sup>/Au",
        reduction: "Au<sup>3+</sup> + 3e<sup>-</sup> &rarr; Au",
        oxidation: "Au &rarr; Au<sup>3+</sup> + 3e<sup>-</sup>",
        potential: "+1.50 V",
        type: "redox",
        description: {ar: "الذهب معدن ثمين ومقاوم للتآكل، يستخدم في المجوهرات والإلكترونيات والاستثمارات.", fr: "L'or est un métal précieux et résistant à la corrosion, utilisé dans les bijoux, l'électronique et les investissements.", en: "Gold is a precious and corrosion-resistant metal, used in jewelry, electronics, and investments."}
    },
    {
        name: {ar: "الزئبق", fr: "Mercure", en: "Mercury"},
        couple: "Hg<sup>2+</sup>/Hg",
        reduction: "Hg<sup>2+</sup> + 2e<sup>-</sup> &rarr; Hg",
        oxidation: "Hg &rarr; Hg<sup>2+</sup> + 2e<sup>-</sup>",
        potential: "+0.85 V",
        type: "redox",
        description: {ar: "الزئبق هو المعدن السائل الوحيد في درجة حرارة الغرفة، ويستخدم في موازين الحرارة وبعض التطبيقات الصناعية.", fr: "Le mercure est le seul métal liquide à température ambiante, utilisé dans les thermomètres et certaines applications industrielles.", en: "Mercury is the only metal that is liquid at room temperature, used in thermometers and some industrial applications."}
    }
];

// قاعدة بيانات موسعة للأحماض والقواعد
const acidsBases = [
    {
        name: {ar: "حمض الهيدروكلوريك", fr: "Acide chlorhydrique", en: "Hydrochloric acid"},
        couple: "HCl/Cl<sup>-</sup>",
        equation: "HCl &rarr; H<sup>+</sup> + Cl<sup>-</sup>",
        pKa: "strongAcid",
        type: "acid-base",
        subType: "acid",
        description: {ar: "حمض قوي شائع الاستخدام في الصناعة والمختبرات. يتأين كلياً في الماء.", fr: "Acide fort couramment utilisé dans l'industrie et les laboratoires. Il se dissocie complètement dans l'eau.", en: "A strong acid commonly used in industry and laboratories. It fully dissociates in water."}
    },
    {
        name: {ar: "حمض الأسيتيك", fr: "Acide acétique", en: "Acetic acid"},
        couple: "CH<sub>3</sub>COOH/CH<sub>3</sub>COO<sup>-</sup>",
        equation: "CH<sub>3</sub>COOH &#8652; H<sup>+</sup> + CH<sub>3</sub>COO<sup>-</sup>",
        pKa: "4.76",
        type: "acid-base",
        subType: "acid",
        description: {ar: "حمض عضوي ضعيف، المكون الرئيسي للخل. يستخدم في صناعة البوليمرات والمذيبات.", fr: "Acide organique faible, le composant principal du vinaigre. Utilisé dans la fabrication de polymères et de solvants.", en: "A weak organic acid, the main component of vinegar. Used in polymer and solvent production."}
    },
    {
        name: {ar: "حمض الكبريتيك", fr: "Acide sulfurique", en: "Sulfuric acid"},
        couple: "H<sub>2</sub>SO<sub>4</sub>/HSO<sub>4</sub><sup>-</sup>",
        equation: "H<sub>2</sub>SO<sub>4</sub> &rarr; H<sup>+</sup> + HSO<sub>4</sub><sup>-</sup>",
        pKa: "strongAcid",
        type: "acid-base",
        subType: "acid",
        description: {ar: "حمض معدني قوي جداً، يستخدم على نطاق واسع في الصناعة الكيميائية، ويعرف بزيت الزاج.", fr: "Acide minéral très fort, largement utilisé dans l'industrie chimique, connu sous le nom d'huile de vitriol.", en: "A very strong mineral acid, widely used in the chemical industry, known as oil of vitriol."}
    },
    {
        name: {ar: "الأمونيا", fr: "Ammoniac", en: "Ammonia"},
        couple: "NH<sub>4</sub><sup>+</sup>/NH<sub>3</sub>",
        equation: "NH<sub>4</sub><sup>+</sup> &#8652; H<sup>+</sup> + NH<sub>3</sub>",
        pKa: "9.25",
        type: "acid-base",
        subType: "base",
        description: {ar: "قاعدة ضعيفة، غاز لا لون له ذو رائحة نفاذة. يستخدم في الأسمدة والمنظفات.", fr: "Base faible, gaz incolore à l'odeur piquante. Utilisé dans les engrais et les nettoyants.", en: "A weak base, a colorless gas with a pungent odor. Used in fertilizers and cleaning products."}
    },
    {
        name: {ar: "حمض الفوسفوريك", fr: "Acide phosphorique", en: "Phosphoric acid"},
        couple: "H<sub>3</sub>PO<sub>4</sub>/H<sub>2</sub>PO<sub>4</sub><sup>-</sup>",
        equation: "H<sub>3</sub>PO<sub>4</sub> &#8652; H<sup>+</sup> + H<sub>2</sub>PO<sub>4</sub><sup>-</sup>",
        pKa: "2.14",
        type: "acid-base",
        subType: "acid",
        description: {ar: "حمض ثلاثي البروتون يستخدم في الأسمدة والمنظفات وكمادة مضافة غذائية.", fr: "Acide triprotique utilisé dans les engrais, les nettoyants et comme additif alimentaire.", en: "A triprotic acid used in fertilizers, detergents, and as a food additive."}
    },
    {
        name: {ar: "كربونات الصوديوم", fr: "Carbonate de sodium", en: "Sodium carbonate"},
        couple: "HCO<sub>3</sub><sup>-</sup>/CO<sub>3</sub><sup>2-</sup>",
        equation: "HCO<sub>3</sub><sup>-</sup> &#8652; H<sup>+</sup> + CO<sub>3</sub><sup>2-</sup>",
        pKa: "10.33",
        type: "acid-base",
        subType: "base",
        description: {ar: "مركب كيميائي يستخدم في صناعة الزجاج، الصابون، والمنظفات. وهو ملح قاعدي.", fr: "Composé chimique utilisé dans la fabrication du verre, du savon et des détergents. C'est un sel basique.", en: "A chemical compound used in glass, soap, and detergent manufacturing. It is a basic salt."}
    },
    {
        name: {ar: "حمض الكربونيك", fr: "Acide carbonique", en: "Carbonic acid"},
        couple: "H<sub>2</sub>CO<sub>3</sub>/HCO<sub>3</sub><sup>-</sup>",
        equation: "H<sub>2</sub>CO<sub>3</sub> &#8652; H<sup>+</sup> + HCO<sub>3</sub><sup>-</sup>",
        pKa: "6.35",
        type: "acid-base",
        subType: "acid",
        description: {ar: "يتكون عند ذوبان ثاني أكسيد الكربون في الماء، وهو مسؤول عن حموضة المشروبات الغازية.", fr: "Formé lorsque le dioxyde de carbone se dissout dans l'eau, il est responsable de l'acidité des boissons gazeuses.", en: "Formed when carbon dioxide dissolves in water, responsible for the acidity of carbonated drinks."}
    },
    {
        name: {ar: "هيدروكسيد الصوديوم", fr: "Hydroxyde de sodium", en: "Sodium hydroxide"},
        couple: "H<sub>2</sub>O/OH<sup>-</sup>",
        equation: "H<sub>2</sub>O &#8652; H<sup>+</sup> + OH<sup>-</sup>",
        pKa: "strongBase",
        type: "acid-base",
        subType: "base",
        description: {ar: "قاعدة قوية جداً، تعرف أيضاً بالصودا الكاوية. تستخدم في صناعة الصابون والمنظفات.", fr: "Base très forte, également connue sous le nom de soude caustique. Utilisée dans la fabrication de savons et de détergents.", en: "A very strong base, also known as caustic soda. Used in soap and detergent manufacturing."}
    },
    {
        name: {ar: "حمض البنزويك", fr: "Acide benzoïque", en: "Benzoic acid"},
        couple: "C<sub>6</sub>H<sub>5</sub>COOH/C<sub>6</sub>H<sub>5</sub>COO<sup>-</sup>",
        equation: "C<sub>6</sub>H<sub>5</sub>COOH &#8652; H<sup>+</sup> + C<sub>6</sub>H<sub>5</sub>COO<sup>-</sup>",
        pKa: "4.20",
        type: "acid-base",
        subType: "acid",
        description: {ar: "حمض عضوي عطري يستخدم كمادة حافظة في الأطعمة والمشروبات.", fr: "Acide organique aromatique utilisé comme conservateur dans les aliments et les boissons.", en: "An aromatic organic acid used as a preservative in foods and beverages."}
    },
    {
        name: {ar: "الفينول", fr: "Phénol", en: "Phenol"},
        couple: "C<sub>6</sub>H<sub>5</sub>OH/C<sub>6</sub>H<sub>5</sub>O<sup>-</sup>",
        equation: "C<sub>6</sub>H<sub>5</sub>OH &#8652; H<sup>+</sup> + C<sub>6</sub>H<sub>5</sub>O<sup>-</sup>",
        pKa: "10.0",
        type: "acid-base",
        subType: "acid", // الفينول حمض ضعيف جداً
        description: {ar: "مركب عضوي عطري يستخدم في صناعة البوليمرات والمطهرات.", fr: "Composé organique aromatique utilisé dans la fabrication de polymères et de désinfectants.", en: "An aromatic organic compound used in the production of polymers and disinfectants."}
    }
];

// دمج القوائم في قائمة واحدة لسهولة البحث والتصفية
const allData = [...redoxCouples, ...acidsBases];

// الحصول على عناصر DOM
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');
const tabBtns = document.querySelectorAll('.tab-btn');
const developerBtn = document.getElementById('developerBtn');
const developerModal = document.getElementById('developerModal');
const helpBtn = document.getElementById('helpBtn'); // زر المساعدة الجديد
const helpModal = document.getElementById('helpModal'); // نافذة المساعدة الجديدة
const closeModalBtns = document.querySelectorAll('.modal-close-btn'); // جميع أزرار الإغلاق للمودال
const langBtns = document.querySelectorAll('.lang-btn');
const showAllBtn = document.getElementById('showAllBtn');

// متغيرات حالة التطبيق
let activeTab = 'all'; // التبويب النشط حالياً (الكل، أكسدة-إرجاع، أحماض-قواعد)
let currentLang = 'ar'; // اللغة الحالية (العربية، الفرنسية، الإنجليزية)

/**
 * @function changeLanguage
 * @description تقوم بتغيير لغة واجهة المستخدم وتحديث النصوص بناءً على اللغة المختارة.
 * @param {string} lang - رمز اللغة ('ar', 'fr', 'en').
 */
function changeLanguage(lang) {
    currentLang = lang;
    
    // تحديث اتجاه الصفحة (RTL/LTR)
    document.body.className = lang;
    document.body.dir = (lang === 'ar' ? 'rtl' : 'ltr');
    document.body.style.textAlign = (lang === 'ar' ? 'right' : 'left');

    // تحديث جميع النصوص في الواجهة
    document.getElementById('app-title').textContent = translations[lang].appTitle;
    document.getElementById('app-description').textContent = translations[lang].appDescription;
    
    // تحديث نصوص أزرار التبويبات
    document.querySelector('.tab-btn[data-tab="all"] .tab-label').textContent = translations[lang].allTab;
    document.querySelector('.tab-btn[data-tab="redox"] .tab-label').textContent = translations[lang].redoxTab;
    document.querySelector('.tab-btn[data-tab="acid-base"] .tab-label').textContent = translations[lang].acidBaseTab;

    document.getElementById('searchInput').placeholder = translations[lang].searchPlaceholder;
    document.getElementById('show-all-label').textContent = translations[lang].showAllBtn;
    document.getElementById('help-label').textContent = translations[lang].helpLabel; // تحديث نص زر المساعدة
    document.getElementById('developer-label').textContent = translations[lang].developerLabel;
    
    // تحديث نصوص معلومات المطور في المودال
    document.getElementById('modal-dev-info-title').textContent = translations[lang].modalDevInfoTitle;
    document.getElementById('modal-dev-name-label').textContent = translations[lang].devName + ':';
    document.getElementById('modal-dev-job-label').textContent = translations[lang].devJob + ':';
    document.getElementById('modal-dev-subject-label').textContent = translations[lang].devSubject + ':';
    document.getElementById('modal-dev-contact-label').textContent = translations[lang].devContact + ':';
    document.getElementById('modal-dev-email-label').innerHTML = `${translations[lang].devEmail}: <a href="mailto:kadri68@gmail.com" style="color: #3498db;">kadri68@gmail.com</a>`;
    document.getElementById('modal-dev-phone-label').innerHTML = `${translations[lang].devPhone}: <a href="tel:0662692987" style="color: #3498db;">0662692987</a>`;
    
    // تحديث نصوص المساعدة في المودال
    document.getElementById('modal-help-info-title').textContent = translations[lang].modalHelpInfoTitle;
    document.getElementById('help-intro-text').textContent = translations[lang].helpIntroText;
    // تحديث عناصر القائمة بشكل صحيح
    document.getElementById('help-search-text').innerHTML = `**${translations[lang].helpSearchText.split(':')[0]}:** ${translations[lang].helpSearchText.split(':')[1]}`;
    document.getElementById('help-tabs-text').innerHTML = `**${translations[lang].helpTabsText.split(':')[0]}:** ${translations[lang].helpTabsText.split(':')[1]}`;
    document.getElementById('help-show-all-text').innerHTML = `**${translations[lang].helpShowAllText.split(':')[0]}:** ${translations[lang].helpShowAllText.split(':')[1]}`;
    document.getElementById('help-direct-search-text').innerHTML = `**${translations[lang].helpDirectSearchText.split(':')[0]}:** ${translations[lang].helpDirectSearchText.split(':')[1]}`;
    document.getElementById('help-lang-text').innerHTML = `**${translations[lang].helpLangText.split(':')[0]}:** ${translations[lang].helpLangText.split(':')[1]}`;

    document.getElementById('footer-text').textContent = translations[lang].footerText;
    document.getElementById('copyright-text').textContent = translations[lang].copyright;
    
    // تحديث حالة أزرار اللغة (نشط/غير نشط)
    langBtns.forEach(btn => {
        btn.classList.remove('active');
        if(btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // إعادة تصفية البيانات لعرضها باللغة الجديدة (إذا كان هناك بحث أو عرض الكل)
    // إذا كان حقل البحث فارغاً ولم يتم النقر على "عرض الكل"، يجب أن يظل فارغاً
    if (searchInput.value.trim() === '' && activeTab === 'all') {
        displayInitialInstructions(); // عرض التعليمات الأولية إذا لم يكن هناك بحث
    } else {
        filterData(); // إعادة تصفية البيانات بناءً على البحث الحالي أو التبويب
    }
}

/**
 * @function filterData
 * @description تقوم بتصفية البيانات بناءً على نص البحث والتبويب النشط.
 * إذا كان حقل البحث فارغاً، تعرض جميع البيانات للتبويب النشط.
 */
function filterData() {
    const searchTerm = searchInput.value.toLowerCase().trim(); // الحصول على نص البحث وتحويله لحروف صغيرة وإزالة المسافات الزائدة
    
    let dataToFilter = allData;
    
    // التصفية حسب التبويب النشط أولاً
    if (activeTab !== 'all') {
        dataToFilter = allData.filter(item => item.type === activeTab);
    }
    
    let filteredData = dataToFilter.filter(item => {
        // إذا كان حقل البحث فارغاً، نعرض جميع البيانات للتبويب النشط
        if (!searchTerm) return true;

        // التحقق مما إذا كان نص البحث موجوداً في أي من الحقول ذات الصلة
        const name = item.name[currentLang].toLowerCase();
        const couple = item.couple.toLowerCase();
        const reduction = item.reduction ? item.reduction.toLowerCase() : '';
        const oxidation = item.oxidation ? item.oxidation.toLowerCase() : '';
        const equation = item.equation ? item.equation.toLowerCase() : '';
        const potential = item.potential ? item.potential.toLowerCase() : '';
        const pKa = item.pKa ? item.pKa.toLowerCase() : '';
        const description = item.description ? item.description[currentLang].toLowerCase() : '';
        
        return (
            name.includes(searchTerm) ||
            couple.includes(searchTerm) ||
            reduction.includes(searchTerm) ||
            oxidation.includes(searchTerm) ||
            equation.includes(searchTerm) ||
            potential.includes(searchTerm) ||
            pKa.includes(searchTerm) ||
            description.includes(searchTerm)
        );
    });
    
    // عرض النتائج المصفاة
    displayResults(filteredData);
}

/**
 * @function displayResults
 * @description تقوم بعرض النتائج في حاوية النتائج.
 * @param {Array<Object>} data - مصفوفة الكائنات التي سيتم عرضها.
 */
function displayResults(data) {
    resultsContainer.innerHTML = ''; // مسح النتائج القديمة
    
    // إذا لم توجد نتائج، نعرض رسالة "لا توجد نتائج"
    if (data.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search fa-3x" style="color: #ccc; margin-bottom: 20px;"></i>
                <h3>${translations[currentLang].noResultsTitle}</h3>
                <p>${translations[currentLang].noResultsText}</p>
            </div>
        `;
        return;
    }
    
    // إنشاء بطاقة لكل عنصر في البيانات وعرضها
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = `result-card ${item.type === 'redox' ? 'redox' : 'acid-base'}`;
        // إضافة معالج حدث للنقر على البطاقة للبحث المباشر
        card.addEventListener('click', () => {
            searchInput.value = item.name[currentLang];
            filterData();
        });
        
        let cardContent = '';
        
        if (item.type === 'redox') {
            // محتوى بطاقة ثنائيات الأكسدة والإرجاع
            cardContent = `
                <div class="card-header">
                    <h3>${item.name[currentLang]}</h3>
                    <span class="couple">${item.couple}</span>
                </div>
                <div class="card-body">
                    <div class="chem-property">
                        <span class="property-name">${translations[currentLang].reduction}</span>
                        <span class="property-value chem-equation">${item.reduction}</span>
                    </div>
                    <div class="chem-property">
                        <span class="property-name">${translations[currentLang].oxidation}</span>
                        <span class="property-value chem-equation">${item.oxidation}</span>
                    </div>
                    <div class="chem-property">
                        <span class="property-name">${translations[currentLang].potential}</span>
                        <span class="property-value">${item.potential}</span>
                    </div>
                    ${item.description ? `<p class="description-text">${translations[currentLang].description} ${item.description[currentLang]}</p>` : ''}
                </div>
            `;
        } else {
            // محتوى بطاقة الأحماض والقواعد
            let pKaValue = item.pKa;
            if(pKaValue === 'strongAcid') {
                pKaValue = translations[currentLang].strongAcid;
            } else if(pKaValue === 'strongBase') {
                pKaValue = translations[currentLang].strongBase;
            }
            
            cardContent = `
                <div class="card-header">
                    <h3>${item.name[currentLang]}</h3>
                    <span class="couple">${item.couple}</span>
                </div>
                <div class="card-body">
                    <div class="chem-property">
                        <span class="property-name">${translations[currentLang].equation}</span>
                        <span class="property-value chem-equation">${item.equation}</span>
                    </div>
                    <div class="chem-property">
                        <span class="property-name">${translations[currentCodec].pKa}</span>
                        <span class="property-value">${pKaValue}</span>
                    </div>
                    <div class="chem-property">
                        <span class="property-name">${translations[currentLang].type}</span>
                        <span class="property-value">${
                            item.subType === 'acid' ? translations[currentLang].acid : translations[currentLang].base
                        }</span>
                    </div>
                    ${item.description ? `<p class="description-text">${translations[currentLang].description} ${item.description[currentLang]}</p>` : ''}
                </div>
            `;
        }
        
        card.innerHTML = cardContent;
        resultsContainer.appendChild(card);
    });
}

/**
 * @function displayInitialInstructions
 * @description تعرض رسالة التعليمات الأولية عند عدم وجود نتائج أو بحث.
 */
function displayInitialInstructions() {
    resultsContainer.innerHTML = `
        <div class="initial-instructions">
            <i class="fas fa-search fa-3x" style="margin-bottom: 20px;"></i>
            <h3>${translations[currentLang].initialInstructionsTitle}</h3>
            <p>${translations[currentLang].initialInstructionsText1}</p>
            <p>${translations[currentLang].initialInstructionsText2}</p>
        </div>
    `;
}

// إضافة مستمعي الأحداث (Event Listeners)

// تفعيل البحث عند كل كتابة في حقل البحث
searchInput.addEventListener('input', filterData);

// تفعيل التبويبات عند النقر عليها
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // إزالة فئة 'active' من جميع أزرار التبويبات
        tabBtns.forEach(b => b.classList.remove('active'));
        // إضافة فئة 'active' للزر الذي تم النقر عليه
        btn.classList.add('active');
        // تحديث التبويب النشط
        activeTab = btn.dataset.tab;
        // إعادة تصفية البيانات بناءً على التبويب الجديد
        filterData();
    });
});

// تفعيل زر معلومات المطور لإظهار المودال
developerBtn.addEventListener('click', () => {
    developerModal.classList.add('show');
});

// تفعيل زر المساعدة لإظهار المودال
helpBtn.addEventListener('click', () => {
    helpModal.classList.add('show');
});

// تفعيل أزرار إغلاق المودال
closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modalId = btn.dataset.modal;
        document.getElementById(modalId).classList.remove('show');
    });
});

// إغلاق المودال عند النقر خارج المحتوى
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('show');
        }
    });
});

// تفعيل زر "عرض الكل"
showAllBtn.addEventListener('click', () => {
    searchInput.value = ''; // مسح حقل البحث
    activeTab = 'all'; // تعيين التبويب النشط إلى "الكل"
    // تحديث حالة أزرار التبويبات
    tabBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('.tab-btn[data-tab="all"]').classList.add('active');
    filterData(); // إعادة تصفية البيانات لعرض الكل
});

// تفعيل أزرار اللغة لتغيير لغة التطبيق
langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        changeLanguage(btn.dataset.lang);
    });
});

// تهيئة التطبيق عند التحميل الأولي للصفحة
// تبدأ بعرض التعليمات الأولية وتعيين اللغة الافتراضية (العربية)
changeLanguage('ar'); // التأكد من تحميل اللغة العربية عند البدء
displayInitialInstructions(); // عرض التعليمات الأولية عند التحميل الأولي

