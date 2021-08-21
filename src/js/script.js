
const elems = document.querySelectorAll('.doctor-card__image');

[...elems].forEach(elem => elem.addEventListener('click', changeClass))


function changeClass(e) {
	this.querySelector('.doctor-card-info').classList.toggle('doctor-card-info__active');
};

if(typeof Vue != "undefined"){
  const VueApp = {
    data() {
      return {
        prices: {
          vaccination: [
            {
              categoryTitle: null,
              data: [
                {
                  title: "Інфанрікс Гекса (Бельгія) - проти дифтерії, правця, кашлюку, гепатиту В, гемофільної інфекції та поліомієліту",
                  price: "1470 грн"
                },
                {
                  title: "Інфанрікс (проти дифтерії, правця, кашлюку)",
                  price: "-"
                },
                {
                  title: "Хіберікс (профілактика гемофільної інфекції)",
                  price: "-"
                },
                {
                  title: "Сінфлорікс (профілактика пневмококовой інфекції)",
                  price: "-"
                },
                {
                  title: "Пріорікс (профілактика кору, паротиту, краснухи)",
                  price: "-"
                },
                {
                  title: "Церварикс (профілактика папіломавірусу)",
                  price: "-"
                },
                {
                  title: "Бустрікс (проти дифтерії, правця, кашлюку)",
                  price: "1100 грн"
                },
                {
                  title: "Гексаксім (Hexaxim, Франція)",
                  price: "-"
                },
                {
                  title: "Тетраксім (Tetraxim, Франція)",
                  price: "-"
                },
                {
                  title: "Ваксигрип Тетра - Vaxigrip Tetra (Франція) для дорослих і дітей від 3-х років",
                  price: "700 грн"
                },
                {
                  title: "Превенар",
                  price: "2500 грн"
                }
              ]
            }
          ],
          dermatology: [
            {
              categoryTitle: null,
              data: [
                {
                  title: "Консультація дерматолога, дерматовенеролога (встановлення діагнозу, спеціальний огляд, план обстеження, попередній план лікування)",
                  price: "450 грн"
                },
                {
                  title: "Повторна консультація дерматолога, дерматовенеролога (за результатами додаткових обстежень, корекція плану лікування, контроль динаміки лікування)",
                  price: "350 грн"
                },
                {
                  title: "Дерматоскопія оглядова до 7 утворень",
                  price: "300 грн"
                },
                {
                  title: "Огляд шкірних покривів із застосуванням «лампи Вуда»",
                  price: "80 грн"
                },
                {
                  title: "Внутреннеочаговая ін'єкція стероїдних препаратів, 1 зона",
                  price: "400 грн"
                }
              ]
            }
          ],
          dentistry: [
            {
              categoryTitle: null,
              data: [
                {
                  title: "Консультація з оглядом, план лікування",
                  price: "100 грн"
                },
                {
                  title: "Застосування анестезії",
                  price: "50 грн"
                },
                {
                  title: "Ін'єкційний наркоз",
                  price: "100 грн"
                },
                {
                  title: "Пломба фотополімерна (поверхневий карієс)",
                  price: "350 грн"
                },
                {
                  title: "Пломба фотополімерна (середній карієс)",
                  price: "400 - 450 грн"
                },
                {
                  title: "Пломба фотополімерна (глибокий карієс)",
                  price: "450 - 500 грн"
                },
                {
                  title: "Пломба склоіномірні",
                  price: "300 - 450 грн"
                },
                {
                  title: "Ізолююча прокладка",
                  price: "50 грн"
                },
                {
                  title: "Кальцій містить прокладка",
                  price: "100 грн"
                },
                {
                  title: "Зняття пломби",
                  price: "50 грн"
                },
                {
                  title: "Шліфування, полірування пломби",
                  price: "60 грн"
                },
                {
                  title: "Штифт скловолоконний",
                  price: "200 грн"
                },
                {
                  title: "Штифт анкерний",
                  price: "100 грн"
                },
                {
                  title: "Ретракція ясен",
                  price: "20 грн"
                },
                {
                  title: "Реставрація зуба",
                  price: "від 850 грн"
                },
                {
                  title: "Надання невідкладної допомоги",
                  price: "200 грн"
                },
                {
                  title: "Девіталізуючої пов'язка",
                  price: "150 грн"
                },
                {
                  title: "Тимчасова пломба",
                  price: "50 грн"
                },
                {
                  title: "Герметизація тріщин",
                  price: "150 - 250 грн"
                },
                {
                  title: "Фторування (один зуб)",
                  price: "50 грн"
                }
              ]
            },
            {
              categoryTitle: "Лікування кореневих каналів",
              data: [
                {
                  title: "Екстерпація",
                  price: "60 грн"
                },
                {
                  title: "Інструментальна обробка кореневого каналу",
                  price: "60 грн"
                },
                {
                  title: "Медикаментозна обробка кореневого каналу",
                  price: "60 грн"
                },
                {
                  title: "Розпломбування кореневого каналу",
                  price: "300 грн"
                },
                {
                  title: "Тимчасове пломбування кореневого каналу",
                  price: "150 грн"
                },
                {
                  title: "Пломбування одного каналу",
                  price: "200 грн"
                }
              ]
            },
            {
              categoryTitle: "Гігієна",
              data: [
                {
                  title: "Комлексна чистка Air-Flow + ультразвук",
                  price: "750 грн"
                },
                {
                  title: "Ін'єкція Траумель",
                  price: "120 грн"
                },
                {
                  title: "Ін'єкція Лінкоміцин",
                  price: "60 грн"
                },
                {
                  title: "Аплікація (1 щелепа)",
                  price: "150 грн"
                },
                {
                  title: "Відбілювання зубів (1 щелепа)",
                  price: "1500 грн"
                },
                {
                  title: "Ремінералізующая терапія",
                  price: "300 грн"
                }
              ]
            },
            {
              categoryTitle: "Ортопедія",
              data: [
                {
                  title: "Зняття коронки",
                  price: "100 грн"
                },
                {
                  title: "Зняття відбитка",
                  price: "120 грн"
                },
                {
                  title: "Цементування коронки",
                  price: "від 100 до 220 грн"
                },
                {
                  title: "Суцільнолита культівая вкладка",
                  price: "400 грн"
                },
                {
                  title: "Суцільнолита культівая вкладка (розбірна)",
                  price: "450 грн"
                },
                {
                  title: "Суцільнолита металева коронка",
                  price: "650 грн"
                },
                {
                  title: "Суцільнолита металева коронка (напилення)",
                  price: "700 грн"
                },
                {
                  title: "Металокерамическая коронка (Duceram)",
                  price: "1500 грн"
                },
                {
                  title: "Цирконієва керамічна коронка (Emax)",
                  price: "3500 грн"
                },
                {
                  title: "Цирконієва культевая вкладка",
                  price: "від 2200 грн"
                },
                {
                  title: "Тимчасова коронка",
                  price: "300 грн"
                },
                {
                  title: "Частково знімний пластмасовий протез",
                  price: "2500 грн"
                },
                {
                  title: "Повний знімний пластмасовий протез",
                  price: "2800 грн"
                },
                {
                  title: "Мікропротез",
                  price: "2000 грн"
                },
                {
                  title: "Частково знімний нейлоновий протез",
                  price: "3500 грн"
                },
                {
                  title: "Повний знімний нейлоновий протез",
                  price: "3800 грн"
                },
                {
                  title: "Ремонт протеза",
                  price: "від 300 до 800"
                },
                {
                  title: "Бюгельний протез кламерною фіксації",
                  price: "4500 грн"
                },
                {
                  title: "Бюгельний протез замкової фіксації",
                  price: "5500 грн"
                },
                {
                  title: "Бюгельний протез кламерною фіксації (нейлонові)",
                  price: "5500 грн"
                },
                {
                  title: "Бюгельний протез з аціталовий базис",
                  price: "4700 грн"
                },
                {
                  title: "Індивідуальна ложка",
                  price: "160 грн"
                },
                {
                  title: "Капа лікувальна (1 щелепа)",
                  price: "500 грн"
                },
                {
                  title: "Капа отбелевающая (1 щелепа)",
                  price: "650 грн"
                }
              ]
            },
            {
              categoryTitle: "Хірургічна стоматологія",
              data: [
                {
                  title: "Видалення зуба",
                  price: "250 - 500 грн"
                },
                {
                  title: "Видалення зуба мудрості",
                  price: "600 - 1000 грн"
                },
                {
                  title: "Лікування альвеоліту",
                  price: "100 грн"
                },
                {
                  title: "Накладення швів",
                  price: "250 грн"
                },
                {
                  title: "Резекція капюшона",
                  price: "300 грн"
                },
                {
                  title: "Хірургічна обробка рани",
                  price: "150 грн"
                },
                {
                  title: "Зупинка кровотіченія",
                  price: "50 грн"
                },
                {
                  title: "Зняття швів",
                  price: "100 грн"
                }
              ]
            }
          ],
          cardiology: [
            {
              categoryTitle: null,
              data: [
                {
                  title: "Консультація кардіолога первинна",
                  price: "390 грн"
                },
                {
                  title: "Консультація кардіолога повторна (протягом 1 міс)",
                  price: "290 грн"
                },
                {
                  title: "Консультація + ЕКГ",
                  price: "450 грн"
                },
                {
                  title: "Консультація + УЗД серця",
                  price: "800 грн"
                },
                {
                  title: "Консультація + УЗД серця + ЕКГ",
                  price: "900 грн"
                },
                {
                  title: "ЕКГ з розшифровкою",
                  price: "200 грн"
                }
              ]
            }
          ],
          gynecology: [
            {
              categoryTitle: null,
              data: [
                {
                  title: "Первинна консультація (встановлення діагнозу, спеціальний огляд, план обстеження, попередній план лікування)",
                  price: "390 грн"
                },
                {
                  title: "Повторна консультація лікаря-гінеколога (за результатами додаткових обстежень, контроль динаміки лікування) протягом 1 міс.",
                  price: "290 грн"
                },
                {
                  title: "Комплекс (огляд + УЗД ОМТ)",
                  price: "650 грн"
                },
                {
                  title: "Регуляція менструального циклу медикаментозна (включаючи вартість препарату)",
                  price: "3000 грн"
                },
                {
                  title: "Мікродіатермохірургія один сеанс",
                  price: "420 грн"
                },
                {
                  title: "Діатермоконізація шийки матки",
                  price: "800 грн"
                },
                {
                  title: "Діатермокоагуляция шийки матки",
                  price: "800 грн"
                },
                {
                  title: "Ультразвукове дослідження органів малого таза (трансабдоминальное)",
                  price: "300 грн"
                },
                {
                  title: "Ультразвукове дослідження органів малого таза (трансвагінальне)",
                  price: "350 грн"
                },
                {
                  title: "Ультразвукове дослідження молочних залоз",
                  price: "300 грн"
                },
                {
                  title: "УЗД діагностика вагітності до 12 тижнів",
                  price: "350 грн"
                },
                {
                  title: "Цервікометрія",
                  price: "120 грн"
                },
                {
                  title: "УЗД молочних залоз",
                  price: "300 грн"
                },
                {
                  title: "УЗД щитовидної залози",
                  price: "250 грн"
                },
                {
                  title: "УЗД (щитовидна залоза, молочні залози, ОМТ)",
                  price: "700 грн"
                },
                {
                  title: "Видалення кондилом на статевих органах 1 шт",
                  price: "750 грн"
                },
                {
                  title: "Видалення кондилом на статевих органах від 3 шт (за шт)",
                  price: "400 грн"
                },
                {
                  title: "Видалення папілом до 10 шт (за 1 шт)",
                  price: "90 грн"
                },
                {
                  title: "Видалення множинних папілом до 30 шт",
                  price: "1200 грн"
                },
                {
                  title: "Видалення множинних папілом більше 30 шт (зона)",
                  price: "+1500 грн"
                },
                {
                  title: "Введення внутрішньоматкового контрацептиву (без вартості спіралі і додаткового обстеження)",
                  price: "550 грн"
                },
                {
                  title: "Видалення внутрішньоматкового контрацептиву",
                  price: "350 грн"
                },
                {
                  title: "Піпельна біопсія ендометрію",
                  price: "600 грн"
                },
                {
                  title: "Місцеве знеболювання",
                  price: "100 грн"
                },
                {
                  title: "Інстиляція лікувального розчину (в уретру, сечовий міхур, порожнину матки, без вартості препарату)",
                  price: "150 грн"
                },
                {
                  title: "Вагінальна ванночка",
                  price: "120 грн"
                },
                {
                  title: "Вагінальний тампон з лікувальним розчином",
                  price: "80 грн"
                },
                {
                  title: "Ін'єкція в шийку матки (без вартості препарату)",
                  price: "120 грн"
                },
                {
                  title: "Ін'єкція в звідпіхви (без вартості препарату)",
                  price: "100 грн"
                },
                {
                  title: "Забір матеріалу на цитологію",
                  price: "40 грн"
                },
                {
                  title: "Забір метеріали для бактеріологічного дослідження",
                  price: "35 грн"
                },
                {
                  title: "Забір матеріалу (цитологія та бак.посев)",
                  price: "50 грн"
                },
                {
                  title: "Пробірка з середовищем",
                  price: "10 грн"
                }
              ]
            }
          ],
          pediatrics: [],
          cosmetics: [
            {
              categoryTitle: null,
              data: [
                {
                  title: "Чистка обличчя",
                  price: "від 350 грн"
                },
                {
                  title: "Масаж обличчя",
                  price: "від 300 грн"
                },
                {
                  title: "Догляду процедури",
                  price: "від 400 грн"
                },
                {
                  title: "Маска",
                  price: "80 грн"
                },
                {
                  title: "Альгінатна маска",
                  price: "150 грн"
                },
                {
                  title: "Пілінг",
                  price: "від 450 грн"
                },
                {
                  title: "Мезотерапія",
                  price: "від 450 грн"
                },
                {
                  title: "Мезотерапія волосистої частини голови",
                  price: "від 650 грн"
                },
                {
                  title: "Біоревіталізація",
                  price: "від 2200 грн"
                },
                {
                  title: "Плазмолифтинг",
                  price: "від 1500 грн"
                },
                {
                  title: "Ін’єкція ботулотоксину",
                  price: "1 зона 2500 грн"
                },
                {
                  title: "Контурна пластика",
                  price: "від 4000 грн"
                },
                {
                  title: "Корекція форми та об'єму губ",
                  price: "від 3500 грн"
                }
              ]
            }
          ],
          surgery: [
            {
              categoryTitle: null,
              data: [
                {
                  title: "Консультація хірурга первинна",
                  price: "390 грн"
                },
                {
                  title: "Консультація хірурга (повторна)",
                  price: "290 грн"
                },
                {
                  title: "Консультація online (після очної консультації)",
                  price: "100 грн"
                },
                {
                  title: "Видалення невуса (родімка) до 3 мм",
                  price: "700 грн"
                },
                {
                  title: "Удаление невуса (родимка) від 3 до 5 мм",
                  price: "950 грн"
                },
                {
                  title: "Удаление невуса ( родимки) від 5 до 10 мм",
                  price: "1300 грн"
                },
                {
                  title: "Удаление невуса ( родимки) від 10 мм",
                  price: "1500 грн"
                },
                {
                  title: "Видалення папіломи до 10 шт. (За шт)",
                  price: "90 грн"
                },
                {
                  title: "Видалення множинних папілом до 30 шт",
                  price: "1200 грн"
                },
                {
                  title: "Видалення множинних папілом більше 30 шт (зона)",
                  price: "1500 грн"
                },
                {
                  title: "Видалення кондиломи (інтимна зона) 1 шт",
                  price: "750 грн"
                },
                {
                  title: "Видалення кондиломи (інтимна зона) від 3 шт (за шт)",
                  price: "400 грн"
                },
                {
                  title: "Видалення кератоми до 5 мм",
                  price: "400 грн"
                },
                {
                  title: "Видалення кератоми від 5 мм",
                  price: "500 грн"
                },
                {
                  title: "Відалення кератом (множинних) від 3 до 10 шт. (за одиницю)",
                  price: "300 грн"
                },
                {
                  title: "Відалення кератом (множинних) від 10 до 20 шт. (за одиницю)",
                  price: "200 грн"
                },
                {
                  title: "Видалення кератом (множинних) від 20 шт. до 5 мм (за одиницю)",
                  price: "150 грн"
                }
              ]
            }
          ],
          urology: [
            {
              categoryTitle: null,
              data: [
                {
                  title: "Первинна консультація уролога",
                  price: "390 грн"
                },
                {
                  title: "Повторна консультація уролога",
                  price: "250 грн"
                },
                {
                  title: "Комплекс: консультація + УЗД",
                  price: "500 грн"
                }
              ]
            },
            {
              categoryTitle: "Урологічні маніпуліяції",
              data: [
                {
                  title: "Заміна цістостоміческім дренажу",
                  price: "350 грн"
                },
                {
                  title: "Блокада сім'яного канатика новокаиновая",
                  price: "180 грн"
                },
                {
                  title: "Катетеризація сечівника (сечового міхура)",
                  price: "250 грн"
                },
                {
                  title: "Взяття сечі катетером",
                  price: "80 грн"
                },
                {
                  title: "Інстиляція сечового міхура розчином (1 процедура)",
                  price: "150 грн"
                },
                {
                  title: "Бужування уретри",
                  price: "200 грн"
                },
                {
                  title: "Заміна катетера Фоллея",
                  price: "200 грн"
                },
                {
                  title: "Катетеризація сечівника (сечового міхура)",
                  price: "500 грн"
                },
                {
                  title: "Пункція гидроцеле під контролем УЗД",
                  price: "1000 грн"
                },
                {
                  title: "Промивання уретри лікувальними розчинами",
                  price: "120 грн"
                },
                {
                  title: "Масаж простати з лікувальною метою",
                  price: "200 грн"
                },
                {
                  title: "Пальцеве ректальне обстеження простати (масаж з метою отримання соку простати для дослідження)",
                  price: "150 грн"
                },
                {
                  title: "Взяття мазка з уретри (забір урогенітального соскоба) у чоловіків на ПЛР і цитологію",
                  price: "100 грн"
                },
                {
                  title: "УЗД урологічне (нирки, сечовий міхур, простата, визначення залишкової сечі)",
                  price: "350 грн"
                },
                {
                  title: "ТРУЗІ (ректальне дослідження простати)",
                  price: "600 грн"
                },
                {
                  title: "Відкриття головки у дітей",
                  price: "500 грн"
                }
              ]
            },
            {
              categoryTitle: "Урологічні оперативні втручання",
              data: [
                {
                  title: "Виправлено парафимоза (мануальное, безкровне)",
                  price: "1200 грн"
                },
                {
                  title: "Розсеченіе обмежує кільця при парафімозі",
                  price: "1800 грн"
                },
                {
                  title: "Видалення атером, ліпом мошонки",
                  price: "1400 грн"
                },
                {
                  title: "Біопсія передміхурової залози (під контролем УЗД)",
                  price: "3700 грн"
                },
                {
                  title: "Резекція поліпа уретри",
                  price: "2300 грн"
                },
                {
                  title: "Обрізання крайньої плоті (циркумцизия)",
                  price: "4500 грн"
                },
                {
                  title: "Операція Вінкельмана (при гідроцеле)",
                  price: "5000 грн"
                },
                {
                  title: "Операція Бергмана (гідроцеле)",
                  price: "5000 грн"
                },
                {
                  title: "Пластика вуздечки",
                  price: "+1500 грн"
                }
              ]
            },
          ],
          ult_diag: [
            {
              categoryTitle: null,
              data: [
                {
                  title: "УЗД урологічне (нирки, сечовий міхур, простата)",
                  price: "350 грн"
                },
                {
                  title: "УЗД нирки, сечовий міхур)",
                  price: "250 грн"
                },
                {
                  title: "ТРУЗІ (трансректальное УЗД)",
                  price: "600 грн"
                },
                {
                  title: "УЗД органів мошонки",
                  price: "300 грн"
                },
                {
                  title: "УЗД ОЧП (печінка, жовчний міхур, підшлункова залоза, селезінка)",
                  price: "350 грн"
                },
                {
                  title: "УЗД ОЧП і нирок (печінка, жовчний міхур, підшлункова залоза, селезінка)",
                  price: "400 грн"
                },
                {
                  title: "Діагностика дискінезії ЖВП",
                  price: "450 грн"
                },
                {
                  title: "УЗД молочних залоз",
                  price: "300 грн"
                },
                {
                  title: "УЗД щитовидної залози",
                  price: "250 грн"
                },
                {
                  title: "УЗД м'яких тканин",
                  price: "180 грн"
                },
                {
                  title: "УЗД лімфатичних вузлів (одна група)",
                  price: "180 грн"
                },
                {
                  title: "УЗД вагітності (до 12 тижнів)",
                  price: "350 грн"
                },
                {
                  title: "УЗД гінекологічне органів малого таза (трансабдоминальное)",
                  price: "300 грн"
                },
                {
                  title: "УЗД гінекологічне органів малого таза (трансвагінальне)",
                  price: "350 грн"
                },
                {
                  title: "УЗД щитовидної залози, молочної залози, органів малого таза",
                  price: "700 грн"
                },
                {
                  title: "Цервікометрія",
                  price: "250 грн"
                },
                {
                  title: "Фолікулометрія",
                  price: "250 грн"
                },
                {
                  title: "УЗД серця",
                  price: "500 грн"
                },
                {
                  title: "УЗД судин голови та шиї",
                  price: "600 грн"
                },
                {
                  title: "УЗД судин шиї",
                  price: "450 грн"
                },
                {
                  title: "УЗД вен нижніх кінцівок",
                  price: "450 грн"
                },
                {
                  title: "УЗД вен і артерій нижніх кінцівок",
                  price: "800 грн"
                },
                {
                  title: "УЗД артерій нижніх кінцівок",
                  price: "450 грн"
                },
                {
                  title: "УЗД суглобів (колінний, тазостегновий, плечовий)",
                  price: "300 грн"
                }
              ]
            }
          ],
        }
      }
    }
  };

  Vue.createApp(VueApp).mount('#app');
}





