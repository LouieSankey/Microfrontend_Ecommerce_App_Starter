# Micro Frontend Products Application

This project demonstrates a micro frontend architecture using Webpack Module Federation.

## Project Structure

```
├── container/           # Host application that integrates all micro frontends
├── products/            # Products micro frontend
├── cart/                # Cart micro frontend
└── webpack.config.js    # Webpack configuration
```

## How It Works

1. **Container Application**
   - Runs on `localhost:8080`
   - Integrates the Products and Cart micro frontends
   - Acts as the host application in the Module Federation setup

2. **Products Micro Frontend**
   - Runs on `localhost:8081`
   - Generates and displays random product names using faker
   - Can run independently or as part of the container

3. **Cart Micro Frontend**
   - Runs on `localhost:8082`
   - Manages shopping cart functionality
   - Can run independently or as part of the container

4. **Module Federation**
   - Enables runtime integration of independently built JavaScript applications
   - Allows sharing of components and dependencies between applications

## Running the Project

To run the complete application, you need to start all three services:

```bash
# Start the Products micro frontend
cd products
npm start

# Start the Cart micro frontend
cd cart
npm start

# Start the Container application
cd container
npm start
```

Visit `http://localhost:8080` to see the complete integrated application.

You can also visit the individual micro frontends:
- Products: `http://localhost:8081`
- Cart: `http://localhost:8082`
