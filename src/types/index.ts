export interface Product {
  productName: string;
  descriptionShort: string;
  price: number;
  photo: string;
}

export interface ProductModalProps {
  product: Product;
  onClose: () => void;
}
