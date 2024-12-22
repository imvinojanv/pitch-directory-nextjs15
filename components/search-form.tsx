import Form from "next/form";

import SearchFormReset from "@/components/search-form-reset";
import SearchFormSubmit from "@/components/search-form-submit";

const SearchForm = ({ query }: { query?: string }) => {
    return (
        <Form action="/" scroll={false} className="search-form">
            <input
                name="query"
                defaultValue={query}
                className="search-input"
                placeholder="Search Startups"
            />

            <div className="flex gap-2">
                {query && <SearchFormReset />}

                <SearchFormSubmit />
            </div>
        </Form>
    )
}

export default SearchForm