"use client";

import { useState } from "react";
import { Collapse, Flex, FloatButton, Radio, RadioChangeEvent, Tooltip } from "antd";
import { Hero, Card, Step } from "@/app/_components/main_page";
import Navbar from "@/app/_components/Navbar";
import YoutubeEmbed from "@/app/_components/YoutubeEmbed";
import ICertificateIcon from "./_types/main_page/ICertificateIcon";
import Image from "next/image";
import CertificateLists from "./_components/main_page/CertificateLists";
import CertificateTable from "./_components/main_page/CertificateTable";
// Images for main page
import CertificateIcons from "@/app/_assets/images/main/certificate_icons";
import WorldMapImage from "@/app/_assets/images/main/world-map.png";
import * as CardIcons from "@/app/_assets/images/main/card_icons/";
import { PlusOutlined } from "@ant-design/icons";
import Footer from "./_components/Footer";
import { languages, professions, sciences, specialities, anchors, collapseItems } from "./_utils/staticVariables";

type IRadio = "language" | "science";

export default function MainPage() {
  const [activeRadioButton, setActiveRadioButton] = useState<IRadio>("language")

  return (
    <div className="main-page">
      <div className="container main-page__container">
        <Navbar
          className="main-page__nav"
          isSignedIn={false}
          theme="dark"
        />

        <div className="intro main-page__intro">
          <Hero className="hero main-page__hero" />

          {/* This section includes many icons and flags*/}
          <div className="certificate-icons-container">
            <div style={{ maxWidth: "100%", overflowX: "auto", padding: "15px" }}>
              <Flex className="certificate-icons" wrap justify="center" gap={20}>
                {
                  CertificateIcons.map((certificateIcon: ICertificateIcon) => (
                    <Tooltip key={certificateIcon.key} title={certificateIcon.title}>
                      <Image
                        src={certificateIcon.img}
                        alt={certificateIcon.title}
                      />
                    </Tooltip>
                  ))
                }
              </Flex>
            </div>
            <Image
              className="world-map"
              src={WorldMapImage}
              alt="Dunyo xaritasi rasmi"
            />
          </div>
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
            <YoutubeEmbed embedId="0zXwIpAL7V8" />
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
                  columns={languages[0].table.columns}
                  data={languages[0].table.data}
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
                  columns={sciences[0].table.columns}
                  data={sciences[0].table.data}
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
            expandIconPosition="end"
          />
        </section>

        <FloatButton.BackTop />

        {/* Footer section */}
        <Footer id={anchors[3].link} className={anchors[3].link} />
      </div>
    </div>
  );
}
