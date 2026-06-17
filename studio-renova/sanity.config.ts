import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Creative Touch Renova',

  projectId: 'puzajrus',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Main Treatments')
              .icon(() => '💉')
              .child(
                S.documentTypeList('mainTreatment')
                  .title('Main Treatments')
                  .defaultOrdering([{ field: 'num', direction: 'asc' }])
              ),
            S.divider(),
            S.listItem()
              .title('Signature Packages')
              .icon(() => '✦')
              .child(
                S.documentTypeList('treatment')
                  .title('Signature Packages')
                  .defaultOrdering([{ field: 'num', direction: 'asc' }])
              ),
            S.divider(),
            S.listItem()
              .title('Before & After')
              .icon(() => '🖼️')
              .child(
                S.documentTypeList('beforeAfter')
                  .title('Before & After')
                  .defaultOrdering([{ field: 'rank', direction: 'asc' }])
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
