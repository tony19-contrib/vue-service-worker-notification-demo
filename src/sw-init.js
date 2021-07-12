import registerServiceWorker, { ServiceWorkerNoSupportError } from 'service-worker-loader!./sw'

function showNotification(registration, { title, body }) {
  Notification.requestPermission(result => {
    if (result === 'granted') {
      registration.showNotification(title, {
        body,
        requireInteraction: true,
      })
    }
  })
}

registerServiceWorker({ scope: '/' }).then(registration => {
  showNotification(registration, { title: 'Greetings', body: 'Hello from your Service Worker' })
}).catch(err => {
  if (err instanceof ServiceWorkerNoSupportError) {
    console.log('Service worker is not supported.')
  } else {
    console.log('Error!', err)
  }
})
