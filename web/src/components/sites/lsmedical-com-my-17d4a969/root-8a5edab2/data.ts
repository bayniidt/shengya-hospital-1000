export const SITE_KEY = "lsmedical-com-my-17d4a969";
export const PAGE_KEY = "root-8a5edab2";

export const ASSET = (file: string) =>
  `/sites/${SITE_KEY}/${PAGE_KEY}/images/${file}`;

export interface Doctor {
  name: string;
  role: string;
  profileImage: string;
  modalImage: string;
}

export interface Clinic {
  name: string;
  company: string;
  address: string;
  phone: string;
  phoneHref: string;
  image: string;
  mapsUrl: string;
  website?: string;
}

/* ---------------------------------------------------------------- */

export const NAV_LINKS = [
  {
    label: "LS Medical Group",
    href: "/",
    children: [
      { label: "About LS Medical", href: "/about/lsmedical/" },
      { label: "Our Founder", href: "/about/our-founder/" },
      { label: "Our Doctors", href: "/about/our-doctors/" },
      { label: "Services", href: "/ls-medical-group-services/" },
    ],
  },
  {
    label: "LS Aesthetic Clinic",
    href: "/ls-aesthetic/",
    children: [
      { label: "About Us", href: "/ls-aesthetic/" },
      { label: "Products", href: "/shop/" },
      { label: "Find Us", href: "#clinics" },
      { label: "Appointments", href: "#appointment" },
    ],
  },
  {
    label: "LS Family Clinic",
    href: "/ls-family/",
    children: [
      { label: "About Us", href: "/ls-family/" },
      { label: "Find Us", href: "#clinics" },
      { label: "Appointments", href: "#appointment" },
    ],
  },
  {
    label: "LS Dental Clinic",
    href: "/ls-dental/",
    children: [
      { label: "About Us", href: "/ls-dental/" },
      { label: "Find Us", href: "#clinics" },
      { label: "Appointments", href: "#appointment" },
    ],
  },
  { label: "News & Events", href: "/news/", children: [] },
  { label: "Store", href: "/shop/", children: [] },
];

export const DEPARTMENTS = [
  {
    title: "LS AESTHETIC",
    description:
      "LS Aesthetic provides facial treatments, body contouring, and hair removal services. It is part of LS Medical Group.",
    image: ASSET("ls-medi-group-clinic-1.jpg"),
    href: "/ls-aesthetic/",
  },
  {
    title: "LS FAMILY",
    description:
      "LS Family provides general medical services such as health check-ups, vaccinations, and minor surgeries.",
    image: ASSET("ls-medi-group-family.jpg"),
    href: "/ls-family/",
  },
  {
    title: "LS DENTAL",
    description:
      "LS Dental provides dental services such as teeth cleaning, fillings, and extractions. They also offer other dental services.",
    image: ASSET("ls-medi-group-clinic-dental.jpg"),
    href: "/ls-dental/",
  },
];

export const SERVICES = [
  {
    title: "LS AESTHETIC",
    image: ASSET("ls-home-services-aesthetic.jpg"),
    href: "/ls-aesthetic/",
    items: [
      "Rejuvenate skin",
      "Regenerate skin",
      "Relax body and happiness",
      "Improved appearance and texture",
    ],
  },
  {
    title: "LS FAMILY",
    image: ASSET("ls-home-services-family.jpg"),
    href: "/ls-family/",
    items: [
      "General medical consultation",
      "Health screening",
      "Vaccination",
      "Minor surgery",
    ],
  },
  {
    title: "LS DENTAL",
    image: ASSET("ls-home-services-dental.jpg"),
    href: "/ls-dental/",
    items: [
      "General dentistry",
      "Orthodontics",
      "Implant dentistry",
      "Oral surgery",
    ],
  },
];

export const FOUNDER_CREDENTIALS = [
  "LCP Board Certified",
  "Doctor of Medicine (M.D.) - I.M. Sechenov Moscow Medical Academy, Russia",
  "Postgraduate Certificate in Primary Care Dermatology, Academy of Family Physicians of Malaysia",
  "Professional Registration: Malaysian Medical Council (MMC) (No. 58463)",
];

