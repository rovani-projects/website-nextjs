import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-accent py-8 mt-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Rovani Projects, Inc.</h3>
                        <p className="text-muted-foreground max-w-md">
                            Providing expert consulting services to help businesses achieve their goals.
                        </p>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <h4 className="font-semibold mb-3">Contact</h4>
                        <p className="text-muted-foreground">info@rovaniprojects.com</p>
                    </div>
                </div>
                <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} Rovani Projects, Inc. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <Link
                            href="https://www.linkedin.com/company/rovani-projects"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}