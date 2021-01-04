/**
                  CSSStyleSheet
                    /     \
                   /       \
                  /         \
                 /           \
                /             \
               /               \
              /                 \
             /                   \
         CSSRule                CSSRule
          /   \                  /   \
         /     \                /     \
        /       \              /       \
    Selecor   Declaration  Selector    Declaration
       |         |           |               |
    p, div,     margin,     * Selector      * values.
    span etc   padding,
                top etc

Rendering rule vary upon Dispaly  property.
example of multiple renderers is broken HTML. According to the CSS spec an inline element must contain either only block elements or only inline elements. In the case of mixed content, anonymous block renderers will be created to wrap the inline elements.
Some render objects correspond to a DOM node but not in the same place in the tree. Floats and absolutely positioned elements are out of flow, placed in a different part of the tree, and mapped to the real frame. A placeholder frame is where they should have been.
a solid color is "cheap" to paint, while a drop shadow is "expensive" to compute and render

Sharing style data ->

WebKit nodes references style objects (RenderStyle). These objects can be shared by nodes in some conditions. The nodes are siblings or cousins and:

1. The elements must be in the same mouse state (e.g., one can't be in :hover while the other isn't)
2. Neither element should have an id
3. The tag names should match
4. The class attributes should match
5. The set of mapped attributes must be identical
6. The link states must match
7. The focus states must match
8. Neither element should be affected by attribute selectors, where affected is defined as having any selector match that uses an attribute selector in any position within the selector at all
9. There must be no inline style attribute on the elements
10. There must be no sibling selectors in use at all. WebCore simply throws a global switch when any sibling selector is encountered and disables style sharing for the entire document when they are present. This includes the + selector and selectors like :first-child and :last-child.
 
Firefox rule tree ->
Firefox has two extra trees for easier style computation: the rule tree and style context tree. WebKit also has style objects but they are not stored in a tree like the style context tree, only the DOM node points to its relevant style.
*/
