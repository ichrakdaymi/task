export type Discount = {
  amount: number;
  percentage: number;
};

export interface Product {
  id: number;
  title: string;
  srcUrl: string;
  gallery: string[];
  price: number;
  discount: Discount
  rating: number;
  ageRange: string;
  stemCategory: string;
  educationalLevel: string;
  learningObjectives: string[];
  keySkills: string[];
  reviewCount: number;
  educationalValue: string;
}

