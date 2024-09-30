module.exports = {
  // ... other configurations
  module: {
    rules: [
      // ... other rules
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // Add other formats as needed
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]', // Custom output naming
            outputPath: 'assets/videos/', // Output directory for videos
            publicPath: 'assets/videos/', // Public URL for videos
          },
        },
      },
    ],
  },
};