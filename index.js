const diff = require('deep-diff');
const applyChange = require('deep-diff').applyChange;
const _ = require('lodash');

module.exports = {
    diff: (lhs, rhs, prefilter) => {
        return diff(lhs, rhs, (currentPath, key) => {
            const totalPath = currentPath.concat(key);
            if (_.get(lhs, totalPath) === _.get(rhs, totalPath))
                return true;
            else if (typeof prefilter === 'function')
                return prefilter(currentPath, key);
            else
                return false;
        })
    },
    applyChange: (target, change) => {
        if (target && change && change.kind) {
            const newTarget = (Array.isArray(target))
                ? [...target] : {...target};

            console.log(target === newTarget)
            let iterator = newTarget;
            let temp;
            for (let i = 0; i < change.path.length; i++) {
                console.log('IT: ', iterator, change.path[i])
                temp = iterator[change.path[i]];
                iterator[change.path[i]] = (Array.isArray(temp))
                    ? [...temp] : {...temp}; 
                iterator = iterator[change.path[i]]
            }
            applyChange(newTarget, undefined, change);
            return newTarget;
        }
    }
}