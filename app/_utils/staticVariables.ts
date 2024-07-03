import { CollapseProps } from "antd";
import {
  ILanguageTable,
  IOption,
  IScienceTable,
} from "../_types/main_page/ICertificateTable";
import { IAnchor } from "../_types/main_page/INavbar";
import IInfo from "../_types/cabinet/IInfo";

interface ITable<T> extends IOption {
  certificates: string[];
  table: {
    columns: {
      key: string;
      title: string;
      dataIndex: string;
    }[];
    data: T[];
  };
}

export const languageColumns = [
  { key: "name", title: "Sertifikat nomlari", dataIndex: "name" },
  { key: "a1", title: "A1", dataIndex: "a1" },
  { key: "a2", title: "A2", dataIndex: "a2" },
  { key: "b1", title: "B1", dataIndex: "b1" },
  { key: "b2", title: "B2", dataIndex: "b2" },
  { key: "c1", title: "C1", dataIndex: "c1" },
  { key: "c2", title: "C2", dataIndex: "c2" },
];

export const languageData: ILanguageTable[] = [
  {
    key: "1",
    name: "Chet tilini bilish darajasini aniqlash boʻyicha milliy sertifikat",
    a1: "-",
    a2: "✓",
    b1: "✓",
    b2: "✓",
    c1: "✓",
    c2: "-",
  },
  {
    key: "2",
    name: "Test of English as a Foreign Language (TOEFL iBT)",
    a1: "-",
    a2: "-",
    b1: "42-71",
    b2: "72-94",
    c1: "95-113",
    c2: "114-120",
  },
  {
    key: "3",
    name: "Test of English as a Foreign Language (TOEFL iTP)",
    a1: "-",
    a2: "-",
    b1: "337-459 Speaking: 41",
    b2: "460-542 Speaking: 48",
    c1: "543-626 Speaking: 58",
    c2: "627-677 Speaking: 64",
  },
  {
    key: "4",
    name: "Cambridge Assessment English(KET, PET, FCE, CAE, CPE)",
    a1: "-",
    a2: "120",
    b1: "140",
    b2: "160",
    c1: "180",
    c2: "200",
  },
  {
    key: "5",
    name: "International English Language Testing System – IELTS (Academic)",
    a1: "2.0",
    a2: "3.0",
    b1: "4.0-5.0",
    b2: "5.5-6.5",
    c1: "7-8",
    c2: "8.5-9",
  },
  {
    key: "6",
    name: "iTEP International Test of English Proficiency",
    a1: "✓",
    a2: "✓",
    b1: "✓",
    b2: "✓",
    c1: "✓",
    c2: "✓",
  },
];

export const scienceColumns = [
  { key: "name", title: "Sertifikat nomi", dataIndex: "name" },
  { key: "type", title: "Sertifikat turi", dataIndex: "type" },
  { key: "max", title: "Maksimal ball", dataIndex: "max" },
  {
    key: "proportional",
    title: "Proportsional ball",
    dataIndex: "proportional",
  },
];

export const scienceData: IScienceTable[] = [
  {
    key: "1",
    name: "Umumtaʼlim fanini bilish darajasi to‘g‘risidagi milliy sertifikat",
    type: "Milliy",
    max: "A+, A (86 va undan yuqori ball)",
    proportional:
      "B+, B, C+, C (60-85,9 ball) Majburiy fan bo‘yicha belgilangan eng yuqori ball",
  },
  {
    key: "2",
    name: "Cambridge International A-LEVEL (Mathematics – 9709)",
    type: "Xalqaro",
    max: "A, A+ Majburiy fan bo‘yicha belgilangan eng yuqori ball",
    proportional: "-",
  },
];

export const specialities: IOption[] = [
  {
    label: "O‘rta maxsus va professional",
    value: "professional",
  },
  {
    label: "Bakalavr",
    value: "bachelor",
  },
  {
    label: "Magistratura",
    value: "master",
  },
];

export const professions: IOption[] = [
  {
    label: "O‘quvchi va talaba",
    value: "student",
  },
  {
    label: "O‘qituvchi",
    value: "teacher",
  },
];

export const languages: ITable<ILanguageTable>[] = [
  {
    label: "Ingliz tili",
    value: "english",
    certificates: [
      "ielts",
      "cefr",
      "duolingo",
      "Cambridge Assessment English Linguaskill",
    ],
    table: {
      columns: languageColumns,
      data: languageData,
    },
  },
  {
    label: "Arab tili",
    value: "arabic",
    certificates: ["duolingo", "toafl"],
    table: {
      columns: languageColumns,
      data: languageData,
    },
  },
  {
    label: "Rus tili",
    value: "russian",
    certificates: ["cefr", "torfl"],
    table: {
      columns: languageColumns,
      data: languageData,
    },
  },
  {
    label: "Fransuz tili",
    value: "french",
    certificates: ["fle"],
    table: {
      columns: languageColumns,
      data: languageData,
    },
  },
  {
    label: "Nemis tili",
    value: "german",
    certificates: ["cefr", "dsh", "test-daf", "goethe"],
    table: {
      columns: languageColumns,
      data: languageData,
    },
  },
  {
    label: "Ispan tili",
    value: "spanish",
    certificates: ["dele"],
    table: {
      columns: languageColumns,
      data: languageData,
    },
  },
  {
    label: "Yapon tili",
    value: "japan",
    certificates: ["jlpt"],
    table: {
      columns: languageColumns,
      data: languageData,
    },
  },
  {
    label: "Koreys tili",
    value: "korean",
    certificates: ["topik"],
    table: {
      columns: languageColumns,
      data: languageData,
    },
  },
];

