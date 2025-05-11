export default function Footer() {
    return (
        <footer className="bg-gray-100 py-8 mt-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div>
                        <h3 className="text-lg font-bold mb-4">Rovani Projects</h3>
                        <p className="text-gray-600 max-w-md">
                            Providing expert consulting services to help businesses achieve their goals.
                        </p>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <h4 className="text-md font-semibold mb-3">Contact</h4>
                        <p className="text-gray-600">projects@rovani.net</p>
                    </div>
                </div>
                <div className="border-t border-gray-200 mt-8 pt-6 flex justify-between items-center">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Rovani Projects. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://www.linkedin.com/company/rovani-projects" className="text-gray-400 hover:text-gray-600">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}