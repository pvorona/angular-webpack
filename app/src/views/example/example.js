require('./example.scss');

function example() {
    return {
        restrict: 'E',
        template: require('./example.html')
    };
}

export default example;