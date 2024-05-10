import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'designEspace',
  title: "Design d'espace",
  type: 'document',
  groups: [
    { name: 'media', title: 'Media' },
    { name: 'contenu', title: 'Contenu', default: true }
  ],
  fields: [
    defineField({
      name: 'mainImage',
      title: 'Image principale',
      type: 'image',
      group: 'media',
      validation: (Rule) => Rule.required().warning(`L'image est obligatoire`)
    }),
    defineField({
      name: 'titre',
      title: 'Titre',
      type: 'string',
      group: 'contenu',
      validation: (Rule) =>
        Rule.max(100).required().warning(`Le titre du projet ne doit pas dépasser 100 caractères`)
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      group: 'contenu',
      options: { dateFormat: 'YYYY-DD-MM' }
    }),
    defineField({
      name: 'renovation',
      title: 'Rénovation',
      type: 'string',
      group: 'contenu'
    }),
    defineField({
      name: 'honoraire',
      title: 'Honoraire',
      type: 'string',
      group: 'contenu'
    }),
    defineField({
      name: 'squareMeter',
      title: 'Mètre carré',
      type: 'int',
      group: 'contenu'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      group: 'contenu',
      validation: (Rule) => Rule.required().warning(`La description est obligatoire`)
    }),
    defineField({
      name: 'imageGallery',
      title: "Galerie d'image",
      type: 'array',
      group: 'media',
      of: [
        {
          type: 'image',
          options: {
            metadata: ['blurhash', 'lqip'],
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texte alternatif'
            }
          ]
        }
      ]
    })
  ],

  preview: {
    select: {
      title: 'titre',
      media: 'imageGallery.0'
    },
    prepare(selection) {
      const { title } = selection;
      return { ...selection, subtitle: title };
    }
  }
});
