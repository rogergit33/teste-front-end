import { useEffect, useState } from "react";

function SearchInput() {
  const [placeholder, setPlaceholder] = useState("O que você está buscando?");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setPlaceholder("Buscar...");
      } else {
        setPlaceholder("O que você está buscando?");
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <input
      type="text"
      placeholder={placeholder}
      className="search-input"
    />
  );
}

export default SearchInput;
