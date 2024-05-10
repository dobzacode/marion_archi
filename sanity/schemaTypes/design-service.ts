import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'designService',
  title: 'Design de service',
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
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      group: 'contenu',
      options: {
        list: [
          { title: 'Projets', value: 'projets' },
          { title: 'Recherches', value: 'recherches' }
        ]
      },
      validation: (Rule) => Rule.required().warning(`La catégorie du projet est requise`)
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
      name: 'nom',
      title: 'Nom',
      type: 'string',
      group: 'contenu',
      validation: (Rule) =>
        Rule.max(100).required().warning(`Le nom ne doit pas dépasser 100 caractères `)
    }),

    defineField({
      name: 'problematiquesEnjeux',
      title: 'Problématiques et enjeux',
      type: 'blockContent',
      group: 'contenu',
      validation: (Rule) => Rule.required().warning(`Le champ est obligatoire`)
    }),
    defineField({
      name: 'mediationsComptages',
      title: 'Médiations et comptages',
      type: 'blockContent',
      group: 'contenu',
      validation: (Rule) => Rule.required().warning(`Le champ est obligatoire`)
    }),
    defineField({
      name: 'prototypesActions',
      title: 'Prototypes et actions',
      type: 'blockContent',
      group: 'contenu',
      validation: (Rule) => Rule.required().warning(`Le champ est obligatoire`)
    }),
    defineField({
      name: 'echangesEntretiensDialogues',
      title: 'Echanges / entretiens et dialogues',
      type: 'blockContent',
      group: 'contenu',
      validation: (Rule) => Rule.required().warning(`Le champ est obligatoire`)
    }),
    defineField({
      name: 'diffusionRestitution',
      title: 'Diffusion et restitution',
      type: 'blockContent',
      group: 'contenu',
      validation: (Rule) => Rule.required().warning(`Le champ est obligatoire`)
    }),
    defineField({
      name: 'preconisations',
      title: 'Préconisations',
      type: 'blockContent',
      group: 'contenu',
      validation: (Rule) => Rule.required().warning(`Le champ est obligatoire`)
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
