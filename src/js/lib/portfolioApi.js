var portfolioItems = [
    {
        id: 'starter-app',
        name: 'Starter App',
        description: 'iOS App that I designed and code using Sketch and Titanium Framework.',
        thumb: '/images/portfolio/mobile-app/000-thumb.jpg',
        teaser: 'Design and code',
        repo: 'https://github.com/dotCMS/dotcms-mobile-app',
        images: [
            '/images/portfolio/mobile-app/001-Home.jpg',
            '/images/portfolio/mobile-app/002-Home-Menu.jpg',
            '/images/portfolio/mobile-app/003-Products.jpg',
            '/images/portfolio/mobile-app/004-Products-Detail.jpg',
            '/images/portfolio/mobile-app/005-News.jpg',
            '/images/portfolio/mobile-app/006-News-Detail.jpg',
            '/images/portfolio/mobile-app/007-Our-Team.jpg',
            '/images/portfolio/mobile-app/008-Our-Team-Detail.jpg'
        ]
    },
    {
        id: 'pulpe-app',
        name: 'La Pulpe Webapp',
        description: 'A webapp I designed and coded with ReactJS and Material Design Lite.',
        teaser: 'Design and ReactJS',
        repo: 'https://github.com/fmontes/pulpecr-react',
        thumb: '/images/portfolio/pulpe-app/000-thumb.jpg',
        images: [
            '/images/portfolio/pulpe-app/001-Home.jpg',
            '/images/portfolio/pulpe-app/002-Cart.jpg'
        ]
    },
    {
        id: 'sport-site',
        name: 'DotCMS Sport Site',
        description: 'Desktop web site demo for a sport team.',
        teaser: 'UI/UX',
        thumb: '/images/portfolio/sport-site/000-thumb.jpg',
        images: [
            '/images/portfolio/sport-site/001-home.jpg',
            '/images/portfolio/sport-site/002-pattern-library.jpg'
        ]
    },
    {
        id: 'ecommerce',
        name: 'Detail Page',
        description: 'Little responsive UI exercise for a product detail page in a eCommerce web site.',
        teaser: 'eCommerce UX',
        thumb: '/images/portfolio/ecommerce/000-thumb.jpg',
        images: [
            '/images/portfolio/ecommerce/001-Product-Detail.jpg',
            '/images/portfolio/ecommerce/002-Product-Detail-Mobile.jpg'
        ]
    },
    {
        id: 'villas-costa-alegre',
        name: 'Villas Costa Alegre',
        description: 'Logo and static desktop site design.',
        teaser: 'Logo and Web',
        thumb: '/images/portfolio/villas-costa-alegre/000-thumb.jpg',
        images: [
            '/images/portfolio/villas-costa-alegre/001-logo.jpg',
            '/images/portfolio/villas-costa-alegre/002-home.jpg'
        ]
    },
    {
        id: 'movistar',
        name: 'Movistar CRC Launch',
        description: 'The assignment was to create a campaign for the launch of Movistar in Costa Rica.',
        teaser: 'School Project',
        thumb: '/images/portfolio/movistar/000-thumb.jpg',
        images: [
            '/images/portfolio/movistar/001-resumen-corporativo.jpg',
            '/images/portfolio/movistar/002-print-volante.jpg',
            '/images/portfolio/movistar/003-print-mupie.jpg',
            '/images/portfolio/movistar/004-outdoor-night.jpg',
            '/images/portfolio/movistar/005-outdoor-day.jpg'
        ]
    },
    {
        id: 'magazine',
        name: 'Tech Magazine',
        description: 'When Google Glass was a thing I designed a magazine for it (ads are not my design).',
        teaser: 'School Project',
        thumb: '/images/portfolio/magazine/000-thumb.jpg',
        images: [
            '/images/portfolio/magazine/001.jpg',
            '/images/portfolio/magazine/002.jpg',
            '/images/portfolio/magazine/003.jpg',
            '/images/portfolio/magazine/004.jpg',
            '/images/portfolio/magazine/005.jpg'
        ]
    },
    {
        id: 'ccss',
        name: 'Obesity Kills',
        description: 'The \"client\" was Caja Costarricense de Seguro Social and this was a campaign that said loudly \"obesity will kill you\".',
        teaser: 'School Project',
        thumb: '/images/portfolio/ccss/000-thumb.jpg',
        images: [
            '/images/portfolio/ccss/001-tennis.jpg',
            '/images/portfolio/ccss/002-pelona.jpg'
        ]
    },
    {
        id: 'vetriderm',
        name: 'Very Important Pets',
        description: 'Hey pet owners Vetriderm is the best thing can happen to your dog.',
        teaser: 'School Project',
        thumb: '/images/portfolio/vetriderm/000-thumb.jpg',
        images: [
            '/images/portfolio/vetriderm/001.jpg',
            '/images/portfolio/vetriderm/002.jpg'
        ]
    },
    {
        id: 'hilux',
        name: 'Hilux',
        description: 'Professor gave us an images and a brand we had to make the ad.',
        teaser: 'School Project',
        thumb: '/images/portfolio/hilux/000-thumb.jpg',
        images: [
            '/images/portfolio/hilux/hilux.jpg'
        ]
    }
];

export default {
    getItems() {
        var promise = new Promise(function(resolve, reject) {
            resolve(portfolioItems);
        });
        return promise;
    },

    getItemById(id) {
        var promise = new Promise(function(resolve, reject) {
            portfolioItems.map(function(item) {
                if (item.id === id) {
                    resolve(item);
                }
            });

        });
        return promise;

    }
}
