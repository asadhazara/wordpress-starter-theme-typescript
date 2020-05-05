import autoprefixer from 'autoprefixer';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import dotenv from 'dotenv';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import path from 'path';
import postcssFn from 'postcss-functions';
import tailwindcss from 'tailwindcss';
import TerserPlugin from 'terser-webpack-plugin';
import { Configuration, DefinePlugin, Options, ProgressPlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

// initiate ENV veriables
dotenv.config();

const prod = process.env.NODE_ENV === 'production';

const cssExtraction = [
  { loader: 'file-loader', options: { name: 'css/[name].min.css' } },
  { loader: 'extract-loader' },
];

const styleLoader = [{ loader: 'style-loader' }];

const cssFunctions = postcssFn({
  functions: {
    stripUnit: (unit: string) => parseFloat(unit),
  },
});

const optimization: { optimization: Options.Optimization } = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
    splitChunks: {
      name: true,
      automaticNameDelimiter: '/',
    },
  },
};

const config: Configuration = {
  watch: !prod,
  entry: {
    index: 'src/index.ts',
    admin: 'src/admin.ts',
  },
  mode: prod ? 'production' : 'development',
  devtool: !prod ? '#cheap-module-eval-source-map' : false,
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  output: {
    filename: 'js/[name].min.js',
    chunkFilename: `js/[name]${prod ? '.[hash]' : ''}.js`,
    path: path.resolve(__dirname, 'assets'),
    publicPath: process.env.PUBLIC_PATH,
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    '@wordpress/blocks': ['wp', 'blocks'],
    '@wordpress/compose': ['wp', 'compose'],
    '@wordpress/hooks': ['wp', 'hooks'],
    '@wordpress/block-library': ['wp', 'blockLibrary'],
    '@wordpress/components': ['wp', 'components'],
    '@wordpress/data': ['wp', 'data'],
    '@wordpress/date': ['wp', 'date'],
    '@wordpress/editor': ['wp', 'editor'],
    '@wordpress/block-editor': ['wp', 'blockEditor'],
    '@wordpress/element': ['wp', 'element'],
    '@wordpress/i18n': ['wp', 'i18n'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.(s*)css$/,
        exclude: /node_modules/,
        use: [
          ...(prod ? cssExtraction : styleLoader),
          {
            loader: 'css-loader',
            options: {
              sourceMap: !prod,
              importLoaders: 1,
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: !prod,
              plugins: [tailwindcss, cssFunctions, autoprefixer()],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !prod,
              prependData: '$PUBLIC_PATH: "' + process.env.PUBLIC_PATH + '";',
            },
          },
        ],
      },
    ],
  },
  ...(prod ? optimization : {}), // only optimize files on production
  plugins: [
    new ProgressPlugin(),
    new DefinePlugin({
      // 'process.env.SECRET_KEY': process.env.SECRET_KEY
    }),
    new CopyPlugin([
      { from: '**/*', to: 'fonts', context: 'src/fonts' },
      { from: '**/*', to: 'images', context: 'src/images' },
      { from: '**/*', to: 'data', context: 'src/data' },
    ]),
    ...(prod ? [new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })] : []),
    ...(prod ? [new ForkTsCheckerWebpackPlugin()] : []),
    ...(process.env.DEBUG === '1' ? [new BundleAnalyzerPlugin()] : []),
    ...(prod === false
      ? [
          new BrowserSyncPlugin({
            proxy: process.env.APP_URL,
            files: ['**/*.php', '**/*.twig'],
            ignore: ['vendor'],
            ghostMode: false,
            open: false,
          }),
        ]
      : []),
  ],
};

export default config;
