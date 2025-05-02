import React from 'react';

interface PaginationProps {
    currentPage: number | undefined;
    totalPages: number | undefined;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage = 1,
    totalPages = 10,
    onPageChange
}) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    // Generate page numbers to display
    const getPageNumbers = () => {
        const pages = [];

        // Always show first page
        pages.push(1);

        // Add pages around current page
        for (let i = Math.max(2, currentPage - 1); i <= totalPages; i++) {
            if (i > 1 && i < totalPages) {
                pages.push(i);
            }
        }

        return pages;
    };

    return (
        <div className="flex items-center justify-center space-x-2 py-4">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
            >
                Previous
            </button>

            {getPageNumbers().map((page, index) => (
                <React.Fragment key={index}>
                    <button
                        onClick={() => typeof page === 'number' && onPageChange(page)}
                        className={`px-4 py-2 rounded-md ${currentPage === page
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        {page}
                    </button>

                </React.Fragment>
            ))}

            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;