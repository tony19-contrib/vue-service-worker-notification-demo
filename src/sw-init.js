import registerServiceWorker, { ServiceWorkerNoSupportError } from 'service-worker-loader!./sw'

registerServiceWorker({ scope: '/' }).then(registration => {
  console.log('Success!')
  console.log(registration)
}).catch(err => {
  if (err instanceof ServiceWorkerNoSupportError) {
    console.log('Service worker is not supported.')
  } else {
    console.log('Error!', err)
  }
})
