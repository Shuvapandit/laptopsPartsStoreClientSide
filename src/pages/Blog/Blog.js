import React from 'react';
import '../Shared/Style/Style.css'

const Blog = () => {
return (
<div>
    <h1 className='text-center mtop mt-4 mb-3 text-5xl text-black'>AskMe Anything?</h1>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ml-4 mr-4 mb-12 mt-6 text-justify">
  <div>
<p className='font-bold'>Q1.How will you improve the performance of a React Application?</p>
<p><span className='font-bold'>Ans:</span> The ways,how will you improve the performance of a React Application: <br/>
1.Keeping component state local where necessary. <br/>
2.Memoizing React components to prevent unnecessary re-renders. <br/>
3.Code-splitting in React using dynamic import() <br/>
4.Windowing or list virtualization in React. <br/>
5.Lazy loading images in React.<br/>
</p>
</div>

 <div>
<p className='font-bold'>Q2.How does prototypical inheritance work?</p>
<p><span className=' font-bold'>Ans:</span>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p> 
  </div>
  <div>
<p className='font-bold'>Q3.What are the different ways to manage a state in a React application?</p>
<p>
<span className='font-bold'>Ans:</span>When we talk about state in our applications, it’s important to be clear about what types of state actually matter.<br/>
There are four main types of state you need to properly manage in your React apps:<br/>

1.Local state:Local state is most often managed in React using the useState hook.,<br/>

2.Global state:Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. <br/>
 
3.Server state: Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. <br/>

4.URL state: URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!<br/>

</p>
  </div>
  <div>
<p className='font-bold'>Q4.Why you do not set the state directly in React?</p>
<p><span className='font-bold'>Ans:</span>One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made.</p>
  </div>
 
  
  <div>
<p className='font-bold'>Q5.What is a unit test? Why should write unit tests?</p>
<p><span className='font-bold'>Ans:</span>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>
  </div>
</div>  


</div>
);
};

export default Blog;