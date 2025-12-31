import { searchSource } from '@/lib/search-source';
import { createFromSource } from 'fumadocs-core/search/server';

// statically cached
export const revalidate = false;
export const { staticGET: GET } = createFromSource(searchSource);
