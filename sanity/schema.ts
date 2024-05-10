import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemaTypes/blockContent';
import designEspace from './schemaTypes/designEspace';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, designEspace]
};
('');
