import { CategoryModel } from "../category-model/category-model";
import { ProductModel } from "../product-model/product-model";
import { SliderModel } from "../slider-model/slider.model";

export class CatalogueModel {
  products?: Array<ProductModel>;
	categories?: Array<CategoryModel>;
	sliders?: Array<SliderModel>;
}
  