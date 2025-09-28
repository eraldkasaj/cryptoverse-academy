import { useState } from "react";

const Search = ({onSearch}) => {
    const [query,setQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim() !=='') {
            onSearch(query)
            setQuery('')
        }
    }

     return (
    <form onSubmit={handleSubmit} className="d-flex align-items-center">
      <input
        type="text"
        className="form-control search-input"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );

}

export default Search