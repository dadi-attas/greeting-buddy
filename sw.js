self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'Greeting Buddy';
  const options = {
    body: data.body || 'יש לך אירוע קרוב!',
    icon: '/greeting-buddy/icon-192.png',
    badge: '/greeting-buddy/icon-192.png',
    dir: 'rtl',
    lang: 'he'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('/greeting-buddy/'));
});
