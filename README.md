![FBCG icon](/icon128.png)
# Facebook Background Changer
A simple and lightweight chromium extension that allow you to set a background image in the Facebook website

### 🖼️ Screenshot

![FBCG screenshot](/screenshot.webp)

### 🤔 How to use

Click in the extension icon in your browser bar, click in Choose File, then select the image, and the image will be applied to the page's background and saved automatically.
Every time you reload the page, the saved image will be applied.

### 🛡️ Extension permissions

- 'scripting': permission to inject the code in the facebook, without this, it's impossible to change anything in the Facebook page.
- 'storage' and 'unlimitedStorage': permissions to allow saving the selected image in the browser and read the saved image in reloads.
NOTE: this extension has access to the facebook.com/* page ONLY, this extension doesn't collect any data or personal information.

### ⚙️ How it works?

This extension injects a code into Facebook's page, this code verify if has an image saved in the extension storage, if an image is found, the main function responsible for applying the image is called.  
The extension's UI also has a code that pick the image chosen by the user, save it to the extension's storage, and call the main function with the selected image as argument.  
The main function will create an image element and put it behind of the Facebook's UI and make it transparent (background and the header element), then, set the received image (saved in the extension's storage or selected by the user) to the image element.
And that's it.
### ❓ FAQ
It's compatible with Firefox?
> No, only Chromium based browsers (Google Chrome, Microsoft Edge, Opera, OperaGX, Brave, etc.)  
> Maybe someday I will try to port this to firefox....

Why this isn't in the Chrome Webstore?
> It will be, very soon...
> 
Why do you not use the 'background-image' css property instead of creating a image element?
> I tried to use this property, but for some reason it makes the page more slower than creating a img element.

