import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import * as schemas from './schemaTypes'
export default defineConfig({
  name: 'fel-man',
  title: 'fel-man',
  projectId: 'b1qmda5a',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: schemas.schemaTypes,
  },
})