const subscribers = {};

function subscribe(eventType, callback) {
  if (!subscribers[eventType]) {
    subscribers[eventType] = [];
  }

  subscribers[eventType].push(callback);
}

function publish(eventType, data) {
  if (!subscribers[eventType]) {
    return;
  }

  subscribers[eventType].forEach((func) => func(data));
}

const eventBus = {
  subscribe,
  publish,
};

module.exports = eventBus;
