/*
Copyright (C) 2015 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A list template shows a list of items on the right, such as movies or TV shows. Focus on one to see its related content on the left, such as its artwork or description.

When designing list template, you should use the same format of list items on the page.
*/
var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
    .customRightTextImage {
      itml-position: right;
      margin: 0 20;
    }
    .customRightText {
      font-size: 26pt;
      font-weight: normal;
      color: rgba(0, 0, 0, 0.6);
      text-align: right;
      itml-text-max-lines: 1;
      margin: 0 20;
    }
    .customRow {
      itml-position: center;
    }
    .customRowText {
      font-size: 26pt;
      font-weight: medium;
      color: rgba(0, 0, 0, 0.6);
      text-align: left;
      itml-text-max-lines: 1;
      itml-position: center;
      itml-align: left;
      margin: 0 20;
    }
    .centerText {
      text-align: center;
    }
    .interImageText {
      font-size: 26pt;
      font-weight: medium;
      color: rgba(0, 0, 0, 0.6);
      margin: 0 10;
    }
    .tallListItemLockup {
      itml-item-height: 90;
    }
    .leftAligned {
      itml-position: left;
    }
    </style>
  </head>
  <listTemplate>
    <list>
      <relatedContent>
        <itemBanner>
          <heroImg src="${this.BASEURL}resources/images/italy/italy_10_square.jpg" />
        </itemBanner>
      </relatedContent>
      <header>
        <title>List Item Examples</title>
      </header>
      <section>
        <header>
          <title>Default List Items</title>
        </header>
        <listItemLockup>
          <title>Title</title>
        </listItemLockup>
        <listItemLockup>
          <title>Title</title>
          <subtitle>Subtitle</subtitle>
        </listItemLockup>
        <listItemLockup>
          <title>Chevron</title>
          <decorationImage src="resource://chevron" />
        </listItemLockup>
        <listItemLockup>
          <title>Right text</title>
          <decorationLabel>Right</decorationLabel>
        </listItemLockup>
      </section>
      <section>
        <header>
          <title>List Items with Images</title>
        </header>
        <listItemLockup>
          <img src="${this.BASEURL}resources/images/iceland/iceland_1_square_small.jpg" width="90" height="90" />
          <title>Square</title>
        </listItemLockup>
        <listItemLockup>
          <img src="${this.BASEURL}resources/images/iceland/iceland_4_poster_small.jpg" width="76" height="135" />
          <title>Poster</title>
        </listItemLockup>
        <listItemLockup>
          <img src="${this.BASEURL}resources/images/iceland/iceland_3_poster_small.jpg" width="76" height="135" />
          <title>Title</title>
          <subtitle>Subtitle</subtitle>
        </listItemLockup>
        <listItemLockup style="margin: 0 0 0 -5">
          <img src="${this.BASEURL}resources/images/iceland/iceland_4_small.jpg" width="280" height="187" />
          <title>Title</title>
        </listItemLockup>
      </section>
      <section>
        <header>
          <title>Custom List Items</title>
        </header>
        <listItemLockup>
          <title>Secondary text w/ image</title>
          <row class="customRightTextImage">
            <text class="customRightText">Right</text>
            <img src="resource://chevron" />
          </row>
        </listItemLockup>
        <listItemLockup class="tallListItemLockup">
          <title>Title</title>
          <row class="customRow">
            <text class="customRowText">Text 1</text>
            <text class="customRowText">Text 2</text>
          </row>
        </listItemLockup>
        <listItemLockup class="tallListItemLockup">
          <row class="leftAligned">
            <img src="${this.BASEURL}resources/images/iceland/iceland_6_square.jpg" width="90" height="90" />
            <text class="interImageText">vs</text>
            <img src="${this.BASEURL}resources/images/iceland/iceland_7_square.jpg" width="90" height="90" />
          </row>
          <title>Title</title>
          <decorationLabel>Right</decorationLabel>
        </listItemLockup>
        <listItemLockup>
          <title class="centerText">Title</title>
          <subtitle class="centerText">Subtitle</subtitle>
        </listItemLockup>
      </section>
    </list>
  </listTemplate>
</document>`
}
