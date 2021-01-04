/**
 * Common Functionalities in browsers ->
 * 1. Address Bar.
 * 2. Back And Forward Buttons.
 * 3. Bookmark Options.
 * 4. Refresh and stop button.
 * 5. Home Button.
 */

/**
 * Browser High Level Structure ->
 * User Interface --------------|
 *     |                        |
 * Browser Engine               |
 *     |                        |
 * Render Engine                |---------Data Persistence.
 *     |                        |
 * 1.Networking                 |
 * 2.JavaScript Interpreter     |
 * 3. UI Backend ---------------|
 */

/**
 * User Interface -> to show user graphical strucutre.
 * Browser Engine -> Arrange action between The User Interface and Rendering Engine.
 * Render Engine -> Display the requested content By parsing them then show them.
 * Data Persistence -> Local Data.
 * Networking -> Requests like http etc and make them platform Independent.
 * JavaScript Interpreter -> For execution of JavaScript Code.
 * UI Backend ->Used to drawing widgets.
 */

/**
 * Some Rendering Engines ->
 * Internet Explorer -> Trident.
 * Firefox -> Gecko.
 * Safari -> webkit.
 * Chrome And Opera -> Blink.
 * Commonly Done Using 8Kb Chunks.
 */

/**
 * Render Engine Basic Flow ->
 *     Parse Html Into dom tree
 *             |
 *     Render Tree Construction
 *             |
 *     Layout of The render Tree
 *             |
 *     Paint the render Tree
 */