export const sciences: ITable<IScienceTable>[] = [
  {
    label: "Matematika",
    value: "maths",
    certificates: ["milliy sertifikat", "sat"],
    table: {
      columns: scienceColumns,
      data: scienceData,
    },
  },
  {
    label: "Informatika",
    value: "cs",
    certificates: ["milliy sertifikat", "icpc"],
    table: {
      columns: scienceColumns,
      data: scienceData,
    },
  },
  {
    label: "Geografiya",
    value: "geography",
    certificates: ["milliy sertifikat"],
    table: {
      columns: scienceColumns,
      data: scienceData,
    },
  },
  {
    label: "Biologiya",
    value: "biology",
    certificates: ["milliy sertifikat"],
    table: {
      columns: scienceColumns,
      data: scienceData,
    },
  },
  {
    label: "Kimyo",
    value: "chemistry",
    certificates: ["milliy sertifikat"],
    table: {
      columns: scienceColumns,
      data: scienceData,
    },
  },
  {
    label: "Tarix",
    value: "history",
    certificates: ["milliy sertifikat"],
    table: {
      columns: scienceColumns,
      data: scienceData,
    },
  },
];

export const anchors: IAnchor[] = [
  {
    text: "Ro‘yxatdan o‘tish bosqichlar",
    link: "registration-steps",
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
    link: "contact",
  },
];

const collapseText =
  "Amal qilish muddati cheklanmagan (belgilanmagan) sertifikatlardan sertifikat olingan kundan boshlab uch yildan ko‘p bo‘lmagan vaqt mobaynidaqonunchilik hujjatlarida belgilangan tartibda imtiyoz va ustamalar qo‘llashda foydalaniladi.";
export const collapseItems: CollapseProps["items"] = [
  {
    key: "1",
    label:
      "Amal qilish muddati cheklanmagan (belgilanmagan) sertifikatlardan necha yil mobaynida imtiyoz va ustamalar qo‘llashda foydalanish mumkin?",
    children: collapseText,
  },
  {
    key: "2",
    label:
      "Oliy taʼlim tizimida faoliyat yuritayotgan professor-o‘qituvchilarga ustama belgilashda qo‘llaniladigan xorijiy tillarni bilish darajasini baholovchi milliy va xalqaro tan olingan sertifikatlar mashg‘ulot olib boruvchi faniga mos bo‘lishi zarurmi?",
    children: collapseText,
  },
  {
    key: "3",
    label:
      "Umumiy o‘rta taʼlim muassasalariga xorijiy tillar oʻqituvchilari lavozimlariga ishga yangi qabul qilinayotgan talabgorlardan qanday darajaga ega sertifikatlar talab qilinadi?",
    children: collapseText,
  },
  {
    key: "4",
    label:
      "Xorijiy tillar bo‘yicha sertifikatlarga imtiyoz va ustamalar qo‘llashdan oldin ularni verifikatsiyadan o‘tkazish tartibi qanday amalga oshiriladi?",
    children: collapseText,
  },
];

export const certificateInfo: IInfo[] = [
  {
    left: "Chet tili:",
    right: {
      text: "Ingliz tili",
      href: "",
    },
  },
  {
    left: "Sertifikat turi:",
    right: {
      text: "Cambridge Assessment English Linguaskill",
      href: "",
    },
  },
  {
    left: "Darajasi:",
    right: {
      text: "22DTM1003471ES",
      href: "",
    },
  },
  {
    left: "Seriya raqami:",
    right: {
      text: "A2",
      href: "",
    },
  },
  {
    left: "Amal qilish muddati:",
    right: {
      text: "2022-12-27 dan 2025-12-26 gacha",
      href: "",
    },
  },
  {
    left: "Hujjat nusxasi:",
    right: {
      text: "Yuklab olish",
      href: "#",
    },
  },
];

export const professionInfo: IInfo[] = [
  {
    left: "Sertifikat qo'shishdan maqsadingizni tanlang:",
    right: {
      text: "Ustama (Xodim, O'qituvchi)",
      href: "",
    },
  },
  {
    left: "Ish joyingizni tanlang:",
    right: {
      text: "Umumiy o'rta ta'lim muassasi (Maktab)",
      href: "",
    },
  },
  {
    left: "Ish joyi joylashgan (Viloyati):",
    right: {
      text: "Buxoro",
      href: "",
    },
  },
  {
    left: "Ish joyi joylashgan (Tumani):",
    right: {
      text: "Vobkent",
      href: "",
    },
  },
  {
    left: "Ish joyi nomi:",
    right: {
      text: "Milliy universitet",
      href: "",
    },
  },
  {
    left: "Lavozim:",
    right: {
      text: "O'qituvchi",
      href: "",
    },
  },
];

export const countries = [
  "O'zbekiston",
  "Tojikiston",
  "Qozog'iston",
  "Qirg'iziston",
  "Turkmaniston",
];

export const nationalities = ["o'zbek", "tojik", "qozoq", "qirg'iz", "turkman"];

export const regions = [
  {
    name: "Toshkent shahri",
    districts: ["Chilonzor tumani", "Mirzo Ulug'bek tumani", "Sergeli tumani"],
  },
  {
    name: "Qashqadaryo viloyati",
    districts: ["G'uzor tumani", "Qarshi tumani", "Yakkabog' tumani"],
  },
];
