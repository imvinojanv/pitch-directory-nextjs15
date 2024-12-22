"use client"

import { useFormStatus } from 'react-dom';
import { Loader2, Search } from "lucide-react";

const SearchFormSubmit = () => {
    const status = useFormStatus();

    return (
        <button type="submit" className="search-btn text-white">
            {status.pending ?
                <Loader2 className='animate-spin size-5'/> :
                <Search className="size-5" />
            }
        </button>
    )
}

export default SearchFormSubmit