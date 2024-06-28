"use client";

import { useState } from "react";
import { Button, Collapse, CollapseProps, Flex, Radio, RadioChangeEvent, Tooltip } from "antd";
import { DropdownLang, Hero, AuthButtons, Card, Step } from "@/app/_components/main_page";
import Logo from "./_components/Logo";
import Navbar from "@/app/_components/Navbar";
import YoutubeEmbed from "@/app/_components/YoutubeEmbed";
import { IAnchor } from "./_types/main_page/INavbar";
import { IOption } from "./_types/main_page/ICertificateTable";
import IHeroIcon from "./_types/main_page/ICertificateIcon";
import Image from "next/image";
import CertificateLists from "./_components/main_page/CertificateLists";
import CertificateTable from "./_components/main_page/CertificateTable";
// Images for main page
import BadgeIcon from "@/app/_assets/images/main/award.png";
import * as CertificateIcons from "@/app/_assets/images/main/certificate_icons";
import listOfCertificateIcons from "@/app/_assets/images/main/certificate_icons";
import WorldMapImage from "@/app/_assets/images/main/world-map.png";
import * as CardIcons from "@/app/_assets/images/main/card_icons/";
import { PlusOutlined } from "@ant-design/icons";
import * as SocialIcons from "@/app/_assets/images/main/social_networks"
import Footer from "./_components/Footer";

type IRadio = "language" | "science";