export const DOCTORS: { category: string; doctors: Doctor[] }[] = [
  {
    category: "AESTHETIC",
    doctors: [
      { name: "Dr. Neik Hiong Lee", role: "Founder of LS Medical Group", profileImage: ASSET("Dr-Neik-Web-2026-2.png"), modalImage: ASSET("od-circle-dr-neik-front.png") },
      { name: "Dr. Siow Pey Shin", role: "Aesthetic Physician", profileImage: ASSET("Dr-Siow-Web.png"), modalImage: ASSET("od-cirle-siow.png") },
      { name: "Dr. Crystal Oon Ming Hsia", role: "Aesthetic Physician", profileImage: ASSET("od-circle-dr-crystal-3.png"), modalImage: ASSET("od-circle-dr-crystal-3.png") },
      { name: "Dr. Jesnina Chew Ai Wie", role: "Aesthetic Physician", profileImage: ASSET("od-circle-dr-chew-3.png"), modalImage: ASSET("od-circle-dr-chew-3.png") },
      { name: "Dr. Ang Sung Nien", role: "Aesthetic Physician", profileImage: ASSET("od-circle-dr-ang-3.png"), modalImage: ASSET("od-circle-dr-ang-3.png") },
      { name: "Dr. Edward Tan Mun Kit", role: "Aesthetic Physician", profileImage: ASSET("od-circle-dr-edward-3.png"), modalImage: ASSET("od-circle-dr-edward-3.png") },
      { name: "Dr. Matthew Kok Yee Hern", role: "Aesthetic Physician", profileImage: ASSET("od-circle-dr-matthew-3-1.png"), modalImage: ASSET("od-circle-dr-matthew-3-1.png") },
      { name: "Dr. Esther Chuah Cia Yi", role: "Aesthetic Physician", profileImage: ASSET("od-circle-dr-esther-3.png"), modalImage: ASSET("od-circle-dr-esther-3.png") },
      { name: "Dr. Stephanie Chong Hui Min", role: "Aesthetic Physician", profileImage: ASSET("od-circle-dr-stephanie-3.png"), modalImage: ASSET("od-circle-dr-stephanie-3.png") },
      { name: "Assoc. Prof.Dr Chandran Rajagopal(PJM,AMN)", role: "Aesthetic Physician", profileImage: ASSET("od-cirle-chandran.png"), modalImage: ASSET("od-cirle-chandran.png") },
    ],
  },
  {
    category: "DENTAL",
    doctors: [
      { name: "Dr. N Tamilkkumaran A/L Nagoo", role: "Founder of LS Dental", profileImage: ASSET("od-cirle-kami.png"), modalImage: ASSET("od-cirle-kami.png") },
      { name: "Dr. Teoh Yit Kwan", role: "Director of LS Dental Clinic Ipoh Garden", profileImage: ASSET("od-cirle-teoh.png"), modalImage: ASSET("od-cirle-teoh.png") },
      { name: "Dr. Danny Teoh Yoong Sheng", role: "Director of LS Dental Klebang", profileImage: ASSET("od-cirle-danny.png"), modalImage: ASSET("od-cirle-danny.png") },
      { name: "Dr. Theebani A/ P Thrumiaya", role: "Resident Doctor at LS Dental Station 18", profileImage: ASSET("od-cirle-theebani.png"), modalImage: ASSET("od-cirle-theebani.png") },
      { name: "Dr. Vinishdharma A/L Thenarasu", role: "Resident Doctor at LS Dental Station 18", profileImage: ASSET("od-cirle-vinishdharma.png"), modalImage: ASSET("od-cirle-vinishdharma.png") },
      { name: "Dr. Ng Sim Hua", role: "Resident Doctor at LS Dental Ipoh Garden", profileImage: ASSET("od-cirle-ng-sim-hua.png"), modalImage: ASSET("od-cirle-ng-sim-hua.png") },
      { name: "Dr. Rebecca Gaythri A/P Tungat Durai", role: "Resident Doctor at LS Dental Kampar", profileImage: ASSET("od-cirle-rebecca.png"), modalImage: ASSET("od-cirle-rebecca.png") },
    ],
  },
  {
    category: "FAMILY",
    doctors: [
      { name: "Dr. Leong Wei Fai", role: "Founder of LS Family", profileImage: ASSET("od-cirle-leong.png"), modalImage: ASSET("od-cirle-leong.png") },
      { name: "Dr. Kalaiselvi Letchemanan", role: "Director of LS Family Clinic Tanjung Malim", profileImage: ASSET("od-cirle-kalai.png"), modalImage: ASSET("od-cirle-kalai.png") },
      { name: "Dr. Tan Pii Vin", role: "Director of LS Family Clinic Tanjung Tokong", profileImage: ASSET("od-cirle-tan-pii-vin.png"), modalImage: ASSET("od-cirle-tan-pii-vin.png") },
      { name: "Dr. Chong Yaw Wu", role: "Director of LS Family Clinic Sungai Siput", profileImage: ASSET("od-cirle-chong-yaw-wu.png"), modalImage: ASSET("od-cirle-chong-yaw-wu.png") },
      { name: "Dr. Arminderjit Kaur A/ P Amarjit Singh", role: "Director of LS Family Clinic Taiping", profileImage: ASSET("od-circle-arminderjit.png"), modalImage: ASSET("od-circle-arminderjit.png") },
      { name: "Dr. Lim Wee Gee", role: "Director of LS Family Clinic Kuching", profileImage: ASSET("od-circle-dr-lim-wee-gee.png"), modalImage: ASSET("od-circle-dr-lim-wee-gee.png") },
      { name: "Dr. Lim Shou Xun", role: "Paediatrics Specialist Doctor at LS Family Clinic", profileImage: ASSET("od-circle-dr-lim-shou-xun.png"), modalImage: ASSET("od-circle-dr-lim-shou-xun.png") },
      { name: "Dr. Alice Jeevamalar A/P Ravichandran", role: "Resident Doctor at LS Family Clinic Station 18", profileImage: ASSET("od-cirle-alice.png"), modalImage: ASSET("od-cirle-alice.png") },
      { name: "Dr. Durga Devi A/P Tambyrasah", role: "Resident Doctor at LS Family Clinic Ipoh Garden", profileImage: ASSET("od-circle-dr-durga.png"), modalImage: ASSET("od-circle-dr-durga.png") },
      { name: "Dr. Vengtesh Prathan A/L Ratakrishnan", role: "Resident Doctor at LS Family Clinic Tanjung Malim", profileImage: ASSET("od-circle-dr-vengtesh.png"), modalImage: ASSET("od-circle-dr-vengtesh.png") },
      { name: "Dr. Mathura A/P Thangathurai", role: "Resident Doctor at LS Family Clinic Tanjung Malim", profileImage: ASSET("od-circle-dr-mathura.png"), modalImage: ASSET("od-circle-dr-mathura.png") },
      { name: "Dr. Tan Chong Siang", role: "Resident Doctor at LS Family Clinic Tanjung Tokong", profileImage: ASSET("od-circle-dr-tan-cs.png"), modalImage: ASSET("od-circle-dr-tan-cs.png") },
    ],
  },
];

