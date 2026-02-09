'use client'
import React from 'react'

const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black text-white">
            <div className="flex flex-col items-center gap-4">
                {/* Spinner */}
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-white border-t-transparent" />

                {/* Text */}
                <p className="text-sm tracking-wide text-gray-300">
                    Loading...
                </p>
            </div>
        </div>
    )
}

export default Loading
