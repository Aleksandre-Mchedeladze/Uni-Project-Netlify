
(function () {
    const state = {
        lang: "en",
        slides: [],
        currentSlide: 0,
        slideIntervalId: null
    };

    const translations = {
        en: {
            logoSubtitle: "Explore Georgia with us",
            menuHome: "Home",
            menuDestinations: "Destinations",
            menuMountains: "Mountains",
            menuSea: "Sea & Coast",
            menuCities: "Cities",
            menuEvents: "Wine & Culture",
            menuAbout: "About us",
            menuContact: "Contact",
            slide1Title: "Plan your next trip in Georgia",
            slide1Text: "Old Tbilisi streets, Caucasus peaks and the Black Sea coast – all in one simple planner.",
            slide2Title: "Handpicked trips by local experts",
            slide2Text: "City tours, mountain hikes and wine routes designed by guides who actually live here.",
            slide3Title: "Explore Georgia – friendly local company",
            slide3Text: "We help you choose routes, book local guides and feel comfortable travelling around Georgia.",
            slideButtonExplore: "Explore destinations",
            slideButtonPlan: "Start planning",
            slideButtonContact: "Talk to us",
            destinationsTitle: "Popular destinations",
            destinationsSubtitle: "Tourism highlights across Georgia – mountains, sea and historic towns.",
            aboutTitle: "Who we are",
            aboutText1: "Explore Georgia is a friendly local travel company from Tbilisi. We create small, authentic trips for people who want to see real life – not only tourist postcards.",
            aboutText2: "Our team tests every route, guesthouse and activity ourselves. We prefer slow travel, local food and real conversations with people who live here.",
            aboutBadge1: "Authentic local routes",
            aboutBadge2: "Small groups & local guides",
            aboutBadge3: "Simple, clear trip planning",
            contactTitle: "Contact & booking",
            contactText: "Tell us when you want to visit Georgia and what you like – mountains, sea, wine, culture – and we will send you ideas with prices.",
            contactEmailLabel: "Email:",
            contactPhoneLabel: "Phone:",
            contactAddressLabel: "Address:",
            formNameLabel: "Your name",
            formEmailLabel: "Email address",
            formMessageLabel: "Message",
            formNamePlaceholder: "Enter your name",
            formEmailPlaceholder: "Enter your email",
            formMessagePlaceholder: "Tell us what you want to see in Georgia...",
            formButtonSend: "Send",
            footerText: "Explore Georgia • Authentic trips with local guides",
            destSeaTitle: "Sea & Coast",
            destSeaSub: "Batumi, coastal walks and Black Sea vibes.",
            destCitiesTitle: "Cities",
            destCitiesSub: "Historic streets, architecture and local food.",
            destWineTitle: "Wine & Culture",
            destWineSub: "Wine routes, culture and seasonal experiences.",
            tagAdjara: "ADJARA",
            tagGuria: "GURIA",
            tagTbilisi: "TBILISI",
            tagImereti: "IMERETI",
            tagKartli: "KARTLI",
            tagKakheti: "KAKHETI",
            tagCulture: "CULTURE",
                    
            seaBatumiTitle: "Batumi Boulevard",
            seaBatumiDesc: "Palm trees, seaside sunsets, cafes and modern city energy.",
            seaUrekiTitle: "Ureki – Black Sand",
            seaUrekiDesc: "Unique magnetic black sand beach, calm water, family-friendly.",
            seaKobuletiTitle: "Kobuleti Coast",
            seaKobuletiDesc: "Long beach walks, local food, and a relaxed seaside vibe.",
                    
            cityTbilisiTitle: "Tbilisi Old Town",
            cityTbilisiDesc: "Balconies, sulfur baths, cafés and the city’s real heartbeat.",
            cityKutaisiTitle: "Kutaisi & Caves",
            cityKutaisiDesc: "Markets, monasteries, and nearby caves & nature parks.",
            cityMtskhetaTitle: "Mtskheta",
            cityMtskhetaDesc: "Ancient capital, UNESCO sites, and beautiful viewpoints.",
                    
            wineSighnaghiTitle: "Sighnaghi – City of Love",
            wineSighnaghiDesc: "Hilltop town with views, cozy streets and wineries nearby.",
            wineTelaviTitle: "Telavi & Wine Cellars",
            wineTelaviDesc: "Family cellars, qvevri wine, and real Georgian hospitality.",
            wineSupraTitle: "Traditional Supra",
            wineSupraDesc: "Food, toasts, music — a cultural experience, not just dinner.",
                    
            tripIdeasTitle: "Trip ideas",
            tripIdea1Title: "Weekend in Tbilisi",
            tripIdea1Desc: "Old town, baths, food spots, Mtatsminda views.",
            tripIdea2Title: "3 days: Kazbegi + Kakheti",
            tripIdea2Desc: "Mountains + wine — the best combo for first-time visitors.",
            tripIdea3Title: "5–7 days: Full Georgia",
            tripIdea3Desc: "Tbilisi, mountains, wine region and a coastal sunset.",
            tripIdeasBtn: "Talk to us",
            aboutTitle: "Local routes. Real Georgia. Zero stress.",
            aboutSub:
              "We are a small local travel team from Tbilisi. We create authentic trips for people who want to experience the real Georgia — not just tourist postcards.",
            aboutBtnPlan: "Plan my trip",
            aboutBtnDest: "See destinations",
                    
            aboutHowTitle: "How we work",
            aboutHowSub: "Simple process — you tell us what you like, we plan the perfect route.",
                    
            aboutStep1Title: "Tell us your style",
            aboutStep1Text: "Mountains, sea, wine, culture — plus dates and budget.",
            aboutStep2Title: "We design the route",
            aboutStep2Text: "Authentic places, smart timing and local tips.",
            aboutStep3Title: "Travel with confidence",
            aboutStep3Text: "We confirm everything and stay in touch if needed.",
                    
            aboutWhyTitle: "Why choose Explore Georgia",
            aboutWhy1: "Authentic routes, not copy-paste tours",
            aboutWhy2: "Local knowledge and honest advice",
            aboutWhy3: "Clear planning and realistic schedules",
            aboutWhy4: "Flexible trips — day tours or full journeys",


            
            
            
        },
        ge: {
            logoSubtitle: "ერთად მოვიაროთ საქართველო",
            menuHome: "მთავარი",
            menuDestinations: "მიმართულებები",
            menuMountains: "მთები",
            menuSea: "ზღვა",
            menuCities: "ქალაქები",
            menuEvents: "ღვინო & კულტურა",
            menuAbout: "ჩვენ შესახებ",
            menuContact: "კონტაქტი",
            slide1Title: "დაგეგმე მოგზაურობა საქართველოში",
            slide1Text: "ძველი თბილისის ქუჩები, კავკასიონის მწვერვალები და შავი ზღვა – შეგიძლია მოინახულო ერთ ტურში.",
            slide2Title: "ადგილობრივი გიდების შერჩეული ტურები",
            slide2Text: "ქალაქის ტური, მთის ლაშქრობა თუ ღვინის გზა – მარშრუტები, რომლებიც პროფესიონალებმა დაგეგმეს.",
            slide3Title: "Explore Georgia – მეგობრული ადგილობრივი კომპანია",
            slide3Text: "გაგიწევთ დახმარებას მარშრუტების შერჩევაში, გიდების პოვნაში და საქართველოში კომფორტულად მოგზაურობაში.",
            slideButtonExplore: "მიმართულებების ნახვა",
            slideButtonPlan: "დაგეგმვის დაწყება",
            slideButtonContact: "დაგვიკავშირდი",
            destinationsTitle: "პოპულარული მიმართულებები",
            destinationsSubtitle: "ტურისტული ღირსშესანიშნაობები მთებში, ზღვაზე და ისტორიულ ქალაქებში.",
            aboutTitle: "ვინ ვართ ჩვენ",
            aboutText1: "Explore Georgia არის მეგობრული ადგილობრივი ტურისტული კომპანია თბილისიდან. ვქმნით პატარა, ავთენტურ ტურებს ადამიანებისთვის, ვისაც ნამდვილი საქართველოს ნახვა უნდა – არა მარტო სუვენირების ბარათები.",
            aboutText2: "ყოველ მარშრუტს, სასტუმროსა და აქტივობას თვითონ ვტესტავთ. გვიყვარს ნელი მოგზაურობა, ადგილობრივი საჭმელი და რეალური საუბრები აქ მცხოვრებ ხალხთან.",
            aboutBadge1: "ადგილობრივი მარშრუტები",
            aboutBadge2: "მცირე ჯგუფები და ადგილობრივი გიდები",
            aboutBadge3: "მარტივი, გასაგები დაგეგმვა",
            contactTitle: "კონტაქტი და დაჯავშნა",
            contactText: "მოგვწერე როდის და რა ტიპის მოგზაურობა გინდა – და გამოგიგზავნით იდეებს ფასებთან ერთად.",
            contactEmailLabel: "ელ. ფოსტა:",
            contactPhoneLabel: "ტელეფონი:",
            contactAddressLabel: "მისამართი:",
            formNameLabel: "სახელი",
            formEmailLabel: "ელ. ფოსტა",
            formMessageLabel: "შეტყობინება",
            formNamePlaceholder: "შეიყვანე სახელი",
            formEmailPlaceholder: "შეიყვანე შენი ელ. ფოსტა",
            formMessagePlaceholder: "რას გინდა ნახო საქართველოში?...",
            formButtonSend: "გაგზავნა",
            footerText: "Explore Georgia •  მოგზაურობა ადგილობრივ გიდებთან ერთად",
            destSeaTitle: "ზღვა და სანაპირო",
            destSeaSub: "ბათუმი, სანაპიროს გასეირნება და შავი ზღვის განწყობა.",
            destCitiesTitle: "ქალაქები",
            destCitiesSub: "ისტორიული ქუჩები, არქიტექტურა და ადგილობრივი სამზარეულო.",
            destWineTitle: "ღვინო და კულტურა",
            destWineSub: "ღვინის მარშრუტები, კულტურა და სეზონური გამოცდილებები.",
            tagAdjara: "აჭარა",
            tagGuria: "გურია",
            tagTbilisi: "თბილისი",
            tagImereti: "იმერეთი",
            tagKartli: "ქართლი",
            tagKakheti: "კახეთი",
            tagCulture: "კულტურა",

            seaBatumiTitle: "ბათუმის ბულვარი",
            seaBatumiDesc: "პალმები, ზღვისპირა მზის ჩასვლა, კაფეები და ქალაქის ენერგია.",
            seaUrekiTitle: "ურეკი — შავი ქვიშა",
            seaUrekiDesc: "უნიკალური შავი ქვიშა, მშვიდი ზღვა და ოჯახური გარემო.",
            seaKobuletiTitle: "ქობულეთის სანაპირო",
            seaKobuletiDesc: "გრძელი გასეირნებები, ადგილობრივი კერძები და მშვიდი ზღვისპირა ვაიბი.",

            cityTbilisiTitle: "თბილისის ძველი ქალაქი",
            cityTbilisiDesc: "აივნები, გოგირდის აბანოები, კაფეები და ქალაქის სული.",
            cityKutaisiTitle: "ქუთაისი და მღვიმეები",
            cityKutaisiDesc: "ბაზრები, მონასტრები და ახლომდებარე მღვიმეები/ბუნება.",
            cityMtskhetaTitle: "მცხეთა",
            cityMtskhetaDesc: "უძველესი დედაქალაქი, იუნესკოს ძეგლები და ხედები.",

            wineSighnaghiTitle: "სიღნაღი — სიყვარულის ქალაქი",
            wineSighnaghiDesc: "მთაზე გაშენებული ქალაქი, ხედები და ახლომახლო მარნები.",
            wineTelaviTitle: "თელავი და ღვინის მარნები",
            wineTelaviDesc: "ოჯახური მარნები, ქვევრის ღვინო და სტუმართმოყვარეობა.",
            wineSupraTitle: "ტრადიციული სუფრა",
            wineSupraDesc: "საჭმელი, სადღეგრძელოები, მუსიკა — კულტურა, არა უბრალოდ ვახშამი.",

            tripIdeasTitle: "მარშრუტის იდეები",
            tripIdea1Title: "უიქენდი თბილისში",
            tripIdea1Desc: "ძველი ქალაქი, აბანოები, გემოები, მთაწმინდის ხედები.",
            tripIdea2Title: "3 დღე: ყაზბეგი + კახეთი",
            tripIdea2Desc: "მთები + ღვინო — იდეალური კომბო პირველად მოსულებისთვის.",
            tripIdea3Title: "5–7 დღე: სრული საქართველო",
            tripIdea3Desc: "თბილისი, მთები, ღვინის რეგიონი და სანაპიროს მზის ჩასვლა.",
            tripIdeasBtn: "მოგვწერე",

            
        }
    };

    const destinationsData = {
        en: [
            {
                region: "Tbilisi",
                title: "Tbilisi Old Town",
                description: "Colorful balconies, cosy courtyards and sulphur baths along the Mtkvari river.",
                imageClass: "te-img-tbilisi"
            },
            {
                region: "Adjara",
                title: "Batumi Boulevard",
                description: "Palm trees, Black Sea views and evening lights along the famous seaside boulevard.",
                imageClass: "te-img-batumi"
            },
            {
                region: "Kazbegi",
                title: "Gergeti & Caucasus peaks",
                description: "Iconic church above Stepantsminda with snow-capped mountains in the background.",
                imageClass: "te-img-gergeti"
            },
            {
                region: "Kakheti",
                title: "Sighnaghi – City of Love",
                description: "Hilltop town with views over Alazani valley, wine cellars and warm guesthouses.",
                imageClass: "te-img-sighnaghi"
            },
            {
    region: "Svaneti",
    title: "Mestia & Svan Towers",
    description: "Snowy Caucasus peaks, medieval towers and breathtaking mountain views.",
    imageClass: "te-img-mestia"
},
{
    region: "Samtskhe",
    title: "Borjomi National Park",
    description: "Forests, clean air, thermal springs and peaceful hiking trails.",
    imageClass: "te-img-borjomi"
}

            
        ],
        ge: [
            {
                region: "თბილისი",
                title: "ძველი თბილისის უბნები",
                description: "ფერადი აივნები, მყუდრო ეზოები და გოგირდის აბანოები-მტკვრის ნაპირზე.",
                imageClass: "te-img-tbilisi"
            },
            {
                region: "აჭარა",
                title: "ბათუმის ბულვარი",
                description: "პალმები, ზღვის ხედი და საღამოს განათებები ბათუმის ცენტრალურ ბულვარზე.",
                imageClass: "te-img-batumi"
            },
            {
                region: "ყაზბეგი",
                title: "გერგეტი და კავკასიონის მწვერვალები",
                description: "კულტური ტაძარი მაღლა, სტეფანწმინდის ზემოთ, თოვლიანი მთების ფონზე.",
                imageClass: "te-img-gergeti"
            },
            {
                region: "კახეთი",
                title: "სიღნაღი – სიყვარულის ქალაქი",
                description: "მაღალ გორაზე მდებარე ქალაქი ალაზნის ველის ხედებით, მარანებით და თბილი მასპინძლებით.",
                imageClass: "te-img-sighnaghi"
            },
            {
    region: "სვანეთი",
    title: "მესტია და სვანური კოშკები",
    description: "თოვლიანი მწვერვალები, შუასაუკუნეების კოშკები და დაუვიწყარი მთის ხედები.",
    imageClass: "te-img-mestia"
},
{
    region: "სამცხე",
    title: "ბორჯომის ეროვნული პარკი",
    description: "ტყეები, სუფთა ჰავა, თერმული წყაროები და მშვიდი სასეირნო ბილიკები.",
    imageClass: "te-img-borjomi"
}

        ]
    };

    function applyTranslations(lang) {
        const dict = translations[lang] || translations.en;
        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            const key = el.getAttribute("data-i18n");
            if (dict[key]) {
                el.textContent = dict[key];
            }
        });
        document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
            const key = el.getAttribute("data-i18n-placeholder");
            if (dict[key]) {
                el.setAttribute("placeholder", dict[key]);
            }
        });
    }

    function initSlider() {
        const slider = document.getElementById("heroSlider");
        if (!slider) return;

        const slides = Array.prototype.slice.call(slider.querySelectorAll(".te-slide"));
        state.slides = slides;
        state.currentSlide = 0;

        const dotsContainer = document.getElementById("sliderDots");
        dotsContainer.innerHTML = "";
        slides.forEach(function (_, idx) {
            const dot = document.createElement("div");
            dot.className = "te-dot" + (idx === 0 ? " te-dot-active" : "");
            dot.dataset.index = idx.toString();
            dot.addEventListener("click", function () {
                goToSlide(idx);
            });
            dotsContainer.appendChild(dot);
        });

        if (state.slideIntervalId) {
            clearInterval(state.slideIntervalId);
        }
        state.slideIntervalId = setInterval(function () {
            goToSlide((state.currentSlide + 1) % slides.length);
        }, 6000);
    }

    function goToSlide(index) {
        if (!state.slides.length) return;
        state.slides.forEach(function (slide, i) {
            slide.classList.toggle("active", i === index);
        });
        const dots = document.querySelectorAll(".te-dot");
        dots.forEach(function (dot, i) {
            dot.classList.toggle("te-dot-active", i === index);
        });
        state.currentSlide = index;
    }

    function renderDestinations(list) {
        const grid = document.getElementById("destinationsGrid");
        if (!grid) return;
        grid.innerHTML = "";

        list.forEach(function (dest) {
            const card = document.createElement("article");
            card.className = "te-card";

            const imgWrapper = document.createElement("div");
            imgWrapper.className = "te-card-image";

            const imgInner = document.createElement("div");
            imgInner.className = "te-card-image-inner " + (dest.imageClass || "");
            imgWrapper.appendChild(imgInner);

            const body = document.createElement("div");
            body.className = "te-card-body";

            const region = document.createElement("div");
            region.className = "te-card-region";
            region.textContent = dest.region || "";

            const title = document.createElement("h3");
            title.className = "te-card-title";
            title.textContent = dest.title || "";

            const text = document.createElement("p");
            text.className = "te-card-text";
            text.textContent = dest.description || "";

            body.appendChild(region);
            body.appendChild(title);
            body.appendChild(text);

            card.appendChild(imgWrapper);
            card.appendChild(body);
            grid.appendChild(card);
        });
    }

    function initLanguageSwitch() {
        const langButtons = document.querySelectorAll(".te-lang-btn");
        langButtons.forEach(function (btn) {
            btn.addEventListener("click", function () {
                const lang = btn.getAttribute("data-lang") || "en";
                if (lang === state.lang) return;
                state.lang = lang;
                langButtons.forEach(function (b) {
                    b.classList.toggle("te-lang-active", b === btn);
                });
                applyTranslations(lang);
                renderDestinations(destinationsData[lang] || []);
            });
        });

        langButtons.forEach(function (b) {
            if ((b.getAttribute("data-lang") || "en") === state.lang) {
                b.classList.add("te-lang-active");
            }
        });
    }

    function initNav() {
        const navToggle = document.getElementById("navToggle");
        const navList = document.getElementById("navList");
        if (!navToggle || !navList) return;

        navToggle.addEventListener("click", function () {
            navList.classList.toggle("te-nav-open");
        });

        navList.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navList.classList.remove("te-nav-open");
            });
        });
    }

    

    function initContactForm() {
        const form = document.getElementById("contactForm");
        if (!form) return;

        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const btn = form.querySelector('button[type="submit"]');
            if (btn) btn.disabled = true;

            const payload = {
                name: (document.getElementById("name")?.value || "").trim(),
                email: (document.getElementById("email")?.value || "").trim(),
                message: (document.getElementById("message")?.value || "").trim()
            };

            try {
                const res = await fetch("/.netlify/functions/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload)
                });

                const data = await res.json().catch(() => ({}));
                if (!res.ok) throw new Error(data.error || "Failed to send");

                alert("✅ Message sent!");
                form.reset();
            } catch (err) {
                console.error(err);
                alert("❌ " + (err.message || "Error sending message"));
            } finally {
                if (btn) btn.disabled = false;
            }
        });
    }

document.addEventListener("DOMContentLoaded", function () {
        const yearSpan = document.getElementById("year");
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear().toString();
        }

        initSlider();
        initLanguageSwitch();
        applyTranslations(state.lang);
        renderDestinations(destinationsData[state.lang] || []);
        initContactForm();
        initNav();
    });
})();
