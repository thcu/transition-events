
/**
 * expose 
 */

module.exports = transitionEventName;

/**
 *
 */

var transitionEvents = { /*'transitionstart': 'TransitionStart',*/ 'transitionend': 'TransitionEnd' }
  , testNode = document.createElement('p')
  , testProperty = 'transition'
  , hasPrefix = testNode.style[testProperty] == undefined
  , prefixes = ['o', 'MS', 'moz', 'webkit']
  , prefix = getPrefix()
  ;

/**
 * return the prefix for transition
 */

function getPrefix() {
    for (var i = prefixes.length - 1; i >= 0; i--) {
        if (testNode.style['-' + prefixes[i].toLowerCase() + '-' + testProperty] != undefined) {
            return prefixes[i];                
        };
    };
    return '';
};

/**
 * prefix transition event name if needed
 *
 * @param {String} name
 * @return {String}
 * api public
 */

function transitionEventName (name) {
    return hasPrefix
        ? prefix + transitionEvents[name]
        : name
        ;
};