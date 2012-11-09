if (Meteor.isClient) {
  Template.hello.reativeDataSource = function () {
    return Session.get('test');
  };

  Meteor.setInterval(function(){Session.set('test', Meteor.uuid())},1000)

  Template.testReactive.rendered = function () {
    console.log('sub-template in constant got called')
  };
}