import React from "react"
import "../styles/searchFilter.css"

interface SearchFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  priceFilter: number;
  setPriceFilter: (price: number) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ searchQuery, setSearchQuery, priceFilter, setPriceFilter }) => {
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Sayohat nomini qidiring..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select value={priceFilter} onChange={(e) => setPriceFilter(Number(e.target.value))}>
        <option value={0}>Barcha narxlar</option>
        <option value={500000}>500,000 so‘mgacha</option>
        <option value={1000000}>1,000,000 so‘mgacha</option>
        <option value={2000000}>2,000,000 so‘mgacha</option>
      </select>
    </div>
  );
};

export default SearchFilter;