export default function MainPage() {
  const anchors: IAnchor[] = [
    {
      text: "Ro‘yxatdan o‘tish bosqichlar",
      link: "registration-steps"
    },
    {
      text: "Sertifikatlar ro‘yxati",
      link: "certificates",
    },
    {
      text: "Savol-javob",
      link: "faq",
    },
    {
      text: "Bog‘lanish",
      link: "contact"
    }
  ]

  const specialities: IOption[] = [
    {
      label: "O‘rta maxsus va professional",
      value: "professional"
    },
    {
      label: "Bakalavr",
      value: "bachelor"
    },
    {
      label: "Magistratura",
      value: "master"
    }
  ]

  const professions: IOption[] = [
    {
      label: "O‘quvchi va talaba",
      value: "student",
    },
    {
      label: "O‘qituvchi",
      value: "teacher"
    }
  ]

  const languages: IOption[] = [
    {
      label: "Ingliz tili",
      value: "english",
    },
    {
      label: "Arab tili",
      value: "arabic",
    },
    {
      label: "Rus tili",
      value: "russian",
    },
    {
      label: "Fransuz tili",
      value: "french",
    },
    {
      label: "Nemis tili",
      value: "german",
    },
    {
      label: "Ispan tili",
      value: "spanish",
    },
    {
      label: "Yapon tili",
      value: "japan",
    },
    {
      label: "Koreys tili",
      value: "korean",
    }
  ]

  const sciences: IOption[] = [
    {
      label: "Matematika",
      value: "maths"
    },
    {
      label: "Informatika",
      value: "cs"
    },
    {
      label: "Geografiya",
      value: "geography"
    },
    {
      label: "Biologiya",
      value: "biology"
    },
    {
      label: "Kimyo",
      value: "chemistry"
    },
    {
      label: "Tarix",
      value: "history"
    },
  ]

  const collapseText = "Amal qilish muddati cheklanmagan (belgilanmagan) sertifikatlardan sertifikat olingan kundan boshlab uch yildan ko‘p bo‘lmagan vaqt mobaynidaqonunchilik hujjatlarida belgilangan tartibda imtiyoz va ustamalar qo‘llashda foydalaniladi."
  const collapseItems: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Amal qilish muddati cheklanmagan (belgilanmagan) sertifikatlardan necha yil mobaynida imtiyoz va ustamalar qo‘llashda foydalanish mumkin?',
      children: <p>{collapseText}</p>,
    },
    {
      key: '2',
      label: 'Oliy taʼlim tizimida faoliyat yuritayotgan professor-o‘qituvchilarga ustama belgilashda qo‘llaniladigan xorijiy tillarni bilish darajasini baholovchi milliy va xalqaro tan olingan sertifikatlar mashg‘ulot olib boruvchi faniga mos bo‘lishi zarurmi?',
      children: <p>{collapseText}</p>,
    },
    {
      key: '3',
      label: 'Umumiy o‘rta taʼlim muassasalariga xorijiy tillar oʻqituvchilari lavozimlariga ishga yangi qabul qilinayotgan talabgorlardan qanday darajaga ega sertifikatlar talab qilinadi?',
      children: <p>{collapseText}</p>,
    },
    {
      key: '4',
      label: 'Xorijiy tillar bo‘yicha sertifikatlarga imtiyoz va ustamalar qo‘llashdan oldin ularni verifikatsiyadan o‘tkazish tartibi qanday amalga oshiriladi?',
      children: <p>{collapseText}</p>,
    },
  ];

  const [activeRadioButton, setActiveRadioButton] = useState<IRadio>("language")

  return (
    <div className="main-page">
      <div className="container main-page__container">
        <Navbar
          Logo={<Logo theme="dark" />}
          anchors={anchors}
          theme="dark"
        >
          <DropdownLang langs={["O‘zbekcha", "Русский", "English", "Deutsch"]} />
          <Button className="one-id-btn">One ID orqali kirish</Button>
        </Navbar>

        <div className="intro main-page__intro">
          <Hero className="hero main-page__hero">
            <h1>O‘zbekiston Respublikasida</h1>
            <h2>Tan olingan
              <Image
                src={BadgeIcon}
                alt="rasmiy tasdiqlangan"
              />
              xorijiy tillar hamda umumta’lim fаnlаri bo‘yicha xalqaro sertifikatlar bazasi
            </h2>
            <p>
              O‘zbekiston Respublikasida tan olingan xorijiy tillar hamda umumta’lim fаnlаri bo‘yicha xalqaro sertifikatlar bazasi
            </p>
            {/* Login and Signup Buttons */}
            <AuthButtons />
          </Hero>

          {/* This section includes many icons and flags*/}
          <Flex className="certificate-icons" wrap justify="center" gap={20}>
            {
              listOfCertificateIcons.map((certificateIcon: IHeroIcon) => (
                <Tooltip key={certificateIcon.key} title={certificateIcon.title}>
                  <Image
                    src={CertificateIcons[certificateIcon.key]}
                    alt={certificateIcon.title}
                  />
                </Tooltip>
              ))
            }
            <Image
              className="world-map"
              src={WorldMapImage}
              alt="Dunyo xaritasi rasmi"
            />
          </Flex>
        </div>

        {/* This section includes information in cards */}
        <section className="about main-page__about">
          <h2>
            Sertifikatlarni nima uchun
            tasdiqlash kerak?
          </h2>
          <div className="cards-container">
            <Card
              className="card-1"
              img={CardIcons.image1}
              keywords={["Ta’lim muassasalari"]}
              title="Umumta'lim fan bo‘yicha tegishli sertifikatga ega pedagoglar"
            >
              <p>
                Xalqaro tan olingan sertifikatga ega bo‘lgan pedagog kadrlarga — ularning tarif stavkasiga nisbatan 50 foiz miqdorida;
              </p>
              <p>
                Xalqaro standartlar talablariga javob beradigan milliy baholash tizimida olingan sertifikatga ega bo‘lgan pedagog kadrlarga — ularning tarif stavkasiga nisbatan 50 foiz miqdorida. Bunda, milliy baholash tizimining xalqaro standartlar talablariga javob berishi vakolatli xalqaro tashkilotlar tomonidan tasdiqlangan bo‘lishi lozim.
              </p>
            </Card>

            <Card
              className="card-2"
              img={CardIcons.image2}
              keywords={["Ta’lim muassasalari"]}
              title=" Xorijiy tillar o‘qituvchilariga"
            >
              <p>
                Ta’lim muassasalarining kamida C1 darajadagi milliy yoki unga tenglashtirilgan mos darajadagi xalqaro tan olingan sertifikatga ega xorijiy tillar (ingliz, fransuz, nemis, ispan, italyan, arab, xitoy, yapon, koreys, turk, fors, pushtu, dari, urdu, hind) o‘qituvchilariga ularning bazaviy tarif stavkasiga nisbatan har oylik 50 foiz miqdorida qo‘shimcha ustama haqi to‘lab borilsin.
              </p>
            </Card>

            <Card
              className="card-3"
              img={CardIcons.image3}
              keywords={["Davlat boshqaruv idoralari"]}
              title=" Davlat boshqaruv idoralarining xodimlariga "
            >
              <p>
                2022-yil 1-yanvardan boshlab xorijiy tillardan milliy va xalqaro sertifikatga ega davlat boshqaruv idoralarining barcha bo‘g‘inlari xodimlariga lavozim maoshiga nisbatan 20 foizgacha qo‘shimcha ustama tashkilotlarning budjetdan tashqari hamda ish haqi fondi doirasida budjet mablag‘lari hisobidan to‘lansin.
              </p>
            </Card>

            <Card
              className="card-4"
              img={CardIcons.image2}
              keywords={["Umumiy o‘rta", "O'rta maxsus", "Profesional ta'lim"]}
              title=" Kirish imtixonlarida xorijiy til sertifikatlarga beriladigan imtiyozlar"
            >
              <p>
                Bakalavriat, magistratura, ikkinchi oliy ta‘lim, doktorantura ta‘lim bosqichlariga hamda Akademik litseylarga kirish imtixonlarida tegishli sertifikatlarga beriladigan imtiyozdan ushbu platformadagi tasdiqlangan sertifikat ma‘lumotlari orqali foydalanish mumkin.
              </p>
            </Card>

            <Card
              className="card-5"
              img={CardIcons.image1}
              keywords={["Umumiy o‘rta", "O'rta maxsus", "Profesional ta'lim", "Oliy ta'lim"]}
              title=" Xorijiy tilda mutaxassislik fanlaridan dars beradigan o‘qituvchilar"
            >
              <p>
                Umumiy o‘rta, o‘rta maxsus va professional ta’lim muassasalarida xorijiy tilda mutaxassislik fanlaridan dars beradigan B2 va undan yuqori darajadagi milliy yoki unga mos darajadagi xalqaro sertifikatga ega o‘qituvchilariga qonunchilik hujjatlarida nazarda tutilgan ustamalar tatbiq etilsin.
              </p>
            </Card>

            <Card
              className="card-6"
              img={CardIcons.image4}
              keywords={["Umumiy o‘rta", "O'rta maxsus", "Profesional ta'lim"]}
              title=" Kirish imtixonlarida umumta'lim fan sertifikatlarga beriladigan imtiyozlar"
            >
              <p>
                Umumta‘lim fanlaridan A+, A darajali sertifikat olgan abituriyentlarga oliy ta’lim muassasasi bakalavriatiga o‘qishga qabul qilish bo‘yicha test sinovlarida ushbu fandan belgilangan maksimal ball beriladi.
              </p>
              <p>
                Umumta‘lim fanlaridan B+, B, C+, C, darajali sertifikat olgan abituriyentlarga mos ravishda sertifikatdagi umumiy ballga nisbatan foiz asosida oliy ta’lim muassasasi bakalavriatiga o‘qishga qabul qilish bo‘yicha test sinovlarida ushbu fandan belgilangan maksimal ballga nisbatan tabaqalashtirilgan (proporsional) ball beriladi.
              </p>
            </Card>
          </div>
        </section>

        {/* Steps to send an application */}
        <section id={anchors[0].link} className={anchors[0].link}>
          <h2>
            Ariza yuborish bosqichlari
          </h2>
          <p>
            Qanday ariza yuborishni bilmayotgan bo‘lsangiz pastdagi qadamlar yoki video qo‘llanma orqali batafsil ma’lumot oling
          </p>
          <div className="steps-container">
            <div className="steps">
              <Step
                order={1}
                title="Ro‘yxatdan o‘tish"
                description="One ID orqali tez va oson avtorizatsiyadan o‘tish va shaxsiy ma’lumotlarni kiritish mumkin."
              />
              <Step
                order={2}
                title="Ariza yuborish"
                description="Shaxsiy va ta’lim ma’lumotlaringizni kiriting va Malaka oshirish uchun ariza yuboring"
              />
              <Step
                order={3}
                title="Test topshirish"
                description="Mening arizalarim bo‘limidan ariza holatini kuzatib boring"
              />
              <Step
                order={4}
                title="Attestat sertifikatini yuklab olish"
                description="Mening arizalarim bo‘limidan ariza holatini kuzatib boring"
              />
            </div>
            <p>Quyidagi video qo‘llanma orqali ariza yuborish bosqichilari haqida batafsil ma’lumotga ega bo‘ling</p>
            <YoutubeEmbed embedId="QOEDU3OSVWw" />
          </div>
        </section>

        {/* List of certificates and grades */}
        <section id={anchors[1].link} className={anchors[1].link}>
          <Radio.Group
            className="certificates__certificate-type"
            value={activeRadioButton}
            options={[{
              label: "Til sertifikatlari",
              value: "language"
            },
            {
              label: "Fan sertifikatlari",
              value: "science"
            }
            ]}
            onChange={(e: RadioChangeEvent) => { setActiveRadioButton(e.target.value as IRadio) }}
            optionType="button"
            buttonStyle="solid"
          />
          {
            activeRadioButton === "language"
              ? (<CertificateLists
                title="Til sertifikatlari ro‘yxati"
                description="Xorijiy tillarni bilish darajasini belgilovchi milliy va xalqaro tan  olingan sertifikatlar roʻyxati hamda ularning muvofiqlik darajasi"
              >
                <CertificateTable
                  professions={professions}
                  specialties={specialities}
                  options={languages}
                  info="Oʻrta maxsus, professional, oliy va oliy taʼlimdan keyingi taʼlimga kirishda tan olinadigan xorijiy tillarni bilish darajasini belgilovchi milliy va xalqaro sertifikatlar"
                  columns={[
                    { key: "name", title: "Sertifikat nomlari", dataIndex: "name" },
                    { key: "a1", title: "A1", dataIndex: "a1" },
                    { key: "a2", title: "A2", dataIndex: "a2" },
                    { key: "b1", title: "B1", dataIndex: "b1" },
                    { key: "b2", title: "B2", dataIndex: "b2" },
                    { key: "c1", title: "C1", dataIndex: "c1" },
                    { key: "c2", title: "C2", dataIndex: "c2" },
                  ]}
                  data={[
                    { key: 1, name: "Chet tilini bilish darajasini aniqlash boʻyicha milliy sertifikat", a1: "-", a2: "✓", b1: "✓", b2: "✓", c1: "✓", c2: "-" },
                    { key: 2, name: "Test of English as a Foreign Language (TOEFL iBT)", a1: "-", a2: "-", b1: "42-71", b2: "72-94", c1: "95-113", c2: "114-120" },
                    { key: 3, name: "Test of English as a Foreign Language (TOEFL iTP)", a1: "-", a2: "-", b1: "337-459 Speaking: 41", b2: "460-542 Speaking: 48", c1: "543-626 Speaking: 58", c2: "627-677 Speaking: 64" },
                    { key: 4, name: "Cambridge Assessment English(KET, PET, FCE, CAE, CPE)", a1: "-", a2: "120", b1: "140", b2: "160", c1: "180", c2: "200" },
                    { key: 5, name: "International English Language Testing System – IELTS (Academic)", a1: "2.0", a2: "3.0", b1: "4.0-5.0", b2: "5.5-6.5", c1: "7-8", c2: "8.5-9" },
                    { key: 6, name: "iTEP International Test of English Proficiency", a1: "✓", a2: "✓", b1: "✓", b2: "✓", c1: "✓", c2: "✓" }
                  ]}
                  dataType="language"
                />
              </CertificateLists>)
              : (<CertificateLists
                title="Fan sertifikatlari ro‘yxati"
                description="Umumtaʼlim fanlari bo‘yicha milliy va xalqaro tan olingan sertifikatlar hamda ularning muvofiqlik darajalari"
              >
                <CertificateTable
                  professions={professions}
                  specialties={specialities}
                  options={sciences}
                  info="Oliy taʼlim muassasalarining bakalavriat taʼlim yoʻnalishlariga o‘qishga kirishda imtiyoz beradigan umumtaʼlim fanlari bo‘yicha milliy va xalqaro tan olingan sertifikatlar"
                  columns={[
                    { key: "name", title: "Sertifikat nomi", dataIndex: "name" },
                    { key: "type", title: "Sertifikat turi", dataIndex: "type" },
                    { key: "max", title: "Maksimal ball", dataIndex: "max" },
                    { key: "proportional", title: "Proportsional ball", dataIndex: "proportional" }
                  ]}
                  data={[
                    { key: 1, name: "Umumtaʼlim fanini bilish darajasi to‘g‘risidagi milliy sertifikat", type: "Milliy", max: "A+, A (86 va undan yuqori ball)", proportional: "B+, B, C+, C (60-85,9 ball) Majburiy fan bo‘yicha belgilangan eng yuqori ball" },
                    { key: 2, name: "Cambridge International A-LEVEL (Mathematics – 9709)", type: "Xalqaro", max: "A, A+ Majburiy fan bo‘yicha belgilangan eng yuqori ball", proportional: "-" },
                  ]}
                  dataType="science"
                />
              </CertificateLists>)
          }

        </section>

        {/* FAQ section */}
        <section id={anchors[2].link} className={anchors[2].link}>
          <h2>Ko‘p beriladigan savollar</h2>
          <Collapse
            items={collapseItems}
            defaultActiveKey={'1'}
            expandIcon={({ isActive }) => (
              isActive
                ? <PlusOutlined style={{ transform: "rotate(45deg)" }} />
                : <PlusOutlined />
            )}
            expandIconPosition="right"
          />
        </section>

        {/* Footer section */}
        <Footer id={anchors[3].link} className={anchors[3].link} />
      </div>
    </div>
  );
}
