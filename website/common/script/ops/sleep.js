module.exports = function sleep (user, req = {}, analytics) {
  user.preferences.sleep = !user.preferences.sleep;

  if (analytics) {
    analytics.track('sleep', {
      uuid: user._id,
      anonymize: !user.flags.consent.analytics,
      status: user.preferences.sleep,
      category: 'behavior',
      headers: req.headers,
    });
  }

  return [user.preferences.sleep];
};
