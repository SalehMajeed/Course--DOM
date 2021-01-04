/**
 * For defining HTML DTD(Document Type Definition) is Used as Formal Format.
 * HTML Can't be parse simply because is doesn't have context free grammar.
 * HTML is the descendant of the SGML(Standard Generalised Markup Language).
 */

/**
  * DOM Tree for HTML ->
        <html>
            <body>
                <p>
                  Hello World
                </p>
                <div> <img src="example.png"/></div>
              </body>
        </html>

                            HTMLHtmlElement
                                   |
                            HTMLBodyElement
                                   /\
                                  /  \
                                 /    \
                                /      \
                               /        \
                              /          \
                             /            \
                            /              \
                           /                \
                    HTMLParagraphElement  HTMLDivElement
                          |                  |
                        Text             HTMLImageElement

*HTML parsing is in two ways -> First is the Tokenization and the Second is Tree Construction.
For tokenization the default state will be Data State. when < tag found the state will be tag open state and each character in the tag will append to the tag name state and when finally > will found the token will be created and state will back to default state.eg->
                                
                                Data State  -------------|
                                    |                    |
                              Open Tag State             |
                                /       \                |
                               /         \               |
                              /           \              |
                             /             \             |
                            /               \            |
                        Close Tag   ->     tag name -----|
*/
