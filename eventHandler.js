var testEvent = function() {
  console.log('Test worked!');
};

AFRAME.registerComponent('chosen', {
  init: function () {
    this.el.addEventListener('click', function () {
      testEvent();
      console.log('I was clicked!');
    });
  }
});