let sidebarActiveOne = document.querySelectorAll('.sidebar-list__item-1')[0];
let sidebarActiveTwo = document.querySelectorAll('.sidebar-list__item-2')[0];
let sidebarActiveThree = document.querySelectorAll('.sidebar-list__item-3')[0];

let sidebarCloseOne = document.querySelectorAll('.sidebar-close')[0];
let sidebarCloseTwo = document.querySelectorAll('.sidebar-close')[1];
let sidebarCloseThree = document.querySelectorAll('.sidebar-close')[2];

let sidebarBodyOne = document.querySelectorAll('.sidebar-active-1')[0];
let sidebarBodyTwo = document.querySelectorAll('.sidebar-active-2')[0];
let sidebarBodyThree = document.querySelectorAll('.sidebar-active-3')[0];

let sidebarBlock = document.querySelectorAll('.sidebar-list')[0];
let sidebarBlock1 = document.querySelectorAll('.sidebar-list')[1];

sidebarActiveOne.addEventListener('click', function() {
  sidebarBodyOne.classList.add('sidebar-active__open')
  sidebarBlock.classList.add('sidebar-list__close')
});
sidebarCloseOne.addEventListener('click', function() {
  sidebarBodyOne.classList.remove('sidebar-active__open')
  sidebarBlock.classList.remove('sidebar-list__close')
});

