import React from "react";

const HomePage = () => {
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Left Section */}
            <div className="hidden md:flex w-1/2 bg-blue-600 text-white flex-col justify-center items-center p-12 relative">
                <div className="absolute top-6 left-6 font-bold text-xl flex items-center gap-2">
                    <span className="text-2xl">✦</span> Oasis.
                </div>
                <blockquote className="max-w-md text-lg leading-relaxed">
                    <p>
                        "The passage experienced a surge in popularity during the 1960s when
                        Letraset used it on their dry-transfer sheets, and again during the
                        90s as desktop publishers bundled the text with their software."
                    </p>
                    <footer className="mt-6 font-semibold">Vincent Obi ✅</footer>
                </blockquote>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-10 py-12">
                <button className="mb-6 text-sm text-gray-500 flex items-center gap-2 hover:text-blue-600">
                    ← Back
                </button>

                <div className="max-w-md w-full mx-auto">
                    <h2 className="text-2xl font-bold mb-2">Register Individual Account!</h2>
                    <p className="text-gray-500 mb-8">
                        For the purpose of industry regulation, your details are required.
                    </p>

                    <form className="space-y-5">
                        {/* Fullname */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Your fullname*
                            </label>
                            <input
                                type="text"
                                placeholder="Enter fullname"
                                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Email address*
                            </label>
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Create password*
                            </label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Terms */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-600">
                                I agree to terms & conditions
                            </span>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Register Account
                        </button>
                    </form>

                    {/* Google Button */}
                    <div className="mt-6 flex items-center">
                        <div className="w-full border-t" />
                        <span className="px-2 text-gray-400 text-sm">Or</span>
                        <div className="w-full border-t" />
                    </div>

                    <button className="w-full mt-4 flex items-center justify-center border py-2 rounded-lg hover:bg-gray-50">
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="google"
                            className="w-5 h-5 mr-2"
                        />
                        Register with Google
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;