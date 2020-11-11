import { DimensionsMap } from './dimensions-map';
import { Img } from './img';
import { Skus } from './skus';

export class Data {
  id: number;
  categoryId: number;
  categoryName: string;
  description: string;
  linkId: null;
  metaTagDescription: string;
  name: string;
  refId: null;
  skus: Array<Skus>;
  title: string;
  gallery: Array<Img>;
  dimensionsMap: DimensionsMap;
}
