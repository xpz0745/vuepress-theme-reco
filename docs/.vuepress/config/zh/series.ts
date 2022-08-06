export const series = {
  // todo README.md 无法展示，没有对 '' 进行处理
  '/docs/guide/': ['introduce', 'architecture', 'getting-started'],
  '/docs/theme/': [
    {
      text: '基础',
      children: ['introduce', 'usage', 'custom-catalog-title']
    },
    {
      text: '高级',
      children: ['home', 'series', 'comments', 'auto-set-category', 'custom-container', 'code-import', 'bulletin-popover', 'register-components', 'password']
    }
  ],
  '/docs/plugins/': ['page', 'comments', 'vue-previews', 'bulletin-popover'],
}