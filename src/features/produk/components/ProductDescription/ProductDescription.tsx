import React from "react";
import Card from "../../../../components/common/Card";

// ================================================
// Interface Props
// ================================================
export interface ProductDescriptionProps {
  /** Teks deskripsi produk */
  description: string;
  /** Class name tambahan */
  className?: string;
}

// ================================================
// Component
// ================================================
export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
  className,
}) => {
  return (
    <Card className={`p-2 md:p-4 mb-5 ${className ?? ""}`}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl md:text-2xl leading-tight font-bold mb-5">
            Deskripsi
          </h1>
          <p className="text-sm md:text-base text-gray-500">{description}</p>
        </div>
      </div>
    </Card>
  );
};

ProductDescription.displayName = "ProductDescription";
