export const storageUrl = 'http://www.shkollafenix.edu.al/r'

export type Magazine = {
  title: string
  images: number
}

export const buildImageUrl = (title: string, idx: number) => {
  return `${storageUrl}/r${title}/pages/${idx}.jpg`
}

export const magazineInfo = [
  'magBy',
  'magFreq',
  'magContent',
  'magProcess'
]

export const magazines = [
  {
    title: '1',
    images: 24
  },
  {
    title: '2',
    images: 24
  },
  {
    title: '3',
    images: 24
  },
  {
    title: '4',
    images: 24
  },
  {
    title: '5',
    images: 24
  },
  {
    title: '6',
    images: 24
  },
  {
    title: '7',
    images: 24
  },
  {
    title: '8',
    images: 24
  },
  {
    title: '9',
    images: 24
  },
];