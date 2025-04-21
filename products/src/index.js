//having the bootstrap with the index.js file allows shared modules to run asynchronously, without this you might
//encounter the error: 'shared module is not available for consumption'
import('./bootstrap');