sidebarActiveTwo.addEventListener('click', function() {
  sidebarBodyTwo.classList.add('sidebar-active__open')
  sidebarBlock.classList.add('sidebar-list__close')
});
sidebarCloseTwo.addEventListener('click', function() {
  sidebarBodyTwo.classList.remove('sidebar-active__open')
  sidebarBlock.classList.remove('sidebar-list__close')
});

sidebarActiveThree.addEventListener('click', function() {
  sidebarBodyThree.classList.add('sidebar-active__open')
  sidebarBlock.classList.add('sidebar-list__close')
});
sidebarCloseThree.addEventListener('click', function() {
  sidebarBodyThree.classList.remove('sidebar-active__open')
  sidebarBlock.classList.remove('sidebar-list__close')
});

let navBtn = document.querySelectorAll('.nav-toggle')[0];
let sidebarMobile = document.querySelectorAll('.sidebar')[0];

navBtn.addEventListener('click', function() {
  navBtn.classList.toggle('nav-toggle-active'),
  sidebarMobile.classList.toggle('sidebar-mob')
  
  // If mobile sidebar layout is active
  if(window.innerWidth <= 992){
     // When we open the sidebar, we always toggle that class, so to check if sidebar is open, we can just check for having class
     if(sidebarMobile.classList.contains("sidebar-mob")){
        document.body.style.overflow = "hidden";
     }else{
        document.body.style.overflow = "auto";
     }
  }
});



new Swiper('.why-we-slider', {
  slidesPerView: 2,
  navigation: {
    nextEl: '.why-we-next',
    prevEl: '.why-we-prev',
    disabledClass: 'why-we-sl',
  },
  breakpoints: {
    // when window width is >= 320px
    1715: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    1200: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    140: {
      slidesPerView: 1,
    }
  }
});


const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  // centerSlides: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
    breakpoints: {
    // when window width is >= 320px
    1715: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 480px
    992: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
});

var modal = document.getElementById('pop-up');

var myBtn = document.getElementsByClassName('pop-up__open');
var close = document.getElementsByClassName('pop-up__close')[0];

/*
А это в цикле прокруциваем те элементы которыми мы открываем модал окно
и обработчик события который открывет окно
*/
for (var i = 0; i < myBtn.length; i++) {
  myBtn[i].addEventListener('click', function() {
    openModalWindow();
  })
}
// это обработчик события, который в нутри этой функции выполнят ту функцию 
//которая закрывает окно модальное
close.addEventListener('click', function() {
  closeModalWindow();
})

//это функция, которая открывает окно
function openModalWindow() {
  modal.style.display = "flex";
}

//это функция, которая закрывает окно
function closeModalWindow() {
  modal.style.display = "none";
}


