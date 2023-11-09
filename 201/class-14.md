
<div style="background-color: black; color: floralwhite; padding: 20px;">

    <h1>CSS Transformations</h1>
    <p style="background-color: darkgreen; color: gainsboro; padding: 20px;">
        In today's reading assignment, we will learn about CSS advanced animations.
    </p>
</div>

![14](photos/14.jpg)

Class 14: 11.9.23

Prepared: 11.8.23


<div style="background-color: black; color: floralwhite; padding: 20px;">
    <h2>CSS Transformations</h2>
</div>


1. What does a CSS transform allow the developer to do to an element?

CSS transform allows a developer to change the way an element looks and behaves on a webpage. It lets you move, rotate, scale, or skew an element without changing its position in the document flow. In simple terms, you can make things spin, grow, or move around without affecting the rest of the webpage.

2. Provide an example of a transform and how you could see that being used on a website.

Let's say you have a website with a button, and when someone hovers their mouse over it, you want it to smoothly grow a bit bigger. You can use CSS transform for that. Here's a simple example:

```css
.button {
  transition: transform 0.3s; /* This makes the change smooth */
}

.button:hover {
  transform: scale(1.1); /* This makes the button 10% bigger when hovered */
}
```

So, when a user hovers over the button, it will subtly grow in size, which adds a nice interactive effect to your website without causing any layout disturbances.

<div><p style="background-color: darkgreen; color: gainsboro; padding: 20px;">Source</p></div>

[CSS Transforms](http://learn.shayhowe.com/advanced-html-css/css-transforms/)


<div style="background-color: black; color: floralwhite; padding: 20px;">
    <h2>CSS Animations</h2>
</div>

1. What does a CSS transition allow the developer to do to an element?

A CSS transition allows a developer to control how an element changes smoothly over time when a specific property (like size, color, or position) is altered. It's like giving elements on a webpage a gradual, animated effect when you interact with them, making the changes look smoother and more visually appealing.

2. How does a CSS animation differ from a CSS transition?

A CSS animation and a CSS transition are both ways to add movement and change to elements on a webpage, but they differ in a few key ways:

   - **CSS Transition:** Transitions are used to create simple and straightforward animations when an element goes through a specific change. They are usually triggered by events like hovering over a button or clicking a link. Transitions work with a starting point and an endpoint, smoothly transitioning from one state to another.

   - **CSS Animation:** Animations are more powerful and flexible. They allow you to create complex and continuous movements or changes in elements without needing a specific trigger event. You define a set of keyframes to specify how an element should change over time, and the animation keeps looping until you stop it or it reaches a defined endpoint. Animations can be used for things like moving a banner across the screen or creating spinning icons.

<div><p style="background-color: darkgreen; color: gainsboro; padding: 20px;">Source</p></div>

[CSS Transitions & Animations](http://learn.shayhowe.com/advanced-html-css/transitions-animations/)

<div style="background-color: black; color: floralwhite; padding: 20px;">
    <h2>CSS Tips & Tricks</h2>
</div>



1. What are some benefits to using CSS transitions on websites?

**Improved User Experience**

**Increased Engagement**

**Professional Look**

**Subtle Feedback**


2. How this topic fit in with your long-term goals?

**Improved User Experience:** I believe that using CSS transitions will enhance the user experience on my web application. With smooth transitions, I can make interactions more visually appealing and user-friendly, which is crucial for keeping users engaged.

**Engagement:** By incorporating CSS transitions, I aim to capture users' attention and encourage them to interact more with the web application. For instance, I can use transitions to make important elements like call-to-action buttons more inviting and clickable.

**Professional Look:** As I work on my dad firm startup, I want to present a professional and modern image. CSS transitions can play a part in achieving this by giving my web app a polished appearance, which can boost the credibility of my startup.

**Guided User Behavior:** I plan to use transitions strategically to guide users through the application. When elements change in response to user actions, such as buttons changing color or size on hover, it signals to users that they are interactive. This can make navigation more intuitive and user-friendly.

**Subtle Feedback:** Using CSS transitions, I can provide subtle feedback to users, such as confirming the success of an action or indicating the expansion of a menu. This feedback will contribute to a more user-friendly experience and better communication with the users.

Incorporating CSS transitions into my web application aligns with my goal of creating an engaging, professional, and user-friendly platform for `The Dad Firm` startup. It's an important tool in making the web application visually appealing and functional, which will help me attract and retain users as my startup grows.

<div><p style="background-color: darkgreen; color: gainsboro; padding: 20px;">Source</p></div>

[8 simple CSS3 transitions that will wow your users](http://www.webdesignerdepot.com/2014/05/8-simple-css3-transitions-that-will-wow-your-users)

<div style="background-color: black; color: floralwhite; padding: 20px;">
    <h3>CSS Bookmark/Skim</h3>
</div>

[Pure CSS Bounce Animation](http://codepen.io/dp_lewis/pen/gCfBv)

[6 Buttons animated](http://codepen.io/retyui/pen/ByoaXV)

[CSS3 Animations: Keyframes](http://codepen.io/akshaychauhan/pen/oAfae)

[404](http://codepen.io/kieranfivestars/pen/MYdQxX)

<div style="background-color: black; color: floralwhite; padding: 20px;">
    <h5>Things I want to know more about</h5>
</div>


