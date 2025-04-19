# Container Application

## Overview
This is the Container (host) application for our micro frontend architecture using Webpack Module Federation. It runs on port 8080 and integrates the Products and Cart micro frontends.

## Key Files

- **src/index.js**: Entry point that only imports bootstrap.js using async import
- **src/bootstrap.js**: Contains the actual application code
- **webpack.config.js**: Configuration for Module Federation
- **public/index.html**: Contains mount points for micro frontends

## HTML Structure

The Container application needs mount points for each micro frontend:

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body id="dev-products"></body>
    <body id="dev-cart"></body>
</html>
```

Each micro frontend will render to its corresponding element:
- Products renders to `#dev-products`
- Cart renders to `#dev-cart`

## Module Federation Setup

The Container acts as a host that consumes remote modules. Key configuration:

```javascript
new ModuleFederationPlugin({
  name: 'container',
  remotes: {
    products: 'products@http://localhost:8081/remoteEntry.js',
    cart: 'cart@http://localhost:8082/remoteEntry.js',
  },
})
```

### How It Works

1. The split between index.js and bootstrap.js allows Webpack to:
   - Load remote dependencies before executing the main application code
   - Ensure all required modules are available

2. Import pattern in bootstrap.js:
   ```javascript
   import ProductsList from 'products/ProductsIndex';
   import CartDisplay from 'cart/CartIndex';
   ```
   - The first part of the import path must match keys in the remotes object
   - The second part matches the exposed module from each micro frontend

## Running the Application

```bash
npm start
```

This starts the development server on port 8080. Visit http://localhost:8080 to view the application.