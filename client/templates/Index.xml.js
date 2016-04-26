/*
Copyright (C) 2015 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A list template shows a list of items on the right, such as movies or TV shows. Focus on one to see its related content on the left, such as its artwork or description.
*/
var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
      .descriptionLayout {
        tv-text-max-lines: 8;
      }
    </style>
  </head>
  <listTemplate>
    <list>
      <header>
        <title>Template Examples</title>
      </header>
      <section>
        <listItemLockup template="${this.BASEURL}templates/Alert.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
          <title>Alert</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/images/templates/alert.jpg" width="857" height="482" />
              <description class="descriptionLayout">An alert template displays a message on screen and asks the user to perform some action, such as confirm a purchase or destructive action.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup template="${this.BASEURL}templates/AlertWithDescription.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template with description">
          <title>Alert with Description</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/images/templates/alertWithDescription.jpg" width="857" height="482" />
              <description class="descriptionLayout">This variation of the alert template uses a description to provide added detail for the user.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup template="${this.BASEURL}templates/AlertWithShelf.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template with shelf">
          <title>Alert with Shelf</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/images/templates/alertWithShelf.jpg" width="857" height="482" />
              <description class="descriptionLayout">This variation of the alert template presents a shelf of items to the user.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup template="${this.BASEURL}templates/Catalog.xml.js" accessibilityText="Accessible catalog template">
          <title>Catalog</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/images/templates/catalog.jpg" width="857" height="482" />
              <description class="descriptionLayout">A catalog template allows you to display groupings of related items, such as genres of movies or TV shows.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup template="${this.BASEURL}templates/Compilation.xml.js" accessibilityText="Accessible compilation template">
          <title>Compilation</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/images/templates/compilation.jpg" width="857" height="482" />
              <description class="descriptionLayout">A compilation template displays elements contained by an item, such as songs in an album or tracks in a playlist. It’s most commonly used to display audio-related content.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup template="${this.BASEURL}templates/DescriptiveAlert.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible descriptive alert template">
          <title>Descriptive Alert</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/images/templates/descriptiveAlert.jpg" width="857" height="482" />
              <description class="descriptionLayout">A descriptive alert template shows a lengthy message on screen and may ask the user to perform some action, such as agreeing to terms and conditions or a licensing agreement.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup template="${this.BASEURL}templates/Form.xml.js" accessibilityText="Accessible form template">
          <title>Form</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/images/templates/form.jpg" width="857" height="482" />
              <description class="descriptionLayout">A form template displays a keyboard and one or more text fields where the user can enter information, such as a name and email address.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup template="${this.BASEURL}templates/ListItemExamples.xml.js" accessibilityText="Accessible list template with list item examples">
          <title>List Item Examples</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/images/templates/listItemExamples.jpg" width="857" height="482" />
              <description class="descriptionLayout">A list template shows a list of items on the right, such as movies or TV shows.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup template="${this.BASEURL}templates/ListWithBanner.xml.js" accessibilityText="Accessible list template with banner image">
          <title>List with Banner Image</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/images/templates/listWithBanner.jpg" width="857" height="482" />
              <description class="descriptionLayout">A list template shows a list of items on the right, such as movies or TV shows.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup template="${this.BASEURL}templates/Loading.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible loading template">
          <title>Loading</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/images/templates/loading.jpg" width="857" height="482" />
              <description class="descriptionLayout">A loading template temporarily displays a progress indicator and some descriptive text while your content is retrieved from the server.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup template="${this.BASEURL}templates/Main.xml.js" accessibilityText="Accessible main template">
          <title>Main</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/images/templates/main.jpg" width="857" height="482" />
              <description class="descriptionLayout">A main template displays a full-screen image with a menu along the bottom. It’s commonly used for the home screen of a movie, with menu options for playing the movie and accessing chapters or extras.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup template="${this.BASEURL}templates/MenuBar.xml.js" accessibilityText="Accessible menu bar template">
          <title>Menu Bar</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/images/templates/menuBar.jpg" width="857" height="482" />
              <description class="descriptionLayout">A menu bar template is designed for top-level navigation, as an entry page to your content. It includes a menu of items across the top. Focus on an item to display its related content below the menu.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup template="${this.BASEURL}templates/Parade.xml.js" accessibilityText="Accessible parade template">
          <title>Parade</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/images/templates/parade.jpg" width="857" height="482" />
              <description class="descriptionLayout">A parade template shows rotating previews for a focused grouping of content, such as movies or albums in a particular genre.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup template="${this.BASEURL}templates/Product.xml.js" accessibilityText="Accessible product template">
          <title>Product</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/images/templates/product.jpg" width="857" height="482" />
              <description class="descriptionLayout">A product template promotes movies, TV shows, or other products. It typically includes a product image, background, and descriptive information. A shelf below the product content displays related products and the user can scroll down to bring up more information, like cast and crew listings, ratings, or reviews.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup template="${this.BASEURL}templates/ProductBundle.xml.js" accessibilityText="Accessible product bundle template">
          <title>Product Bundle</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/images/templates/productBundle.jpg" width="857" height="482" />
              <description class="descriptionLayout">A product bundle template promotes a series of related TV shows, movies, or other products. It typically includes an image, background, and descriptive information. A shelf below the content displays the products contained by the bundle, such as the episodes of a TV season. The user can scroll down to bring up more information, such as cast and crew listings, ratings, or reviews.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup template="${this.BASEURL}templates/Rating.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible rating template">
          <title>Rating</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/images/templates/rating.jpg" width="857" height="482" />
              <description class="descriptionLayout">A rating template allows the user to adjust the rating of a particular item, such as a movie or song.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup template="${this.BASEURL}templates/Search.xml.js" presentation="searchPresenter" accessibilityText="Accessible search template">
          <title>Search</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/images/templates/search.jpg" width="857" height="482" />
              <description class="descriptionLayout">A search template lets users search your content and view found results. It includes a search field, a keyboard, and a list of results.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup template="${this.BASEURL}templates/Stack.xml.js" accessibilityText="Accessible stack template">
          <title>Stack</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/images/templates/stack.jpg" width="857" height="482" />
              <description class="descriptionLayout">A stack template shows stacked rows of items beneath a banner, such as movies, TV shows, or products.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup template="${this.BASEURL}templates/Stack_DarkTheme.xml.js" accessibilityText="Accessible stack template with dark theme">
          <title>Stack with Dark Theme</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/images/templates/stackWithDarkTheme.jpg" width="857" height="482" />
              <description class="descriptionLayout">This version of the stack template uses the dark theme to automatically adjust text color to display properly on a dark background. It also uses an alternate version of the banner element to display a large background image at the top of the page with actionable buttons.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup template="${this.BASEURL}templates/Stack_LightTheme.xml.js" accessibilityText="Accessible stack template with light theme">
          <title>Stack with Light Theme</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/images/templates/stackWithLightTheme.jpg" width="857" height="482" />
              <description class="descriptionLayout">This version of the stack template uses the light theme to automatically adjust text color to display properly on a light background. It also uses an alternate version of the banner element to display a small image at the top of the page with text and actionable buttons.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup template="${this.BASEURL}templates/Stack_Room.xml.js" accessibilityText="Accessible stack room template">
          <title>Stack Room</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/images/templates/stackRoom.jpg" width="857" height="482" />
              <description class="descriptionLayout">This version of the stack template uses a banner element to display a large background image at the top of the page with a full description.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
        <listItemLockup template="${this.BASEURL}templates/Stack_Separator.xml.js" accessibilityText="Accessible stack template with separator">
          <title>Stack Separator</title>
          <relatedContent>
            <lockup>
              <img src="${this.BASEURL}resources/images/templates/stackSeparator.jpg" width="857" height="482" />
              <description class="descriptionLayout">This version of the stack template shows an example of a separator element and a button, which can be used to alter the content being presented to the user.</description>
            </lockup>
          </relatedContent>
        </listItemLockup>
      </section>
    </list>
  </listTemplate>
</document>`
}
