import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'designEspace',
  title: "Design d'espace",
  type: 'document',
  groups: [
    { name: 'media', title: 'Media' },
    { name: 'contenu', title: 'Contenu', default: true },
    { name: 'seo', title: 'Seo' }
  ],
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'seo',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    }),
    defineField({
      name: 'metatitre',
      title: 'Métatitre',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'metadescription',
      title: 'Métadescription',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'mainImage',
      title: 'Image principale',
      type: 'image',
      group: 'media',
      validation: (Rule) =>
        //@ts-ignore
        Rule.custom(({ asset }) => {
          return asset ? true : "L'image est obligatoire";
        })
    }),
    defineField({
      name: 'schema',
      title: 'Schéma',
      type: 'image',
      group: 'media',
      validation: (Rule) =>
        //@ts-ignore
        Rule.custom(({ asset }) => {
          return asset ? true : 'Le schéma est obligatoire';
        })
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      group: 'contenu',
      options: {
        list: [
          { title: "Architecture d'interieur", value: 'interieur' },
          { title: 'Architecture retail', value: 'retail' },
          { title: 'Architecture espaces de travail tertiaires', value: 'tertiaire' },
          { title: 'Architecture', value: 'architecture' }
        ]
      },
      validation: (Rule) => Rule.required().warning(`La catégorie est requise`)
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
      type: 'number',
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
