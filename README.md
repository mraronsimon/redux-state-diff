# redux-state-diff

It's a simple addition of, a smart NPM package, **deep-diff** for **Redux**.

If something changed on a **Redux store**, every object and array have been repacked on the path of the change.

## Consequences:
 - If the current node is an array or an object and the reference is the same on the both side (lhs, rhs), the content (value, child-nodes, sub-tree) of the node are also the same.
 - When we want apply this changes, we must rewrap every object and array on the path of the change.
