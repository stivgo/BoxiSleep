import { Dimension } from './dimension';
import { Especification } from './especification';
export class Skus {
  specifications: Especification;
  listPrice: number;
  basePrice: number;
  id: number;
  name: string;
  dimensions: Dimension;
  isActive: boolean;
  listPriceFormatted: string;
  basePriceFormatted: string;


}
