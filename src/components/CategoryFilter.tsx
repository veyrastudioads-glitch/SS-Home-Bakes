import React from "react";
import { CATEGORY_TABS } from "../data/products";
import type { CategoryTabId } from "../data/products";

interface CategoryFilterProps {
  selectedCategory: CategoryTabId;
  onSelectCategory: (category: CategoryTabId) => void;
  cardCounts: Record<CategoryTabId, number>;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  cardCounts,
}) => {
  return (
    <div className="w-full">
      {/* Scrollable Container on Mobile */}
      <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-3 pt-1 px-1 no-scrollbar sm:flex-wrap sm:justify-center">
        {CATEGORY_TABS.map((tab) => {
          const isSelected = selectedCategory === tab.id;
          const count = cardCounts[tab.id] || 0;

          return (
            <button
              key={tab.id}
              onClick={() => onSelectCategory(tab.id)}
              className={`flex-shrink-0 inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel-500 ${
                isSelected
                  ? "bg-chocolate-900 text-cream-50 shadow-warm-sm scale-[1.02]"
                  : "bg-cream-100 hover:bg-cream-200/90 text-chocolate-900 border border-cocoa-600/15"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isSelected
                    ? "bg-caramel-500 text-chocolate-950 font-semibold"
                    : "bg-cream-200 text-chocolate-800"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
