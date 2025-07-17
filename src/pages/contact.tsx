import Layout from '@/components/layout/Layout';
import Head from 'next/head';

export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>Contact Us | Rovani Projects</title>
                <meta name="description" content="Get in touch with our consultancy team" />
            </Head>

            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                        <p className="text-xl text-gray-600">
                            We would love to hear from you. Get in touch with our team.
                        </p>
                    </div>

                    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-8">
                        <form name="contact" method="POST" data-netlify="true">
                            <input type="hidden" name="form-name" value="contact" />

                            <div className="mb-6">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <h3 className="text-lg font-semibold mb-2">Email</h3>
                            <p className="text-gray-600">info@rovaniprojects.net</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold mb-2">Phone</h3>
                            <p className="text-gray-600">(812)760-1258</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}