import Image from 'next/image';

export const ProductCards = [
  {
    title: 'MVP',
    description:
      'We specialize in custom MVP development, focusing on tailored prototyping services to meet diverse client needs and ensure rapid market launch.',
    color: '#2F41A3',
    button: 'Talk to a Product Expert',
    image: '/images/cardImage1.png',
  },
  {
    title: 'SaaS',
    description:
      "Take your business to new heights with our all-inclusive SaaS development services, delivering seamless and digital experiences that are platform-agnostic and tailored to your customers' needs.",
    color: '#7E2148',
    button: 'Talk to a Product Expert',
    image: '/images/cardImage2.png',
  },
  {
    title: 'AI',
    description:
      'We develop tailored AI solutions, leveraging machine learning, NLP, and computer vision to automate, optimize, and enhance decision-making processes.',
    color: '#AA7333',
    button: 'Talk to a Product Expert',
    image: '/images/cardImage3.png',
  },
  {
    title: 'B2B & B2C Commerce Transformation',
    description:
      'We elevate B2B and B2C commerce, specializing in Shopify, Prestashop, Magento, and Woocommerce to boost online orders and enhance customer shopping experiences, keeping you competitive.',
    color: '#224A38',
    button: 'Talk to a Ecommerce Expert',
    image: '/images/cardImage4.png',
  },
];

export const ClientsData = [
  {
    description:
      "I'm thrilled with Chromezy's work. They developed inventory management, AI-powered demand forecasting, and smart route optimization on time and affordably. Onwards and upwards with Chromezy!",
    name: 'JEET OBERAI',
    jobTitle: '(Entrepreneur), PayLoan',
    rate: '4.8 / 5',
    project: 'Product Development',
    country: 'Singapore',
    image: (
      <Image
        src={'/images/AD8.png'}
        height={24}
        width={63}
        priority
        alt=""
        className="h-6 w-[63px]"
      />
    ),
  },

  {
    description:
      'They are swift to respond and implement faster. Thanks to Chromezy for providing expert developers and on-time delivery to help scale our Cloud-based ERP SaaS solution that helped us automate workflows, and get an analytics dashboard for swift decision-making.',
    name: 'MARC DOLLON',
    jobTitle: 'CTO, MasterStudy',
    rate: '5 / 5',
    project: 'SaaS-Based Cloud ERP',
    country: 'United States',
    image: <Image src={'/images/AD1.png'} height={40} width={140} priority quality={100} alt="" />,
  },

  {
    description:
      'Highly responsive with keen attention to detail. Assisted in building my e-commerce platform, mapping transformative areas, resulting in exceptional customer experience.',
    name: 'BRANDON LAU',
    jobTitle: '(CEO), KIRI Journey',
    rate: '5 / 5',
    project: 'E-commerce Development',
    country: 'HongKong',
    image: (
      <Image
        src={'/images/AD4 - Copy.png'}
        height={25}
        width={48}
        priority
        alt=""
        className="h-[25px] w-[48px]"
      />
    ),
  },

  {
    description:
      'We are Campion Savings Club based in Zimbabwe, South Africa, UK, USA and Australia. Chromezy is very professional, efficient, and reliable.',
    name: 'JEFTA MUGWENI',
    jobTitle: '(CEO), Campion Savings Club',
    rate: '5 / 5',
    project: 'Custom CRM MVP Development',
    country: 'Zimbabwe',

    image: <Image src={'/images/AD3 - Copy.png'} height={42} width={75} priority alt="" />,
  },
];

export const BlogsData = [
  {
    title: 'FinConnect',
    description: 'Customer Relationship Management (CRM)',
    image: (
      <Image src={'/images/succes_story_1.png'} fill alt="succes story" className="object-cover" />
    ),
  },
  {
    title: 'HealthSync',
    description: 'Health Tracking App for Patients and Doctors',
    image: (
      <Image src={'/images/succes_story_2.png'} fill alt="succes story" className="object-cover" />
    ),
  },
  {
    title: 'Commerce360',
    description: 'Online Store, Multivendor Marketplace & E-commerce Apps',
    image: (
      <Image src={'/images/succes_story_3.png'} fill alt="succes story" className="object-cover" />
    ),
  },
  {
    title: 'PrintwithAI',
    description: 'Web-to-Print Software / Online Design Tool / Product Designer Tool',
    image: (
      <Image src={'/images/succes_story_4.png'} fill alt="succes story" className="object-cover" />
    ),
  },
  {
    title: 'PM Insights',
    description: 'Project Management Tool (SaaS & Hosted)',
    image: (
      <Image src={'/images/succes_story_5.png'} fill alt="succes story" className="object-cover" />
    ),
  },
];
