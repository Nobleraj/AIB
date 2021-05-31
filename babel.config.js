module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  plugins: ["@babel/plugin-transform-runtime"
  ],
  env : {
    production : {
    plugins : [
      ["react-remove-properties", { "properties": ["data-test"] }]
    ]
    }
  }
}