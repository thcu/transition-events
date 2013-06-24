/**
 * @var {Array} prefixes - events prefixes (reverse order of preference due to reverse loop...)
 * @var {Object} transitionEvents - map native event name to its unprefixed CamalCased counterpart
 * @var {String} styleProperty - style property to test on element
 * @var {Element} testNode - clean element to test prop on
 * @var {Boolean} noprefix - check if prefix is needed
 * @var {String} camelCaseEvent - reference to transitionEvents[@param:name]
 */

var prefixes = ['o', 'MS', 'moz', 'webkit']
    , transitionEvents = { /*'transitionstart': 'TransitionStart',*/ 'transitionend': 'TransitionEnd' }
    , styleProperty = 'transition'
    , testNode = document.createElement('p')
    , noPrefix = testNode.style[styleProperty] != undefined
    , camelCaseEvent
    ;

/**
 * prefix transition event name if needed
 *
 * @param {String} name
 * @return {String}
 * @api {public}
 */

function transitionEventName (name) {
    if (noPrefix) return name;
    camelCaseEvent = transitionEvents[name];
    for (var i = prefixes.length - 1; i >= 0; i--) {
        if (testNode.style['-' + prefixes[i].toLowerCase() + '-' + styleProperty] != undefined) {
            return prefixes[i] + transitionEvents[name];
        };
    };
};

/**
 * expose 
 */

module.exports = transitionEventName;