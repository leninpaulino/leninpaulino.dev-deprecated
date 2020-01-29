import React from "react";

export default function SubscribeToNewsletter() {
    return (
        <div className="container px-4">
            <div className="font-sans bg-white rounded-lg shadow-md p-4 text-center">
                <h2 className="font-bold break-normal text-xl md:text-3xl">
                    Subscribe to my Newsletter
                </h2>
                <h3 className="font-bold break-normal font-normal text-gray-600 text-sm md:text-base">
                    Get the latest posts delivered right to your inbox
                </h3>
                <div className="w-full text-center pt-4">
                    <form action="#">
                        <div className="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
                            <input
                                type="email"
                                placeholder="youremail@example.com"
                                className="flex-1 mt-4 appearance-none border border-gray-400 rounded shadow-md p-3 text-gray-600 mr-2 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="flex-1 mt-4 block md:inline-block appearance-none bg-teal-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-teal-400"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
