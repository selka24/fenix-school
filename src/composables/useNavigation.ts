import { reactive } from 'vue';

export interface MenuItem {
  title: string;
  link: string;
}

export interface NavigationMenu {
  title: string;
  link: string;
  submenu: MenuItem[];
}

export function useNavigation() {
  const navigationItems = reactive<NavigationMenu[]>([
    {
      title: 'About Us',
      link: '#about-us',
      submenu: [
        { title: 'Welcome', link: '#welcome' },
        { title: 'Leadership', link: '#leadership' },
        { title: 'Why ISP', link: '#why-isp' },
        { title: 'Governance', link: '#governance' },
        { title: '75th Anniversary', link: '#anniversary' },
        { title: 'Annual Report', link: '#annual-report' },
        { title: 'Campus', link: '#campus' },
        { title: 'Calendar', link: '#calendar' },
        { title: 'Inclusion & Belonging', link: '#inclusion' },
        { title: 'University Destinations', link: '#university-destinations' }
      ]
    },
    {
      title: 'Learning',
      link: '#learning',
      submenu: [
        { title: 'Academic Excellence', link: '#academic-excellence' },
        { title: 'Primary School', link: '#primary-school' },
        { title: 'Middle School', link: '#middle-school' },
        { title: 'High School', link: '#high-school' },
        { title: 'College Counseling', link: '#college-counseling' },
        { title: 'Athletics', link: '#athletics' }
      ]
    },
    {
      title: 'Student Life',
      link: '#student-life',
      submenu: [
        { title: 'Arts', link: '#arts' },
        { title: 'Clubs', link: '#clubs' },
        { title: 'Field Trips', link: '#field-trips' },
        { title: 'Community Service', link: '#community-service' },
        { title: 'Student Support', link: '#student-support' },
        { title: 'School Events', link: '#school-events' }
      ]
    },
    {
      title: 'Community',
      link: '#community',
      submenu: [
        { title: 'Parents Association', link: '#parents-association' },
        { title: 'Alumni', link: '#alumni' },
        { title: 'News', link: '#news' },
        { title: 'Events', link: '#events' },
        { title: 'Get Involved', link: '#get-involved' },
        { title: 'Support Us', link: '#support-us' }
      ]
    },
    {
      title: 'Giving',
      link: '#giving',
      submenu: [
        { title: 'Annual Fund', link: '#annual-fund' },
        { title: 'Capital Campaign', link: '#capital-campaign' },
        { title: 'Ways to Give', link: '#ways-to-give' },
        { title: 'Donor Recognition', link: '#donor-recognition' },
        { title: 'Impact', link: '#impact' }
      ]
    },
    {
      title: 'Admissions',
      link: '#admissions',
      submenu: [
        { title: 'Application Process', link: '#application-process' },
        { title: 'Tuition & Fees', link: '#tuition-fees' },
        { title: 'Financial Aid', link: '#financial-aid' },
        { title: 'Visit Us', link: '#visit-us' },
        { title: 'FAQs', link: '#faqs' }
      ]
    },
    {
      title: 'Careers',
      link: '#careers',
      submenu: [
        { title: 'Current Openings', link: '#current-openings' },
        { title: 'Benefits', link: '#benefits' },
        { title: 'Working at Fenix', link: '#working-at-fenix' },
        { title: 'Apply', link: '#apply' }
      ]
    }
  ]);

  return {
    navigationItems
  };
} 