/**
 * Prioritize the display content to the current user action is known as critical rendering path.
*    async -> when a async attribute occur it will not halt the process untill file is downloaded but when file downloaded it will halt the process.
*   defer -> some time it's similar to async but when file fully downloaded it doesn't halt the parse process it will wait until html parse not complete then it will parse file in order that occur in dom.
*   embedded script -> they halt html parsing process.

* All normal scripts (embedded or external) are parser-blocking as they halt the construction of DOM. All async scripts (AKA asynchronous scripts) do not block parser until they are downloaded. As soon as an async script is downloaded, it becomes parser-blocking. However, all defer scripts (AKA deferred scripts) are non-parser-blocking script as they do not block the parser and execute after the DOM tree is fully constructed.

Node Types

Node type	Description	Children
1	Element	Represents an element	Element, Text, Comment, ProcessingInstruction, CDATASection, EntityReference
2	Attr	Represents an attribute	Text, EntityReference
3	Text	Represents textual content in an element or attribute	None
4	CDATASection	Represents a CDATA section in a document (text that will NOT be parsed by a parser)	None
5	EntityReference	Represents an entity reference	Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference
6	Entity	Represents an entity	Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference
7	ProcessingInstruction	Represents a processing instruction	None
8	Comment	Represents a comment	None
9	Document	Represents the entire document (the root-node of the DOM tree)	Element, ProcessingInstruction, Comment, DocumentType
10	DocumentType	Provides an interface to the entities defined for the document	None
11	DocumentFragment	Represents a "lightweight" Document object, which can hold a portion of a document	Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference
12	Notation	Represents a notation declared in the DTD	None

use attributeStyleMap for defining css in the JavaScript.
 */
