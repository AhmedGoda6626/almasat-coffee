import type { Drink } from '../types';

export const drinks: Drink[] = [
  // المشروبات الساخنة
  {
    id: '1',
    name: 'القهوة التركي',
    price: 25,
    category: 'hot',
    description: 'قهوة تركي أصلي محضر بطريقة تقليدية',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop',
    isAvailable: true
  },
  {
    id: '2',
    name: 'القهوة التركي دابل',
    price: 30,
    category: 'hot',
    description: 'قهوة تركي مضاعف للمحبين القهوة المركزة',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
    isAvailable: true
  },
  {
    id: '3',
    name: 'إسبريسو سينجل',
    price: 25,
    category: 'hot',
    description: 'إسبريسو إيطالي أصيل',
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop',
    isAvailable: true
  },
  {
    id: '4',
    name: 'إسبريسو سوس دابل',
    price: 35,
    category: 'hot',
    description: 'إسبريسو مضاعف قوي ومنعش',
    isAvailable: true
  },
  {
    id: '5',
    name: 'ميكاتو سينجل',
    price: 25,
    category: 'hot',
    description: 'ميكاتو كلاسيكي',
    isAvailable: true
  },
  {
    id: '6',
    name: 'ميكاتو دابل',
    price: 35,
    category: 'hot',
    description: 'ميكاتو مضاعف للطعم المكثف',
    isAvailable: true
  },
  {
    id: '7',
    name: 'قهوة أمريكانو',
    price: 35,
    category: 'hot',
    description: 'قهوة أمريكانو كلاسيكية',
    isAvailable: true
  },
  {
    id: '8',
    name: 'قهوة فرنسوي',
    price: 35,
    category: 'hot',
    description: 'قهوة فرنسي بالطعم الأوروبي الأصيل',
    isAvailable: true
  },
  {
    id: '9',
    name: 'قهوة بندق',
    price: 35,
    category: 'hot',
    description: 'قهوة بطعم البندق الرائع',
    isAvailable: true
  },
  {
    id: '10',
    name: 'قهوة فانيليا',
    price: 35,
    category: 'hot',
    description: 'قهوة بطعم الفانيليا الكريمي',
    isAvailable: true
  },
  {
    id: '11',
    name: 'كابتشينو',
    price: 45,
    category: 'hot',
    description: 'كابتشينو إيطالي بالحليب المزبد',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
    isAvailable: true
  },
  {
    id: '12',
    name: 'لاتيه',
    price: 40,
    category: 'hot',
    description: 'لاتيه كريمي بالحليب الطازج',
    image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&h=300&fit=crop',
    isAvailable: true
  },
  {
    id: '13',
    name: 'موكا',
    price: 40,
    category: 'hot',
    description: 'موكا بالشوكولاتة الفاخرة',
    isAvailable: true
  },
  {
    id: '14',
    name: 'فلات وايت',
    price: 50,
    category: 'hot',
    description: 'فلات وايت استرالي الأصل',
    isAvailable: true
  },
  {
    id: '15',
    name: 'هوت أوريو',
    price: 40,
    category: 'hot',
    description: 'مشروب ساخن بطعم الأوريو',
    isAvailable: true
  },
  {
    id: '16',
    name: 'هوت سايدر',
    price: 30,
    category: 'hot',
    description: 'مشروب ساخن بطعم السايدر',
    isAvailable: true
  },
  {
    id: '17',
    name: 'هوت شوكوليت',
    price: 30,
    category: 'hot',
    description: 'مشروب ساخن بالشوكولاتة الساخنة',
    isAvailable: true
  },
  {
    id: '18',
    name: 'سحلب',
    price: 35,
    category: 'hot',
    description: 'سحلب تقليدي بالحليب والقرفة',
    isAvailable: true
  },
  {
    id: '19',
    name: 'سحلب مكسرات',
    price: 55,
    category: 'hot',
    description: 'سحلب بالمكسرات المتنوعة',
    isAvailable: true
  },
  {
    id: '20',
    name: 'شاي أحمر',
    price: 20,
    category: 'hot',
    description: 'شاي أحمر تقليدي',
    isAvailable: true
  },
  {
    id: '21',
    name: 'شاي أخضر',
    price: 20,
    category: 'hot',
    description: 'شاي أخضر صحي ومنعش',
    isAvailable: true
  },
  {
    id: '22',
    name: 'شاي كرك',
    price: 20,
    category: 'hot',
    description: 'شاي كرك بالهيل والبهارات',
    isAvailable: true
  },

  // المشروبات الباردة
  {
    id: '23',
    name: 'فانيليا',
    price: 40,
    category: 'cold',
    description: 'مشروب بارد بطعم الفانيليا الكريمي',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop',
    isAvailable: true
  },
  {
    id: '24',
    name: 'شوكوليت',
    price: 40,
    category: 'cold',
    description: 'مشروب بارد بالشوكولاتة الفاخرة',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    isAvailable: true
  },
  {
    id: '25',
    name: 'فراولة',
    price: 40,
    category: 'cold',
    description: 'مشروب بارد بطعم الفراولة الطازجة',
    isAvailable: true
  },
  {
    id: '26',
    name: 'مانجو',
    price: 40,
    category: 'cold',
    description: 'مشروب بارد بطعم المانجو الاستوائي',
    isAvailable: true
  },
  {
    id: '27',
    name: 'ليمون',
    price: 40,
    category: 'cold',
    description: 'مشروب بارد بالليمون الطازج',
    isAvailable: true
  },
  {
    id: '28',
    name: 'كار ميل',
    price: 40,
    category: 'cold',
    description: 'مشروب بارد بطعم الكراميل الحلو',
    isAvailable: true
  },
  {
    id: '29',
    name: 'بندق',
    price: 40,
    category: 'cold',
    description: 'مشروب بارد بطعم البندق الطبيعي',
    isAvailable: true
  },
  {
    id: '30',
    name: 'نوتيلا',
    price: 40,
    category: 'cold',
    description: 'مشروب بارد بطعم النوتيلا الشهي',
    isAvailable: true
  },
  {
    id: '31',
    name: 'لوتس',
    price: 40,
    category: 'cold',
    description: 'مشروب بارد بطعم بسكويت اللوتس',
    isAvailable: true
  },
  {
    id: '32',
    name: 'كابتشينو',
    price: 40,
    category: 'cold',
    description: 'كابتشينو مثلج منعش',
    isAvailable: true
  },
  {
    id: '33',
    name: 'سينكرد',
    price: 40,
    category: 'cold',
    description: 'مشروب بارد بطعم السنيكرز',
    isAvailable: true
  },
  {
    id: '34',
    name: 'فانيليا أوريو',
    price: 40,
    category: 'cold',
    description: 'مشروب بارد بطعم الفانيليا والأوريو',
    isAvailable: true
  },
  {
    id: '35',
    name: 'زبادي موت',
    price: 50,
    category: 'cold',
    description: 'مشروب بارد بالزبادي الطازج',
    isAvailable: true
  },
  {
    id: '36',
    name: 'فستق',
    price: 55,
    category: 'cold',
    description: 'مشروب بارد بطعم الفستق الطبيعي',
    isAvailable: true
  },
  {
    id: '37',
    name: 'ميكس الماسة',
    price: 55,
    category: 'cold',
    description: 'خليط مميز من النكهات - خاص بمحمصة الماسة',
    isAvailable: true
  },

  // الآيس كريم
  {
    id: '38',
    name: 'فانيليا',
    price: 25,
    category: 'icecream',
    description: 'آيس كريم فانيليا كريمي',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    isAvailable: true
  },
  {
    id: '39',
    name: 'شوكوليت',
    price: 25,
    category: 'icecream',
    description: 'آيس كريم شوكولاتة فاخر',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop',
    isAvailable: true
  },
  {
    id: '40',
    name: 'ليمون',
    price: 25,
    category: 'icecream',
    description: 'آيس كريم ليمون منعش',
    isAvailable: true
  },
  {
    id: '41',
    name: 'مانجو',
    price: 25,
    category: 'icecream',
    description: 'آيس كريم مانجو استوائي',
    isAvailable: true
  },
  {
    id: '42',
    name: 'زبادي عوت',
    price: 25,
    category: 'icecream',
    description: 'آيس كريم بالزبادي الطبيعي',
    isAvailable: true
  },
  {
    id: '43',
    name: 'كراميل',
    price: 25,
    category: 'icecream',
    description: 'آيس كريم كراميل حلو',
    isAvailable: true
  },
  {
    id: '44',
    name: 'نوتيلا',
    price: 25,
    category: 'icecream',
    description: 'آيس كريم بطعم النوتيلا',
    isAvailable: true
  },
  {
    id: '45',
    name: 'لوتس',
    price: 25,
    category: 'icecream',
    description: 'آيس كريم بطعم بسكويت اللوتس',
    isAvailable: true
  },
  {
    id: '46',
    name: 'فراولة',
    price: 25,
    category: 'icecream',
    description: 'آيس كريم فراولة طازج',
    isAvailable: true
  },
  {
    id: '47',
    name: 'بندق',
    price: 25,
    category: 'icecream',
    description: 'آيس كريم بطعم البندق',
    isAvailable: true
  },
  {
    id: '48',
    name: 'أوريو',
    price: 25,
    category: 'icecream',
    description: 'آيس كريم بقطع الأوريو',
    isAvailable: true
  },
  {
    id: '49',
    name: 'سينكرد',
    price: 25,
    category: 'icecream',
    description: 'آيس كريم بطعم السنيكرز',
    isAvailable: true
  },
  {
    id: '50',
    name: 'كابتشينو',
    price: 25,
    category: 'icecream',
    description: 'آيس كريم بطعم الكابتشينو',
    isAvailable: true
  },
  {
    id: '51',
    name: 'فستق',
    price: 30,
    category: 'icecream',
    description: 'آيس كريم فستق فاخر',
    isAvailable: true
  },
  {
    id: '52',
    name: 'ميكس الماسة',
    price: 25,
    category: 'icecream',
    description: 'آيس كريم بخليط نكهات الماسة المميز',
    isAvailable: true
  }
];