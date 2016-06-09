import './example.scss';
import template from './example.html';

export default {
  controller,
  template,
  bindings: {
    name: '@'
  }
};

function controller() {
  this.msg = 'Hello';
}
