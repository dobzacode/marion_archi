import { type SchemaTypeDefinition } from 'sanity';
import blockContent from './schemaTypes/block-content';
import designEspace from './schemaTypes/design-espace';
import designService from './schemaTypes/design-service';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, designEspace, designService]
};
('');
