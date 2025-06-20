//@ts-nocheck
import VisitsImg from '../assets/images/activities/Visits.webp?w=400&format=webp&quality=80'
import FairImg from '../assets/images/activities/Fair.webp?w=400&format=webp&quality=80'
import ActivitiesImg from '../assets/images/activities/Lojëra dhe Aktivitetet Sportive.webp?format=webp&quality=80'
import EnvCapsImg from '../assets/images/activities/caps.jpg?w=400&format=webp&quality=80'
import HouseLeavesImg from '../assets/images/activities/shtepia-gjethe.jpg?w=400&format=webp&quality=80'
import SilvinjoImg from '../assets/images/activities/silvinjo.jpg?w=400&format=webp&quality=80'
import ScienceImg from '../assets/images/activities/panairi-shkencor.jpg?w=400&format=webp&quality=80'
import DanceImg from '../assets/images/activities/valle-tropojane.jpg?w=400&format=webp&quality=80'

export const partnersAlb = [
  {
    href: 'https://www.kksh.org.al/',
    img: '/images/partners/kksh-logo.svg',
    alt: 'KKSH'
  },
  {
    href: 'https://downsyndromealbania.com',
    img: '/images/partners/jonathan.jpg',
    alt: 'Down Syndrome Albania'
  },
  {
    href: 'https://www.facebook.com/shkollaspeciale.luigjgurakuqi',
    img: '/images/partners/luigjNobg.png',
    alt: 'Luigj Gurakuqi'
    // text: 'SHKOLLA SPECIALE LUIGJ GURAKUQI'   // text‑logo variant
  }
]

export const partnersAbroad = [
  {
    href: 'https://www.woodfarmschool.org.uk/',
    img: '/images/partners/wood-farm.png',
    alt: 'Wood Farm School'
  },
];

export const partners = [...partnersAlb, ...partnersAbroad];

export const socialMedia = {
  facebook: 'https://www.facebook.com/shkollafenix',
  instagram: 'https://www.instagram.com/fenix_shkolla_anglo_shqiptare',
}

export const activities = [
  {
    image: VisitsImg,
    title: "Ekskursione dhe Vizita Mësimore",
    description: "Nxënësit marrin pjesë në ekskursione dhe vizita që i ndihmojnë ata të mësojnë në një mjedis jashtë klasës, duke u njohur me kultura të ndryshme dhe duke aplikuar njohuritë e fituara."
  },
  {
    image: FairImg,
    title: "Panaire dhe Projekte Shkencore",
    description: "Nxënësit zhvillojnë dhe prezantojnë projekte shkencore, duke i dhënë mundësi për të eksperimentuar dhe për të nxitur kuriozitetin dhe kërkimin shkencor."
  },
  {
    image: ActivitiesImg,
    title: "Lojëra dhe Aktivitetet Sportive",
    description: "Aktivitetet fizike dhe sportive janë pjesë e rëndësishme e programit tonë, duke i mësuar nxënësit për rëndësinë e punës në ekip dhe zhvillimit të shëndetit fizik."
  },
  {
    title: "Festa e Fundvitit",
    description: "Një ngjarje speciale që feston arritjet e nxënësve gjatë vitit shkollor dhe nderon ata për përpjekjet e tyre."
  },
  {
    title: "Festat e Traditave dhe Festivaleve",
    description: "Shkolla organizon ngjarje që përkujtojnë dhe nderojnë traditat dhe kulturat e ndryshme, duke i mësuar nxënësit të respektojnë dhe të vlerësojnë shumëllojshmërinë."
  },
  {
    title: "Ditët e Hapura dhe Prezantimet për Prindërit",
    description: "Aktivitetet ku nxënësit mund të tregojnë përparimin e tyre dhe arritjet e vitit, duke krijuar mundësi për prindërit të jenë pjesë aktive të procesit mësimor."
  }
];

export const footerNumbers = [
  {title: 'about.team.programDirectorTitle', num: '069 30 65760'},
  {title: 'about.team.executiveDirectorTitle', num: '069 20 24495'},
  {title: 'about.team.secretary', num: '069 74 60770'},
]

export const schoolInfo = {
  email: 'shkollafenix@gmail.com'
}