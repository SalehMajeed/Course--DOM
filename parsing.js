/**
 *  render tree contain the rectangles with attribute like color and dimensions.
 *  Translate the structure into other.
 *  it's a tree of node.
 *  Parsing format must have context free grammar.
 * Parsing has two  sub process ->
                    Parsing
                        /\
                       /  \
                      /    \
                     /      \
                    /        \
                Lexical      Syntax
                Anylysis     Analysis
* i. Lexical Analysis ->
        break input -> tokens
        Tokean are the words of the dictionary for that language.
        Removing all the unconventional data is the Responsibility of Lexical Analysis.
* ii. Syntax Analysis ->
        rules for that language that describe the flow of the language.
* Parsing is iterative. it will iterate until it didn't reach at the end of the token that is match with syntax rules and invalid tokens will raise an error for syntax. 
* if our target is compilation then the further step would be translation that would translate parse tree into machine code.
*/

/**
 * Some basic rules for syntax ->
 *  i. Expression -> expression is the term follow by and operation that is followed by an another term. eg. 2 + 3
 * ii. Term -> an integer token or an Expression. eg. 2 is the term while 2+3 it the expression.
 * iii. Operation -> Plus or minus token is an operation. eg. + or -
 * iv. Syntax usually defined by BNF(Backus Naur Form) ->
       <term> ::= <term>|<term><operation><term>|<expression>
       
 *      First part is the class and the ::= acutually is := that is Used for 'is defined as' then | mean 'or'.
 
    <term><opeartion><term>
    we can say that 'term is followed by an operation that is followed by an term.'
 * v. Parsing could be done either by top to bottom or bottom to top approach.
    Webkit use flex for lexer and bison for parse.
 */
