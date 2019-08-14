  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
      module: {
      rules: [
      //处理css
      {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
      },
      //处理图片 
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
            {
              loader: 'url-loader',
                options: {
                  limit: 10
              }
            }
        ]
      }      
      ]
    } 