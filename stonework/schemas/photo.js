export default {
    name: 'photo',
    title: 'Photo',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'alt',
        title: 'Alt',
        type: 'string',
      },
      {
        name: 'carousel',
        title: 'Carousel',
        type: 'boolean'
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  }
  