  let routes = [
    {
        path: 'category-list',
        url: 'category/category.html',
        initScript: ['category/category.js',
            'category/category-controller.js',
            'category/category-ui-controller.js',
            'category/category-app.js'],
        init: 'CategoryApp'
    },
    {
        path: 'product-list',
        url: 'product/product.html',
        initScript: ['product/product.js',
            'product/product-controller.js',
            'product/product-ui-controller.js',
            'product/product-app.js'],
        init: 'ProductApp'
    }
]