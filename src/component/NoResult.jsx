import React from 'react';
const NoResult = () => {
    return (
        <div className="col-span-full flex flex-col items-center justify-center py-12 px-4">
            <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-1">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
    );
};

export default NoResult;