export const CLINICS: { tab: string; clinics: Clinic[] }[] = [
  {
    tab: "LS AESTHETIC",
    clinics: [
      { name: "LS Clinic Station 18", company: "LS LS AESTHETIC CAPITAL SDN BHD 202201000973 (1446670-U)", address: "No 33 susuran, Station 18, 31650 Ipoh, Perak", phone: "012-808 2568", phoneHref: "tel:0128082568", image: ASSET("ls-aestehtic-station-18.jpg"), mapsUrl: "https://goo.gl/maps/3BeYbaGVNWMTAD9Y8" },
      { name: "LS Clinic Ipoh Garden", company: "LS LS AESTHETIC (IP) SDN BHD 201901044402 (1353732-V)", address: "No. 21A-B Medan Ipoh, 1A, Medan Ipoh Bistari, 31400 Ipoh Perak", phone: "0189182568", phoneHref: "tel:0189182568", image: ASSET("ls-aestehtic-ipoh-garden.jpg"), mapsUrl: "https://goo.gl/maps/N2ZfBi1JhFZV42Zf6" },
      { name: "LS Clinic Mid Valley", company: "LS MIDVALLEY SDN BHD 202101005040 (1405339-K)", address: "11-G, The Boulevard, Mid Valley City, Lingkaran Syed Putra, 59200 Kuala Lumpur", phone: "011-5405 0708", phoneHref: "tel:01154050708", image: ASSET("ls-aestehtic-midvalley.jpg"), mapsUrl: "https://goo.gl/maps/xwNmMQ8asxMs3iy67" },
      { name: "LS Clinic Bukit Mertajam", company: "LS AESTHETIC (BUKIT MERTAJAM) SDN BHD 202201017302 (1462999-A)", address: "Icon City, 55-GF, Jln Icon City, 14000 Bukit Mertajam, Pulau Pinang", phone: "017-644 1568", phoneHref: "tel:0176441568", image: ASSET("ls-aestehtic-bukit-mertajam.jpg"), mapsUrl: "https://goo.gl/maps/BhW6HTtAnWX4sV5g6" },
      { name: "LS Clinic Skudai", company: "LS AESTHETIC (SKUDAI) SDN BHD 202501007390 (1608804-A)", address: "3, Jalan Sutera Tanjung 8/3, Taman Sutera Utama, 81300 Skudai, Johor Darul Ta'zim", phone: "010-763 2568", phoneHref: "tel:0107632568", image: ASSET("LS-Clinic-Skudai.png"), mapsUrl: "https://maps.app.goo.gl/thSoqCBPAq6SDoyBA" },
      { name: "LS Clinic Penang", company: "LS AESTHETIC (PENANG) SDN BHD 202201002935 (1448632-V)", address: "190-192, Persiaran Gurney, 10250 George Town, Pulau Pinang", phone: "014-652 2568", phoneHref: "tel:0146522568", image: ASSET("LS-Clinic-Penang.png"), mapsUrl: "https://maps.app.goo.gl/a9q6BtiH3nbY3wjD9" },
      { name: "LS Clinic Kuching", company: "LS AESTHETIC (KUCHING) SDN BHD 202201005437 (1451134-H)", address: "Lot No. 8, Royal Richmond, Jalan Datuk Bandar Mustapha, Richmond Hill, 93250 Kuching, Sarawak", phone: "010-960 2568", phoneHref: "tel:0109602568", image: ASSET("Leskin-Kuching.jpg"), mapsUrl: "https://maps.app.goo.gl/k6nnj47g993HG2YY8" },
    ],
  },
  {
    tab: "LS FAMILY",
    clinics: [
      { name: "LS Family Station 18", company: "LS FAMILY SDN. BHD. 201901010803 (1320131-K)", address: "35, Susuran Station 18, Station 18, 31650 Ipoh, Perak.", phone: "011-1190 0821", phoneHref: "tel:601111900821", image: ASSET("ls-family-station-18.jpg"), mapsUrl: "https://goo.gl/maps/1uDVVFkBD8t89Hjh8" },
      { name: "LS Family Ipoh Garden", company: "LS FAMILY (IPOH GARDEN) SDN. BHD. 202201005540 (1451237-U)", address: "No 63, Jalan Medan Ipoh 1A, Medan Ipoh Bistari,31400 Ipoh, Perak", phone: "011-1180 5821", phoneHref: "tel:601111805821", image: ASSET("ls-family-ipoh-garden.jpg"), mapsUrl: "https://goo.gl/maps/NPgefTJjKUGbA2ZG6" },
      { name: "LS Family Sungai Siput", company: "LS FAMILY SUNGAI SIPUT SDN BHD 202201029597 (1475294-U)", address: "160, Jalan Besar,31100 Sungai Siput (U), Perak.", phone: "018-986 9515", phoneHref: "tel:0189869515", image: ASSET("ls-family-sungai-siput.jpg"), mapsUrl: "https://goo.gl/maps/W3TUVa3sU2NHpubY9" },
      { name: "LS Family Tanjung Malim", company: "LS FAMILY (TANJONG MALIM) SDN. BHD. 202101018613 (1418913-T)", address: "No. 56, Jalan Chong Ah Peng, 35900 Tanjong Malim, Perak", phone: "018-233 3053", phoneHref: "tel:0182333053", image: ASSET("LS-Family-Clinic-Tanjung-Malim-1.png"), mapsUrl: "https://goo.gl/maps/gYpSquQAnLxPPws5A" },
      { name: "LS Family Tanjung Tokong", company: "LS FAMILY TANJUNG TOKONG SDN. BHD. 202201017990 (1463687-T)", address: "C-G-10 Vantage, Jalan Desiran Tanjung, 10470 Tanjung Tokong, Pulau Pinang", phone: "0111-1088227", phoneHref: "tel:01111088227", image: ASSET("ls-family-tanjung-tokong.jpg"), mapsUrl: "https://goo.gl/maps/4htQ9RJejtHfEvMo9" },
      { name: "LS Family Taiping", company: "LS FAMILY (TAIPING) SDN. BHD. 202201047710 (1493407-U)", address: "No. 31, Ground Floor, Persiaran Tbc, Taiping Business Centre, 34000 Taiping, Perak", phone: "012-444 1186", phoneHref: "tel:0124441186", image: ASSET("LS-Family-Taiping.jpg"), mapsUrl: "https://goo.gl/maps/iBxoHz8XbgAT79Yu8" },
      { name: "LS Family Kuching", company: "LS FAMILY (KUCHING) SDN. BHD. 202201005979 (1451676-D)", address: "Lot No. 7, Royal Richmond, Jalan Datuk Bandar Mustapha, 93250 Kuching, Sarawak", phone: "019-868 1522", phoneHref: "tel:60198681522", image: ASSET("LS-Family-Kuching-1.png"), mapsUrl: "https://goo.gl/maps/8d3Aa1z1ZWkUAECc9" },
      { name: "LS Family OUG", company: "LS FAMILY (OUG) SDN. BHD. 202301033109 (1527032-H)", address: "11, Jalan Hujan Rahmat 3, Taman Overseas Union, 58200 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur", phone: "011-6765 8797", phoneHref: "tel:601167658797", image: ASSET("LS-Family-Clinic-OUG.png"), mapsUrl: "https://goo.gl/maps/8d3Aa1z1ZWkUAECc9" },
      { name: "LS Family Puchong", company: "LS Family Puchong", address: "No. 15 (Ground Floor), Jalan Kenari 7, Bandar Puchong Jaya, 47100 Puchong, Selangor", phone: "011-5940 5977", phoneHref: "tel:601159405977", image: ASSET("LS-Family-Clinic-OUG.png"), mapsUrl: "#" },
      { name: "LS Child Specialist Ipoh", company: "LS Child Specialist Ipoh", address: "No. 29 (Ground Floor), Medan Ipoh 1A, Medan Ipoh Bistari, 31400 Ipoh, Perak", phone: "011-6350 7687", phoneHref: "tel:601163507687", image: ASSET("ls-family-ipoh-garden.jpg"), mapsUrl: "#" },
    ],
  },
  {
    tab: "LS DENTAL",
    clinics: [
      { name: "LS Dental Station 18", company: "LS DENTAL SDN. BHD. 201801022334(1284353-M)", address: "No 35 A, 35 B Susuran Stesen 18, Station 18 31650 Ipoh Perak", phone: "012-328 2568", phoneHref: "tel:+60123282568", image: ASSET("ls-dental-st18.png"), mapsUrl: "https://goo.gl/maps/eFD8agGY3ggHkDc47" },
      { name: "LS Dental Ipoh Garden", company: "LS DENTAL (IPOH GARDEN) SDN BHD 201901028720(1338049-D)", address: "No 7, Jalan Medan Ipoh 1 A , Medan Ipoh Bistari 31400 Ipoh Perak", phone: "012-969 2568", phoneHref: "tel:+60129692568", image: ASSET("ls-dental-ipoh-garden.jpg"), mapsUrl: "https://goo.gl/maps/65KLbC2ThaGuqiKx9", website: "https://lsdental.com.my/en" },
      { name: "LS Dental Kampar", company: "LS DENTAL (KAMPAR) SDN. BHD. 202001025649 (1381969-P)", address: "No 2224, Jalan Batu Karang Taman Bandar Baru 31900 Kampar", phone: "012-590 2568", phoneHref: "tel:+60125902568", image: ASSET("ls-dental-kampar.jpg"), mapsUrl: "https://goo.gl/maps/geACM4BQyaGqAgP96" },
      { name: "LS Dental Klebang", company: "LS DENTAL (KLEBANG) SDN BHD 202101037310 (1437610-T)", address: "No 34 Persiaran Klebang Putra, Pusat Perdagangan Klebang 31200 Chemor Perak", phone: "018-292 2568", phoneHref: "tel:+60182922568", image: ASSET("ls-dental-klebang.png"), mapsUrl: "https://goo.gl/maps/eFD8agGY3ggHkDc47" },
    ],
  },
];

export const APPOINTMENT_OUTLETS = {
  aesthetic: [
    "LS Clinic Station 18 (Ipoh)",
    "LS Clinic Ipoh Garden (Ipoh)",
    "LS Clinic Mid Valley (KL)",
    "LS Clinic Bukit Mertajam (Penang)",
    "LS Clinic Kuching",
    "LS Clinic Gurney Drive Penang",
    "LS Clinic Skudai",
  ],
  dental: [
    "LS Dental Station 18 (Ipoh)",
    "LS Dental Ipoh Garden (Ipoh)",
    "LS Dental Kampar (Perak)",
    "LS Dental Klebang (Perak)",
  ],
  family: [
    "LS Family Station 18 (Ipoh)",
    "LS Family Ipoh Garden (Ipoh)",
    "LS Family Sungai Siput (Perak)",
    "LS Family Tanjung Malim (Perak)",
    "LS Family Tanjung Tokong (Penang)",
    "LS Family Taiping (Perak)",
    "LS Family Kuching (Kuching)",
  ],
};

export const APPOINTMENT_TIMES = [
  "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
  "1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30",
  "5:00", "5:30", "6:00",
];
