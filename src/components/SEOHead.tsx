import { useEffect } from 'react';

interface SEOHeadProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    canonical?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
    title,
    description,
    keywords,
    ogImage = '/vite.png',
    canonical
}) => {
    const fullTitle = `${title} | TransAll`;
    const siteUrl = 'https://translates.cc';
    const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

    useEffect(() => {
        // Update title
        document.title = fullTitle;

        // Update meta tags
        const updateMetaTag = (name: string, content: string, property?: boolean) => {
            const attribute = property ? 'property' : 'name';
            let element = document.querySelector(`meta[${attribute}="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        updateMetaTag('description', description);
        if (keywords) updateMetaTag('keywords', keywords);
        updateMetaTag('og:title', fullTitle, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:image', `${siteUrl}${ogImage}`, true);
        updateMetaTag('og:url', canonicalUrl, true);
        updateMetaTag('twitter:title', fullTitle);
        updateMetaTag('twitter:description', description);
        updateMetaTag('twitter:image', `${siteUrl}${ogImage}`);

        // Update canonical link
        let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.rel = 'canonical';
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.href = canonicalUrl;
    }, [fullTitle, description, keywords, ogImage, canonicalUrl, siteUrl]);

    return null;
};

export default SEOHead;
