import './example.scss';
import template from './example.html';

export default {
  controller: exampleController,
  template,
  bindings: {
    name: '@'
  }
};

function exampleController() {
  this.msg = 'Hello';
}
