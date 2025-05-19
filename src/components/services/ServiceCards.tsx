import { ArrowRight, LineChart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

// Map frontmatter icon strings to Lucide React components
import {
    Activity,
    BarChart,
    Code,
    Cog,
    FileText,
    Layers,
    LineChart as LineChartIcon,
    PieChart,
    Settings,
    TrendingUp,
    Users
} from 'lucide-react';

export const IconMap: Record<string, React.ElementType> = {
    'line-chart': LineChartIcon,
    'chart-line': LineChartIcon,
    'layers': Layers,
    'code': Code,
    'users': Users,
    'bar-chart': BarChart,
    'pie-chart': PieChart,
    'cogs': Cog,
    'file-text': FileText,
    'settings': Settings,
    'activity': Activity,
    'trending-up': TrendingUp
};

export type Service = {
    slug: string;
    frontmatter: {
        title: string;
        description: string;
        icon?: string;
        order?: number;
        [key: string]: unknown;
    };
};

type ServiceCardsProps = {
    services: Service[];
};

export default function ServiceCards({
    services = [], // Add default empty array
}: ServiceCardsProps) {
    return (
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8`}>
            {services && services.map((service) => {
                // Get the icon component from the map, or default to LineChart
                const IconComponent = service.frontmatter.icon
                    ? IconMap[service.frontmatter.icon as string] || LineChart
                    : LineChart;

                return (
                    <div key={service.slug} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] group">
                        <Link href={`/services/${service.slug}`} className="block p-6">
                            <>
                                <div className={`w-14 h-14 rounded-full bg-chicago-blue/10 flex items-center justify-center mb-6 group-hover:bg-chicago-blue/20 transition-colors`}>
                                    <IconComponent className={`text-chicago-blue h-7 w-7`} />
                                </div>
                                <h3 className={`text-xl font-semibold mb-3 group-hover:text-chicago-blue transition-colors`}>{service.frontmatter.title}</h3>
                            </>
                            <p className="text-gray-600">
                                {service.frontmatter.description}
                            </p>
                            <div className="mt-4">
                                <span className={`text-chicago-blue font-medium inline-flex items-center`}>
                                    Learn more
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </span>
                            </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}