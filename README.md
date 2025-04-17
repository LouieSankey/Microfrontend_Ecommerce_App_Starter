# Simple Products Page

A basic webpack setup demonstrating bundle injection and development server usage.

## Project Structure

```
├── src/
│   └── index.js         # Main JavaScript file that generates product names
├── public/
│   └── index.html       # HTML template
└── webpack.config.js    # Webpack configuration
```

## How It Works

1. **Webpack Development Server**
   - Runs on `localhost:8081`
   - Bundles `src/index.js` and its dependencies into `main.js`
   - HtmlWebpackPlugin automatically injects the bundle into the HTML

2. **Main Features**
   - Uses `faker` to generate random product names
   - Demonstrates automatic bundle injection
   - Hot reloading for development

## Running the Project

```bash
# Start the development server
npm run start
```

Visit `http://localhost:8081` to see the application running. 
