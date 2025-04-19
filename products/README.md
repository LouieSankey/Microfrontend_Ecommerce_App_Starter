# Products Application

## Overview
This is the Products (remote) micro frontend for our application architecture using Webpack Module Federation. It runs on port 8081 and exposes modules to be consumed by the Container application.

## Key Files

- **src/index.js**: Contains the Products functionality (generates product listings using faker)
- **webpack.config.js**: Configuration for Module Federation

## Module Federation Setup

The Products app acts as a remote that exposes modules. Key configuration:

```javascript
new ModuleFederationPlugin({
  name: 'products',
  filename: 'remoteEntry.js',
  exposes: {
    './ProductsIndex': './src/index',
  },
})
```

### How It Works

1. `name: 'products'`: Must match the name before @ in the Container's remotes configuration
2. `filename: 'remoteEntry.js'`: The manifest file that tells other apps how to load this code
3. `exposes`: Maps public paths to internal file paths
   - When Container imports 'products/ProductsIndex', it gets 'src/index.js'

## Benefits

- Can run independently (standalone development)
- Exposes specific functionality to Container application
- Maintains separate build process

## Running the Application

```bash
npm start
```

This starts the development server on port 8081. You can visit http://localhost:8081 to view the standalone products application.