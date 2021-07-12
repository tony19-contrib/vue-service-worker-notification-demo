import { format } from 'date-fns'

self.addEventListener('install', () => {
  console.log('hello from your service worker!', format(new Date(), "'Today is a' eeee"))
})